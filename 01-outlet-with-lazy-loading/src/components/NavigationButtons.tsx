import { useNavigate } from "react-router-dom";

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard/users");
        }}
        className="py-2 px-5 mx-1 inline-block bg-blue-500 hover:bg-blue-400 border-2 border-blue-500 text-slate-50 hover:text-slate-100"
      >
        Users
      </button>
      <button
        onClick={() => {
          navigate("/dashboard/comments");
        }}
        className="py-2 px-5 mx-1 inline-block bg-blue-500 hover:bg-blue-400 border-2 border-blue-500 text-slate-50 hover:text-slate-100"
      >
        Comments
      </button>
    </div>
  );
};

export default NavigationButtons;
