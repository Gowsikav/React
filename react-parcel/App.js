import ReactDOM from "react-dom/client";

let Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://logos-marcas.com/wp-content/uploads/2020/11/Swiggy-Simbolo.png" width={100}></img>
      </div>
      <div className="nav">
        <ul>
          <li>Offers</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

let Body = () => {
  return (
    <div className="body">
      <h1>Fast Food</h1>
      <h3>Order in deliciously juicy and tasty items to curb your cravings!</h3>
      <h5>Restaurants to explore</h5>
      <div className="food-items">
        <Card imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/SpPBW1"
          name="Shawarma"
          cuisine="North Indian"
          location="Central Bangalore"
          ratings="4.0 ⭐ · 40–50 mins"
        />

        <Card imgSrc="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg"
          name="Burger King"
          cuisine="Fast Food"
          location="Indiranagar"
          ratings="4.2 ⭐ · 30–40 mins"
        />

        <Card imgSrc="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
          name="Domino's"
          cuisine="Pizza"
          location="Whitefield"
          ratings="4.1 ⭐ · 25–35 mins"
        />

        <Card imgSrc="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg"
          name="KFC"
          cuisine="Fried Chicken"
          location="MG Road"
          ratings="4.0 ⭐ · 35–45 mins"
        />

        <Card imgSrc="https://images.pexels.com/photos/30506288/pexels-photo-30506288.jpeg"
          name="Subway"
          cuisine="Healthy & Fast Food"
          location="BTM Layout"
          ratings="3.9 ⭐ · 30–40 mins"
        />

        <Card imgSrc="https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg"
          name="McDonald's"
          cuisine="Burgers & Beverages"
          location="Electronic City"
          ratings="4.1 ⭐ · 25–35 mins"
        />

        <Card imgSrc="https://images.pexels.com/photos/19681747/pexels-photo-19681747.jpeg"
          name="Pizza Hut"
          cuisine="Italian"
          location="Jayanagar"
          ratings="4.0 ⭐ · 35–45 mins"
        />

        <Card imgSrc="https://images.pexels.com/photos/35260678/pexels-photo-35260678.jpeg"
          name="A2B"
          cuisine="South Indian"
          location="Rajajinagar"
          ratings="4.3 ⭐ · 20–30 mins"
        />

        <Card imgSrc="https://images.pexels.com/photos/35287414/pexels-photo-35287414.jpeg"
          name="Meghana Foods"
          cuisine="Biryani"
          location="Koramangala"
          ratings="4.5 ⭐ · 30–40 mins"
        />

        <Card imgSrc="https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg"
          name="Empire Restaurant"
          cuisine="Multi Cuisine"
          location="Frazer Town"
          ratings="4.2 ⭐ · 35–45 mins"
        />
      </div>
    </div>
  )
}

let Card = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgSrc}></img>
      </div>
      <div className="card-details">
        <h2>{props.name}</h2>
        <h4>{props.ratings}</h4>
        <p>{props.cuisine}</p>
        <p>{props.location}</p>
      </div>
    </div>
  );
}

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
      <Footer/>
    </div>
  )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
