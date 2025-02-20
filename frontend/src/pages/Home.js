import Navbar from "../components/Navbar";
import DynamicSearch from "./DynamicSearch";
import HealthConcerns from "./HealthConcerns";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DynamicSearch />
      <HealthConcerns />
      <Footer />
    </div>
  );
}