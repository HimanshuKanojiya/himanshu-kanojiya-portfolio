import { FC, Children } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import { BlogsContainer } from "./styles/BlogsContainer";
import { SectionWrapper } from "@components/SectionWrapper";

import blogsIcon from "@assets/images/blogs.svg";

const blogsData = [
  {
    title: "What is better React Testing Library or Enzyme?",
    description:
      "I wish, if I did not ignore this earlier, if I took it seriously, then I was not confused to suggest which library we should use in the React for the project.",
    linkText: "Read More",
    href: "https://dev.to/himanshukanojiya/what-is-the-better-testing-library-for-react-enzyme-from-airbnb-vs-react-testing-library-from-kent-c-dodds-c5e",
  },
  {
    title: "Let's understand more about React memo",
    description:
      "Apart from memorizing props, it performs a shallow comparison on both old and new props, and if any change's detected, it will re-render the component.",
    linkText: "Read More",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:6995091261275688960",
  },
  {
    title: "When should we use useState & useReducer?",
    description:
      "Ever wondered what can be the use cases of useState or useReducer hook in React?, Why should we use useReducer over useState?",
    linkText: "Read More",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:6918629216259317760/",
  },
  {
    title: "A Short Secret of Closures",
    description:
      "When we return a function from a function, then returned function does not come alone. It also brings nearby values (those who are in the same scope) under [[scopes]] property.",
    linkText: "Read More",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:6877851604247207936/",
  },
  {
    title: "Let's understand the React JSX in Depth",
    description:
      "Did you know in React, it is not required to create a component using only JSX? You can use React createElement function as well for building the Components.",
    linkText: "Read More",
    href: "https://dev.to/himanshukanojiya/react-jsx-in-depth-3dhj",
  },
  {
    title: "Writing Clean Code in JavaScript - Variables",
    description:
      "If the value is an object, then use some descriptive name for it. An object can have many data about the users or person or can be a group of data. Example: userInfo, database, authenticatedUserData, etc.",
    linkText: "Read More",
    href: "https://dev.to/himanshukanojiya/clean-code-in-javascript-variables-11kh",
  },
  {
    title:
      "What is useEffect()?, How does it work? & Why should we use useEffect()?",
    description:
      "Well, useEffect is React hook, which use to handle side effects functions (side Effects are those functions that interact with the outside world, or you can say interact with out of React ecosystem), and with useEffect, we can separate them into another Function.",
    linkText: "Read More",
    href: "https://dev.to/himanshukanojiya/what-is-useeffect-how-does-it-work-why-should-we-use-useeffect-way-to-use-it-147g",
  },
  {
    title: "Rotate image without cutting off sides using Python – OpenCV",
    description:
      "Rotating images with OpenCV is easy, but sometimes simple rotation tasks cropped/cut sides of an image, which leads to a half image. Now, In this tutorial, We will explore a solution to safely rotate an image without cropping/cutting sides of an image so that the entire image will include in rotation, and also compare the conventional rotation method with the modified rotation version.",
    linkText: "Read More",
    href: "https://www.geeksforgeeks.org/rotate-image-without-cutting-off-sides-using-python-opencv/",
  },
];

export const Blogs: FC = () => {
  return (
    <SectionWrapper title="BLOGS & POSTS" sectionId="blogs">
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
                    <Link href={blog.href} target="_blank">
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
