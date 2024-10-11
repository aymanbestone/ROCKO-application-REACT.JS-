import React from "react";
import video1 from "../images/video.mp4";
import plat1 from "../images/plat1.avif";
import plat2 from "../images/plat2.avif";
import plat3 from "../images/plat3.avif";
import profile from "../images/profile.cv.jpg";
import play_icon from "../images/iconePlay.png";
import faqicon from "../images/faqicone.PNG";
import "../css_component/home.css";

const Home = () => {
  const playVideo = () => {
    const video = document.getElementById("video");
    const playIcon = document.querySelector(".play-icon");
    playIcon.style.display = "none";
    video.play();
  };
  return (
    <section>
      {/*start landing  */}
      <div id="home">
        <h2>Éveillez vos Papilles</h2>
        <h4>avec Nos Délices</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          accusantium consectetur in voluptates neque.
        </p>
        <p>molestiae illum eaque praesentium esse. Quos iusto.</p>
        <div className="btns-reser">
          <a href="#" className="btn-reservation1 home-btn">
            Sign Up
          </a>
          <a href="#" className="btn-reservation2 home-btn">
            Live Demo
          </a>
        </div>
      </div>
      {/*end  landing  */}
      {/*container video Home*/}
      <div class="video-container">
        <div class="container">
          <h2 class="mainTitle">RESTAURANT REVIEW</h2>
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
      <div className="photos-container">
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
      {/*a propos*/}
      <div id="a-propos">
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
      {/*start nice section*/}
      <div className="nice-section">
        <div class="container">
          <div className="right-left">
            <div className="left">
              <h1>A nice section heading goes here</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam
                officiis atque, doloremque eos reprehenderit deleniti ipsum
                dicta aliquid Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="check-list">
                <li>here goes futures number1</li>
                <li>here goes futures number2</li>
                <li>here goes futures number3</li>
              </ul>
            </div>
            <div className="right">
              <div className="computer">
                <div className="camera"></div>
                <div className="screen">
                  <div className="screen-content">
                    <div className="line top-line"></div>
                    <div className="line bottom-line"></div>
                  </div>
                </div>
                <div class="keyboard"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end  nice section*/}
      {/*start testemonials*/}
      <div className="about" id="about">
        <div className="container">
          <div class="about-content">
            <div className="image">
              <img src={profile} alt="" />
            </div>
            <div class="text">
              <h1>Testemonials</h1>
              <p>
                Je suis <span>xxxx</span>,Lorem ipsum dolor sit amet consectetur
                adipisicing elit.Lorem ipsum dolor sit amet consectetur
                adipisicing elit.Lorem ipsum dolor sit amet consectetur
                adipisicing elit.Lorem ipsum dolor sit amet consectetur
                adipisicing elit.Lorem ipsum dolor sit amet consectetur
                adipisicing elit.Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <h2>Ayman elhilali</h2>
              <p>Full stack developper</p>
            </div>
          </div>
        </div>
      </div>
      {/*end testemonials*/}
      {/*start live demo*/}
      <div class="live-demo" id="live-demo">
        <div class="container">
          <h1>
            Lorem Ipsum Dolor Sit Amet Consetetur Sadipscing Dolor Sit Amet amet
            amet
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div class="ordinateur">
            <div class="top-bar">
              <div class="camera"></div>
              <div class="camera"></div>
              <div class="camera"></div>
            </div>
            <div class="screen">
              <video id="video" controls>
                <source src={video1} type="video/mp4" controls />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
              <img class="play-icon" src={play_icon} onClick={playVideo} />
            </div>
          </div>

          <button
            className="demo-button"
            onClick={() => (window.location.href = "#")}
          >
            Get Live Demo
          </button>
        </div>
      </div>
      {/*end  live demo*/}
      {/*start features*/}
      <div className="features">
        <div className="container">
          <div className="feat">
            <div className="first-feat">
              <h1>Feature #1</h1>
              <p>
                consectetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                eirmod tempor invidunt ut labore et dolore magna
              </p>
            </div>
            <div className="second-feat">
              <h1>Feature #1</h1>
              <p>
                consectetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                eirmod tempor invidunt ut labore et dolore magna
              </p>
            </div>
          </div>
          <div className="feat">
            <img src={plat2} />
          </div>
          <div className="feat">
            <div className="first-feat">
              <h1>Feature #1</h1>
              <p>
                consectetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                eirmod tempor invidunt ut labore et dolore magna
              </p>
            </div>
            <div className="second-feat">
              <h1>Feature #1</h1>
              <p>
                consectetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                eirmod tempor invidunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*endfeatures*/}
      {/*start press*/}
      <div className="press">
        <div className="container">
          <h1> IN THE PRESs</h1>
          <div className="images">
            <img src={plat3}></img>
            <img src={plat3}></img>
            <img src={plat3}></img>
            <img src={plat3}></img>
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
export default Home;
