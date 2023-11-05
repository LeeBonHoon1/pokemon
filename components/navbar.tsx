import Link from "next/link";

import Search from "@/components/search";
import { ModeToggle } from "@/components/mode-togle";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between h-[80px] px-10 border-b">
        <Link href={"/"}>
          <h1 className="font-bold text-xl">포켓몬 도감</h1>
        </Link>
        <div className="flex items-center justify-center space-x-3">
          <Search />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
