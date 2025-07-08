"use client";

import { useState, useEffect } from "react";

export default function Story() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const items = [
    {
      title: "First Meet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate, sapien eu mollis aliquet, turpis dui mollis est, ut fringilla nibh augue vel urna. Praesent convallis, mauris nec consectetur condimentum, orci turpis congue quam, id venenatis turpis lectus sed massa. Nunc sit amet orci lectus. Fusce at aliquet est. Vivamus malesuada suscipit est, non commodo velit commodo.",
      image: "/images/story/1.jpg",
    },
    {
      title: "First Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate, sapien eu mollis aliquet, turpis dui mollis est, ut fringilla nibh augue vel urna. Praesent convallis, mauris nec consectetur condimentum, orci turpis congue quam, id venenatis turpis lectus sed massa. Nunc sit amet orci lectus. Fusce at aliquet est. Vivamus malesuada suscipit est, non commodo velit commodo.",
      image: "/images/story/2.jpg",
    },
    {
      title: "Engagement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate, sapien eu mollis aliquet, turpis dui mollis est, ut fringilla nibh augue vel urna. Praesent convallis, mauris nec consectetur condimentum, orci turpis congue quam, id venenatis turpis lectus sed massa. Nunc sit amet orci lectus. Fusce at aliquet est. Vivamus malesuada suscipit est, non commodo velit commodo.",
      image: "/images/story/3.jpg",
    },
    {
      title: "Getting Married",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate, sapien eu mollis aliquet, turpis dui mollis est, ut fringilla nibh augue vel urna. Praesent convallis, mauris nec consectetur condimentum, orci turpis congue quam, id venenatis turpis lectus sed massa. Nunc sit amet orci lectus. Fusce at aliquet est. Vivamus malesuada suscipit est, non commodo velit commodo.",
      image: "/images/story/1.jpg",
    },
  ];

  return (
    <div
      className="relative max-w-full mx-auto px-4 lg:px-72 my-12 bg-contain"
      style={{ backgroundImage: "url('/images/ornaments/ornaments3.png')" }}
    >
      <div className="flex justify-center items-center pb-6">
        <h1 className="text-2xl lg:text-6xl font-cinzelDecorative mb-3">
          Our Story
        </h1>
      </div>
      {/* Vertical timeline line */}
      <div
        className={`${
          isMobile ? "hidden" : "block"
        } absolute left-1/2 top-64 bottom-64 w-[1px] bg-gray-400`}
      ></div>

      {/* Mobile timeline line */}
      <div
        className={`${
          isMobile ? "block" : "hidden"
        } absolute left-8 top-0 bottom-0 w-[1px] bg-gray-400`}
      ></div>

      {items.map((item, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <div
            key={idx}
            className={`relative mb-16 flex ${
              isMobile ? "flex-row" : "flex-row"
            } w-full items-stretch`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute z-10 bg-gold rounded-full border-4 border-white shadow-lg ${
                isMobile
                  ? "left-4 top-8 w-6 h-6 -translate-x-1/2"
                  : "left-1/2 top-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2"
              }`}
            ></div>

            {/* Content container */}
            <div
              className={`flex flex-col md:flex-row w-full ${
                isMobile ? "pl-12" : ""
              }`}
            >
              {/* Text content */}
              <div
                className={`w-full md:w-1/2 p-6 flex flex-col justify-center ${
                  !isMobile && !isEven ? "md:order-2 md:pl-12" : "md:pr-12"
                }`}
              >
                <div className="bg-white border-2 border-dashed border-gold p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gold font-cinzel mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-slabo font-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div
                className={`w-full mt-4 md:mt-0 md:w-1/2 flex items-center justify-center px-6 ${
                  !isMobile && !isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={`Ilustrasi ${item.title}`}
                    className="object-cover w-full md:h-56 lg:h-64"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
