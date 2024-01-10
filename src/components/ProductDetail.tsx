import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import InvoiceList from './InvoiceList';



function ProductDetail() {
  const  index  = useParams();
  let id=parseInt(index.id);
  let detail=InvoiceList().find((invoice)=>{
return invoice.id==id;
  });

  return (
    <>

<ul className="breadcrumb">
  
    <li>
    <Link to={'/'}>
    <a href="#" >Invoices</a> <span className="divider">/</span>
  </Link>
      </li>
    <li className="active">Invoice Information</li>
</ul>
<div className="row">

    <div className="span9">
        <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade active in" id="home">
                <h4>Product Information</h4>
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr className="techSpecRow"><th colSpan={2}>Invoice Details</th></tr>
                        <tr className="techSpecRow"><td className="techSpecTD1">Invoice ID: </td><td className="techSpecTD2">{detail.id}</td></tr>
                        <tr className="techSpecRow"><td className="techSpecTD1">Invoice Name: </td><td className="techSpecTD2">{detail.name}</td></tr>
                        <tr className="techSpecRow"><td className="techSpecTD1">Payment:</td><td className="techSpecTD2"> {detail.payment}</td></tr>
                        <tr className="techSpecRow"><td className="techSpecTD1">Customer Infomation: </td><td className="techSpecTD2"> {'-Id'+detail.customer.id} <br /> {'-Name'+detail.customer.name}</td></tr>
                        <tr className="techSpecRow"><td className="techSpecTD1">Product Image:</td><td className="techSpecTD2"><img src={'theme/images/products/'+ detail.id+'.png'} alt="" /></td></tr>
                        <tr className="techSpecRow"><td className="techSpecTD1">Total Price:</td><td className="techSpecTD2">{"$"+index.total}</td></tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>


    
    </>

  );
}

export default ProductDetail;
