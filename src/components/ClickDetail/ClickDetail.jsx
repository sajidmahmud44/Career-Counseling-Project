import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';

const ClickDetail = () => {
  const { id } = useParams();
  const serviceid = parseInt(id);
  const data = useLoaderData();
  const service = data.find(service => service.id == serviceid);

  const {
    name,
    image,
    category,
    price,
    counselor,
    rating,
    duration,
    description
  } = service;

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white mt-10 mb-20 p-6 rounded-xl shadow-md border border-green-100">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <h2 className="text-3xl font-bold text-green-900 mb-3">{name}</h2>

      <p><span className="font-semibold text-green-800">Category:</span> {category}</p>
      <p><span className="font-semibold text-green-800">Price:</span> {price}</p>
      <p><span className="font-semibold text-green-800">Counselor:</span> {counselor}</p>
      <p><span className="font-semibold text-green-800">Duration:</span> {duration}</p>
      <p className="flex items-center gap-2 mt-1">
        <span className="font-semibold text-green-800">Rating:</span>
        <FaRegStar className="text-yellow-500" />
        <span>{rating}</span>
      </p>

      {description && (
        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
      )}

      {/* Feedback Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-green-900 mb-2">Leave a Comment or Feedback</h3>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <button
          onClick={handleSubmit}
          className="mt-3 bg-green-800 hover:bg-green-900 text-white px-5 py-2 rounded transition"
        >
          Submit Feedback
        </button>
      </div>

      {/* Display Comments */}
      {comments.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-green-800 mb-2">Comments:</h4>
          <ul className="space-y-2">
            {comments.map((cmt, idx) => (
              <li
                key={idx}
                className="bg-green-50 border border-green-100 p-3 rounded-md shadow-sm"
              >
                {cmt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClickDetail;
