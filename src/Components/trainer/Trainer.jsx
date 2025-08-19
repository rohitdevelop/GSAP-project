import React from "react";

const Trainer = () => {
  return (
    <>
      {/* Trainer Section */}
      <div className="min-h-screen bg-black text-white px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            Meet Your Trainer
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Your fitness partner on every rep and step 💪
          </p>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-8">
            {/* Trainer Image */}
            <img
              src="https://via.placeholder.com/200x200.png?text=Sunny+Singh"
              alt="Sunny Singh"
              className="w-48 h-48 rounded-full object-cover border-4 border-red-500"
            />

            {/* Trainer Details */}
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-red-400">
                Sunny Singh
              </h2>
              <p className="text-gray-300 mt-2 mb-4">
                Certified Personal Trainer | 8+ Years Experience | Nutrition
                Specialist
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>🏋️ Specialized in Strength & Conditioning</li>
                <li>🔥 Expert in Fat Loss & Muscle Building</li>
                <li>🥗 Customized Diet & Workout Plans</li>
                <li>💬 Available for 1-on-1 and Group Sessions</li>
              </ul>

              <button className="mt-6 bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition">
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="relative w-full h-screen">
        <div className="fixed inset-0">
          <img
            src="https://t3.ftcdn.net/jpg/06/74/96/46/360_F_674964630_8sbi0HVwMwGPLPSg3w2CRq0kPKFUO5LR.jpg"
            alt="bgimg"
            className="w-full h-[60vh] object-cover opacity-40"
          />
        </div>

        {/* Add scrollable content to show background effect */}
         
      </div>
    </>
  );
};

export default Trainer;
