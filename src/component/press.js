import React, { useState } from "react";
import video1 from "../images/video.mp4";
import plat1 from "../images/plat1.avif";
import plat2 from "../images/plat2.avif";
import plat3 from "../images/plat3.avif";
import profile from "../images/profile.cv.jpg";
import play_icon from "../images/iconePlay.png";
import faqicon from "../images/faqicone.PNG";
import phone from "../images/phone.avif";
import phone1 from "../images/phone1.PNG";
import phonePc from "../images/phone-pc.avif";
import "../css_component/press.css";

const Press = () => {
  return (
    <section className="section-kit">
      {/*start landing  */}
      <div className="landing-press">
        <div className="container">
          <h3>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br />{" "}
            diam nonumy eirmod tempor invidunt ut labore et.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy <br /> eirmod tempor invidunt ut labore et.Lorem ipsum dolor
            sit amet, consetetur <br /> sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et.Lorem <br /> ipsum dolor .
          </p>
          <h3>Lorem ipsum dolor sit amet, consetetur</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy <br /> eirmod tempor invidunt ut labore et.Lorem ipsum dolor
            sit amet, consetetur <br /> sadipscing elitr, sed .
          </p>
        </div>
      </div>
      <div id="images-press">
        <div className="container">
          <h1>
            Lorem ipsum <span>Dolor</span> Sit<span> Amet</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            accusantium consectetur in voluptates neque. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Suscipit accusantium consectetur
            in voluptates neque
          </p>
          <div className="cards">
            <div className="card">
              <img src={plat2}></img>
              <h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore
              </p>
            </div>
            <div className="card">
              <img src={plat2}></img>
              <h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore
              </p>
            </div>
            <div className="card">
              <img src={plat1}></img>
              <h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore
              </p>
            </div>
            <div className="card">
              <img src={plat3}></img>
              <h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <img src={profile}></img>
              <h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore
              </p>
            </div>
            <div className="card">
              <img src={plat2}></img>
              <h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore
              </p>
            </div>
            <div className="card">
              <img src={phone1}></img>
              <h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore
              </p>
            </div>
            <div className="card">
              <img src={plat2}></img>
              <h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end  landing  */}
      <div className="button-view-more">
        <button>view more</button>
      </div>
      {/*container photos */}
      <div className="images-press">
        <div className="container">
          <h1>
            Lorem ipsum <span>Dolor</span> Sit<span> Amet</span>
          </h1>
          <div className="images">
          <img src={plat2}></img>
          <img src={plat1}></img>
          <img src={plat3}></img>
          <img src={phonePc}></img>
          <img src={profile}></img>
          </div>
        </div>
      </div>

    </section>
  );
};
export default Press;
