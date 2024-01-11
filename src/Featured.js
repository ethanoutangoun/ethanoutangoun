import Proj from "./Proj";

const Featured = () => {
  return (
    <div className="featured">
      <h2>Featured Work</h2>
      <h5>Coding Portfolio</h5>

      <div className="project-wrapper">
        <div className="projects">
          <div className="proj-container">
            <Proj title="Landscaipe" githubUrl="https://github.com/ethanoutangoun/landscAIpe" tools="React.js, Python, Flask, Tensorflow" description="LandScaipe is a machine learning app designed to use a Mask R-CNN model to detect buildings given a satellite image and suggest optimal plant positions around a target building using geospatial data. Mask RCNN model only runs on the github, above link is demo only." imageUrl="landscaipe.png" link="https://landscaipe.vercel.app/"/>
            <Proj title="Outiblog" githubUrl="https://github.com/ethanoutangoun/outiblog" tools="MongoDB, Express.js, React.js, Node.js" description="This is a clean and efficient blog site where you can post, comment, and like blogs!" imageUrl="outiblog.png" link="https://outiblog.vercel.app/"/>
            <Proj title="GroupCart" githubUrl="https://github.com/ethanoutangoun/groupcart" tools="React.js, MongoDB, Express.js, Node.js" description="GroupCart allows you to easily shop with your friends/roommates with a shared grocery list!" imageUrl="groupcart.png" link="https://groupcart.vercel.app/"/>
            <Proj title="Outify" githubUrl="https://github.com/ethanoutangoun/outify" tools="Javascript, Python, Flask, HTML/CSS" description="I created this app to enable Spotify users to have more creativity in finding music that they like. App is still in development mode so must be manually added as a developer to get full access to the app currently." imageUrl="outify.png" link="https://outify-go4ii.ondigitalocean.app/welcome"/>


          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
