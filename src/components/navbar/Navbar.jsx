import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon" 
            onClick={()=> dispatch({type: "DARK" })}/>
          </div>
          <div className="item">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2vHEcD6EMIMOzdx6Ydy4Lt6mKc3Zvl2j_b-Vhd_L-o-b6ALejjA0Xcj0SHsVT26WvClVWdqisLUykE6E9BkADT5BpxrOSE6TGlZvbOqkq0Xt6TPj0BSOsHQFdfiO4OIKMfN8nNAJf2Pgom2aHOKESmhOXUcIcXp8c_p8Sztkt7bl8bZcnAxkbS9dH/w1200-h630-p-k-no-nu/Logo%20UDINUS%20(Universitas%20Dian%20Nuswantoro).png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
