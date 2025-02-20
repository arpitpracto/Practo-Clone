import React from "react";
//import logoImage from "./path_to_logo_image.png"; // Update with actual image path

const Footer = () => {
  return (
    <footer className="bg-[rgb(48,57,156)] text-white py-6">
      <div className="container mx-auto px-4">
        {/* Columns Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {/* Practo Column */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Practo</h3>
            <ul className="text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* For Patients Column */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">For Patients</h3>
            <ul className="text-sm">
              <li>Search for doctors</li>
              <li>Search for clinics</li>
              <li>Search for hospitals</li>
              <li>Practo Plus</li>
              <li>Covid Hospital listing</li>
              <li>Practo Care Clinics</li>
              <li>Read health articles</li>
              <li>Read about medicines</li>
              <li>Practo drive</li>
              <li>Health app</li>
            </ul>
          </div>

          {/* For Doctors Column */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">For Doctors</h3>
            <ul className="text-sm">
              <li>Practo Profile</li>
              <li>Practo Reach</li>
              <li>Practo Pro</li>
            </ul>
          </div>

          {/* For Hospitals Column */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">For Hospitals</h3>
            <ul className="text-sm">
              <li>Insta by Practo</li>
              <li>Qikwell by Practo</li>
              <li>Practo Profile</li>
              <li>Practo Reach</li>
              <li>Practo Drive</li>
            </ul>
          </div>

          {/* More Column */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">More</h3>
            <ul className="text-sm">
              <li>Wellness Plans</li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Social</h3>
            <ul className="text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Github</li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="my-4 flex justify-center">
          <img src="/images/white_practo_logo.svg" alt="Practo Logo" className="w-auto h-8" />
        </div>

        {/* Copyright Text */}
        <div className="text-center text-sm mt-4">
          <p>Copyright © 2017, Practo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
