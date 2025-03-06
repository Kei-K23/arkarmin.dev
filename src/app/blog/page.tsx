import { BlogCard } from "@/components/blog-card";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import { generatePageMetadata } from "../seo";
import Link from "next/link";
import { ENV } from "@/lib/env";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Read my blogs on web development, design and more.",
});

const isProd = ENV.NODE_ENV === "production";

export default function Blog() {
  const blogs = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const undraftedBlogs = isProd ? blogs.filter((blog) => !blog.draft) : blogs;

  return (
    <section>
      <h1 className="mb-4 text-center text-2xl font-bold tracking-tighter">
        Coming Soon...
      </h1>
    </section>
    // <section>
    //   <ul>
    //     {undraftedBlogs.map((blog) => (
    //       <li
    //         key={blog.slug}
    //         className="py-1 divide-y divide-gray-200 dark:divide-gray-700"
    //       >
    //         <Link href={`/blog/${blog.slug}`}>
    //           <BlogCard blog={blog} />
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </section>
  );
}
