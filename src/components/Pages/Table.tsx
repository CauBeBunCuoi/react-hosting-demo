import { useEffect, useState } from "react";
import InvoiceList from "../InvoiceList";
import { Link} from "react-router-dom";
import Total from "./Total";


function Table({result}) {
  let [show, setShow] = useState(result);

    useEffect(() => {
        setShow(result);
      }, [result]);

    let mess='';
    let sum=0;   
    result.forEach(result => {
        sum+=result.total
    }
);
if(sum!=0){
mess='TOTAL: $'+sum
}else{
    mess='NOT FOUND' 
}


let sumPrice=(quantity,index)=>{
    let search= InvoiceList().find((invoice)=>{
return invoice.id==show[index].id;
    })
    if(quantity!=''){
        result[index].total=search.total*parseInt(quantity);
        setShow([...result])
    }else{
        result[index].total=search.total;
        setShow([...result])
    }
}


    return (
       <>
<table className="table table-bordered">
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Invoice Name</th>
                  <th>Quantity/Update</th>
				  <th>Payment</th>
                  <th>CustomerID</th>
                  <th>Customer Name</th>
                  <th>Total</th>
				</tr>
              </thead>
              <tbody>
				{show.map((invoice,index)=>{
return (
    <tr key={invoice.id}>
    
    <td> <img width="60" src={'/themes/images/products/'+ invoice.id+'.png'} alt=""/></td>
    <td>
    <Link to={'/invoice/'+invoice.id+'/'+invoice.total}>
    <a href="" >{invoice.name}</a>
    </Link>
        </td>
    <td>
      <div className="input-append"><input className="span1" style={{maxWidth:'34px'}} placeholder="1" id="appendedInputButtons" size={16} type="text" onChange={e=>sumPrice(e.target.value,index)}/><button className="btn" type="button" ><i className="icon-minus"></i></button><button className="btn" type="button"><i className="icon-plus"></i></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white"></i></button>				</div>
    </td>
    <td>{invoice.payment}</td>
    <td>{invoice.customer.id}</td>
    <td>{invoice.customer.name}</td>
    <td>{'$'+invoice.total}</td>
  </tr>
)

                })
            }
				</tbody>
            </table>
            <Total mess={mess}/>
       </>

    );
  }
  
  export default Table;
  
