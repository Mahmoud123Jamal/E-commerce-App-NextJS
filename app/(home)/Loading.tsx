import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center my-36">
      <div className="relative w-20 h-20">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 m-2 border-8 border-solid rounded-full border-[#333] border-t-transparent animate-spin`}
            style={{ animationDelay: `${-0.15 * (4 - i)}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
