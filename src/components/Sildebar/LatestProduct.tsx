import { Link } from "react-router-dom";

function LatesProduct() {
    return (
<>
<br />
                        <div className="thumbnail">
                            <Link to={'/ProductCategory'}><img src="/themes/images/products/panasonic.jpg" alt="Bootshop panasonoc New camera" /></Link>
                            <div className="caption">
                                <h5>Panasonic</h5>
                                <h4 style={{ textAlign: 'center' }}><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                            </div>
                        </div><br />
                        <div className="thumbnail">
                            <img src="/themes/images/products/kindle.png" title="Bootshop New Kindel" alt="Bootshop Kindel" />
                            <div className="caption">
                                <h5>Kindle</h5>
                                <h4 style={{ textAlign: 'center' }}><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                            </div>
                        </div><br />
</>
    );
  }
  
  export default LatesProduct;