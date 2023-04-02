import React from "react";

function Banner(prop) {
   
  
  return (
    <>
      <section class={prop.bannerclass} style={{ backgroundImage: `url(${prop.backgroundImage})` }} >
        <div class="container">
          <div class="row">
            <h1>{prop.h1}</h1>
            <p>{prop.para}</p>
           
            <span>
              <a href="#">
                <button type="button" class="btn btn-primary">
                  {prop.bannerbtn}
                </button>
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
