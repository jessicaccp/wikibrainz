import { useEffect, useState } from "react";

export default function Card({ artist }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://musicbrainz.org/ws/2/artist/${artist.id}?fmt=json&inc=url-rels`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [artist.id]);

  console.log(data);

  return (
    <>
      <a href={`https://musicbrainz.org/artist/${artist.id}`} alt={artist.name}>
        {artist.name}
      </a>
      <p>{artist.disambiguation}</p>
    </>
  );
}
