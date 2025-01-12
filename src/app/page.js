import SidebarNav from "@/components/SidebarNav/SidebarNav";
import Caricatures from "@/components/caricatures";
import Trending from "@/components/trending";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
      <SidebarNav className="">
        <div className="w-[70%] bg-[#f2f2f2] flex flex-col gap-2">
          <div className="w-full flex justify-between gap-2 p-5">
            <div className="flex gap-2 items-center">
              <SidebarTrigger className="ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div>
                <h1 className="text-2xl font-bold text-[#333] m-0">Dashboard</h1>
                <p className="text-base text-[#666]">Hello Nila Vita, Welcome Back</p>
              </div>
            </div>
            <input type="text" placeholder="Search" className="px-4 py-1 rounded-xl border border-gray-300 text-sm text-[#333] h-10" />
          </div>
          <Caricatures />
          <Trending />
        </div>
        <div className="w-[30%] bg-yellow-500">
          <button className="bg-[#333] text-white py-2 px-4 rounded">Hello</button>
        </div>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0"></div> */}
      </SidebarNav>
    </>
  );
}
