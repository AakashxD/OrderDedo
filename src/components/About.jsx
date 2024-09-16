import React from 'react';
import UserClass from './UserClass';

const About = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto p-8 bg-orange-100 border border-orange-300 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About OrderDedo</h1>

        <p className="text-lg text-gray-700 mb-4">
          Welcome to <strong>OrderDedo</strong> – your go-to platform for quick, convenient, and seamless food ordering! Whether you’re craving local delicacies or international cuisines, we’ve got it all. With a simple, easy-to-use platform, OrderDedo brings the best restaurants and food options directly to your doorstep.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Founded with a passion for food and technology, OrderDedo is designed to make food delivery a hassle-free experience for everyone. Our mission is to connect food lovers with the best local and international dishes, offering a wide range of cuisines to satisfy all tastes and dietary preferences.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Why Choose OrderDedo?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Wide range of restaurants and cuisines at your fingertips.</li>
          <li>Easy, user-friendly interface for a smooth ordering experience.</li>
          <li>Fast and reliable delivery service to ensure your food arrives hot and fresh.</li>
          <li>Dedicated customer support to handle all your queries and concerns.</li>
        </ul>

        <p className="text-lg text-gray-700">
          At OrderDedo, we are constantly innovating to enhance your experience, making sure that delicious food is just a click away. We believe in building strong relationships with our customers, partners, and restaurants to create a thriving food community.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Join Us on Our Journey</h2>
        <p className="text-lg text-gray-700 mb-4">
          Whether you're ordering lunch for yourself, dinner for the family, or a feast for a special occasion, OrderDedo is here to make every meal special. Let us handle the details while you enjoy the best food from around your city.
        </p>

        <p className="text-lg text-gray-700">
          We’re excited to have you with us on this delicious journey. Happy ordering!
        </p>
      </div>
    </>
  );
};

export default About;
