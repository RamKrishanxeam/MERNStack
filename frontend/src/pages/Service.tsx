import { useContext } from "react";
import Layouts from "../layouts/Layouts";
import { AuthContext } from "../store/auth";

const Service = () => {
  const { serviceData }: any = useContext(AuthContext);

  return (
    <Layouts>
      <div className="service-section">
        <div className="card">
          {serviceData
            ? serviceData.map((item: any, index: any) => {
                return (
                  <div className="card-content" key={index}>
                    <h2>Beautiful Landscape</h2>
                    <p>
                      Explore the beauty of nature with amazing landscapes and
                      scenic views.
                    </p>
                  </div>
                );
              })
            : "N/A"}
        </div>
      </div>
    </Layouts>
  );
};

export default Service;
