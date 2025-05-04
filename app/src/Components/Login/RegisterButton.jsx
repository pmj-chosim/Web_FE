import React from "react";

const RegisterButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
    >
      {text}
    </button>
  );
};

export default RegisterButton;