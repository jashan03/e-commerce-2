import React, {useState} from 'react';
import { useRecoilValue } from 'recoil';
import { useLogin } from '../recoil/apiCalls'; // Ensure the correct path
import { isFetchingState, errorState} from '../recoil/userRecoil';
import { Link } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isFetching = useRecoilValue(isFetchingState);
  const error = useRecoilValue(errorState);
  const login = useLogin();

  const handleClick = async(e) => {
    e.preventDefault();
    const user = { username, password };
    
    const response = await login(user); // Call the login function
    
    if (response && response.success) {
      // If login is successful, navigate to home
      navigate('/');
    } else {
      // Handle login failure, if needed
      console.log('Login failed');
    }
  };

  return (
    <div className="relative w-[100vw] h-[100vh] flex items-center justify-center">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/there-is-frame-with-pet-supplies-bowl-kibble-grooming-tools-pastel-pink-background-it-is-flat-lay-top-view-with-copy-space_717906-75013.jpg?w=826')",
          opacity: 0.5,
        }}
      ></div>
      
      {/* White Content Layer */}
      <div className="relative flex flex-col bg-white w-[45%] z-10 p-4 rounded-lg shadow-lg">
        <div className="text-2xl font-light mb-4 ml-3">SIGN IN</div>
        <div className="flex flex-col text-slate-800">
         
          <input type="text" placeholder="Username"   onChange={(e) => setUsername(e.target.value)} className="border p-2 m-2 shrink-1 min-w-0 " />
          
          <input type="password" placeholder="Password"    onChange={(e) => setPassword(e.target.value)} className="border p-2 m-2 shrink-1 min-w-0" />
          
        </div>
        <button onClick={handleClick} disabled={isFetching} className={`bg-teal-800 text-white w-[100px] h-[40px] mt-4 mb-2 ml-3 ${isFetching ? 'opacity-50 cursor-not-allowed' : ''}`}>
          LOGIN
        </button>
       { error && <div className='text-red-500 ml-3'>Something went wrong</div>}
        <div className="text-xs text-gray-600 mt-2 ml-3 underline underline-offset-2 ">
          DONOT REMEMBER THE PASSWORD?
        </div>
        <Link to='/register'>
        <div className='text-xs text-gray-600 mt-2 ml-3 underline underline-offset-2'> CREATE A NEW ACCOOUNT</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;