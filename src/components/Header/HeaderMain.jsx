import { Link } from "react-router-dom";


const HeaderMain = ({ title, logo }) => {

    return (
        <header className="header_geral">
             <img className="nav-icon_img" src={logo} alt="" height="100px" width="100px" />
             <p>{title}</p>
        </header>
    )
}

export default HeaderMain;