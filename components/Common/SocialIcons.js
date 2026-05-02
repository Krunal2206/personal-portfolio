/**
 * Reusable social icon component.
 */
const SocialIcons = ({ items }) => {
  return items.map(({ name, href, icon: Icon }) => (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[var(--secondary-color)]"
    >
      <Icon className="w-6 h-6" />
    </a>
  ));
};

export default SocialIcons;
