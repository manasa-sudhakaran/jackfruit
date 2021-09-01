import "./styles.css";
import image1 from "./image1/1st.png";
import image2 from "./image2/2nd.png";
import image3 from "./image3/3rd.png";
export default function App() {
  state = {
    username: "",
    password: ""
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };
  return (
    <div className="App">
      <div className="heading-container">
        <h1 className="mheading">
          Welcome to <span className="company-name">Jackfruit</span>
        </h1>
        <h2 className="subtag">A platform that simplifies Personal Finance </h2>
        <div className="buttons-container">
          <button className="button" type="button">
            Sign Up
          </button>
        </div>
        <div
          className="login-form-container"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: `cover`
          }}
        >
          <form className="form-container" onSubmit={this.submitForm}>
            <h1 className="login-website-logo-desktop-image">Jackfruit</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        <div
          className="details-section"
          style={{
            backgroundImage: `url(${image3})`,
            backgroundRepeat: "none"
          }}
        >
          <h1 className="mainhead">Tax Calculator</h1>
          <div className="basic-details-container">
            <h4 className="heading">Basic Details</h4>
            <form className="form-cont">
              <label className="bpay">Basic Pay</label>
              <input type="number" className="bpay" />
              <label className="hra">HRA</label>
              <input type="number" className="hra" />
              <label className="fa">Food Allowance</label>
              <input type="number" className="fa" />
              <label className="lta">LTA</label>
              <input type="number" className="lta" />
            </form>
          </div>
          <div className="other">
            <h4 className="heading">Other Details</h4>
            <div className="form2">
              <form className="form-count">
                <label className="investment">Investment</label>
                <input type="number" className="investment" />
                <label className="rent">Rent</label>
                <input type="number" className="rent" />

                <label className="medi">Mediclaim</label>
                <input type="number" className="medi" />

                <div>
                  <label className="metro">Metrocity</label>
                  <input type="checkbox" className="metro" />
                </div>
                <div>
                  <label className="non">Non Metro</label>
                  <input type="checkbox" className="non" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
