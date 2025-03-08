import React , {useState} from 'react';
import z from 'zod'
import { useNavigate } from 'react-router-dom';
import axios from'axios'
const Register = () => {

  
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [error,setError] = useState("");

  const navigate = useNavigate();

  const userSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, { message: "Confirmation password must be at least 6 characters long" }),
  });

  const handleClick=async(e)=>{
      e.preventDefault();

      const validation = userSchema.safeParse({username,email,password,confirmPassword});

    if (!validation.success) {
          setError(validation.error.issues[0].message)
          console.log(error)
        }else if (password != confirmPassword){
          setError("Passwords donot match")
        } else {
           try{
            const response = await axios.post('http://localhost:5000/api/auth/register', {
              username,
              email,
              password
          });

          if (response.status == 201) {
            //setError("")
            navigate('/'); // Navigate to homepage
           }
          }catch(err){
               setError("Something went wrong. Please try again.")
               console.log(err)
               
           }
    }
  }


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
      <div className="relative flex flex-col bg-white max-w-[45%] z-10 p-4 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-4">Create an account</div>
        <div className="flex flex-wrap text-slate-800">
          <input type="text" placeholder="Name" className="border p-2 m-2 shrink-1 min-w-0 " />
          <input type="text" placeholder="Last Name" className="border p-2 m-2 shrink-1 min-w-0 " />
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="border p-2 m-2 shrink-1 min-w-0 " />
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 m-2 shrink-1 min-w-0 " />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 m-2 shrink-1 min-w-0" />
          <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} className="border p-2 m-2 shrink-1 min-w-0 " />
        </div>
        <div className="text-sm text-gray-600 mt-4 ml-3">
          By creating an account, I consent to the processing of my personal data
          in accordance with the PRIVACY POLICY.
        </div>
        <button onClick={handleClick} className="bg-teal-800 text-white w-[100px] h-[30px] mt-4 mb-4 ml-3">
          Create
        </button>
        { error && <div className='text-red-500 ml-3'>{error}</div>}

      </div>
    </div>
  );
};

export default Register;
