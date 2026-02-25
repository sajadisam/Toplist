"use client";
import { ReactNode, Children } from "react";

export default function BodyWrapper({ children, className }: { children: ReactNode, className?: string }) {
  return <>
    <div className={`flex flex-col items-center mx-4 ${className}`}>
      <div className="flex flex-col items-center w-full max-w-[1100px] h-full py-4 gap-5">
        {
          Children.map(children, (child, index) => (
            <div key={index} className="flex flex-col gap-3 bg-primary justify-center h-full py-8 px-10 rounded-sm  w-full">
              {child}
            </div>
          ))
        }
      </div>
    </div>
  </>;
}
