import "@/public/profile.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Peter, the creator of this blog.",
};

export default function AboutPage() {
  return (
    <div className="p-8">
      <div className="flex">
        <img src="/profile.jpg" alt="Profile Picture" className="w-48 h-48 rounded-full mb-4 object-cover" />
        <h1 className="text-[4rem] font-bold ml-4 my-auto">Petr Matoušek</h1>
      </div>
      <h1 className="text-3xl mb-4">About Me</h1>
      <p className="text-lg text-gray-700">
        Hi, I'm Peter, a passionate web developer and blogger. 
        I made this website to test out my Next.js skills.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        I enjoy sharing my knowledge and experiences through writing articles on web development, 
        programming, and technology trends. When I'm not coding or blogging, 
        you can find me exploring new technologies or spending time with my family.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Thanks for visiting my blog, and I hope you find the content helpful and inspiring!
      </p>
    </div>
  );
}