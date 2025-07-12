import HeaderSection from "./components/header";
import LeisureArea from "./components/area";
import RestaurantSection from "./components/restaurant";
import RoomSection from "./components/rooms";
import RoomDetails from "./components/roomDetails1";
import RoomDetails2 from "./components/roomDetails2";
import RoomDetails3 from "./components/roomDetails3";
import RoomDetails4 from "./components/roomDetails4";
import RoomDetails5 from "./components/roomDetails5";
import Testimonials from "./components/testimonials";
import Differentials from "./components/differentials";
import AboutUs from "./components/about-us";
import MapEmbed from "./components/mapEmbed";
import Footer from "./components/footer";
import SimpleSlider from "./components/slider";
import Navbar from "./components/navbar";
import TopBar from "./components/topbar";
import Booking from "./components/booking";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <SimpleSlider />
      <Booking />
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
