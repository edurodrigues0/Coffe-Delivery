import { ReactElement, ReactNode } from "react";

import { clsx } from "clsx";

interface ItemProps {
  children: ReactElement;
  text: string;
  color?: 'yellow-dark' | 'yellow' | 'gray' | 'purple'
}

export function Item({children, text, color = 'purple'}: ItemProps) {
  return (
    <div className="flex flex-nowrap items-center gap-3">
      <div 
        className={clsx("h-8 w-8 p-2 text-background rounded-full" , {
          "bg-yellow-dark": color === "yellow-dark",
          "bg-yellow-normal": color === "yellow",
          "bg-base-subtitle": color === "gray",
          "bg-purple-normal": color === "purple"
        })}
      >
        {children}
      </div>
      <p className="text-base text-base-text font-sans leading-5">{text}</p>
    </div>
  );
}
