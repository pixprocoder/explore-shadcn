import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div>
      <Card className="flex flex-col justify-between">
        <CardHeader className="flex flex-row items-center gap-3">
          <Skeleton className="w-12 h-12 rounded-full" />
          <Skeleton className="h-16 flex-grow" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-20 flex-grow" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Skeleton className="h-12 w-16 rounded-md" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default SkeletonCard;
