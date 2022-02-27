const CardTwo = () => {
  return (
    <>
      <h2>Emulation Platform for Radiation Testing on FPGA</h2>
      <p>
        Predicting the mitigation requirements for the electronic components
        operated in the radiation concerns environment e.g., outer space is a
        designer preference over radiation-tolerant circuits. If the designer
        knows the level of mitigation requires for a particular circuit operates
        in the constraint’s specific environment. Support to minimize the time
        and cost of the certification process. This work addresses to make a
        model that simulates the faulty behaviour of the FPGA based system. The
        fault model builds on the signature that presents the faulty behaviour
        of the computation. In this work, we develop a high-level fault model. A
        new fault emulation technique is used, this technique is based on the
        bits sensitivity, and it’s a feature. The purpose to use the sensitivity
        specific bits to produce the highly accurate fault behaviour as expected
        in the real-time testing environment. We observed that the signature
        computed by our sensitivity-based method is 98.47% closer for the adder
        circuit and 99.49 % closer for the multiplier to the radiation-based
        signature. This work presented a methodology for modelling the faulty
        behaviour of digital circuits. In this work, the abstracted high-level
        model/mathematical representation of the signature is presented.
      </p>
      <ul>
        <li>
          This signature model is constructed from the FPGA-based circuits and
          can be described at a high level of abstraction.
        </li>
        <li>
          The purpose of a realistic emulation system is to produce emulation
          results close to those obtained by certification tests under radiation
        </li>
        <li>
          Developed a realistic fault injection emulation in the configuration
          memory of the FPGAs based system.
        </li>
      </ul>
      <div
        style={{
          display: "grid",
          gap: "50px",
          justifyContent:"center",
          alignItems: "center",
          margin:'20px 0'
        }}
      >
        <img
          style={{ width: "300px", objectFit: "cover" }}
          src="/emulation-platform.png"
        />

      </div>
    </>
  );
};

export default CardTwo;
