import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { HomeWrapperStyled } from "./style";

const Home = () => {
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

      <section id='about' className="about-us">
        <h3>About Us</h3>
        <p>
          NeonLoops is a start-up company which can design the hardware for
          aerospace and military products such as Frequency Hopped radios, Radio
          Frequency transceiver, Power Amplifiers, FPGA based embedded systems,
          pulsed transmitter. We have the facility to design the FPGA boards, RF
          circuits and PCBs.
        </p>
      </section>

      <section id='services' className="services-section">
        <article className='services-wrapper'>
          <h3>Services</h3>
          <article className="services">
            <ul>
              <li>System/Algorithm design and implementation</li>
              <li>
                Co-simulation & co-verification (C/ C++/MATLAB/ VHDL/ Verilog)
              </li>
              <li>Hardware compilation</li>
              <li>FPGA Implementation</li>
            </ul>
            <ul>
              <li>Systems analysis and design strategy</li>
              <li>System implementation capability</li>
              <li>RF Circuit Design</li>
              <li>PCB Designing</li>
            </ul>
          </article>
        </article>
      </section>

      <section id='projects' className="projects-section">
        <h3>Our Projects</h3>
        <article className="card-wrapper">
          <article className="card">
            <h4>Frequency Hopped Radio</h4>
            <p>
              Over the last ten years, a new commercial market place has been
              emerging, called spread spectrum. In the next several years,
              hardly anyone will escape being involved, in some way with spread
              spectrum communications. Common spread spectrum system is of the
              “direct sequence” or “frequency hopping” type, or else some
              combination of these two “hybrids”.
            </p>
          </article>
          <article className="card">
            <h4>Frequency Hopped Radio</h4>
            <p>
              Over the last ten years, a new commercial market place has been
              emerging, called spread spectrum. In the next several years,
              hardly anyone will escape being involved, in some way with spread
              spectrum communications. Common spread spectrum system is of the
              “direct sequence” or “frequency hopping” type, or else some
              combination of these two “hybrids”.
            </p>
          </article>
          <article className="card">
            <h4>Frequency Hopped Radio</h4>
            <p>
              Over the last ten years, a new commercial market place has been
              emerging, called spread spectrum. In the next several years,
              hardly anyone will escape being involved, in some way with spread
              spectrum communications. Common spread spectrum system is of the
              “direct sequence” or “frequency hopping” type, or else some
              combination of these two “hybrids”.
            </p>
          </article>
          <article className="card">
            <h4>Frequency Hopped Radio</h4>
            <p>
              Over the last ten years, a new commercial market place has been
              emerging, called spread spectrum. In the next several years,
              hardly anyone will escape being involved, in some way with spread
              spectrum communications. Common spread spectrum system is of the
              “direct sequence” or “frequency hopping” type, or else some
              combination of these two “hybrids”.
            </p>
          </article>
          <article className="card">
            <h4>Frequency Hopped Radio</h4>
            <p>
              Over the last ten years, a new commercial market place has been
              emerging, called spread spectrum. In the next several years,
              hardly anyone will escape being involved, in some way with spread
              spectrum communications. Common spread spectrum system is of the
              “direct sequence” or “frequency hopping” type, or else some
              combination of these two “hybrids”.
            </p>
          </article>
          <article className="card">
            <h4>Frequency Hopped Radio</h4>
            <p>
              Over the last ten years, a new commercial market place has been
              emerging, called spread spectrum. In the next several years,
              hardly anyone will escape being involved, in some way with spread
              spectrum communications. Common spread spectrum system is of the
              “direct sequence” or “frequency hopping” type, or else some
              combination of these two “hybrids”.
            </p>
          </article>
        </article>
      </section>

      <Footer />
    </HomeWrapperStyled>
  );
};

export default Home;
