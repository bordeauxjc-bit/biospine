import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO string
  updated?: string;
  author?: string;
  tags?: string[];
  cover?: string;
  coverAlt?: string;
  readingTime?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

function readPostFile(slug: string): Post | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  // Compute reading time (avg 225 words/min)
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 225));
  const readingTime = `${minutes} min read`;

  return {
    slug,
    content,
    readingTime,
    ...(data as PostFrontmatter),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR);
  const posts = files
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => readPostFile(f.replace(/\.mdx?$/, '')))
    .filter((p): p is Post => Boolean(p));

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): Post | null {
  return readPostFile(slug);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}
