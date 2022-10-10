import { RouterProvider } from "react-router-dom";
import router from "./Utilitis/routes";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-gray-800">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
