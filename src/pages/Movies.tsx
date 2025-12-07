import { timeline } from "../data/movies";
import Starfield from "../components/Starfield";
import "./Movies.css";

export default function Movies() {
  // Плавный скролл к блоку
  const handleScroll = (id: number) => {
    const el = document.getElementById(`movie-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="movies-page">
      <Starfield />

      <h1>Хронология «Звёздных войн»</h1>

      {/* Блок ДБЯ / ПБЯ */}
      <section className="era-explained">
        <h2>Что означает ДБЯ и ПБЯ?</h2>
        <p>
          Все даты в «Звёздных войнах» отсчитываются от события — битвы при Явине,
          которое показано в «Эпизоде IV: Новая надежда».
        </p>

        <ul>
          <li><strong>ДБЯ</strong> — До Битвы при Явине.</li>
          <li><strong>ПБЯ</strong> — После Битвы при Явине.</li>
        </ul>
      </section>

      {/* Оглавление */}
      <section className="toc-block">
        <h3>Оглавление по хронологии</h3>
        <ul>
          {timeline.map((item) => (
            <li key={item.id} className="toc-line">
              <button
                type="button"
                className="toc-btn"
                onClick={() => handleScroll(item.id)}
              >
                <span className="toc-year">{item.year}:</span>{" "}
                <span className="toc-title">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Подробные карточки фильмов */}
      <section className="details-list">
        {timeline.map((item) => (
          <article
            key={item.id}
            id={`movie-${item.id}`}
            className="movie-detail"
          >
            <h4>
              {item.year}: {item.title}
            </h4>

            <div className="movie-content">
              <img
                src={item.image}
                alt={item.title}
                className="movie-poster"
              />

              <div className="movie-info">
                <p><strong>Тип:</strong> {item.type}</p>
                <p><strong>Годы выхода:</strong> {item.years}</p>

                {item.seasons && (
                  <p><strong>Сезонов:</strong> {item.seasons}</p>
                )}

                {item.rating && (
                  <p><strong>Рейтинг:</strong> {item.rating}</p>
                )}

                <p className="movie-desc">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
