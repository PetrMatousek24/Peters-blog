import { getPostBySlug, getPostContent, getPostSlugs } from "@/lib/posts"

export async function generateStaticParams() {
  const slugs = getPostSlugs()

  return slugs.map(slug => ({
    slug: slug.replace(/\.md$/, "")
  }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const content = await getPostContent(post.content);

  return (
    <article className="prose mx-auto py-5">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}