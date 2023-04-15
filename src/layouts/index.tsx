import { ReactNode } from "react";
import Player from "./Player";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex w-screen h-screen">
      <SideBar />
      <div className="flex flex-col h-full w-[calc(100vw-320px)]">
        <main className="mb-[120px] h-[calc(100vh-120px)] w-full">{children}</main>
        <Player />
      </div>
    </main>
  );
};
export default Layout;
