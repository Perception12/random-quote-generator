import "./QuoteBox.css";
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";


const QuoteBox = (props) => {
  const fontstyle = {
    color: props.color,
  };

  const buttonStyle = {
    backgroundColor: props.color,
  };

  return (
    <div style={fontstyle} id="quote-box">
      <span id="text">
        {" "}
        <FontAwesomeIcon icon={solid("quote-left")} /> {props.quote}
      </span>
      <span id="author">-{props.author}</span>

      <div className="buttons">
        <div className="links">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${props.quote}" - ${props.author}`}
            id="tweet-quote"
            target="_top"
            className="button"
            style={buttonStyle}
          >
            <FontAwesomeIcon icon={brands("twitter")} width="20px" />
          </a>
          <a href="#" id="tumblr" className="button" style={buttonStyle}>
            <FontAwesomeIcon icon={brands("tumblr")} width="20px" />
          </a>
        </div>
        <span onClick={props.click} className="button" id="new-quote" style={buttonStyle}>
          New quote
        </span>
      </div>
    </div>
  );
};

QuoteBox.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  color: PropTypes.string,
};

export default QuoteBox;
