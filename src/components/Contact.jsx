import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 border-2 border-gray-300 rounded-lg bg-gray-50 shadow-lg">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

      <p className="text-center text-lg text-gray-600 mb-8">
        We're here to assist you with any questions, feedback, or concerns about your food ordering experience.
      </p>

      <div className="contact-info border-2 border-gray-200 rounded-lg p-6 bg-white mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Support</h2>
        <p className="text-lg text-gray-600">Phone: <a href="tel:+919953276424" className="text-blue-500 hover:underline">+91 9956940302</a></p>
        <p className="text-lg text-gray-600">Email: <a href="orderdedo.com" className="text-blue-500 hover:underline">orderdedo.com</a></p>
        <p className="text-md text-gray-500 mt-2">Available: Mon - Sat (9 AM to 9 PM)</p>
      </div>

     

      <div className="social-media border-2 border-gray-200 rounded-lg p-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h2>
        <p className="text-blue-500">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline ml-4">Twitter</a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline ml-4">Instagram</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
