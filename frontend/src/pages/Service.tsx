import { useContext } from "react";
import Layouts from "../layouts/Layouts";
import { AuthContext } from "../store/auth";

const Service = () => {
  const { serviceData }: any = useContext(AuthContext);

  return (
    <Layouts>
      <div className="service-section">
        {serviceData
          ? serviceData.map((item: any, index: any) => {
              return (
                <div className="card">
                  <div className="card-content" key={index}>
                    <h2>{item.service}</h2>
                    <p>{item.provider}</p>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })
          : "N/A"}
      </div>
    </Layouts>
  );
};

export default Service;
