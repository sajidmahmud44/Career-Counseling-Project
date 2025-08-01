import React from 'react';

const MessageCareer = () => {
    return (
        <div className="my-12 bg-white dark:bg-[#94b0a2] p-6 rounded-xl shadow-xl">
  <div className="chat chat-start">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full ring ring-green-700 ring-offset-2 ring-offset-white">
        <img src="https://i.ibb.co/QFM5ddg0/pexels-italo-melo-881954-2379005.jpg" alt="Student" />
      </div>
    </div>
    <div className="chat-header text-green-700 font-semibold">
      Robert
      <time className="text-xs ml-2 text-green-400">9:42 AM</time>
    </div>
    <div className="chat-bubble bg-green-50 text-gray-800 shadow-md">
      I feel so lost... I have a degree, but no clear direction. What if I choose the wrong path?
    </div>
    <div className="chat-footer text-xs text-green-400 opacity-75">Delivered</div>
  </div>

  <div className="chat chat-end">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full ring ring-white ring-offset-2 ring-offset-green-700">
        <img src="https://i.ibb.co/pjKHSMHC/pexels-justin-shaifer-501272-1222271-1.jpg" alt="Career Coach" />
      </div>
    </div>
    <div className="chat-header text-white font-semibold">
      Career Mentor
      <time className="text-xs ml-2 text-green-300">9:45 AM</time>
    </div>
    <div className="chat-bubble bg-gradient-to-tr from-green-700 to-green-600 text-white shadow-lg">
      You’re not lost — you’re just one honest conversation away from clarity. Let’s uncover your true potential.
    </div>
    <div className="chat-footer text-xs text-green-300 opacity-75">Seen</div>
  </div>

  <div className="chat chat-start">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full ring ring-green-700 ring-offset-2 ring-offset-white">
        <img src="https://i.ibb.co/QFM5ddg0/pexels-italo-melo-881954-2379005.jpg" alt="Student" />
      </div>
    </div>
    <div className="chat-header text-green-700 font-semibold">
      Robert
      <time className="text-xs ml-2 text-green-400">9:47 AM</time>
    </div>
    <div className="chat-bubble bg-green-50 text-gray-800 shadow-md">
      I’ve always loved tech... but I never thought I could actually build a career in it.
    </div>
  </div>

  <div className="chat chat-end">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full ring ring-white ring-offset-2 ring-offset-green-700">
        <img src="https://i.ibb.co/pjKHSMHC/pexels-justin-shaifer-501272-1222271-1.jpg" alt="Career Coach" />
      </div>
    </div>
    <div className="chat-header text-white font-semibold">
      Career Mentor
      <time className="text-xs ml-2 text-green-300">9:49 AM</time>
    </div>
    <div className="chat-bubble bg-gradient-to-tr from-green-700 to-green-600 text-white shadow-lg">
      Then let’s turn that passion into a plan. From tech courses to real job prep — we’ll guide you every step of the way.
    </div>
  </div>
</div>

    );
};

export default MessageCareer;