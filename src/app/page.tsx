import Image from "next/image";
import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import { allBlogs } from "contentlayer/generated";
import { BlogCard } from "@/components/blog-card";
import React from "react";
import { LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  const blogs = allBlogs
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 2);

  return (
    <React.Fragment>
      <section className="mb-5">
        <Image
          src="/_static/me.jpg"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full cursor-pointer hover:grayscale mb-5"
          priority
        />
        <h1 className="text-2xl font-bold">Arkar Min (Kei)</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I am a software developer primarily focus on backend development
            specializing in scalable, high-performance systems using TypeScript,
            Node.js, and Java. My focus is on system architecture, distributed
            systems, and databases, ensuring security, reliability, and
            efficiency.
          </p>
          <p className="mt-4 mb-4">
            Have strong working experiences for various size of teams and
            organizations. I always stay updated on backend technologies and
            cloud-native development, actively contributing to open-source
            projects and exploring new tools to enhance scalability,
            maintainability and overall performance.
          </p>
          <p className="mt-4 mb-4">
            With a solution-driven approach, I build robust backend systems that
            drive innovation and deliver real business value, tackling complex
            challenges with expertise and precision.
          </p>

          <p className="mb-4">
            If you&apos;d like to collaborate, please send me an email at&nbsp;
            <a
              href="mailto:arkar.dev.kei@gmail.com"
              className="border-b inline-block"
            >
              arkar.dev.kei@gmail.com
            </a>
            &nbsp;or reach out on any of my social media.
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
        <p className="mt-4 border-b inline-block cursor-pointer">
          <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </p>
      </section>

      {/* <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" /> */}

      {/* <div>
        <h2 className="mb-6 text-2xl font-bold">Latest posts</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.slug} className="py-1">
              <Link href={`/blog/${blog.slug}`}>
                <BlogCard blog={blog} key={blog.slug} />
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </React.Fragment>
  );
}
