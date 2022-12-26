import { Route, Routes, Link } from "react-router-dom";
import OrderDetailPage from "./OrderDetailPage";
import OrderListPage from "./OrderListPage";
import ProductListPage from "./ProductListPage";

function App() {
  return (
    <div>
      <div className="mx-auto max-w-4xl bg-gray-400 py-1 px-5 rounded-md gap-3 my-2 ">
        <Link className="text-xl mx-3 font-semibold" to="/">
          HOME
        </Link>
        <Link className="text-xl font-semibold" to="/orders">
          ORDERS
        </Link>
      </div>
      <Routes>
        <Route index element={<ProductListPage />} />
        <Route path="/orders" element={<OrderListPage />} />
        <Route path="/orders/:orderId" element={<OrderDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

// import { clearButtonClicked } from "./actions/mood-action";
// import { useDispatch } from "react-redux";
// import HappyTracker from "./HappyTracker";
// import SadTracker from "./SadTracker";
// import ProductListPage from "./ProductListPage";

// function App() {
//   const dispatch = useDispatch();
//   const Clear = () => {
//     dispatch(clearButtonClicked());
//   };
//   return (
//     <div>
//       {/* <h2 className="text-3xl text-center font-semibold mt-3">MOOD TRACKER</h2>
//       <div className=" flex items-center justify-center mt-8">
//         <button
//           className="text-xl font-semibold bg-red-500 text-white px-2 py-1 rounded-md "
//           onClick={Clear}
//         >
//           Reset
//         </button>
//       </div>
//       <div className="sm:flex   items-center justify-evenly mt-10 gap-2">
//         <HappyTracker />
//         <SadTracker />
//       </div> */}
//       <ProductListPage />
//     </div>
//   );
// }
