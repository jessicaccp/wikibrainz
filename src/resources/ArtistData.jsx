export default function ArtistData({ artist }) {
  return (
    <>
      <h2>Artist</h2>
      <h3>
        {artist.name} {artist.type ? `(${artist.type})` : ""}
      </h3>

      {artist.id ? (
        <>
          <h4>ID</h4>
          <p>{artist.id}</p>
        </>
      ) : (
        ""
      )}

      {artist.aliases ? (
        <>
          <h4>Aliases</h4>
          <ul>
            {artist.aliases.map((alias, key) => (
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

      {artist.area && artist.area.name ? (
        <>
          <h4>Area</h4>
          <p>
            {artist.area.name} {artist.area.type ? `(${artist.area.type})` : ""}
          </p>
        </>
      ) : (
        ""
      )}

      {artist["begin-area"] && artist["begin-area"].name ? (
        <>
          <h4>Begin area</h4>
          <p>
            {artist["begin-area"].name}{" "}
            {artist["begin-area"].type ? `(${artist["begin-area"].type})` : ""}
          </p>
        </>
      ) : (
        ""
      )}

      {artist.country ? (
        <>
          <h4>Country</h4>
          <p>{artist.country}</p>
        </>
      ) : (
        ""
      )}

      {artist["life-span"] ? (
        <>
          <h4>Life span</h4>
          <ul>
            {artist["life-span"].begin ? (
              <li>Begin: {artist["life-span"].begin}</li>
            ) : (
              ""
            )}
            {artist["life-span"].end ? (
              <li>End: {artist["life-span"].end}</li>
            ) : (
              ""
            )}
            {artist["life-span"].ended !== null ? (
              <li>Ended: {artist["life-span"].ended ? "Yes" : "No"}</li>
            ) : (
              ""
            )}
          </ul>
        </>
      ) : (
        ""
      )}

      {artist.tags ? (
        <>
          <h4>Tags</h4>
          <ul>
            {artist.tags.map((tag, key) => (
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
