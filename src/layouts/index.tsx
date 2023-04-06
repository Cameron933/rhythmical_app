import { ReactNode } from "react";
import Player from "./Player";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex flex-col w-screen h-screen">
      <div className="flex w-[100vw] h-[90vh]">
        <SideBar />
        <div className="flex flex-col">
          <SearchBar />
          <main className="mt-[64px] mb-[96px]">{children}</main>
        </div>
      </div>
      <Player />
    </main>
  );
};
export default Layout;
