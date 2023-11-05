import { Rotate3D } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[80dvh]">
      <Rotate3D className="w-40 h-40 animate-spin" />
    </div>
  );
};

export default Loading;
