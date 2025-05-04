import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();

//연결 확인
console.log("Env Variables:", {
  login: import.meta.env.VITE_LOGIN_API_URL,
  register: import.meta.env.VITE_REGISTRATION_API_URL,
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("accessToken")); // 쿠키로 초기화
  const [user, setUser] = useState({ user_name: Cookies.get("user_name") || "" });

  const login = async (email, password) => {


    // 더미 데이터 테스트
    if (email === "test" && password === "1234") {
      Cookies.set("accessToken", "dummy-token", { expires: 7 });
      Cookies.set("refreshToken", "dummy-refresh-token", { expires: 30 });
      Cookies.set("user_name", "Test User", { expires: 7 });
      setIsLoggedIn(true);
      setUser({ user_name: "Test User" });
      return { success: true };
    }

    try {
      const response = await axios.post(import.meta.env.VITE_LOGIN_API_URL, {
        user_id: email,
        user_pw: password,
      });

      // 성공 응답 (200 OK)
      const { accessToken, refreshToken, user_name } = response.data;
      Cookies.set("accessToken", accessToken, { expires: 7 }); // 7일 유효
      Cookies.set("refreshToken", refreshToken, { expires: 30 }); // 30일 유효
      Cookies.set("user_name", user_name, { expires: 7 });
      
      setIsLoggedIn(true);
      setUser({ user_name });
      
      return { success: true };
    } catch (error) {
      // 에러 처리
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          return { success: false, message: data.message || "잘못된 비밀번호입니다." };
        }
        if (status === 404) {
          return { success: false, message: data.message || "사용자를 찾을 수 없습니다." };
        }
      }
      return { success: false, message: "로그인 중 오류가 발생했습니다." };
    }
  };

  const register = async (name, email, password, gender, age, height, weight, comp) => {
    try {

      const response = await axios.post(import.meta.env.VITE_REGISTRATION_API_URL, {
        user_id: email,
        user_pw: password,
        user_name: name,
        user_gender: gender,
        user_age: age,
        user_height: height,
        user_weight: weight,
        user_comp: comp,
      });

      // 성공 응답 (201 Created)
      return { success: true, message: response.data.message || "회원가입 성공!" };
    } catch (error) {
      // 에러 처리
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400) {
          return { success: false, message: data.message || "필수 필드가 누락되었거나 ID가 이미 존재합니다." };
        }
      }
      return { success: false, message: "회원가입 중 오류가 발생했습니다." };
    }
  };

  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("user_name");
    setIsLoggedIn(false);
    setUser({ user_name: "" });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);