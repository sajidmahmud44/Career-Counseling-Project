const CareerPath = () => {
  return (
    <div className="w-full text-center my-10">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Top Trending Careers</h2>

      <div className="carousel w-full">
        <div id="item1" className="carousel-item relative w-full">
          <div
            className="w-full h-[300px] bg-center bg-cover flex items-center justify-center text-white text-3xl font-semibold"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
            }}
          >
            Software Developer
          </div>
        </div>
        <div id="item2" className="carousel-item relative w-full">
          <div
            className="w-full h-[300px] bg-center bg-cover flex items-center justify-center text-white text-3xl font-semibold"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
            }}
          >
            Data Analyst
          </div>
        </div>
        <div id="item3" className="carousel-item relative w-full">
          <div
            className="w-full h-[300px] bg-center bg-cover flex items-center justify-center text-white text-3xl font-semibold"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/b5JNdC6H/carlos-muza-hpj-Sk-U2-UYSU-unsplash.jpg')",
            }}
          >
            Digital Marketer
          </div>
        </div>
        <div id="item4" className="carousel-item relative w-full">
          <div
            className="w-full h-[300px] bg-center bg-cover flex items-center justify-center text-white text-3xl font-semibold"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521790797524-b2497295b8a0')",
            }}
          >
            Cybersecurity Expert
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default CareerPath;
