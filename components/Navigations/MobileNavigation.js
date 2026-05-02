import NavigationLinks from "./NavigationLinks";

const MobileNavigation = () => (
  <div className="fixed bottom-8 w-full md:hidden z-50">
    <div className="container mx-auto">
      <div className="w-full bg-[rgba(255,255,255,0.15)] border border-[var(--primary-color)] backdrop-blur-lg h-[55px] rounded-full px-5 max-w-[360px] flex justify-between items-center shadow-lg shadow-[var(--shadow-color)] mx-auto">
        <NavigationLinks
          className="justify-between w-full"
          itemClassName="flex items-center"
          linkClassName="p-2 transition-colors"
          activeClassName="text-[#b49bff]"
          renderItem={(item) => <item.icon size={24} />}
          container="div"
          itemComponent="div"
        />
      </div>
    </div>
  </div>
);

export default MobileNavigation;
