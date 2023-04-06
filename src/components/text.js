import '../App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Text(props){
    return (
      <>
        <div id="text" className='fade-in-fade-out'>
          <p
            style={{
              color: `${props.color}`,
              animation: `fade-inout ${props.fade}s alternate`,
            }}
          >
            {" "}
            <i className="bi bi-quote"></i> {props.text.quote}
          </p>
        </div>
        <div id="author">
          <p style={{ color: `${props.color}` }}>-{props.text.author}</p>
        </div>
      </>
    );
}