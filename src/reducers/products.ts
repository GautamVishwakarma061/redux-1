import { normalize, schema } from "normalizr";
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "./../actions/products";
import { AnyAction } from "redux";
import produce from "immer";
import Product from "../Models/Product";
import { ORDERS_LOADED, ORDER_DETAIL_LOADED } from "../actions/Orders";

type NormalisedProducts = {
  [id: number]: Product;
};
type State = {
  products: NormalisedProducts;
  loading: boolean;
};

const initialState: State = { products: {}, loading: false };

const productsReducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case PRODUCTS_LOADED:
      return produce(state, (draft) => {
        const products = action.payload;
        const normalisedProducts = products.reduce(function (
          previous: NormalisedProducts,
          current: Product
        ) {
          return { ...previous, [current.id]: current };
        },
        {});

        draft.products = normalisedProducts;
        draft.loading = false;
      });
    case ORDERS_LOADED:
      return produce(state, (draft) => {
        const orders = action.payload;
        console.log(orders);
        const products = orders.reduce(function (
          previous: Product[],
          current: any
        ) {
          return [...previous, ...current.products];
        },
        []);

        const normalisedProducts = products.reduce(function (
          previous: NormalisedProducts,
          current: Product
        ) {
          return { ...previous, [current.id]: current };
        },
        {});

        draft.products = normalisedProducts;
      });

    case ORDER_DETAIL_LOADED:
      return produce(state, (draft) => {
        const order = action.payload;
        const productEntity = new schema.Entity("products");

        const data = normalize(order.products, [productEntity]);

        draft.products = { ...draft.products, ...data.entities.products };
      });
    default:
      return state;
  }
};

export default productsReducer;
