import "./App.css";
import { useState } from "react";

function App() {
  const productDetail = [
    {
      image: "https://i.etsystatic.com/inv/97fa77/4880412663/inv_fullxfull.4880412663_977b592y.jpg?version=0",
      title: "Fancy Product",
      rating: "",
      price2: "$40.00 - $80.00",
      button: "View Options",
      buttonChange: "View Options",
    },
    {
      image: "https://i.etsystatic.com/36590368/r/il/f746cb/4396571871/il_794xN.4396571871_lv9j.jpg",
      title: "Special Item",
      rating: "",
      price1: "$20.00",
      price2: "$18.00",
      button: "Add to cart",
      buttonChange: "Remove from cart",
      badge: "Sale",
    },
    {
      image: "https://i.etsystatic.com/28300028/r/il/608a8f/3800165687/il_794xN.3800165687_q2pd.jpg",
      title: "Sale Item",
      rating: "",
      price1: "$50.00",
      price2: "$25.00",
      button: "Add to cart",
      badge: "Sale",
      buttonChange: "Remove from cart",
    },
    {
      image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/y/l/p/-original-imaghxemc3wtcuhb.jpeg?q=70",
      title: "Popular Item",
      rating: "",
      price2: "$40.00",
      button: "Add to cart",
      buttonChange: "Remove from cart",
    },
    {
      image: "https://burst.shopifycdn.com/photos/beauty-products-flatlay.jpg?width=925&format=pjpg&exif=1&iptc=1",
      title: "Sale Item",
      rating: "",
      price1: "$50.00",
      price2: "$25.00",
      button: "Add to cart",
      buttonChange: "Remove from cart",
      badge: "Sale",
      buttonChange: "Remove from cart",
    },
    {
      image: "https://babablog.oss-accelerate.aliyuncs.com/2023/02/four-black-and-gold-lipstick-tubes.jpeg?x-oss-process=style%2Ffull",
      title: "Fancy Product",
      rating: "",
      price2: "$120.00 - $280.00",
      button: "Add to cart",
      buttonChange: "Remove from cart",
    },
    {
      image: "https://burst.shopifycdn.com/photos/desk-office-workspace-flatlay.jpg?width=925&format=pjpg&exif=1&iptc=1",
      title: "Special Item",
      rating: "",
      price1: "$20.00",
      price2: "$18.00",
      button: "Add to cart",
      badge: "Sale",
      buttonChange: "Remove from cart",
    },
    {
      image: "https://burst.shopifycdn.com/photos/wooden-table-with-a-scale-and-pour-over-coffee.jpg?width=925&format=pjpg&exif=1&iptc=1",
      title: "Popular Item",
      rating: "",
      price2: "$40.00",
      button: "Add to cart",
      buttonChange: "Remove from cart",
    },
  ];

  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar
        count={count}
        //  setCount={setCount}
      />

      <div className="main-title">
        <h1 className="font">Shop in style</h1>
        <p className=" fontI">With this shop homepage template</p>
      </div>
      <div className="container">
        <div className="row">
          {productDetail.map((product, idx) => (
            <Product
              key={idx}
              prod={product}
              count={count}
              setCount={setCount}
            />
          ))}
        </div>
      </div>
      <div className="main-fooder">
        <p>Copyright © Your Website 2023</p>
      </div>
    </div>
  );
}

export default App;

function Product({ prod, count, setCount }) {
  function addCart() {
    setCount(count + 1);
    setShow(!show);
    return;
  }

  function removeCart() {
    setCount(count - 1);
    setShow(!show);
    return;
  }

  const [show, setShow] = useState(false);
  return (
    <div className="col-md-6 col-lg-3 gap mt-5 text-center">
      <div className="card" style={{ width: "18rem" }}>
        <div>
          <img src={prod.image} className="card-img-top image" alt="..." />
          <span className="badge text-bg-dark p-1 ">sale</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{prod.title}</h5>
          <span className="card-text">
            <strike>{prod.price1}</strike>
          </span>
          <span className="card-text"> {prod.price2}</span>{" "}
        </div>
        <div>
          <div>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
          </div>
          {!show ? (
            <button className="btn button1 btn-outline-dark" onClick={addCart}>
              {prod.button}
            </button>
          ) : (
            <button
              href=""
              className="btn button1 btn-outline-danger"
              onClick={removeCart}
            >
              {prod.buttonChange}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Navbar({ count }) {
  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navButton">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  All Products
                </a>
                <hr></hr>
                <a className="dropdown-item" href="#">
                  Popular Items
                </a>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </div>
            </li>
          </ul>
          <div className="ml-auto">
            <button type="button" className="btn button2 btn-outline-dark my-3">
              <i className="fa fa-shopping-cart mt-1" aria-hidden="true">
                {" "}
                Cart
              </i>
              <span className="badge bg-dark text-white rounded-pill">
                {count}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
