import { Link } from "react-router-dom";
import InvoiceList from "../InvoiceList";

function Cart() {
    return (
         <div className="well well-small">
<Link to='/'>
<a id="myCart" href="product_summary.html"><img src="/themes/images/ico-cart.png" alt="cart"/>{InvoiceList().length} Items in your cart  <span className="badge badge-warning pull-right">$155.00</span></a>


</Link>
            
            </div>
    )


    
  }
  
  export default Cart;
  