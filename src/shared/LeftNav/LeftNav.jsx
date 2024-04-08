import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories (data))
    },[])
    return (
        <div>
            <h2 className="px-2 text-2xl font-semibold">All Categories</h2>
            {
                categories.map(category=><Link id={`/category/${category.id}`} className="block px-5 py-2" key={category.id}>{category.name}</Link>)
            }
            
        </div>
    );
};

export default LeftNav;