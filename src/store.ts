import happinessReducer from "./reducers/happinessReducer";
import sadnessReducer from "./reducers/sadnessReducer";
import { combineReducers, createStore } from "redux";
import productsReducer from "./reducers/products";
import ordersReducer from "./reducers/Orders";

export type Moment = {
  intensity: number;
  when: Date;
};

export type State = ReturnType<typeof reducer>;

const reducer = combineReducers({
  sad: sadnessReducer,
  happy: happinessReducer,
  products: productsReducer,
  orders: ordersReducer,
});

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
