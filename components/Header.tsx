import Link from "next/link";

export default function Header() {
  return (
    <header className="p-8 flex width-[100%] bg-gray-300">
      <div className="flex align-center w-[50%]"> 
        <h1 className="text-3xl my-auto">Peter's Blog</h1>
      </div>

      <div className="flex my-auto justify-end w-[50%]">
        <nav>
          <Link className="text-xl border rounded-lg p-2 hover:underline" href="/">Home</Link>

        </nav>
      </div>
    </header>
  );
}