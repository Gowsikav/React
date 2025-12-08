function Login() {
  let [setEmailExists] = React.useState(null);
  function handleEmailChange(event) {
    const email = event.target.value;
    console.log(email);
    fetch("checkEmail?email=" + email)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data == true) {
          console.log("email found");
          setEmailExists(true);
        } else {
          console.log("email not found");
          setEmailExists(false);
        }

      })
      .catch(error => {
        console.error('Error:', error);
        setEmailExists(false);
      });
  }
  return (
    <div className="container mt-4">
      <h1>Login Page</h1>
      <p>Please enter your credentials to log in.</p>
      <form action="login" method="post">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" className="form-control" onChange={handleEmailChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" name="password" className="form-control" required />
        </div>
        <button type="submit" id="submitBtn" disabled={!setEmailExists} className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
