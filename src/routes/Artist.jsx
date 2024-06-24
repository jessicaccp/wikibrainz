import api from "../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtistData from "../resources/ArtistData";
import ReleaseRels from "../resources/ArtistReleaseData";

export default function Artist() {
  const { artist } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/artist?fmt=json&limit=10&query=artist:${artist}`)
      .then((response) => setData(response.data))
      .catch((error) => setError(error));
  }, [artist]);

  if (error) return <p>Error: {error.message}</p>;
  if (!data.artists) return <p>Loading...</p>;

  // console.log(data);

  return (
    <>
      <ArtistData artist={data.artists[0]} />
      <ReleaseRels id={data.artists[0].id} />
    </>
  );
}
