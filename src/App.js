import "./App.css";
import { useState } from "react";

function App() {
  const productDetail = [
    {
      image: "",
      title: "Fancy Product",
      rating: "",
      price2: "$40.00 - $80.00",
      button: "View Options",
      buttonChange: "View Options",

    },
    {
      image: "",
      title: "Special Item",
      rating: "",
      price1: "$20.00",
      price2: "$18.00",
      button: "Add to cart",
      buttonChange: "Remove from cart",
      badge: "Sale",
    },
    {
      image: "",
      title: "Sale Item",
      rating: "",
      price1: "$50.00",
      price2: "$25.00",
      button: "Add to cart",
      badge: "Sale",
      buttonChange: "Remove from cart",

    },
    {
      image: "",
      title: "Popular Item",
      rating: "",
      price2: "$40.00",
      button: "Add to cart",
      buttonChange: "Remove from cart",

    },
    {
      image: "",
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
      image: "",
      title: "Fancy Product",
      rating: "",
      price2: "$120.00 - $280.00",
      button: "Add to cart",
      buttonChange: "Remove from cart",

    },
    {
      image: "",
      title: "Special Item",
      rating: "",
      price1: "$20.00",
      price2: "$18.00",
      button: "Add to cart",
      badge: "Sale",
      buttonChange: "Remove from cart",

    },
    {
      image: "",
      title: "Popular Item",
      rating: "",
      price2: "$40.00",
      button: "Add to cart",
      buttonChange: "Remove from cart",

    },
  ];

  

return(
  // <div className="App">
  //   {productDetail.map((e,idx)=>(
  //     <Product
  //     prod ={e}
  //     />
  //   ))}
  <div className="container">
  <div className="row">
   {productDetail.map((product,idx)=>(
    <Product
    key={idx}
    prod = {product}
    />
   ))}
  </div>
  </div>

);







}

export default App;

function Product({prod}){
  const [show, setShow] = useState(false);

  return (
    <div className="col-md-6 col-lg-4 gap mt-5 text-center">
     <div className="card" style={{width: '18rem'}}>
      <div>
  <img src="..." className="card-img-top image" alt="..."/>
  <span className="badge text-bg-dark p-1 ">sale</span>

      </div>
  <div className="card-body">
    <h5 className="card-title">{prod.title}</h5>
    <span className="card-text"><strike>{prod.price1}</strike></span>
    <span className="card-text">  {prod.price2}</span> </div>
    <div >
    {!show ? 
      <button className="btn btn-outline-dark" onClick={()=>setShow(!show)}>{prod.button}</button>
:
<button href="" className="btn btn-outline-danger" onClick={()=>setShow(!show)}>{prod.buttonChange}</button>

  }
    </div>

  
  </div>
</div>
    
  )
}




//  function Header() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar scroll</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarScroll">
//       <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Link
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled">Link</a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }





// 