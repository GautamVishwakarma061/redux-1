import { AnyAction } from "redux";
import { Action } from "./../actions/index";
import produce from "immer";
import Order from "../Models/Orders";
import {
  LOAD_ORDERS,
  ORDERS_LOADED,
  ORDER_DETAIL_LOADED,
} from "../actions/Orders";
import { normalize, schema } from "normalizr";

type NormalisedOrder = { [id: number]: Order };

type State = {
  loading: boolean;
  orders: NormalisedOrder;
};

export const initialState: State = {
  loading: false,
  orders: {},
};

const ordersReducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case LOAD_ORDERS:
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case ORDERS_LOADED:
      return produce(state, (draft) => {
        draft.loading = false;

        const orderArr = action.payload;

        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });

        const data = normalize(orderArr, [orderEntity]);

        draft.orders = data.entities.orders!;
      });

    case ORDER_DETAIL_LOADED:
      return produce(state, (draft) => {
        const order = action.payload;
        const productEntity = new schema.Entity("products");
        const orderEntity = new schema.Entity("orders", {
          products: [productEntity],
        });

        const data = normalize(order, orderEntity);

        draft.orders[order.id] = data.entities.orders![order.id];
      });

    default:
      return state;
  }
};

export default ordersReducer;

// const normalisedOrders = orderArr.reduce(function (
// previous: NormalisedOrder,
// current: Order
// ) {
// return { ...previous, [current.id]: current };
// },
// {});
