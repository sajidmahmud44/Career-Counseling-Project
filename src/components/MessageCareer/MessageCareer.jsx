import React from 'react';

const MessageCareer = () => {
    return (
        <div className="my-12 bg-white dark:bg-[#f3f4f6] p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto space-y-8 transition-all duration-300">
  {/* Chat Message - Student */}
  <div className="flex items-start space-x-4">
    <img
      src="https://i.ibb.co/QFM5ddg0/pexels-italo-melo-881954-2379005.jpg"
      alt="Student"
      className="w-12 h-12 rounded-full ring-2 ring-green-600"
    />
    <div>
      <div className="flex items-center space-x-2">
        <h4 className="text-green-700 font-semibold">Robert</h4>
        <span className="text-xs text-green-400">9:42 AM</span>
      </div>
      <div className="bg-green-50 text-gray-800 px-5 py-3 mt-2 rounded-xl shadow-sm max-w-sm">
        I feel so lost... I have a degree, but no clear direction. What if I choose the wrong path?
      </div>
      <p className="text-xs text-green-400 mt-1">Delivered</p>
    </div>
  </div>

  {/* Chat Message - Mentor */}
  <div className="flex items-start space-x-4 justify-end text-right">
    <div>
      <div className="flex justify-end items-center space-x-2">
        <span className="text-xs text-green-300">9:45 AM</span>
        <h4 className="text-green-800 font-semibold">Career Mentor</h4>
      </div>
      <div className="bg-gradient-to-tr from-green-700 to-green-600 text-white px-5 py-3 mt-2 rounded-xl shadow-lg max-w-sm ml-auto">
        You’re not lost — you’re just one honest conversation away from clarity. Let’s uncover your true potential.
      </div>
      <p className="text-xs text-green-300 mt-1">Seen</p>
    </div>
    <img
      src="https://i.ibb.co/pjKHSMHC/pexels-justin-shaifer-501272-1222271-1.jpg"
      alt="Career Mentor"
      className="w-12 h-12 rounded-full ring-2 ring-white ring-offset-2 ring-offset-green-700"
    />
  </div>

  {/* Chat Message - Student */}
  <div className="flex items-start space-x-4">
    <img
      src="https://i.ibb.co/QFM5ddg0/pexels-italo-melo-881954-2379005.jpg"
      alt="Student"
      className="w-12 h-12 rounded-full ring-2 ring-green-600"
    />
    <div>
      <div className="flex items-center space-x-2">
        <h4 className="text-green-700 font-semibold">Robert</h4>
        <span className="text-xs text-green-400">9:47 AM</span>
      </div>
      <div className="bg-green-50 text-gray-800 px-5 py-3 mt-2 rounded-xl shadow-sm max-w-sm">
        I’ve always loved tech... but I never thought I could actually build a career in it.
      </div>
    </div>
  </div>

  {/* Chat Message - Mentor */}
  <div className="flex items-start space-x-4 justify-end text-right">
    <div>
      <div className="flex justify-end items-center space-x-2">
        <span className="text-xs text-green-300">9:49 AM</span>
        <h4 className="text-green-800 font-semibold">Career Mentor</h4>
      </div>
      <div className="bg-gradient-to-tr from-green-700 to-green-600 text-white px-5 py-3 mt-2 rounded-xl shadow-lg max-w-sm ml-auto">
        Then let’s turn that passion into a plan. From tech courses to real job prep — we’ll guide you every step of the way.
      </div>
    </div>
    <img
      src="https://i.ibb.co/pjKHSMHC/pexels-justin-shaifer-501272-1222271-1.jpg"
      alt="Career Mentor"
      className="w-12 h-12 rounded-full ring-2 ring-white ring-offset-2 ring-offset-green-700"
    />
  </div>
</div>


    );
};

export default MessageCareer;