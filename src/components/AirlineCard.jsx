import React from "react";

const AirlineCard = props => {
  const { logoURL, name, alliance, phone, site } = props.airline;
  const shortenURL = url => {
    return url.slice(12);
  };
  const logo = `https://kayak.com${logoURL}`;
  return (
    <div className="airlineCard">
      <div className="cardBody">
        <div className="mainCardInfo">
          <img src={logo} alt="" className="airlineCardLogo" />
          <div className="airlineCardTitle">{name}</div>
        </div>
        <div className="hidden">
          <div className="airlineCardText">{alliance}</div>
          <div className="airlineCardText">{phone}</div>
          <div className="airlineCardSite">{shortenURL(site)}</div>
        </div>
      </div>
    </div>
  );
};

export default AirlineCard;
