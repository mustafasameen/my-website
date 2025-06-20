"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BlogCard } from "./blog-card";
import Separator from "./shared/separator";

interface BlogListProps {
  blogs: any[];
  currentPage: number;
  isPublication?: boolean;
}

export function BlogList({ blogs, currentPage, isPublication }: BlogListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 5 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {blogs.map((blog, index, array) => (
          <motion.div key={blog.slug} variants={item}>
            <BlogCard blog={blog} isPublication={isPublication} />
            {index !== array.length - 1 && <Separator />}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
