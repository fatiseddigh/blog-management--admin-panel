import Avatar from "@/ui/Avatar";
import CoverImage from "./CoverImage";
import { ClockIcon } from "@heroicons/react/24/outline";

function RelatedPost({ posts }) {
  return (
    <div className=" mb-10">
      <p className="text-xl mb-4"> Related Posts </p>
      <div className="grid gap-6 grid-cols-6">
        {posts.map((item) => {
          return (
            <div
              key={item._id}
              className="col-span-6 md:col-span-3 lg:col-span-2"
            >
              <CoverImage {...item} />
              <div className="flex items-center justify-between">
                <p>{item.title}</p>

                {/* post author - readingTime */}
                <div className="flex items-center justify-between my-4">
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm text-secondary-500">
                      {item.author.name}
                    </span>
                    <Avatar src={item.author.avatarUrl} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RelatedPost;
