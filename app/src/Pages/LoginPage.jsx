import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import MenuBar from "../Bar/MenuBar";
import LoginForm from "../Components/Login/LoginForm";
import RegisterForm from "../Components/Login/RegisterForm";

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <MenuBar />
      {showRegister ? (
        <div className="container mx-auto mt-8">
          <RegisterForm onSuccess={() => setShowRegister(false)} />
          <div className="mt-4 text-center">
            <p>
              이미 계정이 있으신가요?{" "}
              <button
                onClick={() => setShowRegister(false)}
                className="text-blue-500 hover:underline"
              >
                로그인하기
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-6 text-center">This is login page</h1>
          <LoginForm />
          <div className="mt-4 text-center">
            <p>
              계정이 없으신가요?{" "}
              <button
                onClick={() => setShowRegister(true)}
                className="text-blue-500 hover:underline"
              >
                회원가입하기
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;