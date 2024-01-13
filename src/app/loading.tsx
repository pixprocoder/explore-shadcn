import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-3 gap-4">
      {"abcdefghij".split("").map((i: any) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default LoadingPage;
