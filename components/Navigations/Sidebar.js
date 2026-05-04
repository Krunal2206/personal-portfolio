import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import { scroller } from "react-scroll";
import ProfileSection from "../Common/ProfileSection";
import Button from "./SidebarButton";
import { socials } from "../config/socials";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  // Handle navigation and close sidebar
  const handleNavigation = (url) => {
    toggleSidebar(); // Close sidebar

    if (url.startsWith("http")) {
      // External links
      window.open(url, "_blank");
    } else {
      // Internal navigation using react-scroll
      scroller.scrollTo(url, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50" onClose={toggleSidebar}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div className="fixed inset-y-0 left-0 flex max-w-xs w-full">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="w-full max-w-xs bg-[var(--background-color)] text-[var(--primary-color)] shadow-lg border-r border-[var(--shadow-color)] p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Profile</h2>
                <button
                  onClick={toggleSidebar}
                  className="cursor-pointer p-2 rounded-full hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] transition"
                >
                  <IoMdClose size={24} />
                </button>
              </div>

              {/* Profile Section */}
              <ProfileSection
                image="/profile.jpg"
                name="Krunal Thakar"
                email={`${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              />

              {/* Buttons */}
              <div className="mt-8 flex flex-col space-y-4">
                {/* Connect with Me (LinkedIn) */}
                <Button
                  onClick={() => handleNavigation(socials[0].href)}
                  className="bg-[var(--primary-color)] text-[var(--background-color)] hover:bg-[var(--secondary-color)]"
                >
                  Connect with Me
                </Button>

                <Button
                  onClick={() => handleNavigation("contact")}
                  className="bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]"
                >
                  Message Me
                </Button>
              </div>

              {/* Additional Details */}
              <div className="mt-8 space-y-6 text-sm">
                <div>
                  <h4 className="font-semibold text-[var(--secondary-color)]">
                    Bio
                  </h4>
                  <p className="text-[var(--tertiary-color)]">
                    A passionate MERN stack developer from India, specializing
                    in building dynamic and responsive web application.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--secondary-color)]">
                    Location
                  </h4>
                  <p className="text-[var(--tertiary-color)]">ON, Canada.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--secondary-color)]">
                    Website
                  </h4>
                  <p className="text-[var(--tertiary-color)]">
                    <a
                      href="https://krunal.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[var(--secondary-color)]"
                    >
                      krunal.dev
                    </a>
                  </p>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Sidebar;
