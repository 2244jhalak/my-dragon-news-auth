import Header from "../../shared/Header/Header";
import LeftNav from "../../shared/LeftNav/LeftNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightNav from "../../shared/RightNav/RightNav";
import News from "../News/News";
import BreakingNews from "./BreakingNews";
import {
    
    useLoaderData,
  } from "react-router-dom";


const Home = () => {
    const news= useLoaderData();
    console.log(news);
    return (
        <div>
            <div className="text-center">
               <Header></Header>
               
            </div> 
            <BreakingNews></BreakingNews>
            <div>
            <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="">
                    <LeftNav></LeftNav>

                </div>
                <div className="col-span-2">
                    <h2 className="font-bold">Dragon News Home</h2>
                    <div className="">
                    {
                        news.map(anews=><News key={anews._id} anews={anews}></News>)
                    }
                    </div>
                </div>
                <div className="">
                    <RightNav></RightNav>
                </div>
            
            </div>
            
        </div>
    );
};

export default Home;