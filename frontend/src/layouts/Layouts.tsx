import Footer from "../components/Footer";
import { Navbar } from "../components/Header";

const Layouts = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layouts;
