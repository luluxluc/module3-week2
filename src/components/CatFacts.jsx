import { useState, useEffect } from "react";

function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [facts, setFacts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchFacts = () => {
    setLoading(true);
    setError(null);

    fetch("https://catfact.ninja/facts?limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Error, could not get data");
        return res.json();
      })
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
        const randomIndex = Math.floor(Math.random() * data.data.length);
        setCurrentIndex(randomIndex);
      })
      .catch((err) => {
        console.error("API error:", err.message);
        setError("Kunne ikke hente fakta fra API, viser lokale fakta i stedet.");

        // 💡 Mock-dataset (fallback)
        const fallbackFacts = [
          { fact: "Cats sleep for around 13 to 14 hours a day." },
          { fact: "A group of cats is called a clowder." },
          { fact: "Cats have five toes on their front paws, but only four on the back." },
          { fact: "A cat can jump up to six times its length in one leap." },
          { fact: "The oldest known pet cat existed 9,500 years ago." },
        ];

        setFacts(fallbackFacts);
        setCurrentIndex(Math.floor(Math.random() * fallbackFacts.length));
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  const nextFact = () => {
    if (facts.length === 0) return;
    const randomIndex = Math.floor(Math.random() * facts.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Cat Facts</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && facts.length > 0 && (
        <button
          onClick={nextFact}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "6px",
            border: "1px solid #49331bff",
            backgroundColor: "#dda66cff",
            color: "#fff",
          }}
        >
          New Fact
        </button>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {facts.map((fact, index) =>
          index === currentIndex ? (
            <li
              key={index}
              style={{
                margin: "0.8rem 0",
                padding: "0.5rem",
                backgroundColor: "#49331bff",
                borderRadius: "6px",
                color: "white",
              }}
            >
              {fact.fact}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default CatFacts;
