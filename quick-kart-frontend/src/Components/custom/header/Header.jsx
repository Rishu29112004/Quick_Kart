import React, { useContext, useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  UserRound,
  ShoppingCart,
  UserPen,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { CartContext } from "../../context/CartContext";
import { authService } from "../../services/auth.service";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const isLoggedIn = !!user;

  const { cartItem } = useContext(CartContext);

  console.log("userDetails:", user);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;
    const fetchUser = async () => {
      try {
        const res = await authService.me();
        setUser(res.data.data);
      } catch (err) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await authService.me();
      setUser(res.data.data);
      setSignup(false);
      setOpenLogin(false);
      setProfileOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = () => {
    setSignup(false);
    setOpenLogin(true);
    setMenuOpen(false);
  };

  const handleSignup = () => {
    setOpenLogin(false);
    setSignup(true);
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (err) {
      console.log("Logout API error (ignore if not implemented)", err);
    }

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setUser(null);
    setProfileOpen(false);
  };

  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 shadow-md border-b border-gray-300 h-[64px] flex items-center">
      <div className="flex items-center justify-between px-4 md:px-10 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div>
          <p className="font-bold text-2xl">
            <span className="text-orange-500">Q</span>uickCart
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 items-center cursor-pointer">
          <Link to="/" className="font-medium hover:text-orange-500">
            Home
          </Link>
          <Link to="/shop" className="font-medium hover:text-orange-500">
            Shop
          </Link>
          <Link to="/about" className="font-medium hover:text-orange-500">
            About Us
          </Link>
          <Link to="/contact" className="font-medium hover:text-orange-500">
            Contact
          </Link>

          {/* FIX: button ko Link banaya */}
          <Link
            to="/admin"
            className="font-light border px-2 py-1 rounded-full text-sm border-gray-300 hover:bg-gray-100"
          >
            Seller Dashboard
          </Link>
        </div>

        {/* Desktop Account */}
        <div className="hidden md:flex gap-2 items-center relative">
          <Link to="/cart" className="relative">
            {/* Cart Icon */}
            <ShoppingCart className="w-7 h-7 text-gray-700" />

            {/* Cart Count Badge - Safe check */}
            {Array.isArray(cartItem) && cartItem.length > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold
       rounded-full h-5 w-5 flex items-center justify-center shadow-md"
              >
                {cartItem.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>

          {!isLoggedIn ? (
            <button
              onClick={() => setOpenLogin(true)}
              className="font-medium border px-3 py-1 rounded-xl text-white bg-orange-400"
            >
              Login
            </button>
          ) : (
            <div className="relative">
              <div
                onClick={() => setProfileOpen((prev) => !prev)}
                className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold cursor-pointer overflow-hidden"
              >
                {user?.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  user?.name
                    ?.split(" ")
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()
                )}
              </div>
            </div>
          )}

          {/* Profile Dropdown */}
          {profileOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-12 right-0 w-64 bg-white shadow-xl border rounded-xl p-4 z-50"
            >
              {/* User Info */}
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                  {user?.name?.[0]?.toUpperCase()}
                </div>

                <div>
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>

              <hr className="my-3" />

              {/* Profile */}
              <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
                <UserPen size={16} /> Profile
              </button>

              {/* Settings */}
              <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100">
                <Settings size={16} /> Settings
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full p-2 rounded-lg text-red-500 hover:bg-red-50"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden cursor-pointer z-50"
        >
          {menuOpen ? <X size={28} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 mt-16 px-6 text-lg font-medium">
          <Link to="/" className="font-medium hover:text-orange-500">
            Home
          </Link>
          <Link to="/shop" className="font-medium hover:text-orange-500">
            Shop
          </Link>
          <Link to="/about" className="font-medium hover:text-orange-500">
            About Us
          </Link>
          <Link to="/contact" className="font-medium hover:text-orange-500">
            Contact
          </Link>
          <Link
            to="/admin"
            className="font-light border px-3 py-1 rounded-full text-sm border-gray-300 w-fit"
          >
            Seller Dashboard
          </Link>

          <div className="flex items-center gap-2 mt-5">
            {!isLoggedIn ? (
              <button
                onClick={() => setOpenLogin(true)}
                className="font-medium border p-1 rounded-2xl text-white bg-orange-400"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="font-medium"
              >
                <UserRound className="h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-30"
        />
      )}

      {/* Modals */}
      {signup && (
        <SignupForm
          handleSubmit={handleSubmit}
          handleLogin={handleLogin}
          setSignup={setSignup}
        />
      )}
      {openLogin && (
        <LoginForm
          handleSignup={handleSignup}
          setOpenLogin={setOpenLogin}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Header;
