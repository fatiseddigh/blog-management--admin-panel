import Image from "next/image";
import Link from "next/link";

function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <div className="aspect-video relative overflow-hidden rounded-md">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          quality={90}
        />
      </Link>
    </div>
  );
}

export default CoverImage;
