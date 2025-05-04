import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MenuBar = () => {
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    console.log("로그인 상태 변경 감지:", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/mypage" className="hover:underline">MyPage</Link>
            </li>
            <li>
              <Link to="/" onClick={logout} className="hover:underline">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="hover:underline">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:underline">Sign In</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default MenuBar;