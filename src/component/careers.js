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
import restaurant from "../images/restaurantHome.jpg";
import "../css_component/careers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const images = [
  restaurant, // Remplace par le chemin réel de tes images
  plat2,
  plat3,
  phone1,
  phonePc,
  plat3,
  plat2,
  plat1,
  phone1,
];

const Careers = () => {
  const visibleImages = 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
  };

  const nextSlide = () => {
    if (currentIndex < images.length - visibleImages) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section  className="section-carers">
      {/*start landing  */}
      <div id="home-carers">
        <div className="carousel-home">
          <button
            className="carousel-control-home prev-home"
            onClick={prevSlide}
          >
            <img src={faqicon}></img>
          </button>
          <div className="carousel-images-home">
            {images
              .slice(currentIndex, currentIndex + 1)
              .map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index}`} />
              ))}
          </div>
          <button className="carousel-control next-home" onClick={nextSlide}>
            <img src={faqicon}></img>
          </button>
        </div>
        <div className="third-images">
          <div className="im">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              accusantium consectetur{" "}
            </p>
            <img src={plat2}></img>
          </div>
          <div className="im">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              accusantium consectetur{" "}
            </p>
            <img src={plat2}></img>
          </div>
          <div className="im">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              accusantium consectetur{" "}
            </p>
            <img src={plat2}></img>
          </div>
        </div>
      </div>
      {/*end  landing  */}
      {/*start team */}
      <div id="avant-team-container" class="team-container">
        <div class="container">
          <h1>
            LOREM IPSUM <span>DOLOR</span>SIT <span>AMET</span>
          </h1>
          <p className="para-avant-team">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quaerat ipsam officiis
            atque, doloremque eos reprehenderit deleniti ipsum dicta aliquid
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quaerat ipsam officiis
            atque, doloremque eos reprehenderit
          </p>
          <div className="right-left">
            <div className="left">
              <img src={plat1}></img>
              <img src={plat2}></img>
              <img src={plat3}></img>
            </div>
            <div className="right">
              <div className="card">
                <span>1</span>
                <div className="info-card">
                  <h2>LOREM IPSUM</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat ipsam officiis atque, doloremque eos reprehenderit
                  </p>
                </div>
              </div>
              <div className="card">
                <span>2</span>
                <div className="info-card">
                  <h2>LOREM IPSUM</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat ipsam officiis atque, doloremque eos reprehenderit
                  </p>
                </div>
              </div>
              <div className="card">
                <span className="span3">3</span>
                <div className="info-card">
                  <h2>LOREM IPSUM</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat ipsam officiis atque, doloremque eos reprehenderit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*phones container*/}
      <div id="team-container">
        <div class="container">
          <h1>JOIN OUR TEAM</h1>
          <p className="para-avant-team">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quaerat ipsam officiis
            atque, doloremque eos reprehenderit deleniti ipsum dicta aliquid
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quaerat ipsam officiis
            atque, doloremque eos reprehenderit
          </p>
          <div className="right-left">
            <div className="left">
              <img src={profile}></img>
            </div>
            <div className="right">
              <div className="images">
                <img src={profile}></img>
                <img src={profile}></img>
                <img src={profile}></img>
                <img src={profile}></img>
                <img src={profile}></img>
              </div>
              <div className="trait"></div>
              <h2>JOHN DOE</h2>
              <span>WEB DEVELLOPERS </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam
                officiis atque, doloremque eos reprehenderitdolor sit amet
                consectetur adipisicing elit. Quaerat ipsam officiis atque,
                doloremque eos reprehenderit deleniti ipsum dicta aliquid Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quaerat ipsam
                officiis atque, doloremque eos reprehenderit
              </p>
              <div className="team-icons">
                <a
                  href="#"
                  className="icon-team facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  className="icon-team linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="#"
                  className="icon-team twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end a propos*/}
      {/*start phone2 section*/}
      <div id="join-us" className="join us">
        <div class="container">
          <h1>
            dolor sit amet consectetur adipisicing elit. Quaerat ipsam officiis
            atque, doloremque{" "}
          </h1>
          <div className="button-join-us">
            <button>join us now</button>
          </div>
        </div>
      </div>

      {/*start faq */}
      <div className="faq-section-carers">
        <div className="container">
          <div className="faq-container-carers">
            <h1>Frequently Asked Questions plus</h1>
            <p className="para-faq">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>

            <div className="faq-item-carers">
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

            <div className="faq-item-carers">
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
      <div className="trait-final"></div>
    </section>
  );
};
export default Careers;
