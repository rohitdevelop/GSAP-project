import React from 'react';

const programs = [
  {
    title: "Basic Membership",
    price: "₹799 / month",
    duration: "Monthly",
    features: [
      "Unlimited Gym Access",
      "Locker Facility",
      "Free Trial Class",
    ],
  },
  {
    title: "Pro Membership",
    price: "₹7,999 / year",
    duration: "Yearly",
    features: [
      "Unlimited Access + Diet Plan",
      "Free Personal Consultation (1/mo)",
      "Priority Support",
    ],
  },
  {
    title: "Personal Training",
    price: "₹2,499 / month",
    duration: "Monthly",
    features: [
      "1-on-1 Training Sessions",
      "Customized Workout Plan",
      "Weekly Progress Tracking",
    ],
  },
  {
    title: "Group Classes Pack",
    price: "₹999 / month",
    duration: "Monthly",
    features: [
      "Zumba, HIIT & Yoga",
      "Certified Trainers",
      "Access to Community Events",
    ],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-red-500 mb-8 text-center">Our Programs & Pricing</h1>
        <p className="text-center text-gray-400 mb-12">
          Choose a plan that suits your fitness journey. We offer flexible options for beginners to advanced athletes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((plan, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-red-500">
              <h2 className="text-2xl font-semibold text-red-400 mb-2">{plan.title}</h2>
              <p className="text-lg font-bold text-white mb-1">{plan.price}</p>
              <p className="text-sm text-gray-400 mb-4">Duration: {plan.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
