import { useEffect, useState } from "react";
import InvoiceList from "../InvoiceList";
import { Link } from "react-router-dom";
import Table from "./Table";


function Funtion2({}) {


  let [status,setStatus]=useState(InvoiceList());
  let [form, setForm] = useState(InvoiceList());
  let [result, setResult] = useState(InvoiceList());
  
  
  // useEffect(() => {
  //   setResult([...status]);
  // }, [status]);
  
  
  const save = (e) => {
    e.preventDefault();
    setResult([...form])
  }

  const handleChange = (e) => {
    let target = e.target;
    let value = target.value;;
    if (value != 'all') {
      let search = InvoiceList().filter((invoice) => {
        return invoice.payment == value;
      })
      
      setForm([...search]);
    } else {
      setForm([...InvoiceList()]);
    }
  }
  return (
    <>
              <h3>  SHOPPING CART [ <small>{result.length} Item(s) </small>]

                <Link to='/'>
                  <button type="submit" id="submitButton" className="btn btn-primary">Search By Payment</button>&nbsp;
                </Link>
                <Link to='/2'>
                  <button type="submit" id="submitButton" className="btn btn-primary">Search By Customer</button>
                </Link>
                <form className="form-inline navbar-search" method="post" action="products.html" onSubmit={e => save(e)}>
                  <select className="srchTxt" onChange={e => handleChange(e)}>
                    <option value="all">All</option>
                    <option value='paypal'>PAYPAL</option>
                    <option value='cash'>CASH</option>
                  </select>
                  <button type="submit" id="submitButton" className="btn btn-primary" >Search</button>
                </form>
              </h3>

              <Table result={result} />
    </>

  );
}

export default Funtion2;
