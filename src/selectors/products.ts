import { createSelector } from "reselect";
import { State } from "../store";

export const productStateSelector = (state: State) => {
  return state.products;
};
export const productsLoadingSelector = createSelector(
  productStateSelector,
  (productState) => {
    productState.loading;
  }
);

export const productsMapSelector = createSelector(
  productStateSelector,
  (productState) => {
    productState.products;
  }
);

export const productsSelector = createSelector(
  productsMapSelector,
  (normalisedProducts) =>
    Object.keys(normalisedProducts).map((pid) => normalisedProducts[+pid])
);
