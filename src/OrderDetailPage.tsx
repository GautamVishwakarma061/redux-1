import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderDetailLoadedAction } from "./actions/Orders";
import { orderMapSelector, ordersProductSelector } from "./selectors/Orders";

type OrderDetailPageProps = {};

const OrderDetailPage: FC<OrderDetailPageProps> = (props) => {
  const params = useParams();

  const dispatch = useDispatch();

  const orderId = +params.orderId!;

  const ordersMap = useSelector(orderMapSelector);

  const ordersProductsMap = useSelector(ordersProductSelector);

  const order = ordersMap[orderId];

  const products = ordersProductsMap[orderId];

  useEffect(() => {
    {
      axios.get("https://dummyjson.com/carts/" + orderId).then((response) => {
        dispatch(orderDetailLoadedAction(response.data.data));
      });
    }
  }, [ordersMap, orderId]);

  if (!order) {
    return (
      <div className="text-2xl font-bold flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div>
      This is order number {order.id} , Total Price:{order.total}
      <div>
        {products.map((p) => (
          <div>{p.title}</div>
        ))}
      </div>
    </div>
  );

  // return <div>This is OrderDetailPage for order number {orderId}</div>;
};

OrderDetailPage.defaultProps = {};

export default memo(OrderDetailPage);
