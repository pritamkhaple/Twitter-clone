import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

export default function Profile() {
  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div className="">
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
          >
            <FaArrowLeftLong size={"24px"} />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Patel Bhaisab</h1>
            <p className="text-gray-500 text-sm">10 posts</p>
          </div>
        </div>
        <img className="w-[100%]"
          src="https://pbs.twimg.com/profile_banners/1430381385064275968/1696889831/600x200"
          alt="cover"
        ></img>
        <div className="flex justify-between">   
        <div className="relative bottom-[2rem] border-4 border-white rounded-full ">
          <Avatar
            className=""
            src="https://pbs.twimg.com/media/GDlk5j6XoAAHTBv?format=jpg&name=small"
            size="100"
            round={true}
          />
        </div>
        <div className="text-right m-4 ">
            <button className="px-4 py-2 hover:bg-gray-200 rounded-full border border-gray-400">Edit Profile</button>
        </div>
        </div>
        <div className="ml-4">
            <h1 className="font-bold text-xl">Patel</h1>
            <p className="text-sm text-gray-500">@patelbhaisaab</p>
        </div>
        <div className="ml-4 text-sm text-gray-800">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  );
}
