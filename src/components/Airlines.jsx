import React, { useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import AirlineCard from "./AirlineCard";

const Airlines = () => {
  const [airlineContainer, setAirlineContainer] = useState([]);
  const [selection, setSelection] = useState("");

  useEffect(() => {
    fetchJsonp(
      "http://kayak.com/h/mobileapis/directory/airlines/homework?callback=jsonp",
      {
        jsonpCallback: "jsonp"
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setAirlineContainer(json);
      })
      .catch(function (err) {
        console.err(err);
      });
  }, []);

  return (
    <div className="homepage">
      <div className="title">Airlines</div>

      <div>
        <div className="filterByAlliances">Filter by Alliances</div>
        <div className="allianceCheckbox">
          <div className="alliance">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="OW"
                onClick={() => setSelection("OW")}
              />
              Oneworld
            </label>
          </div>
          <div className="alliance">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="ST"
                onClick={() => setSelection("ST")}
              />
              Sky Team
            </label>
          </div>
          <div className="alliance">
            <label>
              <input
                className="checkbox"
                type="checkbox"
                name="SA"
                onClick={() => setSelection("SA")}
              />
              Star Alliance
            </label>
          </div>
        </div>
      </div>

      <div className="flex-container">
        {airlineContainer && selection !== ""
          ? airlineContainer
              .filter(airline => airline.alliance === selection)
              .map((airline, index) => {
                return <AirlineCard airline={airline} key={index} />;
              })
          : airlineContainer.map((airline, index) => {
              if (airline.alliance !== "none") {
                return <AirlineCard airline={airline} key={index} />;
              }
            })}
      </div>
    </div>
  );
};

export default Airlines;
