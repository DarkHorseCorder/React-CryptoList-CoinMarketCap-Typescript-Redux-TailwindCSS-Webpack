import { Link } from 'react-router-dom';
import { FaUser, FaSearch } from 'react-icons/fa'
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from '../../slices/dataSlice';

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { searchQuery } = useSelector((state: RootState) => state.data);

  return (
    <header className='z-10 fixed top-0 w-full flex items-center justify-between bg-[#171d2d] h-[10vh] px-5 shadow-[1px_1px_8px_#000000] overflow-hidden'>
      <div className='links flex justify-center items-center gap-10'>
        <Link to='/' className='text-white text-2xl uppercase font-bold'>
          Enjoy with my App
        </Link>
      </div>
      <div className='flex items-end w-[350px]'>
        <div className='relative w-full'>
          <input className='bg-transparent outline-none h-12 pt-[25px] pb-[7px] px-[10px]'
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            placeholder='Search'
          />
          <i className='absolute w-full h-[2px] left-0 bottom-0 bg-gradient-to-r from-[#195bd6] to-[#C01DDE]' />
        </div>
        <div className='p-1'>
          <FaSearch className='w-[21px] h-[21px]' />
        </div>
      </div>
      <span className='cursor-pointer w-9 h-9 p-[2px] rounded-full bg-gradient-to-t from-[#195bd6] to-[#C01DDE] hover:shadow-[1px_1px_10px_3px_#841597]'>
        <button className='bg-[#171d2d] w-full h-full rounded-full flex justify-center items-center '>
          <FaUser />
        </button>
      </span>
    </header>
  );
};

export default Header;
