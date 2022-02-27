const CardThree = () => {
  return (
    <>
      <h2>Developed fault emulation platform to study the effects of Cosmic Radiations on FPGA.</h2>
      <p>
      In this project, I have developed an FPGA platform that can be operated under neutron radiations to efficiently observe the behaviours of the FPGA under the radiation. The purpose of this project is to introduce the FPGA based embedded system on future Bombardier C-Series aircraft that can fly above the 50, 000 feet altitude, At this altitude, the intensity of the neutrons radiation is very high, and tends to cause failure in electronics. This project comprises two parts: a) an FPGA based embedded system that goes under the radiations, b) an emulation platform that enabled with Xilinx SEM core to facilitate and replicate the radiation behaviour of the FPGA under the radiation. The purpose of the latter part is to better understand the behaviour of each component of FPGA in a detailed manner i.e., LUTs, and routing elements. This project also involved the extensive study of Xilinx synthesizes tools files like .ndc, .xdl.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "50px",
          justifyContent:"center",
          alignItems: "center",
          margin:'20px 0'
        }}
      >
        <img
          style={{ width: "300px", objectFit: "cover" }}
          src="/fault-emulation.png"
        />
         <img
          style={{ width: "300px", objectFit: "cover" }}
          src="/cardThree-img1.png"
        />

      </div>
    </>
  );
};

export default CardThree;
