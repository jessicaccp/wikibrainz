import { useEffect, useState } from "react";

export default function App() {
  const [url, setUrl] = useState(
    `https://musicbrainz.org/ws/2/artist/?query=artist:"the+beatles"&limit=10&offset=0&fmt=json`
  );
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [url]);

  useEffect(() => {
    setResult([]);
    if (data && data.artists)
      data.artists.forEach((artist, key) =>
        setResult((prev) => [
          ...prev,
          <li key={key}>
            {artist.name} - {artist.disambiguation}
          </li>,
        ])
      );
  }, [data]);

  const handleInput = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      setUrl(
        `https://musicbrainz.org/ws/2/artist/?query=artist:"${keyword}"&limit=10&offset=0&fmt=json`
      );
    }
  };

  return (
    <div id="container">
      <input
        type="search"
        name="search"
        onChange={handleInput}
        onSubmit={handleSubmit}
        onKeyDown={handleSubmit}
      />
      <div id="result">{result}</div>
    </div>
  );
}
