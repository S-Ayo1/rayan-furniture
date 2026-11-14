import Banner from "../components/Banner";
import RayanRow from "../components/RayanRow";
import { trending, topRated, maintainance } from "../api/rayan";
import BehindTheScenes from "../components/BehindTheScenes";

export default function Home() {
  return (
    <>
      <Banner />
      <RayanRow title="Trending" items={trending} />
      <RayanRow title="Top Rated" items={topRated} />
      <RayanRow title="Maintain" items={maintainance} />
      <BehindTheScenes />
    </>
  );
}