const Intro = () => {
  return (
    <div className="intro">
      <h1>Ethan Outangoun</h1>
      <div className="blurb">
       
        <div className="blurb-text">
            <h3>About Me</h3>
          <p>
            I am an incoming 4th year CS major at Cal Poly San Luis Obispo
            seeking opportunities to apply my skills and continue my growth as a
            software developer. I am interested in a couple of different aspects
            of the tech stack including bioinformatics, machine learning and
            full stack development.
          </p>
        </div>

        <img
          src="pfp.jpg"
          alt="pfp"
          height="150px"
          width="150px"
          className="pfp"
        />

      </div>
    </div>
  );
};

export default Intro;
