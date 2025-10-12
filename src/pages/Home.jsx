import Hero from "../components/Home/Hero";
import NewArrivals from "../components/Home/NewArrivals";
import Showcase from "../components/Home/Showcase";
import Sustainability from "../components/Home/Sustainability";
import Service from "../components/Home/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Showcase />
      <Sustainability />
      <Service />
    </>
  );
}