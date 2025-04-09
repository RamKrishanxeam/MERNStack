import { useContext } from "react";
import Layouts from "../layouts/Layouts";
import { AuthContext } from "../store/auth";

const About = () => {
  const { user }: any = useContext(AuthContext);
  return (
    <>
      <Layouts>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div>
              <p>
                Welcome,
                {user ? `${user?.username} to our websites` : `to our websites`}
              </p>
              <h2>Our Mission & Vision</h2>
              <p>
                We strive to innovate and bring the best technology solutions to
                our clients. Our mission is to help businesses grow and thrive
                in the digital age with cutting-edge IT solutions.
              </p>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="https://thapatechnical.shop/_next/image?url=%2Fthapa_about.png&w=1080&q=75"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default About;
