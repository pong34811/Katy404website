import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* ส่วนโลโก้/ชื่อแบรนด์ */}
        <div className="text-white text-xl font-bold">
          KT404
        </div>

        {/* ส่วนเมนูนำทาง */}
        <div className="space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white transition duration-300">
            home
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition duration-300">
            about
          </a>
          <a href="#story" className="text-gray-300 hover:text-white transition duration-300">
            story
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;