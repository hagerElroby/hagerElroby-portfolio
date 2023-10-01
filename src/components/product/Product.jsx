import "./Product.css";
import githupimg from '../../img/github (1).svg';
import webimg from '../../img/globe-solid (1).svg'

const Product = ({img,link ,githup}) => {
  return (
    <div className="card">
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
    <div className="btn">
        <a href={link} target="_blank" rel="noreferrer">
            <button>Demo</button>
        </a>
        <a href={githup} target="_blank" rel="noreferrer">
            <button>Githup</button>
        </a>
    </div>
    </div>
  );
};

export default Product;