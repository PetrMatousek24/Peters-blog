import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content")

export type PostMetadata = {
  title: string;
  date: string;
  author: string;
  description: string;
  coverImage: string;
};

export type Post = PostMetadata & {
  slug: string;
  content: string;
};


export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, ...(data as PostMetadata), content };
}

export async function getPostContent(markdown: string) {
  const processedContent = await remark()
    .use(html)
    .process(markdown)

  return processedContent.toString()
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug));
}