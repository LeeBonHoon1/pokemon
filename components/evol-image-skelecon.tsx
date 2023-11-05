import { Skeleton } from "@/components/ui/skeleton";

const EvolImageSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-[100px] w-[100px]" />
      </div>
    </div>
  );
};

export default EvolImageSkeleton;
