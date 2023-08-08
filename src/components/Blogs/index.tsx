import { FC, Children } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import { BlogsContainer } from "./styles/BlogsContainer";
import { SectionWrapper } from "@components/SectionWrapper";

import blogsIcon from "@assets/images/blogs.svg";

const blogsData = [
  {
    title: "Big O Time complexities of JavaScript Object, arrays...",
    description:
      "An object is a data container, where the collection of properties save in key-value",
    linkText: "Read More",
    href: "/",
  },
  {
    title: "Big O Time complexities of JavaScript Object, arrays...",
    description:
      "An object is a data container, where the collection of properties save in key-value",
    linkText: "Read More",
    href: "/",
  },
  {
    title: "Big O Time complexities of JavaScript Object, arrays...",
    description:
      "An object is a data container, where the collection of properties save in key-value",
    linkText: "Read More",
    href: "/",
  },
  {
    title: "Big O Time complexities of JavaScript Object, arrays...",
    description:
      "An object is a data container, where the collection of properties save in key-value",
    linkText: "Read More",
    href: "/",
  },
  {
    title: "Big O Time complexities of JavaScript Object, arrays...",
    description:
      "An object is a data container, where the collection of properties save in key-value",
    linkText: "Read More",
    href: "/",
  },
];

export const Blogs: FC = () => {
  return (
    <SectionWrapper title="BLOGS" sectionId="blogs">
      <BlogsContainer>
        <ul className="blogs">
          {Children.toArray(
            blogsData.map((blog) => {
              return (
                <li>
                  <div className="blog">
                    <Image
                      src={blogsIcon}
                      width={40}
                      height={40}
                      alt={blog.title}
                    />
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <Link href={blog.href}>
                      {blog.linkText}
                      <BsArrowRight width={24} height={24} color="#dadaf2" />
                    </Link>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </BlogsContainer>
    </SectionWrapper>
  );
};
