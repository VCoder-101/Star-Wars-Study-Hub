import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  // Функция для автоматической подсветки ссылки
  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <Link className={isActive("/")} to="/">
        Главная
      </Link>

      <Link className={isActive("/characters")} to="/characters">
        Персонажи
      </Link>

      <Link className={isActive("/movies")} to="/movies">
        Фильмы / Сериалы
      </Link>

      <Link className={isActive("/universe")} to="/universe">
        Карта вселенной
      </Link>
    </nav>
  );
}
