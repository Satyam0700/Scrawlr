import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 md:px-20 px-10 py-1 max-md:flex-col">
      <p>Copyright © 2023 Satyam Pro | All Right Reserved</p>

      <div className="flex gap-x-9">
        <Link href="/terms-condition">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
