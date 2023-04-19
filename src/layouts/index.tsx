import { ReactNode } from "react";
import Player from "./Player";
import SideBar from "./SideBar";
import BottomNavBar from "./BottomNavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <div className="flex h-full w-full flex-col md:w-[calc(100vw-64px)] lg:w-[calc(100vw-320px)]">
        <main className="mb-[150px] h-[calc(100vh-150px)] w-full md:mb-[120px] md:h-[calc(100vh-120px)]">
          {children}
        </main>
        <Player />
        <BottomNavBar />
      </div>
    </div>
  );
};
export default Layout;
