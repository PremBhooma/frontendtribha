"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "@/configs/constants";
import { Skeleton } from "@/components/ui/skeleton";

export default function Caricatures() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCaricatures = async () => {
    try {
      const response = await axios.get(`${BASEURL}api/caricatures/get`);
      setData(response.data.data);
    } catch (err) {
      setError(err.message || "An error occurred while fetching caricatures.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaricatures();
  }, []);

  if (loading) {
    return (
      <div className="w-full p-3 md:p-5">
        <div className="w-full flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden p-5">
          <div className="relative lg:w-[50%]">
            <Skeleton className="w-full h-[20rem] lg:h-[25rem] rounded-xl" />
          </div>
          <div className="p-6 flex flex-col gap-4 lg:w-[50%] ">
            <Skeleton className="h-6 w-[15rem]" />
            <Skeleton className="h-4 w-[10rem]" />
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-[10rem]" />
                <Skeleton className="h-4 w-[12rem]" />
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <Skeleton className="h-4 w-[5rem]" />
              <Skeleton className="h-4 w-[8rem]" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <Skeleton className="h-10 w-[6rem] rounded-2xl" />
              <Skeleton className="h-10 w-[8rem] rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="w-full p-3 lg:p-5 md:pt-2 lg:pt-0">
      <div className="w-full flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden p-5">
        <div className="relative lg:w-[47%]  w-full mb-4 md:mb-0 rounded-xl flex items-center bg-[#cee1f0]">
          <img src={data.image} alt={data.name || "3D Caricatures"} className="w-full h-auto md:h-72 object-cover md:object-contain rounded-xl" />
        </div>

        <div className="p-3 sm:p-6 lg:p-3 xl:p-6 lg:w-[55%] 2xl:w-[30%] w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.name || "3D Caricatures"}</h2>
          <p className="text-sm lg:text-xs xl:text-sm text-gray-600 mb-4">Product ID: {data.productId || "N/A"}</p>

          <div className="flex items-center mb-4">
            <img src={data.author?.authorProfilePic || "https://via.placeholder.com/40"} alt={data.author?.authorName || "Author"} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold text-gray-800">{data.author?.authorName || "N/A"}</p>
              <p className="text-sm lg:text-xs xl:text-sm text-gray-600">{data.author?.authorEmail || "N/A"}</p>
            </div>
          </div>

          <div className="flex justify-between md:justify-around items-center mb-6 bg-[#ecf6ff] p-3 rounded-xl">
            <div>
              <p className="text-sm lg:text-xs xl:text-sm text-gray-600">Current Bid</p>
              <p className="text-lg lg:text-base xl:text-lg  font-semibold text-gray-800">{data.currentBid || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm lg:text-xs xl:text-sm text-gray-600">Auction Time</p>
              <p className="text-lg lg:text-base xl:text-lg  font-semibold text-gray-800">{data.auctionTime || "N/A"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-2 xl:gap-3">
            <button className="flex items-center justify-center bg-red-200 text-red-500 hover:text-red-600 hover:bg-red-300 transition rounded-full w-10 h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <button className=" text-base lg:text-sm xl:text-base w-max px-4 py-1 text-gray-800 hover:bg-gray-200 transition rounded-2xl border border-gray-300">Details</button>
            <button className=" text-base lg:text-sm xl:text-base w-max px-4 py-1 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition">Place a Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
}
