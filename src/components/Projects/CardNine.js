const CardNine = () => {
  return (
    <>
      <h2> Implementation of Radar Signal Processor on FPGA</h2>
      <p>
        Implement Radar Equation along with pulse compression algorithm on FPGA,
        Implement Doppler shift to detect target velocity, Implement
        pulse-Doppler waveforms. Implement a constant false alarm rate
        (CFAR) detection adaptive algorithm on FPGA used in radar systems to
        detect target returns against a background of noise, clutter and
        interference. Aim of this Project to detect the target from a noisy
        condition.
      </p>
      <div
        style={{
          display: "grid",
          gap: "50px",
          alignItems: "center",
          justifyContent: "center",
          margin:'20px 0',

        }}
      >
        <img
          style={{ width: "300px", objectFit: "cover" }}
          src="/radar-signal.png"
        />
      </div>
      <b>We offer to our customers the following services and FPGA IP cores:</b>
      <ul>
        <li>End-to-end solutions for logic designs</li>
        <li>Custom FPGA logic design</li>
        <li>Custom IP development</li>
        <li>RTL coding in VHDL and Verilog</li>
        <li>
          <b>High-speed interfaces</b>
        </li>
        <li>
          Industry standard I/O interfaces like FMC, and protocols like PCIe,
          Ethernet, etc
        </li>
        <li>DSP Algorithms on FPGA</li>
        <li>
          RADAR signal processing (FFT, FIR filters, Pulse compression, CFAR,
          Doppler processing, Windowing)
        </li>
        <li>Direction finding system (Digital Beamforming)</li>
        <li>High bandwidth Direct RF sampling and Processing</li>
        <li>Verification and Validation environment</li>
        <li>Development of verification environment using Verilog/VHDL</li>
        <li>
          Development of a System Verilog verification environment based on
          UVM methodology
        </li>
      </ul>
    </>
  );
};

export default CardNine;
