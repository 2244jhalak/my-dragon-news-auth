import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-red-600 text-white px-8">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                    I can be a React component, multiple React components, or just some text.
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;