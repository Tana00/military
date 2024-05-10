import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMap,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-3 md:px-5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:items-center mx-5">
        <div className="mb-5 md:mb-0">
          <h4 className="text-2xl font-bold mb-2">ArmedForcesLoan</h4>
          <p className="text-sm">
            Providing financial assistance to our heroes in their time of need.
          </p>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-2">
              <FaMap />
              <p>123 Main Street, Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone />
              <p>+234 123 456 7890</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <p>
                <Link to="mailto:" className="hover:underline">
                  armedforceloan@example.com
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-bold mb-2">Quick Links</h4>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-bold mb-2">Legal</h4>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/cookies" className="hover:underline">
            Cookie Policy
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-2xl font-bold mb-2">Follow Us</h4>
          <div className="flex gap-5">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-white text-black rounded-sm"
            >
              <FaFacebookF size="2em" />
            </Link>
            <Link
              to="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-white text-black rounded-sm"
            >
              <FaTwitter size="2em" />
            </Link>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-white text-black rounded-sm"
            >
              <FaInstagram size="2em" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-neutral-500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
