import Button from "@/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-20">
        Blog Management App
      </h1>

      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt
          repellat placeat iusto libero! Eveniet tenetur ullam mollitia
          perferendis eaque in earum ratione perspiciatis, aut rem
          exercitationem necessitatibus, voluptatem nihil!
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <Button variant="outline">
            <Link href="/blogs">Explore the blogs</Link>
          </Button>
          <Button variant="primary">
            <Link href="/profile"> Blog Management</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
