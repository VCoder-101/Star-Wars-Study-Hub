import { useRef, useState } from "react";
import Starfield from "../components/Starfield";
import "./Universe.css";

export default function Universe() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  // START DRAG
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return; // нельзя двигать если нет масштаба
    setDragging(true);
    setStart({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  // DRAG MOVE
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;

    const wrapper = wrapperRef.current;
    const img = document.getElementById("galaxy-img") as HTMLImageElement;

    if (!wrapper || !img) return;

    const newX = e.clientX - start.x;
    const newY = e.clientY - start.y;

    const maxX = 0;
    const maxY = 0;
    const minX = wrapper.clientWidth - img.width * scale;
    const minY = wrapper.clientHeight - img.height * scale;

    setOffset({
      x: Math.min(maxX, Math.max(minX, newX)),
      y: Math.min(maxY, Math.max(minY, newY)),
    });
  };

  const stopDragging = () => setDragging(false);

  // ZOOM
  const handleWheel = (e: React.WheelEvent) => {
    const wrapper = wrapperRef.current;
    const img = document.getElementById("galaxy-img") as HTMLImageElement;
    if (!wrapper || !img) return;

    const rect = wrapper.getBoundingClientRect();

    // Проверяем — курсор внутри карты
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      return;
    }

    e.preventDefault();

    const zoom = e.deltaY < 0 ? 1.1 : 0.9;
    let newScale = scale * zoom;

    // Нельзя уменьшать меньше оригинала
    newScale = Math.max(1, Math.min(newScale, 4));

    // SCALE AROUND CURSOR
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const deltaX = mouseX - offset.x;
    const deltaY = mouseY - offset.y;

    const newX = mouseX - (deltaX * newScale) / scale;
    const newY = mouseY - (deltaY * newScale) / scale;

    setScale(newScale);
    setOffset({ x: newX, y: newY });
  };

  return (
    <>
      <Starfield />

      <div className="universe-page">
        <h1>Карта вселенной Star Wars</h1>

        <div
          className="map-wrapper"
          ref={wrapperRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onWheel={handleWheel}
        >
          <img
            id="galaxy-img"
            src="/universe/map.jpeg"
            alt="Galaxy Map"
            className="map-image"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            }}
          />
        </div>

        <p className="zoom-tip">Колесо — масштаб, ЛКМ — перемещение</p>
      </div>
    </>
  );
}
