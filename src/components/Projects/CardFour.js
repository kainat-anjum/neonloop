const CardFour = () => {
  return (
    <>
      <h2>Auditory Orientation Aid for Astronauts</h2>
      <p>
        Let's imagine that after many years of dreaming, you're going into
        space! Unfortunately, when you get into orbit, you're miserable! Like
        most astronauts, you experience malaise, disorientation, dizziness,
        nausea, and even vomiting. For a long-duration mission, space adaptation
        sickness is a fairly minor inconvenience, but if you have only a few
        days in space to work or play, off-course, it's more of a problem. We
        propose a simple solution: provide an additional reference in the form
        of an auditory signal, perceived as coming from Earth. We hope to make
        commercial spaceflight more enjoyable.
      </p>
      <p>
        This project's purpose is to create a device that provides orientation
        reference information in microgravity environments. The device must be
        comfortable and must not interfere with crew communication or add to
        already high noise levels found on spacecraft.
      </p>

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
          src="/auditory-orientation.png"
        />
        <img
          style={{ width: "300px", objectFit: "cover" }}
          src="/cardFour-img1.png"
        />
      </div>
    </>
  );
};

export default CardFour;
