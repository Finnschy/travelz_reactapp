import WhiteButton from "./WhiteButton"
import Button from './Button'
import {
    NavLink
} from "react-router-dom";
const Navigation = () => {
    return (
        <nav>

            <img src="logo.svg" alt="" />

            <ul>
                <li><NavLink to="/" activeClassName="selected" exact>Home</NavLink></li>
                <li><NavLink to="/destinations" activeClassName="selected">Destinations</NavLink></li>
                <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                <li><NavLink to="/partner" activeClassName="selected">Partner</NavLink></li>

                <div className="navButtons">
                    <WhiteButton content="Login" />
                    <Button content="Register"/>
                </div>
            </ul>

        </nav>
    );
}

export default Navigation;