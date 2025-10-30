import { MdError } from "react-icons/md";

const Error = ({ message }) => {
  return (
    <div
      className="
        bg-red/10 border border-red text-red 
        px-4 py-3 rounded-lg flex items-center gap-3
      "
      role="alert"
    >
      <MdError size={24} />
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Error;
