import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Genre() {
  const { genre } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/genre/all?fmt=json&limit=1934`)
      .then((response) => setData(response.data))
      .catch((error) => setError(error));
  }, [genre]);

  // look for the genre through the pagination

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  console.log(data.genres);

  return <></>;
}
