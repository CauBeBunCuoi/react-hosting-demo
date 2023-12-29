import { useState } from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InvoiceList from "./components/InvoiceList";
import SearchByCustomer from "./components/Pages/SearchByCustomer";
import SearchByPayment from "./components/Pages/SearchByPayment";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Sildebar/Cart";
import Category from "./components/Sildebar/Category";


export default function App() {
    let [status, setStatus]=useState(InvoiceList());

  return (

    <>
      <BrowserRouter>
        <Header />
        <Carousel />
        
      <div id="mainBody">
        <div className="container">
          <div className="row">
            <div id="sidebar" className="span3">

              <Cart />
              <Category />


            </div>
            <div className="span9">
        <Routes>

          <Route path='/' element={<SearchByPayment />}></Route>
          <Route path='/2' element={<SearchByCustomer  />}></Route>
          <Route path='/invoice/:id/:total' element={<ProductDetail />}></Route>

        </Routes>
        </div>
          </div>
        </div>

      </div>
        <Footer />
        
    
      </BrowserRouter>


    </>
  )


}
