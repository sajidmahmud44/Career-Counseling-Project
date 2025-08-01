import React from 'react';

const CareerAdvisor = () => {
    return (
        <section className="bg-gradient-to-br from-gray-900 via-green-900 to-black text-white py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <img 
      src="https://i.ibb.co/pjKHSMHC/pexels-justin-shaifer-501272-1222271-1.jpg" 
      alt="Md Sajid Mahmud - CEO" 
      className="mx-auto mb-6 w-28 h-28 rounded-full object-cover border-4 border-green-500 shadow-xl transition-transform duration-300 hover:scale-105"
    />
    <h2 className="text-4xl font-extrabold mb-4 text-green-400 drop-shadow-lg">
      Message from Our CEO
    </h2>
    <p className="text-lg md:text-xl italic text-gray-200 leading-relaxed">
      "At some point, every successful journey begins with uncertainty. I was once there too.
      But with the right direction, anything is possible. This platform was built to give <span className="text-green-300 font-semibold">you</span> that direction."
    </p>
    <p className="mt-8 text-green-200 font-semibold text-lg">— Md Sajid Mahmud</p>
    <p className="text-green-400 text-sm">Founder & CEO, CareerDrive</p>
  </div>
</section>



    );
};

export default CareerAdvisor;