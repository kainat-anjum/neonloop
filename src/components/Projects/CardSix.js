const CardSix = () => {
  return (
    <>
      <h2>Radiation-tolerant FPGA architectures</h2>
      <p>
        Outside the protective cocoon of Earth's atmosphere, extreme temperature
        changes, vacuum and high radiation make for a particularly harsh
        environment for electronic systems. The design of space-grade hardware
        (usually referred to as “hardened components”) requires large
        investments in infrastructure, and its development usually relies on
        government or military projects. However, with the recent opening of the
        space sector to private enterprises, the market faces a growing interest
        in the use of low-cost, off-the-shelf components (COTS). These
        components have to be properly screened and the design of computer
        systems has to take into account and work around their vulnerabilities.
        Current research focuses on using COTS in fault-tolerant configurations
        to obtain reliable systems that can be successfully used in space
        missions. The benefits of this research are not limited to the space
        segment: current technology trends— smaller feature sizes, lower voltage
        levels, higher operating frequencies —are projected to cause an increase
        in the failure rate of integrated circuits. Similar fault-tolerance
        strategies used in space applications can be used to mitigate these
        effects.
      </p>
      <p>
        Field Programmable Gate Arrays (FPGAs) are programmable hardware devices
        and are generally used for hardware prototyping. FPGAs typically have a
        higher cost per device manufactured, and lower performance when compared
        to custom devices produced in large volumes. Nevertheless, their
        constant evolution has made them a very attractive proposition for the
        small-volume aerospace market: they can be programmed with complex
        architectures with sufficient performance, for a fraction of the cost of
        producing a custom integrated circuit. FPGAs come in different flavours,
        and the most common, are the FLASH and SRAM kinds. These, in their
        non-military versions, are particularly sensitive to particle radiation
        (neutrons, protons and other ions), the effects of which, called Single
        Event Effects (SEEs), can disrupt their normal behaviour. Our objective
        is to define low-cost systems, based on FPGAs, that are tolerant to
        SEEs, without excessively reducing their performance or functionality.
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
          src="/radiation-tolrent.png"
        />
      </div>
    </>
  );
};

export default CardSix;
