import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaTumblr } from "react-icons/fa";
export default function Buttons(props) {
  const tweet = `https://twitter.com/intent/tweet?text='${props.text.quote}'-${props.text.author}`;
  return (
    <div className="Buttons-container">
      <div className="social">
        <a
          style={{ backgroundColor: `${props.color}` }}
          className="button"
          id="tweet-quote"
          href={tweet}
        >
          <FaTwitter />
        </a>
        <a
          style={{ backgroundColor: `${props.color}` }}
          className="button"
          id="tumblr-quote"
          target="_top"
          rel="noreferrer"
          href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DFarrah%2BGray%26content%3DBuild%2Byour%2Bown%2Bdreams%252C%2Bor%2Bsomeone%2Belse%2Bwill%2Bhire%2Byou%2Bto%2Bbuild%2Btheirs.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
          
        >
          <FaTumblr />
        </a>
      </div>
      <div className="newQuote">
        <button
          style={{ backgroundColor: `${props.color}` }}
          onClick={props.handlechange}
          className="button"
          id="new-quote"
        >
          New quote
        </button>
      </div>
    </div>
  );
}
