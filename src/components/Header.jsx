
import { Link } from "react-router-dom";
function Header(){
    return (
      <div className="header" >
        <h1>Blog web</h1>
         <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>




           
           
          <div>

         
          </div>
          
  
  
       
      </div>
    );


}
export default Header