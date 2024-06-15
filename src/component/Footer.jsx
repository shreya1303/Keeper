import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
    <footer claasName="Footer">
      <p>Copyright @ {currentYear}</p>
    </footer>
  );
}

export default Footer;
