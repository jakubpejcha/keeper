import React from 'react';

function Footer() {

  const curDate = new Date();
  const curYear = curDate.getFullYear();

  return (
    <footer>
      <p>
        Copyright &copy; {curYear}
      </p>
    </footer>
  );
}

export default Footer;
