import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "../Bar/MenuBar";
import RegisterForm from "../Components/Login/RegisterForm";

const RegisterPage = () => {

  return (
    <div>
      <MenuBar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>
        <RegisterForm onSuccess={() => window.location.href = "/login"} />
        <div className="mt-4 text-center">
          <p>
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              로그인하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;