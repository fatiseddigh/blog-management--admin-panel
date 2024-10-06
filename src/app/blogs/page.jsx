import PostList from "./_components/PostList";

async function page() {
  return (
    <div>
      <p className="text-secondary-500 mb-5"> this is blog</p>
      <PostList />
    </div>
  );
}

export default page;
