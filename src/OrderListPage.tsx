import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadOrdersAction, ordersLoadedAction } from "./actions/Orders";
import { ordersLoadingSelectors, ordersSelector } from "./selectors/Orders";

type OrderListPageProps = {};

const OrderListPage: FC<OrderListPageProps> = (props) => {
  const dispatch = useDispatch();

  const ordersLoadingg = useSelector(ordersLoadingSelectors);
  const orders = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(loadOrdersAction());

    axios.get("https://dummyjson.com/carts").then((response) => {
      dispatch(ordersLoadedAction(response.data.carts));
    });
  }, []);

  if (ordersLoadingg) {
    return (
      <div className="text-2xl font-bold items-center justify-center flex ">
        Loading...
      </div>
    );
  }
  return (
    <div>
      {orders.map((o) => (
        <div key={o.id}>
          <Link
            className=" text-indigo-500 font-semibold"
            to={"/orders/" + o.id}
          >
            Order number {o.id}
          </Link>
          ,total: {o.total},products:
          {o.totalProducts}
        </div>
      ))}
    </div>
  );
};

OrderListPage.defaultProps = {};

export default memo(OrderListPage);
