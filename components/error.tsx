import Link from "next/link";
import { Ban } from "lucide-react";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-[80dvh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <Ban className="w-16 h-16" />
        <div className="text-xl flex flex-col items-center">
          <div>예상치 못한 에러가 발생하였습니다.</div>
          <div>잠시 후 다시 시도해주세요</div>
        </div>
        <Link href={"/"}>
          <Button>홈으로 가기</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
