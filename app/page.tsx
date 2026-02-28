import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const latestPosts = getAllPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <section className="rounded-2xl border border-slate-300 bg-gradient-to-br from-slate-100 via-white to-amber-50 p-8 md:p-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
          Welcome
        </p>
        <h1 className="mb-4 text-4xl md:text-5xl">Thoughtful notes on web development</h1>
        <p className="max-w-2xl text-lg text-slate-700">
          I write about Next.js, frontend architecture, and what I learn while building real projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/blog/hello-world"
            className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-slate-700"
          >
            Read the Blog
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-slate-400 px-5 py-3 font-semibold text-slate-800 transition-colors duration-200 hover:bg-white"
          >
            Browse All Posts
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-3xl">Latest Posts</h2>
          <Link href="/blog" className="text-sm font-semibold uppercase tracking-wider text-slate-700 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
              <Link href={`/blog/${post.slug}`}>
                <img src={post.coverImage} alt={post.title} className="h-44 w-full object-cover" />
                <div className="space-y-3 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {post.author} . {post.date}
                  </p>
                  <h3 className="text-xl">{post.title}</h3>
                  <p className="text-slate-700">{post.description}</p>
                  <p className="font-semibold text-slate-800">Read more</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-300 bg-slate-100 p-8">
        <h2 className="text-3xl">Get New Posts in Your Inbox</h2>
        <p className="mt-2 max-w-xl text-slate-700">
          Subscribe for a short weekly email with my newest article and one practical takeaway.
        </p>

        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-400 bg-white px-4 py-3 outline-none transition-colors duration-200 focus:border-slate-700"
          />
          <button
            type="button"
            className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-slate-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
