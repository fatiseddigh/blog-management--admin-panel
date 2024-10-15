import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import CategoryList from "../_components/CategoryList";
import Search from "@/ui/Search";

export const metadata = {
  title: "Blogs",
};
function layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold"> Blog List </h1>
        <Search />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-9  ">
          {children}
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-5 ">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default layout;
