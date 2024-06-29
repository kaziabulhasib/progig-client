import { Link } from "react-router-dom";
const Slide = ({ img, text }) => {
  return (
    <div className=''>
      <div
        className='w-full bg-center bg-cover h-[38rem]'
        style={{
          backgroundImage: `url(${img})`,
        }}>
        <div className='flex items-center justify-center w-full h-full bg-gray-900/40'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold text-white lg:text-4xl mb-8'>
              {text}
            </h1>
            <Link
              to='/add-job'
              className='w-full px-8 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-blue-500 border-b-4 border-blue-500'>
              Post Job & Hire Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
