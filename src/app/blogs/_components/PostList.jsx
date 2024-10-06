async function PostList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  if (res) {
    const {
      data: { posts },
    } = await res.json();
  }

  return posts?.length > 0
    ? posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })
    : null;
}

export default PostList;
