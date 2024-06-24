import { useParams } from "react-router-dom";
import api from "../services/api";
import { useEffect, useState } from "react";

export default function Recording() {
  const { artist, recording } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(
        `/recording?fmt=json&limit=10&query=artist:${artist} AND recording:${recording}`
      )
      .then((response) => setData(response.data))
      .catch((error) => setError(error));
  }, [artist, recording]);

  if (error) return <p>Error: {error.message}</p>;
  if (!data.recordings) return <p>Loading...</p>;

  console.log(data);

  return <></>;
}
