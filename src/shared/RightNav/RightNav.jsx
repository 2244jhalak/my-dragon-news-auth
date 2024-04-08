import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Q1 from "../../assets/qZone1.png"
import Q2 from "../../assets/qZone2.png"
import Q3 from "../../assets/qZone3.png"


const RightNav = () => {
    return (
        <div className='p-5'>
            <h2 className='font-bold text-lg mb-2'>Login With</h2>
            <div className='flex items-center border-2 px-12 py-1.5 rounded-lg border-blue-600 mb-2'>
                
                <FaGoogle className='text-blue-600 mr-3'></FaGoogle>
                <h2 className='text-blue-600 font-semibold'>Login with Google</h2>
            </div>
            <div className='flex items-center border-2 px-12 py-1.5 rounded-lg border-black mb-6'>
                <FaGithub className='mr-3'></FaGithub>
                <h2 className='text-black font-semibold'>Login with Github</h2>
            </div>
            <h2 className='font-semibold text-lg mb-2'>Find Us On</h2>
            <div className='flex items-center border-[1px] px-12 py-2.5 rounded-t-lg border-gray-400'>
                
                
                <FaFacebook className='mr-3 text-blue-900'></FaFacebook>
                
                <h2 className='text-gray-600 font-semibold'>Facebook</h2>
            </div>
            <div className='flex items-center border-[1px] px-12 py-2.5 border-x border-gray-400'>
                
                
                <FaTwitter className='mr-3 text-blue-400'></FaTwitter>
                
                <h2 className='text-gray-600 font-semibold'>Twitter</h2>
            </div>
            <div className='flex items-center border-[1px] px-12 py-2.5 rounded-b-lg border-x border-gray-400 mb-3'>
                
                
                <FaInstagram className='mr-3 text-blue-400'></FaInstagram>
                
                <h2 className='text-gray-600 font-semibold'>Instagram</h2>
            </div>
            <div className='bg-gray-200 p-4 space-y-3'>
                <h2 className='font-bold'>Q-Zone</h2>
                <img src={Q1} alt="" />
                <img src={Q2} alt="" />
                <img src={Q3} alt="" />

            </div>
            
        </div>
    );
};

export default RightNav;