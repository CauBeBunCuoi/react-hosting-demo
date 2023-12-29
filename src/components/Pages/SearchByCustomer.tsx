import { useState } from "react";
import InvoiceList from "../InvoiceList";
import { Link} from "react-router-dom";
import Table from "./Table";


function Funtion3({}) {
    let [form, setForm]=useState(InvoiceList());
    let [result, setResult]=useState(InvoiceList());
    
  

    const save = (e) => {
      e.preventDefault();
      setResult([...form])
    }

const handleChange=(e)=>{
    let target= e.target;
    let value=target.value;;
    if(value!=''){
      let search= InvoiceList().filter((invoice)=>{
        return invoice.customer.id==value;
    })
    setForm([...search]);
    console.log(form)
    }else{
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
                <form className="form-inline navbar-search" method="post" action="products.html" onSubmit={e=>save(e)}>
    <input id="srchFld" className="srchTxt" type="text" onChange={e=>handleChange(e)} placeholder='Enter customer id'/>
    <button type="submit" id="submitButton" className="btn btn-primary">Search</button>
  </form>
              </h3>

              <Table result={result}  />


       </>

    );
  }
  
  export default Funtion3;
  