import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Fragment } from "react/jsx-runtime";
import style from "@/styles/tailwind-styles";

export default function BlogPage() {
  const posts = getAllPosts();
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); 

  return (
    <>
      <h1 className="text-[2.5rem] text-center">Blog</h1>
      <hr className="my-6 w-5/6 mx-auto" />

      {posts.map((post) => (
        <Fragment key={post.slug}>
          
          {/* Article container with Tailwind styles */}
          <article className={style.articleStyle}>
            <Link href={`/blog/${post.slug}`}>
              <img src={post.coverImage} alt={post.title} className={style.imageStyle} />
              <h2 className={style.headingStyle}>{post.title}</h2>

              {/* Author and date container with Tailwind styles */}
              <div className={style.dataContainerStyle}>
                <h3 className={style.dataStyle}>{post.author}</h3>
                <h3 className={style.dataStyle}>{post.date}</h3>
              </div>
            </Link>

            {/* Description with Tailwind styles */}
            <p className={style.descriptionStyle}>{post.description}</p>
          </article>

          {/* Horizontal rule to separate articles */}
          <hr className="my-6 w-5/6 mx-auto" />

        </Fragment>
      ))}

    </>
  );
}