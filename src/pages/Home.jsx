import Banner from "../components/Banner";
import RayanRow from "../components/RayanRow";
import { trending, topRated, maintainance } from "../api/rayan";

export default function Home() {
  return (
    <>
      <Banner />
      <RayanRow title="Trending Bed Frames" items={trending} />
      <RayanRow title="Top Rated Dining Tables" items={topRated} />
      <RayanRow title="Maintenance" items={maintainance} />
    </>
  );
}