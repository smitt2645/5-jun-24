import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-sm">© 2024 My Website. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
