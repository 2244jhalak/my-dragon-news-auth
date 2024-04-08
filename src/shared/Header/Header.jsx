import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='my-10 space-y-3'>
            <div className='flex justify-center'>
               <img src={logo} alt="" />
            </div>
            <p>Journalism Without Fear or Favour</p>
            <h4 className='font-semibold'>{moment().format('dddd, MMMM D, YYYY')}</h4>
            
        </div>
    );
};

export default Header;