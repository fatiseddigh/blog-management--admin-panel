"use client";
import Button from "@/ui/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Comment from "./Comment";

function PostComment({ post: { comments, _id: postId } }) {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
        <h2 className="text-2xl font-bold text-secondary-800">Comments</h2>
        <Button variant="outline" className="flex items-center py-2">
          <span>Add New Comment</span>
          <QuestionMarkCircleIcon className="w-4 ml-2" />
        </Button>
      </div>
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 ">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div key={comment._id}>
                <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
                  <Comment comment={comment} />
                </div>
                <div className="post-comments__answer ml-2 sm:ml-8 space-y-3">
                  {comment.answers.map((item, index) => {
                    return (
                      <div key={item._id} className="relative">
                        <div
                          className={classNames(
                            "answer-item border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4",
                            {
                              "last-item": index + 1 === comment.answers.length,
                            }
                          )}
                        >
                          <Comment comment={item} key={item._id} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-secondary-500">
            There isn&apos;t any comment for this post!
          </p>
        )}
      </div>
    </div>
  );
}
export default PostComment;
