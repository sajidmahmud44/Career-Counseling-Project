import { FaRegStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceDetails = ({servicedetail}) => {
    const {name,image,price,rating,id} = servicedetail;

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
    return (
        <div
      className="group bg-gradient-to-br from-green-50 via-white to-green-200 border border-green-200 shadow-lg rounded-2xl overflow-hidden w-full md:w-80 transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-green-400"
      data-aos="fade-up"
    >
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-t-2xl"
      />
      <div className="p-5 space-y-3">
        <h2 className="text-2xl font-bold text-green-900 tracking-wide drop-shadow-sm">
          {name}
        </h2>
        <p className="text-base text-gray-800 font-medium bg-green-100 px-3 py-1 rounded-lg inline-block">
          <span className="font-semibold text-green-800">Price:</span> {price}
        </p>
        {rating && (
          <p className="text-base text-gray-800 flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg w-fit">
            <span className="font-semibold text-green-800">Rating:</span>
            <FaRegStar className="text-yellow-500" /> {rating}
          </p>
        )}
        <div className="pt-3">
          <Link to={`/servicedetail/${id}`}>
            <button className="text-sm px-5 py-2.5 border border-green-800 text-green-800 font-semibold rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg bg-gradient-to-r from-green-100 to-green-200">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ServiceDetails;