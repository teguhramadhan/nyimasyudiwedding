"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function StoryParallax() {
  const items = [
    {
      title: "First Meet",
      description:
        "Ketika pertama kali bertemu, rasanya seperti dunia berhenti sejenak.",
      image: "/images/story/1.jpg",
    },
    {
      title: "First Date",
      description:
        "Momen berdua pertama kali, membekas selamanya dalam ingatan.",
      image: "/images/story/2.jpg",
    },
    {
      title: "Engagement",
      description:
        "Hari ketika dua hati memutuskan untuk saling terikat selamanya.",
      image: "/images/story/3.jpg",
    },
    {
      title: "Getting Married",
      description:
        "Dan inilah hari di mana semuanya menjadi satu cerita indah.",
      image: "/images/story/4.jpg",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      {items.map((item, idx) => (
        <ParallaxSection
          key={idx}
          title={item.title}
          description={item.description}
          image={item.image}
          reverse={idx % 2 === 1}
        />
      ))}
    </section>
  );
}

function ParallaxSection({
  title,
  description,
  image,
  reverse = false,
}: {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center"
    >
      <div
        className={`w-full md:w-1/2 p-8 ${
          reverse ? "order-2 md:order-1" : "order-1"
        }`}
      >
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {description}
        </motion.p>
      </div>
      <div
        className={`w-full md:w-1/2 h-[400px] relative overflow-hidden ${
          reverse ? "order-1 md:order-2" : "order-2"
        }`}
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
}
