import HeaderSection from "./components/header/page";
import LeisureArea from "./components/area/page";
import RestaurantSection from "./components/restaurant/page";
import RoomSection from "./components/rooms/page";
import RoomDetails from "./components/roomDetails1/page";
import RoomDetails2 from "./components/roomDetails2/page";
import RoomDetails3 from "./components/roomDetails3/page";
import RoomDetails4 from "./components/roomDetails4/page";
import RoomDetails5 from "./components/roomDetails5/page";
import Testimonials from "./components/testimonials/page";
import Differentials from "./components/differentials/page";
import AboutUs from "./components/aboutus/page";
import MapEmbed from "./components/mapEmbed/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <LeisureArea />
      <RestaurantSection />
      <RoomSection />
      <RoomDetails />
      <RoomDetails2 />
      <RoomDetails3 />
      <RoomDetails4 />
      <RoomDetails5 />
      <Testimonials />
      <Differentials />
      <AboutUs />
      <MapEmbed />
      <Footer />
    </>
  );
}
