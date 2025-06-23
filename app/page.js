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

import Counter from "./components/counter";

export default function Home() {
  return (
    <>
      {/* <HeaderSection />
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
      <Footer /> */}

      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Nosso site está quase no ar!
          </h1>
          <p className="text-lg md:text-xl">Faltam apenas</p>

          <Counter />

          <p className="text-sm md:text-base">
            Fique ligado! Estamos preparando algo incrível.
          </p>
        </div>
      </div>
    </>
  );
}
