import React, { useState } from "react";
import "../css_component/suppliers.css";
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

const images = [
  plat1, 
  plat2,
  plat3,
  phone1,
  phonePc,
  plat3,
  plat2,
  plat1,
  phone1,
  profile,
];

const Suppliers = () => {
  const visibleImages = 5; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {

    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);

  };

  const nextSlide = () => {
    if (currentIndex < images.length - visibleImages) 
    {setCurrentIndex(currentIndex+1);}
  };

  return (
    <section>
      {/*start landing  */}
      <div id="home-suppliers">
        <h1>logo</h1>
        <h2>Éveillez vos Papilles</h2>
        <h4>avec Nos Délices</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          accusantium consectetur in voluptates neque.
        </p>
        <p>molestiae illum eaque praesentium esse. Quos iusto.</p>
        <div className="btns-reser">
          <a href="#" className="btn-reservation1 home-btn">
            Button
          </a>
        </div>
        <div className="play-whatch">
          <img src={play_icon} />
          <a href="#">whatch how it works ?</a>
        </div>
      </div>
      {/*end  landing  */}
      {/*container phots*/}
      <div class="phot-container">
        <div class="container">
          <h1>LOREM IPSUM DOLOR AMET</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            accusantium consectetur in voluptates neque. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Suscipit accusantium consectetur
            in voluptates neque
          </p>
          <div className="phots">
            <div class="card">
              <img src={plat1} alt="" />
              <div class="info">
                <h3>LOREM IPSUM</h3>
                <p>
                  I have created my own portfolio showcasing my skills,
                  projects, and achievements, providing a comprehensive insight
                  into my capabilities.
                </p>
              </div>
            </div>
            <div class="card">
              <img src={plat1} alt="" />
              <div class="info">
                <h3>LOREM IPSUM</h3>
                <p>
                  I have created my own portfolio showcasing my skills,
                  projects, and achievements, providing a comprehensive insight
                  into my capabilities.
                </p>
              </div>
            </div>
            <div class="card">
              <img src={plat1} alt="" />
              <div class="info">
                <h3>LOREM IPSUM</h3>
                <p>
                  I have created my own portfolio showcasing my skills,
                  projects, and achievements, providing a comprehensive insight
                  into my capabilities.
                </p>
              </div>
            </div>
          </div>
          {/*comme a propos ici*/}
          <div className="img-descr">
            <div className="lefts">
              <img src={plat2}></img>
            </div>
            <div className="rights">
              <span>
                Nous voyageons pour chercher d'autres états, d'autres vies,
                d'autres, âmes.
              </span>
              <h1>titre lorem pour cette photo</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam
                officiis atque, doloremque eos reprehenderit deleniti ipsum
                dicta aliquid Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat ipsam officiis atque, doloremque eos reprehenderit
                deleniti ipsum dicta aliquid Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat ipsam officiis atque,
                doloremque eos reprehenderit deleniti ipsum dicta aliquid Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*phones container*/}
      <div id="phones-container">
        <div class="container">
          <h2>LORUM DISPMUM DOLOR SIT AMET</h2>
          <div class="img-desc">
            <div class="left">
              <img src={phone1}></img>
            </div>
            <div class="right">
              <p>
                Nous voyageons pour chercher d'autres états, d'autres vies,
                d'autres, âmes.
              </p>
              <h1>
                LORUM DISPMUM DOLOR SIT <br /> AMET
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam
                officiis atque, doloremque eos reprehenderit deleniti ipsum
                dicta aliquid Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat ipsam officiis atque, doloremque eos reprehenderit
              </p>
              <p>
                deleniti ipsum dicta aliquid Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat ipsam officiis atque,
                doloremque eos reprehenderit deleniti ipsum dicta aliquid Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end a propos*/}
      {/*start phone2 section*/}
      <div id="phone2-container" className="phone2-container">
        <div class="container">
          <div className="droite-gauche">
            <div className="gauche">
              <img src={phone1}></img>
              <img src={phone1} className="img2"></img>
            </div>
            <div className="droite">
              <h1>
                LOREM IPSUM DOLOR SIT <br /> amet , Consetetur{" "}
              </h1>
              <p>
                {" "}
                consectetur adipisicing elit. Quaerat ipsam officiis atque,
                doloremque eos reprehenderit deleniti ipsum dicta aliquid Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="form ">
                <div>
                  <img src={plat3}></img>
                </div>
                <div>
                  <h2>ORDERS FROM SUPLLIERS</h2>
                  <p>
                    eos reprehenderit deleniti ipsum dicta aliquid Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="form form2">
                <div>
                  <img src={plat3}></img>
                </div>
                <div>
                  <h2>ORDERS FROM SUPLLIERS</h2>
                  <p>
                    eos reprehenderit deleniti ipsum dicta aliquid Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="form form3">
                <div>
                  <img src={plat3}></img>
                </div>
                <div>
                  <h2>ORDERS FROM SUPLLIERS</h2>
                  <p>
                    eos reprehenderit deleniti ipsum dicta aliquid Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="form ">
                <div>
                  <img src={plat3}></img>
                </div>
                <div>
                  <h2>ORDERS FROM SUPLLIERS</h2>
                  <p>
                    eos reprehenderit deleniti ipsum dicta aliquid Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end  nice section*/}
      {/*how it works */}
      <div className="how-works" id="how-works">
        <div className="container">
          <h1>How it works ?</h1>
          <div className="rond-step">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="trait">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="steps">
            <div className="step">
              <h2>STEP #1 </h2>
              <p>
                eos reprehenderit deleniti ipsum dicta aliquid Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="step">
              <h2>STEP #2 </h2>
              <p>
                eos reprehenderit deleniti ipsum dicta aliquid Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="step">
              <h2>STEP #3 </h2>
              <p>
                eos reprehenderit deleniti ipsum dicta aliquid Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end testemonials*/}
      {/*start live demo*/}
      <div class="computer-phone" id="computer-phone">
        <div class="container">
          <h1>
            AVAILABLE ON <span>DESKTOP </span>AND <span> MOBILE</span>
          </h1>
          <p>
            {" "}
            eos reprehenderit deleniti ipsum dicta aliquid Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.eos reprehenderit deleniti ipsum dicta
            aliquid Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="image">
            <img src={phonePc}></img>
          </div>
        </div>
      </div>
      <div className="espace"></div>
      {/*end  live demo*/}

      {/*start press*/}
      <div className="press-photos">
        <div className="container">
          <h1> IN THE PRESs</h1>
          <div className="carousel-container">
            <h1>
              Lorem ipsum <span>dolor</span> sit amet
            </h1>
            <div className="carousel">
              <button className="carousel-control prev" onClick={prevSlide}>
                <img src={faqicon}></img>
              </button>
              <div className="carousel-images">
                {images.slice(currentIndex, currentIndex + 5)
                  .map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                  ))}
              </div>
              <button className="carousel-control next" onClick={nextSlide}>
              <img src={faqicon}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*end press*/}
      {/*start faq */}
      <div className="faq-section">
        <div className="container">
          <div className="faq-container">
            <h1>Frequently Asked Questions plus</h1>
            <p className="para-faq">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>

            <div className="faq-item">
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

            <div className="faq-item">
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

            <div className="faq-item">
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

            <div className="faq-item">
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
    </section>
  );
};
export default Suppliers;
