import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";

import RightNav from "../../shared/RightNav/RightNav";



const NewsCard = () => {
    return (
        <div>
            <div className="text-center">
               <Header></Header>
            </div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                  <h2>News comming soon!!!!</h2>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
           
            
            
            
        </div>
    );
};

export default NewsCard;