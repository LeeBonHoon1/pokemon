"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { searchStore } from "@/store/search";
import { useToast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  const { toast } = useToast();
  const { id, count, setSearchId } = searchStore();
  const router = useRouter();

  const searchDetailRouter = (id: number) => {
    if (count && count < id) {
      toast({
        title: "ID를 다시 입력해주세요!",
        description: "입력하신 ID를 가진 포켓몬이 없습니다.",
      });
      return;
    }

    router.push(`/detail/${id}`);
  };

  return (
    <div className="flex space-x-1">
      <Input
        placeholder="포켓몬 ID로 검색해보세요!"
        type="number"
        autoComplete="off"
        className="w-[200px] md:w-[300px]"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchId(Number(e.target.value));
        }}
      />
      <Button
        variant={"outline"}
        onClick={() => {
          searchDetailRouter(id);
        }}
      >
        검색
      </Button>
    </div>
  );
};

export default Search;
