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
import "../css_component/kitCommunication.css";

const Kitcommunication = () => {
  return (
    <section className="section-kit">
      {/*start landing  */}
      <div id="home-kit">
        <div className="container">
          <h1>KIT DE kitCommunication</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            accusantium consectetur in voluptates neque. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Suscipit accusantium consectetur
            in voluptates neque
          </p>
          <div className="cards">
            <div className="card">
              <img src={plat2}></img>
              <h2>lorem ipsum</h2>
              <p>
                in voluptates neque. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Suscipit accusantium consectetur in voluptates
                neque
              </p>
            </div>
            <div className="card">
              <img src={plat1}></img>
              <h2>lorem ipsum</h2>
              <p>
                in voluptates neque. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Suscipit accusantium consectetur in voluptates
                neque
              </p>
            </div>
            <div className="card">
              <img src={plat3}></img>
              <h2>lorem ipsum</h2>
              <p>
                in voluptates neque. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Suscipit accusantium consectetur in voluptates
                neque
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <img src={profile}></img>
              <h2>lorem ipsum</h2>
              <p>
                in voluptates neque. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Suscipit accusantium consectetur in voluptates
                neque
              </p>
            </div>
            <div className="card">
              <img src={phone1}></img>
              <h2>lorem ipsum</h2>
              <p>
                in voluptates neque. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Suscipit accusantium consectetur in voluptates
                neque
              </p>
            </div>
            <div className="card">
              <img src={plat2}></img>
              <h2>lorem ipsum</h2>
              <p>
                in voluptates neque. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Suscipit accusantium consectetur in voluptates
                neque
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end  landing  */}
      {/*container phots*/}
      <div class="steps-kit">
        <div class="container">
          <h1>LOREM IPSUM DOLOR AMET</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            accusantium consectetur in voluptates neque. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Suscipit accusantium consectetur
            in voluptates neque
          </p>
          <div className="steps-content-kit">
            <div className="image-section">
              <img src={phonePc} alt="Icon" className="icon-image"></img>
            </div>
            <div className="text-section">
              <h2>LOREM IPSUM</h2>
              <ul>
                <li>
                  <span className="check-icon">✔</span> Lorem ipsum dolor sit
                  amet
                </li>
                <li>
                  <span className="check-icon">✔</span> Lorem ipsum dolor sit
                  amet
                </li>
                <li>
                  <span className="check-icon">✔</span> Lorem ipsum dolor sit
                  amet
                </li>
              </ul>
              <button className="cta-button">Button</button>
            </div>
          </div>
        </div>
      </div>
      {/*start faq */}
      <div className="faq-section-kit-kit">
        <div className="container">
          <div className="faq-container-kit">
            <h1>Frequently Asked Questions plus</h1>
            <p className="para-faq">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>

            <div className="faq-item-kit">
              <details>
                <summary>
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                  Diam Nonumy Eirmod Tempor ?
                  <img className="icon" src={faqicon}></img>
                </summary>
                <p>
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                  Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                  Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Consetetur
                  Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                  Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At
                  Vero Eos.
                </p>
              </details>
            </div>

            <div className="faq-item-kit">
              <details>
                <summary>
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                  Diam Nonumy Eirmod Tempor ?
                  <img className="icon" src={faqicon}></img>
                </summary>
                <p>
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                  Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                  Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Consetetur
                  Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                  Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At
                  Vero Eos.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
      {/*end faq*/}
      {/*start need more  help*/}

      <div className="more-help">
        <div className="container">
          <h1>Need More Help ?</h1>
          <button>lorem</button>
        </div>
      </div>
    </section>
  );
};
export default Kitcommunication;
