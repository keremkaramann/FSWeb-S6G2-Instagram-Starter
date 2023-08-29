// MUÜ için bu dosyayı değiştirmenize gerek yok
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCircle,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./AramaCubugu.css";
import { useState } from "react";

const AramaCubugu = ({ gonderiler }) => {
  /*  const [search, setSearch] = useState("");

  const filtered = gonderiler.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const searchItems = (e) => {
    setSearch(e.target.value);
  }; */

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input type="text" placeholder="Arama" />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
      {/*  <div className="filtered-results">
        {filtered.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div> */}
    </div>
  );
};

export default AramaCubugu;
