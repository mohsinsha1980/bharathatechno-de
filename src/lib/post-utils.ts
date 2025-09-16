import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { PostDataType } from "./types";

const postDirectory = path.join(process.cwd(), "blogs");

export function getPostsFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier: string): PostDataType {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: PostDataType = {
    slug: postSlug,
    content,
    title: data.title,
    date: data.date,
    image: data.image,
    excerpt: data.excerpt,
    author: data.author,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    link: data.link,
    label: data.label,
    author_picture: data.author_picture,
    id: data.id,
    faqs: data.faqs?.length ? data.faqs : [],
  };
  return postData;
}

export function getAllPosts(): PostDataType[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    new Date(postA.date) > new Date(postB.date) ? -1 : 1
  );
  return sortedPosts;
}

export function getLatestPosts(): PostDataType[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    new Date(postA.date) > new Date(postB.date) ? -1 : 1
  );
  return sortedPosts.slice(0, 5);
}