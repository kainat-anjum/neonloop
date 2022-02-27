const CardEight= () => {
  return (
    <>
      <h2>FPGA Implementation of AES-based Crypto Processor</h2>
      <p>
        Increased demand for data security is an undeniable fact. Towards
        achieving higher security, cryptographic algorithms play an important
        role in the protection of data from unapproved usage. In this paper, we
        present a crypto processor using Advanced Encryption Standard (AES). The
        AES is integrated with a 32-bit general-purpose 5- stage pipelined MIPS
        processor. The integrated AES module is a fully pipelined module that
        follows the inner round and outer round pipeline design. The results
        show that the presented pipeline version of the AES algorithm along with
        the MIPS processor outperforms traditional methods. At the operating
        frequency of 553 MHz, the proposed design can achieve the throughput of
        58 Gbps, the latency of 240 ns, and the minimum power consumption of 76
        MW.
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
          src="/crypto-processor.png"
        />
      </div>
    </>
  );
};

export default CardEight;
