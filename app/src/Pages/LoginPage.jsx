import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MenuBar from "../Bar/MenuBar";
import LoginForm from "../Components/Login/LoginForm";

const LoginPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <MenuBar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-6 text-center">This is login page</h1>
        <LoginForm />
        <div className="mt-4 text-center">
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              회원가입하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;