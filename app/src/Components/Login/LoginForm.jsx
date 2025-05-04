import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import LoginButton from "./LoginButton";
import LoginInputField from "./LoginInputField";

const LoginForm = () => {
  const { login } = useAuth();
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSuccess(false);

    if (!id || !password) {
      setError("ID와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const result = await login(id, password);

    if (!result.success) {
      setError(result.message);
    } else {
      setIsSuccess(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {isSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          로그인 성공!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <LoginInputField
          label="아이디"
          type="id"
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
        <LoginInputField
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-6">
          <LoginButton text="로그인" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;