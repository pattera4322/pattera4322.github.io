import React from 'react';

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <p className="mb-0">
          Copyright <script>document.write(new Date().getFullYear())</script> &copy; 
          <a href="http://www.devcrud.com">DevCRUD</a> Distribution 
          <a href="https://themewagon.com">ThemeWagon</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
