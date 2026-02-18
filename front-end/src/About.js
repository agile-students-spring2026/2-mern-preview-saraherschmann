import { useEffect, useState } from "react";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5002/about")
      .then(res => res.json())
      .then(data => setAbout(data))
      .catch(err => console.error(err));
  }, []);

  if (!about) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>About Us</h1>

      <h2>{about.name}</h2>

      <img
        src={about.imageUrl}
        alt="Sara"
        style={{ width: 200 }}
      />

      {about.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
