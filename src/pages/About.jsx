import VideoSection from "../components/VideoSection";
import { behindTheScenes, ads } from "../api/videos";

export default function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>We design elegant, functional furniture and bespoke interior for residential and commercial spaces. <br /> Send us a DM, let's bring your vision to life.
      </p>

      <VideoSection title="Behind the Scenes" items={behindTheScenes} />
      <VideoSection title="Our Work in Action" items={ads} />
    </div>
  );
}