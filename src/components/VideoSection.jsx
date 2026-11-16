export default function VideoSection({ title, items }) {
  return (
    <section className="video-section">
      <h2>{title}</h2>
      <div className="video-grid">
        {items.map((video) => (
          <div className={`video-card ${video.shape}`} key={video.id}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              loading="lazy"
              allowFullScreen
            />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}