import React from "react";
import video1 from "../images/video.mp4";
import plat1 from "../images/plat1.avif";
import plat2 from "../images/plat2.avif";
import plat3 from "../images/plat3.avif";
import profile from "../images/profile.cv.jpg";
import play_icon from "../images/iconePlay.png";
import faqicon from "../images/faqicone.PNG";
import "../css_component/grande-entreprise.css";
import phone from "../images/phone.avif";
import phone1 from "../images/phone1.PNG";
import phonePc from "../images/phone-pc.avif";

const GrandeEntreprise = () => {
  return (
    <section>
      {/*start landing  */}
      <div id="home-entreprise">
        <h2>A nice section heading goes here</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          accusantium consectetur in voluptates neque.molestiae illum eaque
          praesentium esse. Quos iusto. accusantium consectetur in voluptates
          neque.molestiae illum eaque praesentium esse. Quos
        </p>
        <a href="#" className="btn-reservation1 home-btn">
          Sign Up
        </a>
      </div>
      {/*end  landing  */}
      {/*container video Home*/}
      <div class="video-container-entreprise">
        <div class="container">
          <h2>RESTAURANT REVIEW</h2>
          <video width="900" controls>
            <source src={video1} type="video/mp4" />
          </video>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            accusantium consectetur in voluptates neque. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Suscipit accusantium consectetur
            in voluptates neque
          </p>
        </div>
      </div>
      {/*photos container*/}
      <div className="photos-container-entreprise">
        <div class="container">
          <h2 class="mainTitle">Photos container</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            accusantium consectetur in voluptates neque. Lorem ipsum dolor.
          </p>
          <div class="cards">
            <div class="card">
              <img src={plat1} alt="" />
              <div class="info">
                <h3>plat1</h3>
                <p>
                  I have created my own portfolio showcasing my skills,
                  projects, and achievements, providing a comprehensive insight
                  into my capabilities.
                </p>
              </div>
            </div>
            <div class="card">
              <img src={plat2} alt="" />
              <div class="info">
                <h3>plat2</h3>
                <p>
                  using HTML, CSS, and JavaScript, integrating a provided API
                  for live data. Designed an intuitive interface with responsive
                  layouts and smooth interactions.
                </p>
              </div>
            </div>
            <div class="card">
              <img src={plat3} alt="" />
              <div class="info">
                <h3>plat 3</h3>
                <p>
                  I have developed a website aimed at teaching individuals how
                  to create their own websites, providing valuable resources and
                  guidance for aspiring web developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* get started boutton */}
      <div className="started-boutton">
        <div className="container">
          <h2>
            LOREM IPSUM DOLOR SIT AMET , CONSETETUR SADISCING ELITR , SED DIAM
            NONUMY EIRMOD
          </h2>
        </div>
        <a href="#">Get started</a>
      </div>
      {/*a propos entreprise*/}
      <div id="a-propos-entreprise">
        <div class="container">
          <div class="img-desc">
            <div class="left">
              <img src={plat2}></img>
            </div>
            <div class="right">
              <p>
                Nous voyageons pour chercher d'autres états, d'autres vies,
                d'autres, âmes.
              </p>
              <h1>titre lorem pour cette photo</h1>
              <p>
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
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end a propos*/}
      {/*start phone container*/}
      <div id="phones-container-entreprise">
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
      {/*end phone container*/}
      {/*start  minuteur container*/}
      <div id="minuteur-entreprise">
        <div className="container">
          <div className="minuteurs">
            <div className="minu">
              <span>0000</span>
              <h3>lorem ipsum</h3>
            </div>
            <div className="minu">
              <span>0000</span>
              <h3>lorem ipsum</h3>
            </div>
            <div className="minu">
              <span>0000</span>
              <h3>lorem ipsum</h3>
            </div>
          </div>
        </div>
      </div>
      {/*end  minuteur container*/}
      {/*start press*/}
      <div className="press">
        <div className="container">
          <h1>
            Lorem ipsum <span>Dolor Sit Amet</span>Consetetur
          </h1>
          <div className="images">
            <img src={plat3}></img>
            <img src={plat3}></img>
            <img src={plat3}></img>
            <img src={plat3}></img>
            <img src={plat3}></img>
            <img src={plat3}></img>
          </div>
        </div>
      </div>
      {/*end press*/}
      {/*start faq entreprise */}
      <div className="faq-section-entreprise">
        <div className="container">
          <div className="faq-container-entreprise">
            <h1>Frequently Asked Questions plus</h1>
            <p className="para-faq">
              Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>

            <div className="faq-item-entreprise">
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
export default GrandeEntreprise;
