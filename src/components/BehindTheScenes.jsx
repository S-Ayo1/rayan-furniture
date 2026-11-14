import { videos } from "../api/videos";

export default function BehindTheScenes() {
  return (
    <section className="bts">
      <h2>Behind the Scenes</h2>
      <div className="bts-row">
        {videos.map((video) => (
          <div className="bts-card" key={video.id}>
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