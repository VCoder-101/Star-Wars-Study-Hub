import type { Character } from "../data/characters";
import "./CharacterCard.css";

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  return (
    <div className="char-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p className="role">{character.role}</p>
      <p className="desc">{character.description}</p>
    </div>
  );
}
