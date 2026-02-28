"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkStyle = (pathname: string, targetPath: string) => {
  const isActive =
    targetPath === "/"
      ? pathname === "/"
      : pathname === targetPath || pathname.startsWith(`${targetPath}/`);

  const baseStyle =
    "relative inline-flex items-center rounded-lg border border-slate-500 px-3 py-2 text-lg transition-colors duration-200 ease-in-out hover:bg-slate-200 " +
    "after:absolute after:left-2 after:right-2 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:ease-in-out hover:after:scale-x-100";

  return isActive ? `${baseStyle} after:scale-x-100` : baseStyle;
};

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="p-8 flex width-[100%] bg-gray-300">
      <div className="flex align-center w-[50%]"> 
        <h1 className="text-3xl my-auto">Peter's Blog</h1>
      </div>

      <div className="flex my-auto justify-end w-[50%]">
        <nav className="flex gap-4">
          <Link className={linkStyle(pathname, "/")} href="/">Home</Link>
          <Link className={linkStyle(pathname, "/blog")} href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
