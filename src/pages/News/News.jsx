import { FaBookmark,FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */


const News = ({anews}) => {
    // eslint-disable-next-line no-unused-vars
    const {details,rating,title,image_url,_id} = anews;
    return (
        <div className='border-2 h-fit mb-3 rounded-t-lg'>
            <div className='justify-between flex bg-gray-200 p-4'>
                <div className="flex items-center">
                    
                    <img className="rounded-3xl h-12 w-12 mr-3" src={anews.author.img} alt="" />
                    <div>
                        <p>{anews.author.name}</p>
                        <p>{anews.author.published_date}</p>
                    </div>


                </div>
                <div className='flex items-center'>
                    <FaBookmark className='mr-3'></FaBookmark>
                    <FaShareAlt></FaShareAlt>


                </div>
            </div>
            <div className='p-4'>
               <h3 className='font-bold'>{title}</h3>
               <img src={image_url} alt="" />
               <p>
                {
                   details.length>200?
                   <p>
                     {details.slice(0,200)}
                     <Link className='text-red-600 font-bold' to={`/details/${_id}`}>Read More</Link>
                   </p>
                      :
                   <p>{details}</p>
                   
                }
               </p>
            </div>
            
        </div>
    );
};

export default News;