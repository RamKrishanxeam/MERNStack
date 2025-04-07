import { useContext, useState } from "react";
import Layouts from "../layouts/Layouts";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/auth";
import { BaseUrl } from "../store/BaseUrl";

const Login = () => {
  const navigate = useNavigate();
  const authValue = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      email: user.email,
      password: user.password,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(`${BaseUrl}/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.userId) {
          authValue?.storeTokenInLS(result.token);
          navigate("/");
          setUser({
            email: "",
            password: "",
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Layouts>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="https://img.freepik.com/premium-vector/global-data-security-concept-illustration_86047-604.jpg?w=826"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      placeholder="email"
                      onChange={handlerInput}
                      name="email"
                      value={user.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      onChange={handlerInput}
                      value={user.password}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </Layouts>
  );
};

export default Login;
