import { PropsWithChildren } from "react";

import Navbar from "@/components/navbar";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-full">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
