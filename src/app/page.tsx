import Header from "./components/header";
import HomeArea from "./components/home";
import Impact from "./components/impact";
import Footer from "./components/footer";
import Partners from "./components/partners";
import Offerings from "./components/offerings";
import Programs from "./components/programs";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeArea />
      <Partners />
      <Impact />
      <Offerings />
      <Programs />
      <Footer />
    </div>
  );
}
