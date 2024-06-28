import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* <h1 className='text-3xl text-center'>This is router</h1> */}
      <div className='min-h-[calc(100vh-310px)] '>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
