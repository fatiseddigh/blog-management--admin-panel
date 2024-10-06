import Link from "next/link";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();
  return (
    <ul className="space-y-3">
      <Link href="/blogs">All</Link>
      {categories.map((item) => {
        return (
          <li key={item._id}>
            <Link href={`/blogs/category${item.slug}`}>
              {item.englishTitle}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;
