import api from "../services/api";
import { useState, useEffect } from "react";

export default function ReleaseRels({ id }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(
        `/release?artist=${id}&status=official&type=album&limit=100&inc=release-groups&fmt=json`
      )
      .then((response) => setData(response.data))
      .catch((error) => setError(error));
  }, [id]);

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  console.log(data);

  return (
    <>
      {/* <h3>Releases</h3>
      <ul>
        {data.relations.map((relation, key) => (
          <li key={key}>
            <h4>{relation.release.title}</h4>
            <h5>Date</h5>
            <p>{relation.release.date}</p>
            <h5>Location</h5>
            <p>{relation.release["release-events"][0].area.name}</p>
          </li>
        ))}
      </ul> */}
    </>
  );
}
