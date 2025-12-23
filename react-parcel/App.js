import ReactDOM from "react-dom/client";

let Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://logos-marcas.com/wp-content/uploads/2020/11/Swiggy-Simbolo.png"
          width={100}
        ></img>
      </div>
      <div className="nav">
        <ul>
          <li>Offers</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

let Body = () => {
  return (
    <div className="body">
      <h1>Fast Food</h1>
      <h3>Order in deliciously juicy and tasty items to curb your cravings!</h3>
      <h5>Restaurants to explore</h5>
      <div className="food-items">
        {resobj.map((restaurant) => (
          <Card resobj={restaurant} />
        ))}
      </div>
    </div>
  );
};

let Card = ({ resobj }) => {
  console.log(resobj);
  const info = resobj.card.card.info;
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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

const resobj = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "757727",
          name: "Haldiram's Sweets and Namkeen",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/16/3070e43f-aac7-4be3-b05a-a36dc75a7fc6_757727.JPG",
          locality: "Basavanagudi",
          areaName: "Basavanagudi",
          costForTwo: "₹400 for two",
          cuisines: ["Sweets", "Desserts", "indian snacks", "Snacks"],
          avgRating: 4.3,
          parentId: "391465",
          avgRatingString: "4.3",
          totalRatingsString: "260",
          promoted: true,
          adTrackingId:
            "cid=8a07fde3-da5a-4b77-85d0-45b06d74746b~p=0~adgrpid=8a07fde3-da5a-4b77-85d0-45b06d74746b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=757727~plpr=COLLECTION~eid=d1b5e3b6-f789-4a23-a054-8314fe97ec4f~srvts=1766470071740~collid=83655",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "35-45 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-23 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                description: "OnlyOnSwiggy",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      description: "OnlyOnSwiggy",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹499",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "2.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "8a07fde3-da5a-4b77-85d0-45b06d74746b",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=757727&source=collection&query=Cakes",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "426730",
          name: "Theobroma",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/a31b8512-76fc-4f71-ac39-76507e4985ed_426730.JPG",
          locality: "Vittal Mallya Road",
          areaName: "Vittal Mallya Road",
          costForTwo: "₹400 for two",
          cuisines: ["Desserts", "Bakery", "Beverages"],
          avgRating: 4.7,
          parentId: "1040",
          avgRatingString: "4.7",
          totalRatingsString: "6.6K+",
          sla: {
            deliveryTime: 14,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "10-15 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-23 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Desserts.png",
                description: "Delivery!",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Desserts.png",
                      description: "Delivery!",
                    },
                  },
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "560",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=426730&source=collection&query=Cakes",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "304580",
          name: "ITC Fabelle Chocolates",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/36011f2e-c6e6-4779-9997-f0787877fba5_304580.jpg",
          locality: "Richmond Town",
          areaName: "Richmond Town",
          costForTwo: "₹600 for two",
          cuisines: ["Bakery", "Desserts"],
          avgRating: 4.6,
          parentId: "11024",
          avgRatingString: "4.6",
          totalRatingsString: "321",
          promoted: true,
          adTrackingId:
            "cid=3d4f70fa-d110-4d1d-a3c5-cd78fc8db5f0~p=3~adgrpid=3d4f70fa-d110-4d1d-a3c5-cd78fc8db5f0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=304580~plpr=COLLECTION~eid=6cc567ab-259b-49d7-a21f-6926cabb8866~srvts=1766470071740~collid=83655",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-12-23 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹200",
            discountTag: "SAVE BIG",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "366",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "3d4f70fa-d110-4d1d-a3c5-cd78fc8db5f0",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=304580&source=collection&query=Cakes",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

let Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Swiggy</h2>
        <p>Order food from your favourite restaurants near you.</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Swiggy. All rights reserved.</p>
      </div>
    </footer>
  );
};

let AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
