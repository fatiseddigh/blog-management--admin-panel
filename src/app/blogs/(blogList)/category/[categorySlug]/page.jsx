import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  const { categorySlug } = params;

  const queries = `${queryString.stringify(
    searchParams
  )}&categorySlug=${categorySlug}`;

  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600 ">
          No posts were found in this category{" "}
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;