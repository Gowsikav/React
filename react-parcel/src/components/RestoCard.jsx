import { RESTO_CARD_IMG } from "../utility/constants";

let RestoCard = ({ resobj }) => {
  const info = resobj.card.card.info;
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={ RESTO_CARD_IMG
             +
            info.cloudinaryImageId
          }
        />
      </div>
      <div className="card-details">
        <h2>{info.name}</h2>
        <h4>
          {info.avgRatingString}⭐ {info.sla.slaString}
        </h4>
        <p>{info.cuisines.join(", ")}</p>
        <p>{info.locality}</p>
      </div>
    </div>
  );
};

export default RestoCard;
