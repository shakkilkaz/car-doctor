import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-10 text-center space-y-4">
      <h2 className="text-4xl font-semibold">Our Service Area</h2>
      <p>
        the majority have suffered alteration in some form, <br /> by injected
        humour, or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 items-center w-[90%]  mx-auto ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
