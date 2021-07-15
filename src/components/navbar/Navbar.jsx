import {React, useState} from 'react'
import "./navbar.scss"
import { Search,
    NotificationsActive,
    ArrowDropDown

} from "@material-ui/icons";


const Navbar = () =>
{
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>
    {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        
        return () => (window.onscroll = null);
    }
    console.log(window.pageYOffset);

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="../assets/netflix-logo/Netflix_logo.svg" alt="Netflix" className="netflixImg"/>
                    <span>HomePage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search  className="icon"/>
                    <span>KID</span>
                    <NotificationsActive className="icon" />
                    <img src="../assets/user/jaggu.jpg" alt="user pic" className="userImg" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Setting</span>
                            <span>LogOut</span>
                        </div>
                        </div>

                </div>
            </div>
            
        </div>
    )
}
export default Navbar;
