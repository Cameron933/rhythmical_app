import { ReactNode } from "react";
import Player from "./Player";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col w-full justify-between">
        <main>{children}</main>
        <Player />
      </div>
    </div>
  );
};
export default Layout;
