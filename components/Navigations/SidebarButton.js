/**
 * Styled sidebar button with optional className prop.
 */
const Button = ({ onClick, children, className = "" }) => (
  <button onClick={onClick} className={`sidebarBtn ${className}`}>
    {children}
  </button>
);

export default Button;
