import "./Starfield.css";

export default function Starfield() {
  const stars = Array.from({ length: 200 });

  return (
    <div className="starfield">
      {stars.map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: Math.random() * 100 + "vw",
            top: Math.random() * 100 + "vh",
            animationDuration: 3 + Math.random() * 5 + "s",
            animationDelay: Math.random() * 3 + "s",
          }}
        />
      ))}
    </div>
  );
}
