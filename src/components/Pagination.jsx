import { useState, useEffect } from "react";

function Pagination({ numberOfPages, currPage, setCurrPage }) {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(true);

  const pageNumber = [...Array(numberOfPages + 1).keys()].slice(1);

  const prevBtn = () => {
    if (currPage !== 1) {
      setCurrPage(currPage - 1);
    }
  };

  const nextBtn = () => {
    if (currPage !== numberOfPages) {
      setCurrPage(currPage + 1);
    }
  };

  useEffect(() => {
    if (currPage > 1) {
      setDisabledPrev(false);
    } else {
      setDisabledPrev(true);
    }

    if (currPage === numberOfPages) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  }, [currPage, numberOfPages]);



  return (
    <div>
      <section className="pagination">
        <div className={disabledPrev ? "disabled" : "prev"}>
          <p onClick={prevBtn}>Prev</p>
        </div>
        <div className="pagination-num">
          {pageNumber.map((num) => (
            <div key={num}>
              <p
                onClick={() => setCurrPage(num)}
                className="pagination-child"
              >
                {num}
              </p>
            </div>
          ))}
        </div>
        <div className={disabledNext ? "disabled" : "next"}>
          <p onClick={nextBtn}>Next</p>
        </div>
      </section>
    </div>
  );
}

export default Pagination;