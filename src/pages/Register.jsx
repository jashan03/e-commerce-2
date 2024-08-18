import React from 'react';

const Register = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] flex items-center justify-center">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
          opacity: 0.5,
        }}
      ></div>
      
      {/* White Content Layer */}
      <div className="relative flex flex-col bg-white w-[45%] z-10 p-4 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-4">Create an account</div>
        <div className="flex flex-wrap text-slate-800">
          <input type="text" placeholder="Name" className="border p-2 m-2 " />
          <input type="text" placeholder="Last Name" className="border p-2 m-2  " />
          <input type="text" placeholder="Username" className="border p-2 m-2 " />
          <input type="text" placeholder="Email" className="border p-2 m-2  " />
          <input type="password" placeholder="Password" className="border p-2 m-2 " />
          <input type="password" placeholder="Confirm Password" className="border p-2 m-2 " />
        </div>
        <div className="text-sm text-gray-600 mt-4 ml-3">
          By creating an account, I consent to the processing of my personal data
          in accordance with the PRIVACY POLICY.
        </div>
        <button className="bg-teal-800 text-white w-[100px] h-[30px] mt-4 mb-4 ml-3">
          Create
        </button>
      </div>
    </div>
  );
};

export default Register;
