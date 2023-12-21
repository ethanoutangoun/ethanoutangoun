const Featured = () => {
  return (
    <div className="featured">
      <h2>Featured Work</h2>
      <h5>Coding Portfolio</h5>

      <div className="project-wrapper">
        <div className="projects">
          <div className="proj-container">
            <div
              className="proj"
              onClick={() => window.open("https://landscaipe.vercel.app/")}
            >
              <img src="landscaipe.png" alt="landscaipe-img" />
              <h2>LandScaipe</h2>
              <h5>React.js, Python, Flask, Tensorflow</h5>
              <p>
                LandScaipe is a machine learning app designed to use a Mask
                R-CNN model to detect buildings given a satellite image and
                suggest optimal plant positions around a target building using
                geospatial data.
              </p>
            </div>

            <div
              className="proj"
              onClick={() => window.open("https://outiblog.vercel.app/")}
            >
              <img src="outiblog.png" alt="outiblog-img" />
              <h2>Outiblog</h2>
              <h5>MONGODB, EXPRESS.JS, REACT.JS, NODE.JS</h5>
              <p>
                This is a clean and efficient blog site where you can post,
                comment, and like blogs!
              </p>
            </div>

            <div className="proj">
              <img src="groupcart.png" alt="groupcart-img" />
              <h2>GroupCart</h2>
              <h5>React.js, MongoDB, Express.js, Node.js</h5>
              <p>
                GroupCart allows you to easily shop with your friends/roommates
                with a shared grocery list!
              </p>
            </div>

            <div className="proj">
              <img src="landscaipe.png" alt="landscaipe-img" />
              <h2>Title</h2>
              <h5>React.js, Python, Flask, Tensorflow</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci autem sequi explicabo ratione nobis quod ducimus
                sapiente officia doloribus similique?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
