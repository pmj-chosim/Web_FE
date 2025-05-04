import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import RegisterButton from "./RegisterButton";
import LoginInputField from "./LoginInputField";

const RegisterForm = ({ onSuccess }) => {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [comp, setComp] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !id || !password || !confirmPassword || !gender || !age || !height || !weight) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }


    const result = await register(
      name,
      id,
      password,
      gender,
      parseInt(age),
      parseInt(height),
      parseInt(weight),
      comp
    );

    if (result.success) {
      setName("");
      setID("");
      setPassword("");
      setConfirmPassword("");
      setGender("");
      setAge("");
      setHeight("");
      setWeight("");
      setComp(false);
      if (onSuccess) onSuccess();
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <LoginInputField
          label="이름"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <LoginInputField
          label="비밀번호 확인"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">성별</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">선택</option>
            <option value="M">남성</option>
            <option value="F">여성</option>
          </select>
        </div>
        <LoginInputField
          label="나이"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <LoginInputField
          label="키 (cm)"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <LoginInputField
          label="체중 (kg)"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={comp}
              onChange={(e) => setComp(e.target.checked)}
              className="mr-2"
            />
            <span className="text-gray-700 text-sm font-bold">대회 참가 여부</span>
          </label>
        </div>
        <div className="mt-6">
          <RegisterButton text="회원가입" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;