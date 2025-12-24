export let Footer = () => {
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
