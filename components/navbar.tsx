import Link from "next/link";

import Search from "@/components/search";
import { ModeToggle } from "@/components/mode-togle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-slate-950">
      <div className="flex items-center justify-between h-[60px] px-10 border-b rounded-b-2xl">
        <Link href={"/"}>
          <h1 className="font-bold text-xl">포켓몬 도감</h1>
        </Link>
        <div className="flex items-center justify-center space-x-3">
          <Search />
          {/* <ModeToggle /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
