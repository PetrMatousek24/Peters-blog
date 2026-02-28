import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return { slug: realSlug, ...data, content }
}

export async function getPostContent(markdown: string) {
  const processedContent = await remark()
    .use(html)
    .process(markdown)

  return processedContent.toString()
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  return slugs.map(slug => getPostBySlug(slug))
}