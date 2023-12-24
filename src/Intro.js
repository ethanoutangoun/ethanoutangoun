
const Intro = () => {
 
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smoothly scroll to the top
    });
  }


  return (
    <div className="intro">
      <div className="navbar">
        <h1 onClick={scrollToTop}>Ethan Outangoun</h1>
      </div>

      <div className="blurb-container">
        <div className="blurb">
          <div className="blurb-text">
            <h3>About Me</h3>
            <p>
              I am a 4th year CS major at Cal Poly San Luis Obispo seeking
              opportunities to apply my skills and continue my growth as a
              software developer. I am primarily interested in machine learning
              and full-stack/frontend development.
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
    </div>
  );
};

export default Intro;
