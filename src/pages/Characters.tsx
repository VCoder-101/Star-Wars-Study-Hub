import { useState } from "react";
import { characters } from "../data/characters";
import CharacterCard from "../components/CharacterCard";
import Starfield from "../components/Starfield";  
import "./Characters.css";

export default function Characters() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? characters
      : characters.filter((c) => c.role === filter);

  return (
    <>
      <Starfield />   

      <div className="characters-page">
        <h1>Персонажи</h1>

        <div className="filters">
          {["All", "Jedi", "Sith", "Droid", "Rebel"].map((role) => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={filter === role ? "active" : ""}
            >
              {role}
            </button>
          ))}
        </div>

        <div className="grid">
          {filtered.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      </div>
    </>
  );
}
