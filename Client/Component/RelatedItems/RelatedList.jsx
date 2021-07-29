import React, { useRef, useState, useEffect } from 'react';
// import axios from 'axios';
import RelatedCard from './RelatedCard.jsx';
import sample from './sampledata.js';

const RelatedList = (props) => {
  // -------- Scroll Arrows ----------
  const listRef = useRef(null);

  const scrollToLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const scrollToRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  // ------- Popup window Click ----------
  const [starPopup, setStarPopup] = useState(false);

  // -------- Remove popup window --------
  const ClosePopup = (popRef) => {
    useEffect(() => {
      let handleClickOutside = (event) => {
        if (popRef.current && ! popRef.current.contains(event.target)) {
          // close up the popup
          setStarPopup(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [popRef]);
  };

  // --------------------------------------------
  return (
    <div className="related-container">
      <div className="list-title">Related Products<br></br></div>
      <div className="carousel">
        <button className="carousel-button-left" >
          <i className="fas fa-angle-left fa-3x" onClick={scrollToRight}></i>
        </button>
        <div className="carousel-track-container">
          <div className="carousel-slide" ref={listRef}>
            {sample.sampledata.map((product) => (
              <RelatedCard product={product} setStarPopup={setStarPopup} starPopup={starPopup} ClosePopup={ClosePopup}/>
            ))}
          </div>
        </div>
        <button className="carousel-button-right" >
          <i className="fas fa-angle-right fa-3x" onClick={scrollToLeft}></i>
        </button>
      </div>
    </div>
  );
};

export default RelatedList;

//res.data.results.
{/* <img></img> */ }
{/* should access img with different url  */ }

// const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products`;
  // const [products, setProducts] = useState({
  //   data: null,
  //   error: false
  // });

  // useEffect(() => {
  //   setProducts({
  //     data: null,
  //     error: false
  //   });
  //   axios.get(url)
  //     .then(res => {
  //       setProducts({
  //         data: res.data,
  //         error: false
  //       });
  //     })
  //     .catch(() => {
  //       setProducts({
  //         data: null,
  //         error: true
  //       })
  //     });
  // }, [url])

  // var content = null;

  // if (products.error) {
  //   content = <p>There was an error</p>
  // }

  // if (products.data) {
  //   content =
    // <div>
    //   <div>{products.data.category}</div>
    //   <div>{products.data.name}</div>
    //   <div>{products.data.default_price}</div>
    // </div>
