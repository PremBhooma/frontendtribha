import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "@/context/userContext";
import { Settings, Bell, Wallet, Lock, ChevronRight } from "lucide-react";

export default function UserDetails() {
  const { user } = useUserContext();

  const historyItems = [
    {
      id: 1,
      title: "Crowed Frobaerty",
      author: "By Dorick Smith",
      time: "Just Now",
      image: "/images/girl.avif",
    },
    {
      id: 2,
      title: "Rtso Perfilate",
      author: "By Akiro Perlo",
      time: "1hr ago",
      image: "/images/boy.avif",
    },
    {
      id: 3,
      title: "Tewar Manforac",
      author: "By Boster Almido",
      time: "2hr ago",
      image: "/images/girl.avif",
    },
    {
      id: 4,
      title: "Litmo Crakjer",
      author: "By Polios Temso",
      time: "3hr ago",
      image: "/images/boy.avif",
    },
    {
      id: 5,
      title: "Ported Joplto",
      author: "By Adam Smith",
      time: "4hr ago",
      image: "/images/girl.avif",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* ========================== User Details Start ========================== */}

      <div className="flex items-center justify-end gap-4">
        <div className="p-2 rounded-full border border-gray-300">
          <Settings className="h-5 w-5 text-gray-500" />
        </div>

        <div className="relative p-2 rounded-full border border-gray-300">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">6</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 capitalize">{user?.name || "Nella Vita"}</span>
            <span className="text-xs text-gray-500">User</span>
          </div>
          <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
            <img src="/images/girl.avif" alt="User Avatar" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-white">
        <div className="bg-[#d0e5f7] p-6 rounded-2xl">
          <p className="text-gray-500 text-sm font-medium text-center">Your Total Earnings</p>
          <h2 className="text-4xl md:text-3xl xl:text-4xl font-bold text-center text-[#6f4fee] mt-2">$4,587.58</h2>
          <p className="text-gray-400 text-sm text-center mt-1">10 Jan 2022 at 10:00 PM</p>
          <button className="mt-4 px-6 py-2 rounded-full bg-black text-white text-sm font-medium mx-auto block hover:bg-gray-800">Withdraw</button>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2 md:gap-1 xl:gap-2">
            <div className="p-2 md:p-1 xl:p-2 bg-teal-50 rounded-full">
              <Wallet className="h-5 w-5 md:h-4 md:w-4 xl:h-5 xl:w-5 text-teal-500" />
            </div>
            <div>
              <p className="text-sm md:text-xs xl:text-sm text-gray-500">Last Month</p>
              <p className="text-lg md:text-base xl:text-lg font-semibold text-gray-800">$2368.10</p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-1 xl:gap-2">
            <div className="p-2 md:p-1 xl:p-2 bg-yellow-50 rounded-full">
              <Lock className="h-5 w-5 md:h-4 md:w-4 xl:h-5 xl:w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm md:text-xs xl:text-sm text-gray-500">Artwork Sold</p>
              <p className="text-lg md:text-base xl:text-lg font-semibold text-gray-800">245</p>
            </div>
          </div>
        </div>
      </div>
      {/* ========================== User Details End ============================ */}

      {/* ========================== Top Creators Start ========================== */}

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Top Creators</h2>
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
            See All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Creator List */}
        <div className="mt-4 space-y-4">
          {/* Creator 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-2 xl:gap-4">
              <img src="images/boy.avif" alt="Darlene Robertson" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-gray-800">Darlene Robertson</p>
                <p className="text-xs text-gray-500">design@darbert.com</p>
              </div>
            </div>
            <button className="px-4 md:px-2 xl:px-4 py-1 text-xs font-medium text-white bg-[#6f4fee] rounded-full hover:bg-[#6c4bf4]">Follow</button>
          </div>

          {/* Creator 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-2 xl:gap-4">
              <img src="images/girl.avif" alt="Savannah Nguyen" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-gray-800">Savannah Nguyen</p>
                <p className="text-xs text-gray-500">design@vannah.com</p>
              </div>
            </div>
            <button className="px-4 md:px-2 xl:px-4 py-1 text-xs font-medium text-gray-500 bg-gray-200 rounded-full hover:bg-gray-300">Unfollow</button>
          </div>

          {/* Creator 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-2 xl:gap-4">
              <img src="images/boy.avif" alt="Roonald Richards" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-gray-800">Roonald Richards</p>
                <p className="text-xs text-gray-500">design@dricros.com</p>
              </div>
            </div>
            <button className="px-4 md:px-2 xl:px-4 py-1 text-xs font-medium text-white bg-[#6f4fee]  rounded-full hover:bg-[#6c4bf4]">Follow</button>
          </div>
        </div>
      </div>

      {/* ========================== Top Creators End ============================ */}

      {/* ========================== History Start =============================== */}

      <div className="mt-5">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">History</h2>
          <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
            See All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="space-y-4">
          {historyItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                  <Image src={item.image} alt="" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.author}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================== History End ================================= */}
    </div>
  );
}
