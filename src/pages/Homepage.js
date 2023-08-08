import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const HomePage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState([]);

  const auth = "BINLWIYb62j0NNqH5pvoWJSYbhwfbq6JXC6yDzkqQmsXCoKYLPU0KqDr";
  const initURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, { headers: { Authorization: auth } });
    setData(result.data.photos);
  };

  useEffect(() => {
    search(initURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
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
