import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://github.com/saptam-adhikari" target="_blank"><FaGithub size={24} /></a>
              <a href="https://www.facebook.com/saptam.adhikari" target="_blank"><FaFacebook size={24} /></a>
              <a href="https://www.instagram.com/saptam_adhikari_/" target="_blank"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com/in/saptam-adhikari/" target="_blank"><FaLinkedinIn size={24} /></a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Saptam Adhikari. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner Saptam</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
