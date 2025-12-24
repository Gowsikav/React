import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import { Body } from "./src/components/Body";

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
