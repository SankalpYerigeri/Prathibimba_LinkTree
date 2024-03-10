import react from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img
            className="logo"
            src="https://i.ibb.co/zhGxCzf/Pralogo.png"
            alt="Our Logo"
          />
        </div>

        <div className="detail-container">
          <div className="name">
            <h1>UVCE Prathibimba</h1>
            <p>The Art and Photography club of UVCE</p>
          </div>

          <div className="info">
            <ul>
              <li>
                <i class="fa-solid fa-map-pin"></i>UVCE, Benagaluru
              </li>
              <li>
                <i class="fa-solid fa-cake-candles"></i>19 Nov 2022
              </li>
              <li>
                <i class="fa-regular fa-envelope"></i>uvce.prathibimba@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const Cards = () =>
{
    return (
        <>
        <div className="card">
            <img className="img-holder" src="https://static.vecteezy.com/system/resources/previews/000/649/142/original/team-icon-symbol-sign-vector.jpg"/>
            <h4 className="card-head">Core Team</h4>
        </div>
        </>
    )
}

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            We are a passionate and creative community of artists dedicated to
            fostering artistic expression and appreciation within our college
            community. Our club provides a supportive platform for students to
            explore various forms of art, connect with like-minded individuals,
            and showcase their talents.
          </p>
          <h2>Meet Us</h2>
        </div>
        
        <div className="card-container">
            <Cards />
            <Cards/>
            <Cards/>
            <Cards/>
            
            

        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
