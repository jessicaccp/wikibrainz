import { useParams } from "react-router-dom";
import api from "../services/api";
import { useEffect, useState } from "react";

export default function Release() {
  const { artist, release } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(
        `/release-group?fmt=json&limit=10&query=artist:${artist} AND release-group:${release}`
      )
      .then((response) => setData(response.data))
      .catch((error) => setError(error));
  }, [artist, release]);

  if (error) return <p>Error: {error.message}</p>;
  if (!data["release-groups"]) return <p>Loading...</p>;

  console.log(artist, release, data);

  return <></>;
}
