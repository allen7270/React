import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const HomePage = () => {
  let [data, setData] = useState(null);

  const auth = "BINLWIYb62j0NNqH5pvoWJSYbhwfbq6JXC6yDzkqQmsXCoKYLPU0KqDr";
  const initURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  const search = async () => {
    let result = await axios.get(initURL, { headers: { Authorization: auth } });
    setData(result.data.photos);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
