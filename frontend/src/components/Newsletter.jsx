import SendIcon from '@mui/icons-material/Send';
const Newsletter = () => {
  return (
        <div className='flex flex-col items-center justify-center h-[60vh] bg-red-50 '>
        <div className='flex text-6xl font-extrabold mb-5'>Newsletter</div>
        <div className='flex mb-3'>Get timely updates from your favorite products.</div>
        <div className='flex justify-between w-[40%] h-[40px] items-center'>
            <input type='email' placeholder='Your email' className='flex-grow h-full pl-[20px] bg-white' />
            <div className='h-full bg-teal-700 flex items-center justify-center p-[10px] '>
                <SendIcon className='text-white' />
            </div>
        </div>
    </div>

  )
}

export default Newsletter
