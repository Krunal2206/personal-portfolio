"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CardSpotlight } from "./card-spotlight";

/**
 * Reusable Tabs component.
 * Props:
 * - tabs: Array of tab objects { title, value, content }
 */
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
          <div className="w-full p-8 text-lg md:text-xl font-bold bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
            {activeTab.content}
          </div>
        </CardSpotlight>
      </motion.div>
    </div>
  );
};
