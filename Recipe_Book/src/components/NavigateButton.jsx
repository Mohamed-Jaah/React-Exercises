import { useNavigate } from "react-router-dom";

const NavigateButton = ({ to, children, className = "" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default NavigateButton;
