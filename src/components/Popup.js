import React from "react";

function Popup(props) {
  return props.trigger ? (
    <>
      <div className="popup">
        <div className="pop-inner">
          <div className="container">
            <div className="row">
                <div className="col-lg-11">
                    <h2>Popup Form</h2>
                </div>
              <div className="col-lg-1">
                <button
                  className="close-btn"
                  onClick={() => props.setTrigger(false)}>X</button>
                {/* <h1>ashbaskjbfaksjb</h1> */}
              </div>
            </div>
            <div className="row">
                <div className="col">
                <p>hey this is a new pop up</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default Popup;
