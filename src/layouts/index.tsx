import { ReactNode } from "react";
import Player from "./Player";
import Sidebar from "./SideBar";
import SearchBar from "./SearchBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col w-[100vw]">
        <SearchBar />
        <main className="mt-[64px] mb-[96px]">{children}</main>
        <Player />
      </div>
    </div>
  );
};
export default Layout;
