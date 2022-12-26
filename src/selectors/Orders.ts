import { productsMapSelector } from "./products";
import { createSelector } from "reselect";
import Product from "../Models/Product";
import { State } from "../store";

export const orderStateSelector = (state: State) => {
  return state.orders;
};

export const ordersLoadingSelectors = createSelector(
  orderStateSelector,
  function (orderState) {
    return orderState.loading;
  }
);

export const orderMapSelector = createSelector(
  orderStateSelector,
  (orderState) => orderState.orders
);

export const ordersSelector = createSelector(
  orderMapSelector,
  (normalisedOrders) =>
    Object.keys(normalisedOrders).map((orderId) => normalisedOrders[+orderId])
);

// export const ordersProductsSelector2 = createSelector(
//   orderMapSelector,
//   productsMapSelector,
//   (orderMap, productsMap) =>
//     Object.keys(orderMap).reduce<{
//       [orderId: number]: Product[];
//     }>((previous, currentOrderId) => {
//       const order = orderMap[+currentOrderId];
//       const products = order.products.map((pid) => productsMap[pid]);
//       return { ...previous, [currentOrderId]: products };
//     }, {})
// );

export function ordersProductSelector(state: State) {
  return Object.keys(state.orders.orders).reduce<{
    [orderId: number]: Product[];
  }>((previous, currentOrderId) => {
    const order = state.orders.orders[+currentOrderId];
    const products = order.products.map((pid) => state.products.products[pid]);
    return { ...previous, [currentOrderId]: products };
  }, {});
}

//createSelector memoised hota h
