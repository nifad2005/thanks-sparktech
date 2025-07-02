import AboutSection from "@/components/about/AboutSection";
import RoomSelectionTable from "@/components/availiblity/Available";
import SearchAvail from "@/components/availiblity/SearchAvail";
import GridView from "@/components/herosection/GridView";
import HeroText from "@/components/herosection/HeroText";
import Services from "@/components/herosection/Services";
import Policies from "@/components/policies/page";
import UserReview from "@/components/reviews/UserReview";
import ShowRooms from "@/components/showrooms/page";
import Image from "next/image";

export default function Home() {
  return (
  <main className="xl:w-[90%] w-full *:w-full  mx-auto flex flex-col items-center mt-22 mb-12 ">
    {/* hero section /* */}
    <section className="flex flex-col items-center justify-center w-full ">
      <HeroText />
      <GridView />
    </section>
    {/* services section */}

    <section className="w-full flex flex-col items-center justify-center">
      <Services/>
    </section>

    {/* Availibily section  */}
    <section>
      <SearchAvail/>
      <RoomSelectionTable/>
    </section>

    {/* About Section  */}
    <section>
      <AboutSection/>
    </section>

    {/* Review Section */}
    <section>
    <UserReview />
    </section>

    Policies Section
    <section>
      <Policies />
    </section>

    {/* Some options  */}
    <ShowRooms />
    {/* Footer Section */}
  </main>
  );
}
