import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* ВИДЕО-БАННЕР */}
      <div className="video-banner">
        <video autoPlay muted loop playsInline>
          <source src="/video/banner.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay">
          <h1 className="title">STAR WARS STUDY HUB</h1>
          <p className="subtitle">Галактика знаний ждёт тебя</p>
        </div>
      </div>


      {/* ОПИСАНИЕ */}
      <section className="description">
        <h2>О проекте</h2>
        <p>
          Добро пожаловать в StarWars Study Hub — интерактивный портал, где ты сможешь изучать персонажей,
          смотреть хронологию фильмов и сериалов, а также рассматривать карту вселенной.
        </p>
        <p>
          Каждый раздел создан специально для удобного изучения богатой истории галактики.
        </p>
      </section>
    </div>
  );
}
