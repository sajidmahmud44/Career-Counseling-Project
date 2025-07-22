import { FaRegStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceDetails = ({servicedetail}) => {
    const {name,image,category,price,counselor,rating,duration,id} = servicedetail;

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
    return (
        <div className="bg-green-50 border border-green-200 shadow-md rounded-xl overflow-hidden w-full md:w-80"data-aos="fade-up">
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover rounded-t-xl"
      />
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-green-900">{name}</h2>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-800">Category:</span> {category}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-800">Price:</span> {price}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-800">Counselor:</span> {counselor}
        </p>
        {duration && (
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-green-800">Duration:</span> {duration}
          </p>
        )}
        {rating && (
          <p className="text-sm text-gray-700 flex items-center gap-1">
            <span className="font-semibold text-green-800">Rating:</span><FaRegStar className="text-yellow-500"></FaRegStar>{rating}
          </p>
        )}
        <div className="mt-3">
          <Link to={`/servicedetail/${id}`}><button className="text-sm px-4 py-2 border border-green-800 text-green-800 rounded-full hover:bg-green-800 hover:text-white transition">
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ServiceDetails;