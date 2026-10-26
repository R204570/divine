import { PONCHO_POSTS } from "./poncho-posts";
import { TARPAULIN_POSTS } from "./tarpaulin-posts";
import type { BlogPost, BlogTopic } from "./types";

export * from "./types";

export const BLOG_POSTS: BlogPost[] = [...PONCHO_POSTS, ...TARPAULIN_POSTS];

/** The blog index and the home page list guides under these headings, in this order. */
export const BLOG_TOPICS: { topic: BlogTopic; heading: string }[] = [
  { topic: "poncho", heading: "Rain poncho guides" },
  { topic: "tarpaulin", heading: "Tarpaulin guides" },
];

export const postsByTopic = (topic: BlogTopic) => BLOG_POSTS.filter((post) => post.topic === topic);
