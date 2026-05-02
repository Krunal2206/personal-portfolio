import { Link } from "react-scroll";
import { navigation } from "../config";

const NavigationLinks = ({
  className = "",
  itemClassName = "",
  linkClassName = "",
  renderItem = (item) => item.name,
  onClick,
  container: Container = "ul",
  itemComponent: ItemComponent = "li",
}) => (
  <Container className={`flex ${className}`}>
    {navigation.map((item, index) => (
      <ItemComponent key={index} className={itemClassName}>
        <Link
          to={item.href.replace("#", "")}
          smooth
          duration={500}
          offset={-80}
          spy
          onClick={onClick}
          className={`hover:text-[var(--secondary-color)] cursor-pointer ${linkClassName}`}
        >
          {renderItem(item)}
        </Link>
      </ItemComponent>
    ))}
  </Container>
);

export default NavigationLinks;
