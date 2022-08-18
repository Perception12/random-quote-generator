import "./App.css";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  var initData = [{ quote: "", author: "" }];
  var index = Math.floor(Math.random() * 102);
  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  var colorIdx = Math.floor(Math.random() * colors.length)


  const [quoteData, setQuoteData] = useState([initData[0]]);
  const [data, setData] = useState(null);
  const [color, setColor] = useState(colors[colorIdx]);

  
  

  var getData = async () => {
    var result;
    try {
      const { data: response } = await axios.get(url, {
        headers: { Accept: "application/json" },
      });
      result = [...response.quotes];
      setQuoteData(result[index]);
    } catch (err) {
      console.error(err);
    }

    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  var quoteHandler = () => {
    index = Math.floor(Math.random() * data.length)
    colorIdx = Math.floor(Math.random() * colors.length)
    setQuoteData(data[index]);
    setColor(colors[colorIdx])
  };

  return (
    <div className="App">
      <div style={{backgroundColor: color}} className="app-container">
      <QuoteBox
        quote={quoteData.quote}
        author={quoteData.author}
        color={color}
        click={quoteHandler}
      />
      </div>
    </div>
  );
}

export default App;
