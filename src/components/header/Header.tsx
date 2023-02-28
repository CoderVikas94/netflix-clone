import "./header.css";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { BsFillBellFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearchData, setSearchEmpty } from "../../store/searchSlice";

const Header = () => {
  const [show, setShow] = useState("none");
  const [search, setSearch] = useState("");
  const [navChange, setnavChange] = useState("");

  console.log(show);
  

  const Dispatch = useDispatch();
  const scrollBar = () => {
    if (window.scrollY >= 80) {
      setnavChange("sticky");
    } else if (window.scrollY >= 0) {
      setnavChange("");
    } else {
      setnavChange("");
    }
  };
  window.addEventListener("scroll", scrollBar);

  const handleChange = async (e: any) => {
    setSearch(e.target.value);
    await axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&language=en-US&include_adult=false&query=${e.target.value}`
      )
      .then((response) => Dispatch(setSearchData(response)));
  };

  return (
    <div className={`header_box ${navChange}`}>
      <div className="header_list_box">
        <img src={logo} alt="netflix-logo" />
        <ul>
          <li
            onClick={() => {
              Dispatch(setSearchEmpty());
              setSearch("");
            }}
          >
            Home
          </li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="user_box">
        <input
          type="text"
          onChange={handleChange}
          value={search}
          className="input"
          placeholder="Title , genres, people"
          style={{ display: show }}
          onMouseLeave ={() => setShow("none")}
        />
        <HiOutlineSearch
          style={{ fontSize: "1.5rem" }}
          className={show === "block" ? "search-icon" : "icon"}
          onClick={() => setShow("block")}
          
        />
        <p>KIDS</p>
        <p>DVD</p>
        <BsFillBellFill className="icon" />
        <FaUserAlt className="icon" />
      </div>
    </div>
  );
};

export default Header;
