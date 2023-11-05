import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-[240px] w-[200px]" />
      </div>
    </div>
  );
};

export default SkeletonCard;
