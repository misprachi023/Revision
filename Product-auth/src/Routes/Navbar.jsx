import {Link} from "react-router-dom"

function Navbar() {
    return(
        <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"20px", marginBottom:"20px",}}>
            
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export { Navbar }