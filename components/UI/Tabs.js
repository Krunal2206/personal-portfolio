"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { CardSpotlight } from "./card-spotlight";

// Renders a single education entry
const EducationItem = ({ item }) => (
  <div>
    <h4 className="text-lg font-semibold text-[var(--secondary-color)]">
      🎓 {item.degree}
    </h4>
    <p>
      {item.institution}, {item.location}
    </p>
    <p className="text-sm text-[var(--tertiary-color)]">{item.period}</p>
  </div>
);

// Renders a single experience entry
const ExperienceItem = ({ item }) => (
  <div className="space-y-1">
    <h4 className="text-lg font-semibold text-[var(--secondary-color)]">
      💼 {item.role}
    </h4>
    <p className="text-[var(--primary-color)]">
      {item.company}
    </p>
    <p className="text-sm text-[var(--tertiary-color)]">{item.location}</p>
    <p className="text-sm text-[var(--tertiary-color)]">{item.period}</p>
    <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-[var(--secondary-color)] font-normal">
      {item.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

// Picks the right renderer based on tab value
const TabContent = ({ tab }) => {
  const isEducation = tab.value === "education";

  return (
    <div className="text-gray-300 space-y-8">
      {tab.items.map((item, i) =>
        isEducation ? (
          <EducationItem key={i} item={item} />
        ) : (
          <ExperienceItem key={i} item={item} />
        ),
      )}
    </div>
  );
};

export const Tabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={`flex flex-col lg:flex-row ${containerClassName}`}>
      {/* Tab Buttons */}
      <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 overflow-auto lg:w-1/6">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-all duration-200 hover:bg-gray-800 lg:w-full text-left ${
              activeTab.value === tab.value
                ? `bg-white/10 backdrop-blur-md border border-white/20 ${activeTabClassName}`
                : `bg-transparent text-gray-300 ${tabClassName}`
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        className={`mt-6 lg:mt-0 ${contentClassName}`}
        key={activeTab.value}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CardSpotlight>
          <div className="w-full p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
            <TabContent tab={activeTab} />
          </div>
        </CardSpotlight>
      </motion.div>
    </div>
  );
};
