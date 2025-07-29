import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6 text-center">
          About FitZone Gym
        </h1>

        <p className="text-lg text-gray-300 mb-8 text-center">
          Where Strength Meets Community 💪
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl text-red-400 font-semibold mb-2">🏋️ Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              At FitZone Gym, our mission is to empower individuals to reach their full physical potential
              through expert training, modern equipment, and a supportive community environment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-red-400 font-semibold mb-2">🔥 Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Certified personal trainers and fitness experts</li>
              <li>Advanced equipment for cardio, strength, and functional training</li>
              <li>Group classes like Zumba, Yoga, and HIIT</li>
              <li>Open 7 days a week, 6 AM – 10 PM</li>
              <li>Affordable membership plans</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-red-400 font-semibold mb-2">🏠 Our Facility</h2>
            <p className="text-gray-400 leading-relaxed">
              Located in Sector 15, Noida, our gym spans over 5000 sq. ft. with a dedicated weight zone,
              cardio section, CrossFit area, and hygienic locker rooms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
