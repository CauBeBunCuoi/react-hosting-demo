
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div id="welcomeLine" className="row">
          <div className="span6">Welcome!<strong> User</strong></div>
          <div className="span6">
            <div className="pull-right">
              
              <Link to='/'>
                 <a href="#"><span className="btn btn-mini btn-primary"><i className="icon-shopping-cart icon-white"></i> [ 3 ] Itemes in your cart </span> </a>
</Link>
            </div>
          </div>
        </div>
       
        <div id="logoArea" className="navbar">
          <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
          <div className="navbar-inner">
          <Link to={'/'} className="brand"><a className="brand" href="#"><img src="/themes/images/logo.png" alt="Bootsshop" width={59}/></a></Link>
            

            <ul id="topMenu" className="nav pull-right">
              <li className=""><a href="#">Specials Offer</a></li>
              <li className=""><a href="#">Delivery</a></li>
              <li className=""><a href="#">Contact</a></li>
              <li className="">
                <a href="#login" role="button" data-toggle="modal" style={{paddingRight:0}}><span className="btn btn-large btn-success">Login</span></a>
                <div id="login" className="modal hide fade in" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="false">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h3>Login Block</h3>
                  </div>
                  <div className="modal-body">
                    <form className="form-horizontal loginFrm">
                      <div className="control-group">
                        <input type="text" id="inputEmail" placeholder="Email"/>
                      </div>
                      <div className="control-group">
                        <input type="password" id="inputPassword" placeholder="Password"/>
                      </div>
                      <div className="control-group">
                        <label className="checkbox">
                          <input type="checkbox"/> Remember me
                        </label>
                      </div>
                    </form>
                    <button type="submit" className="btn btn-success">Sign in</button>
                    <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
