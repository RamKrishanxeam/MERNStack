import { useContext, useEffect, useState } from "react";
import Layouts from "../layouts/Layouts";
import { AuthContext } from "../store/auth";
import { BaseUrl } from "../store/BaseUrl";
import { toast } from "react-toastify";

export const Contact = () => {
  const { user }: any = useContext(AuthContext);
  const [userData, setuserData] = useState(true);
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.name || "",
        email: user.email || "",
        message: "",
      });
      setuserData(false);
    }
  }, [user]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: user.username,
      email: user.email,
      message: contact.message,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(`${BaseUrl}/form/contact`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setContact({
          username: "",
          email: "",
          message: "",
        });
        toast.success("message send successfull");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error);
      });
  };

  return (
    <>
      <Layouts>
        <section className="section-contact">
          <div className="contact-content container">
            <h1 className="main-heading">contact us</h1>
          </div>
          {/* contact page main  */}
          <div className="container grid grid-two-cols">
            <div className="contact-img">
              <img
                src="https://img.freepik.com/premium-vector/global-data-security-concept-illustration_86047-604.jpg?w=826"
                alt="we are always ready to help"
              />
            </div>

            {/* contact form content actual  */}
            <section className="section-form">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={user?.username || ""}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user?.email || ""}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    value={contact.message}
                    onChange={handleInput}
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit">submit</button>
                </div>
              </form>
            </section>
          </div>

          <section className="mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </section>
      </Layouts>
    </>
  );
};
