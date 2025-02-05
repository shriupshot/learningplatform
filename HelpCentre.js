import React from "react";

const HelpCenter = () => {
  const faqSections = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "How do I sign up on Skill Learn?",
          a: "Click on the Sign Up button on the homepage, enter your details (username, email, password), and follow the instructions to verify your account.",
        },
        {
          q: "How do I log in to my account?",
          a: "Go to the Login Page, enter your registered email and password, then click Login to access your dashboard.",
        },
      ],
    },
    {
      title: "Account & Profile",
      questions: [
        {
          q: "How can I edit my profile?",
          a: "Navigate to your Profile Settings, where you can update your name, email, profile picture, and other details.",
        },
        {
          q: "I forgot my password. How can I reset it?",
          a: "Click on Forgot Password? on the login page, enter your registered email, and follow the instructions sent to your email to reset your password.",
        },
      ],
    },
    {
      title: "Booking Sessions & Learning",
      questions: [
        {
          q: "How do I book a session with a mentor?",
          a: "Browse the mentor profiles, select your preferred mentor, choose a time slot, and click Book Session.",
        },
        {
          q: "Can I reschedule or cancel a session?",
          a: "Yes, go to My Sessions in your dashboard, select the session, and choose Reschedule or Cancel as per your need.",
        },
      ],
    },
    {
      title: "Payments & Refunds",
      questions: [
        {
          q: "What payment methods are available?",
          a: "We accept major credit/debit cards, UPI, and PayPal for secure transactions.",
        },
        {
          q: "Can I get a refund if I cancel a session?",
          a: "Refunds are subject to our Cancellation & Refund Policy. Please review the terms before requesting a refund.",
        },
      ],
    },
    {
      title: "Technical Support",
      questions: [
        {
          q: "I’m facing issues with video/audio during a session. What should I do?",
          a: "Ensure your internet connection is stable. Try refreshing the page or restarting your browser. If the issue persists, contact Technical Support.",
        },
        {
          q: "The website is not loading properly. How do I fix this?",
          a: "Clear your browser cache, disable unnecessary extensions, or try using a different browser. If the issue continues, contact Support.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row-reverse items-start gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Right Side - Image at the Top */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/mnt/data/857aed19-b10c-4f9c-adb2-480204ab1e8c.jfif"
          alt="Help Center"
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </div>

      {/* Left Side - Text Content */}
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold">
          Need <span className="text-pink-500">help</span>?
        </h1>
        <h2 className="text-xl font-semibold">
          You are in the <span className="text-pink-500">right place.</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Pick from the categories to find advice and answers from the Skill Learn team.
        </p>

        <h2 className="text-2xl font-bold mt-6 text-pink-500">
          Welcome to Skill Learn Help Centre!
        </h2>
        <p className="text-gray-600">
          We’re here to assist you. Browse through the frequently asked questions or contact our support team for further assistance.
        </p>

        {/* FAQ Sections */}
        {faqSections.map((section, index) => (
          <div key={index} className="mt-6">
            <h3 className="text-xl font-bold text-pink-500">{index + 1}. {section.title}</h3>
            {section.questions.map((item, qIndex) => (
              <div key={qIndex} className="mt-2">
                <p className="font-semibold text-gray-800">Q: {item.q}</p>
                <p className="text-gray-600">A: {item.a}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Contact Us Section */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-pink-500">6. Contact Us</h3>
          <p className="text-gray-600">Still need help? Reach out to us:</p>
          <ul className="text-gray-600">
            <li>Email: support@skilllearn.com</li>
            <li>📞 Phone: 01234 56789</li>
            <li>💬 Live Chat: Available on the website from 9 AM – 13 PM IST</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
