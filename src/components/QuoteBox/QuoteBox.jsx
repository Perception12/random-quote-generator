import "./QuoteBox.css";
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { motion } from "framer-motion";

const QuoteBox = (props) => {
  const transition = { type: "free", duration: 1.5 };
  const fontstyle = {
    color: props.color,
  };

  const buttonStyle = {
    backgroundColor: props.color,
  };

  return (
    <motion.div
      key={props.id}
      initial={{ opacity: 0.1, x:-100 }}
      animate={{ opacity: 1, x:0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={transition}
      style={fontstyle}
      id="quote-box"
    >
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
        <span
          onClick={props.click}
          className="button"
          id="new-quote"
          style={buttonStyle}
        >
          New quote
        </span>
      </div>
    </motion.div>
  );
};

QuoteBox.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  color: PropTypes.string,
};

export default QuoteBox;
