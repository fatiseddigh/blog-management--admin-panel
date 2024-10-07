import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import PostList from "../_components/PostList";

async function page() {
  return (
    <div>
      <p className="text-secondary-500 mb-5"> this is blog</p>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default page;
