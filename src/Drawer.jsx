import React, { useEffect } from "react";

const Drawer = ({ open, onClose, children, width = "400px" }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ width }}
      >
        {/* Content */}
        {children}
      </div>
    </>
  );
};

export default Drawer;
