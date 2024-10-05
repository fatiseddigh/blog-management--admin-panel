"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <h1 className="text-xl font-bold text-secondary-700 mb-8">
            unfortunately we cant find the page
          </h1>
          <button
            onClick={moveBack}
            className="flex items-center gap-x-2 text-secondary-500"
          >
            <ArrowLeftIcon className="w-4 h-4 text-primary-900" />
            <span> Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
