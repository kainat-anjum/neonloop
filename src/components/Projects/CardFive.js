const CardFive = () => {
  return (
    <>
      <h2>MORFIN - MIST Lab Orbital Radiation Fault INjector.</h2>
      <p>
        This project provides an estimate of the fault rates for Xilinx FPGA.
        This project can predict and inject single bit faults into the FPGA SRAM
        cells. The faults inserted depends on the orbital radiations provided by
        the CREME96 model. The purpose of this project is to have the real-time
        behaviour of the FPGA under the influence of radiation and provide the
        mitigation technique. The objective is to define low-cost systems, based
        on FPGAs, that are tolerant to SEEs, without excessively reducing their
        performance or functionality.
      </p>
      <div
        style={{
          display: "grid",
          gap: "50px",
          alignItems: "center",
          justifyContent:"center",
          margin:'20px 0'
        }}
      >
        <img
          style={{ width: "300px", objectFit: "cover" }}
          src="/cardFive-img1.png"
        />
      </div>
    </>
  );
};

export default CardFive;
