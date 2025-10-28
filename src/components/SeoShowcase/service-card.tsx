import { ServiceItem } from "@/types/page";
import Link from "next/link";
import React from "react";
import { FaBullseye } from 'react-icons/fa';

export const ServiceCard: React.FC<{ item: ServiceItem, onOver:(num:number)=>void, indx:number, overEle:number, onMouseLeave:()=>void }> = ({ item, onOver, onMouseLeave, indx, overEle }) => {
  return (
    <Link className="" onMouseLeave={() => onMouseLeave()} href={item.href}>
        <div className={`rounded-xl border border-blue-100 p-4 ml-3 my-3 flex flex-col gap-2 ${overEle === indx ? 'bg-blue-100' : ''}`} onMouseOver={()=>onOver(indx)}>
      <div className="flex flex-col items-start gap-3">
        <div className="rounded-lg flex items-center justify-center text-blue-600 font-bold">
          {/* Placeholder icon, replace with passed svg if needed */}
          {item.icon ? <item.icon className="mr-2 bg-blue-200 rounded-sm p-1 text-2xl" /> : <FaBullseye />}
          <div className={`text-md font-semibold ${overEle === indx ? 'text-blue-700' : 'text-gray-900' }`}>{item.title}</div>
        </div>
        <div>
          {item.subtitle && (
            <div className="text-md text-gray-500 mt-1">{item.subtitle}</div>
          )}
        </div>
      </div>
    </div>
    </Link>
  );
};