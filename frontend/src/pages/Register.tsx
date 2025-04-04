import { Formik } from "formik";
import Layouts from "../layouts/Layouts";

interface FormValues {
  username: string;
  email: string;
  phone: string;
  password: string;
}

const Register = () => {
  return (
    <Layouts>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <Formik<FormValues>
                  initialValues={{
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                  }}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="username">username</label>
                        <input
                          type="text"
                          name="username"
                          placeholder="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                        />
                      </div>
                      <div>
                        <label htmlFor="email">email</label>
                        <input
                          type="text"
                          name="email"
                          placeholder="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone">phone</label>
                        <input
                          type="number"
                          name="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                      </div>
                      <div>
                        <label htmlFor="password">password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </div>
                      <br />
                      <button type="submit" className="btn btn-submit">
                        Register Now
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </main>
      </section>
    </Layouts>
  );
};

export default Register;
