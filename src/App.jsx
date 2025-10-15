import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users"
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div 
    style={{ 
      fontFamily: "sans-serif",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      minHeight: "100vh",
      padding: "2rem",
      }}
      >

      <header style={{ background: "#dda66cff", padding: "1rem", width: "100%", textAlign: "canter", borderRadius: "6px" }}>
        <h1>🍪 Cookie Cat Clicker 🍪</h1>
      </header>

      <section style={{ marginTop: "2rem", width: "100%", maxWidth: "600px" }}>
        <CookieClicker count={count} setCount={setCount} />
      </section>

      <section style={{ marginTop: "2rem", width: "100%", maxWidth: "600px" }}>
        <CatFacts />
      </section>

      <section style={{ marginTop: "2rem", width: "100%", maxWidth: "600px" }}>
        <Users cookieCount={count} />
      </section>
    </div>
  );
}

export default App