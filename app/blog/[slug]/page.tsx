import { getPostBySlug, getPostContent, getPostSlugs } from "@/lib/posts"
import style from "@/styles/tailwind-styles";


export async function generateStaticParams() {
  const slugs = getPostSlugs()

  return slugs.map(slug => ({
    slug: slug.replace(/\.md$/, "") // replace .md files with just the slug name
  }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const content = await getPostContent(post.content);

  return (
    <>
    <div className="relative">
      <img src={post.coverImage} alt={post.title} className="w-full h-auto" />

      <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-3xl bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="mb-2">{post.title}</h1>

        <div className={style.dataContainerStyle}>
          <h3 className={style.dataStyle}>{post.author}</h3>
          <h3 className={style.dataStyle}>{post.date}</h3>
        </div>

        <p className={style.descriptionStyle}>{post.description}</p>
      </div>
    </div>
    <hr className="mt-12 my-6 w-5/6 mx-auto" />

    <div className="prose prose-lg max-w-none px-4" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}