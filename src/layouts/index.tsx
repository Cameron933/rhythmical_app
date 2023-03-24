import { ReactNode } from "react";
import Player from "./Player";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <main>{children}</main>
        <Player />
      </div>
    </div>
  );
};
export default Layout;
