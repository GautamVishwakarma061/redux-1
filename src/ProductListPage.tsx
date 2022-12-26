import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsAction, ProductsLoadedAction } from "./actions/products";
import {
  productsLoadingSelector,
  productsSelector,
} from "./selectors/products";

type ProductListPageprops = {};

const ProductListPage: FC<ProductListPageprops> = () => {
  const loading = useSelector(productsLoadingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsAction());
    axios
      .get("https://myeasykart.codeyogi.io/products")
      .then((response) => dispatch(ProductsLoadedAction(response.data.data)));
  }, []);

  loading;
  return (
    <div>
      {loading && (
        <div className="text-2xl font-bold flex items-center justify-center">
          Loading...
        </div>
      )}
      <div className=" grid-cols-3 max-w-4xl  grid p-2 mx-auto  gap-5 shadow-lg  ">
        {products &&
          products.map((p) => (
            <div key={p.id} className="flex flex-col shadow-lg  gap-2 p-2">
              <div className="w-48 aspect-square">
                <img className="w-full h-full object-cover" src={p.thumbnail} />
              </div>
              <p className="text-sm text-gray-400"> {p.category}</p>
              <p className="text-xl font-semibold"> {p.title}</p>
              <p>Rs.{p.price}</p>
              <p> Rating {p.rating}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

ProductListPage.defaultProps = {};

export default memo(ProductListPage);
