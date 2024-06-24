import { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

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

  console.log(data);

  return (
    <>
      <h2>Artist</h2>
      <h3>
        {data.artists[0].name}{" "}
        {data.artists[0].type ? `(${data.artists[0].type})` : ""}
      </h3>

      {data.artists[0].id ? (
        <>
          <h4>ID</h4>
          <p>{data.artists[0].id}</p>
        </>
      ) : (
        ""
      )}

      {data.artists[0].aliases ? (
        <>
          <h4>Aliases</h4>
          <ul>
            {data.artists[0].aliases.map((alias, key) => (
              <li key={key}>
                {alias.name ? alias.name : ""}{" "}
                {alias.locale ? `(${alias.locale})` : ""}
              </li>
            ))}
          </ul>
        </>
      ) : (
        ""
      )}

      {data.artists[0].area && data.artists[0].area.name ? (
        <>
          <h4>Area</h4>
          <p>
            {data.artists[0].area.name}{" "}
            {data.artists[0].area.type ? `(${data.artists[0].area.type})` : ""}
          </p>
        </>
      ) : (
        ""
      )}

      {data.artists[0]["begin-area"] && data.artists[0]["begin-area"].name ? (
        <>
          <h4>Begin area</h4>
          <p>
            {data.artists[0]["begin-area"].name}{" "}
            {data.artists[0]["begin-area"].type
              ? `(${data.artists[0]["begin-area"].type})`
              : ""}
          </p>
        </>
      ) : (
        ""
      )}

      {data.artists[0].country ? (
        <>
          <h4>Country</h4>
          <p>{data.artists[0].country}</p>
        </>
      ) : (
        ""
      )}

      {data.artists[0]["life-span"] ? (
        <>
          <h4>Life span</h4>
          <ul>
            {data.artists[0]["life-span"].begin ? (
              <li>Begin: {data.artists[0]["life-span"].begin}</li>
            ) : (
              ""
            )}
            {data.artists[0]["life-span"].end ? (
              <li>End: {data.artists[0]["life-span"].end}</li>
            ) : (
              ""
            )}
            {data.artists[0]["life-span"].ended !== null ? (
              <li>
                Ended: {data.artists[0]["life-span"].ended ? "Yes" : "No"}
              </li>
            ) : (
              ""
            )}
          </ul>
        </>
      ) : (
        ""
      )}

      {data.artists[0].tags ? (
        <>
          <h4>Tags</h4>
          <ul>
            {data.artists[0].tags.map((tag, key) => (
              <li key={key}>{tag.name ? tag.name : ""}</li>
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
