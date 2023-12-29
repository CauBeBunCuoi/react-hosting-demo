import { Link } from "react-router-dom";

function Category() {

    return (
        <ul id="sideManu" className="nav nav-tabs nav-stacked">
            <li className="subMenu open">
                <a href="#"> ELECTRONICS [230]</a>

            </li>
            <li className="subMenu">
                <a href="#"> CLOTHES [840] </a>
            </li>
            <li className="subMenu">
                <a href="#">FOOD AND BEVERAGES [1000]</a>
            </li>
            <li><a href="#">HEALTH & BEAUTY [18]</a></li>
            <li><a href="#">SPORTS & LEISURE [58]</a></li>

            <li>
               
                    <a href="#">BOOKS & ENTERTAINMENTS [14]</a>
            
            </li>
        </ul>

    );
}

export default Category;
