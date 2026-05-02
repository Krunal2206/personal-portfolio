const FormField = ({ label, error, children }) => (
  <div>
    <label className="block mb-1 text-[var(--secondary-color)]">{label}</label>
    {children}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default FormField;
