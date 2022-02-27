const CardOne = () => {
  return (
    <>
      <h2>Frequency Hopped Radio</h2>
      <p>
        Over the last ten years, a new commercial market place has been
        emerging, called spread spectrum. In the next several years, hardly
        anyone will escape being involved, in some way with spread spectrum
        communications. Common spread spectrum system is of the “direct
        sequence” or “frequency hopping” type, or else some combination of these
        two “hybrids”. In frequency Hopping, the system” hops” from frequency to
        frequency over a wide band. The specific order in which frequencies are
        occupied is a function of a code sequence, and the rate of hopping from
        one frequency to another is a function of the information rate.
      </p>
      <p>
        Application for commercial frequency hopping spread spectrum range from
        “wireless” LAN’S to integrated bar code scanner/palmtop, computer/radio
        modem devices for warehousing, digital dispatch, digital cellular
        telephone communications, information society, city/area/state or
        countrywide networks for passing secure data.
      </p>
      <p>
        This project aims to design, simulate and develop a transmitter and a
        receiver for frequency hopped system on FPGA using VHDL. The completion
        of this project covers the art of secure digital communications that is
        now being exploited for commercial, industrial and military purposes.
      </p>
      <p>
        The transmitter design includes the following blocks; PN sequence block;
        serial to parallel converter; random input block; frequency synthesizer;
        mixer block.{" "}
      </p>{" "}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "50px",
          alignItems: "center",
          margin:'20px 0'
        }}
      >
        <img
          style={{ width: "300px", objectFit: "cover" }}
          src="/frequency-hopped-radio.png"
        />
        <img
          style={{ width: "300px", objectFit: "cover" }}
          src="/cardOne-Img1.png"
        />
      </div>
    </>
  );
};

export default CardOne;
