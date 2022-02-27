const CardTen = () => {
  return (
    <>
      <h2>Radar Signal Processing FPGA based Boards</h2>
      <p>
        By using a commercial off-the-shelf (COTS)-based mission management
        system, you can significantly speed up the development of a
        high-performance signal processing and Electronic Warfare (EW) systemß
        through pre-qualification, pre-integration and pre-validation from
        NeonLoops.
      </p>
      <div
        style={{
          display: "grid",
          gap: "50px",
          alignItems: "center",
          justifyContent: "center",
          margin:'20px 0'
        }}
      >
        <img
          style={{ width: "300px", objectFit: "cover" }}
          src="/signal-processing.png"
        />
      </div>
      <p>
        You can also customize it by adding application-specific software or
        expanding the base system with additional components required for your
        program needs. The module ADC/DAC meets these requirements.
      </p>
      <h3>Features</h3>
      <ul>
        <li>
        Analog input: 12-bit quad up to 2 Gsps, optional dual to 4 Gsps
        </li>
        <li>
        Analog output: dual 14-bit DAC less than 2.8 Gsps (5.6 with interpolation)
        </li>
        <li>
        User-programmable FPGA: Xilinx® VX690T Virtex®-7
        </li>
        <li>
        FPGA
        </li>
        <li>
        Parallel and serial I/O: 16 x high-speed serial (HSS),
        </li>
        <li>
        LVDS, RS-485, LVTTL
        </li>
        <li>
        Multi-board sync: sample-accurate capture across
        </li>
        <li>
        Multiple boards
        </li>
        <li>
        Software/HDL: Linux® host support, VxWorks® optional
        </li>
      </ul>
    </>
  );
};

export default CardTen;
