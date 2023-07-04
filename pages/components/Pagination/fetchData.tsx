import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

const getPostsData = async () => {
  const res = await fetch("https://api.instantwebtools.net/v1/airlines");
  return res.json();
};

interface Data {
  id: number;
  name: string;
  established: string;
  country: string;
  index: number;
}

const FetchData = (): JSX.Element => {
  const [posts, setPosts] = useState<Data[]>([]);
  const [postsCopy, setPostsCopy] = useState<Data[]>([]);
  const pagePerData = 100;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostsData();
        setPosts(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setPostsCopy(posts.slice(0, pagePerData));
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPostsCopy(
      posts.slice(value * pagePerData - pagePerData, value * pagePerData)
    );
    console.log(value);
  };

  return (
    <div>
      <Pagination
        count={Math.ceil(posts.length / pagePerData)}
        showFirstButton
        showLastButton
        onChange={handleChange}
        className="bg-slate-300"
      />
      <table>
        <thead>
          <tr>
            <th className="w-8">ID</th>
            <th className="w-8">Name</th>
            <th className="w-8">Established</th>
            <th className="w-8">Country</th>
          </tr>
        </thead>
        <tbody>
          {postsCopy.map((post, index) => {
            return (
              <tr key={index + 1}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.established}</td>
                <td>{post.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;
