import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CustomModal from "../../components/CustomModal/CustomModal";
import { HomeWrapperStyled } from "./style";

const Home = () => {
  const [ open, setOpen, card ] = useState(false);
  const [cardType, setCardType] = useState('')

  const onCardClick = (cardType) => {
    setOpen(true);
    setCardType(cardType);
  };

  return (
    <HomeWrapperStyled>
      <Header />
      <section className="banner-wrapper">
        <img className="banner-image" src="/banner.jpg" />
        <p className="main-tagline">Aerospace Embedded Systems</p>
        <p className="sub-tagline">
          Design, Development, and Commercialization
        </p>
      </section>

      <section id="about" className="about-us">
        <h3>About Us</h3>
        <p>
          NeonLoops is a start-up company which can design the hardware for
          aerospace and military products such as Frequency Hopped radios, Radio
          Frequency transceiver, Power Amplifiers, FPGA based embedded systems,
          pulsed transmitter. We have the facility to design the FPGA boards, RF
          circuits and PCBs.
        </p>
      </section>

      <section id="services" className="services-section">
        <article className="services-wrapper">
          <h3>Services</h3>
          <article className="services">
            <ul>
              <li>System/Algorithm design and implementation</li>
              <li>
                Co-simulation & co-verification (C/ C++/MATLAB/ VHDL/ Verilog)
              </li>
              <li>Hardware compilation</li>
              <li>FPGA Implementation</li>
              <li>Systems analysis and design strategy</li>
            </ul>
            <ul>
              <li>System implementation capability</li>
              <li>RF Circuit Design</li>
              <li>PCB Designing</li>
              <li>Data Analytics</li>
              <li>Data Visualization</li>
            </ul>
          </article>
        </article>
      </section>

      <section id="projects" className="projects-section">
        <h3>Our Projects</h3>
        <article className="card-wrapper">
          <article className="card" onClick={()=>onCardClick("cardOne")}>
            <h4>Frequency Hopped Radio</h4>
            <img className="card-image" src="/frequency-hopped-radio.png" />
            <p>
              Over the last ten years, a new commercial market place has been
              emerging, called spread spectrum. In the next several years,
              hardly anyone will escape being involved, in some way with spread
              spectrum communications.
            </p>
          </article>
          <article className="card" onClick={()=>onCardClick("cardTwo")}>
            <h4>Emulation Platform for Radiation Testing on FPGA</h4>
            <img className="card-image" src="/emulation-platform.png" />
            <p>
              Predicting the mitigation requirements for the electronic
              components operated in the radiation concerns environment e.g.,
              outer space is a designer preference over radiation-tolerant
              circuits.
            </p>
          </article>
          <article className="card" onClick={()=>onCardClick("cardThree")}>
            <h4>Fault emulation platform & Cosmic Radiations on FPGA</h4>
            <img className="card-image" src="/fault-emulation.png" />
            <p>
              In this project, I have developed an FPGA platform that can be
              operated under neutron radiations to efficiently observe the
              behaviours of the FPGA under the radiation.
            </p>
          </article>
          <article className="card" onClick={()=>onCardClick("cardFour")}>
            <h4>Auditory Orientation Aid for Astronauts</h4>
            <img className="card-image" src="/auditory-orientation.png" />
            <p>
              Let's imagine that after many years of dreaming, you're going into
              space! Unfortunately, when you get into orbit, you're miserable!
              Like most astronauts, you experience malaise, disorientation,
              dizziness, nausea, and even vomiting.
            </p>
          </article>
          <article className="card" onClick={()=>onCardClick("cardFive")}>
            <h4>MORFIN - MIST Lab Orbital Radiation Fault INjector</h4>
            <img className="card-image" src="/morfin.png" />
            <p>
              This project provides an estimate of the fault rates for Xilinx
              FPGA. This project can predict and inject single bit faults into
              the FPGA SRAM cells. The faults inserted depends on the orbital
              radiations provided by the CREME96 model.
            </p>
          </article>
          <article className="card" onClick={()=>onCardClick("cardSix")}>
            <h4>Radiation-tolerant FPGA architectures</h4>
            <img className="card-image" src="/radiation-tolrent.png" />
            <p>
              Outside the protective cocoon of Earth's atmosphere, extreme
              temperature changes, vacuum and high radiation make for a
              particularly harsh environment for electronic systems.
            </p>
          </article>
          <article className="card" onClick={()=>onCardClick("cardSeven")}>
            <h4>Optimizing Hashing Algorithms for BlockChain Systems</h4>
            <img className="card-image" src="/hashing.png" />
            <p>
              The purpose of this project is to provide the FPGA implementation
              of the X16R algorithm intends to solve this problem by constantly
              disrupting the ordering of the hashing algorithms.
            </p>
          </article>
          <article className="card" onClick={()=>onCardClick("cardEight")}>
            <h4>FPGA Implementation of AES-based Crypto Processor</h4>
            <img className="card-image" src="/crypto-processor.png" />
            <p>
              Increased demand for data security is an undeniable fact. Towards
              achieving higher security, cryptographic algorithms play an
              important role in the protection of data from unapproved usage.
            </p>
          </article>
          <article className="card" onClick={()=>onCardClick("cardNine")}>
            <h4>Implementation of Radar Signal Processor on FPGA</h4>
            <img className="card-image" src="/radar-signal.png" />
            <p>
              Implement Radar Equation along with pulse compression algorithm on
              FPGA, Implement Doppler shift to detect target velocity, Implement
              pulse-Doppler waveforms
            </p>
          </article>
          <article className="card" onClick={()=>onCardClick("cardTen")}>
            <h4>Radar Signal Processing FPGA based Boards</h4>
            <img className="card-image" src="/signal-processing.png" />
            <p>
              By using a commercial off-the-shelf (COTS)-based mission
              management system, you can significantly speed up the development
              of a high-performance signal processing and Electronic Warfare
              (EW) system through pre-qualification, pre-integration and
              pre-validation from NeonLoops.
            </p>
          </article>
        </article>
      </section>

      <Footer />
      <CustomModal open={open} setOpen={setOpen} cardType={cardType}/>
    </HomeWrapperStyled>
  );
};

export default Home;
