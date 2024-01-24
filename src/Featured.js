import Proj from "./Proj";

const Featured = () => {
  return (
    <div className="featured">
      <h2>Featured Work</h2>
      <h5>Coding Portfolio</h5>

      <div className="project-wrapper">
        <div className="projects">
          <div className="proj-container">
          <Proj title="Outiblog" githubUrl="https://github.com/ethanoutangoun/outiblog" tools="MongoDB, Express.js, React.js, Node.js" description="This is a clean and efficient blog site where you can post, comment, and like blogs!" imageUrl="outiblog.png" link="https://outiblog.vercel.app/"/>
            <Proj title="Landscaipe" githubUrl="https://github.com/ethanoutangoun/landscAIpe" tools="React.js, Python, Flask, Tensorflow" description="LandScaipe is a machine learning app designed to use a Mask R-CNN model to detect buildings given a satellite image and suggest optimal plant positions around a target building using geospatial data. Mask RCNN model only runs on the github, above link is demo only." imageUrl="landscaipe.png" link="https://landscaipe.vercel.app/"/>
            <Proj title="Cooked (In Development)" githubUrl="https://github.com/ethanoutangoun/CSC-437" tools="Lit, HTML, CSS" description="Social cooking site to discover new trendy recipe with an emphasis on user experience." imageUrl="cooked.png" link="https://cooked2.vercel.app/"/>
            <Proj title="Sumz" githubUrl="https://github.com/ethanoutangoun/ai_summarizer" tools="Next.js, RapidAPI" description="GPT-4 Powered Website Article Summarizer." imageUrl="sumz.png" link="https://ai-summarizer-bay.vercel.app/"/>
            
            <Proj title="NN Match Predictor" githubUrl="https://github.com/ethanoutangoun/csgomatchpredictor" tools="Python, Pandas, NumPy, Tensorflow" description="Developed a sequential neural network to predict winners of a csgo match based on seasonal player/team performance" imageUrl="csgo.png" link="https://github.com/ethanoutangoun/csgomatchpredictor"/>
            <Proj title="GroupCart" githubUrl="https://github.com/ethanoutangoun/groupcart" tools="React.js, MongoDB, Express.js, Node.js" description="GroupCart allows you to easily shop with your friends/roommates with a shared grocery list!" imageUrl="groupcart.png" link="https://github.com/ethanoutangoun/groupcart"/>
            <Proj title="Outify" githubUrl="https://github.com/ethanoutangoun/outify" tools="Javascript, Python, Flask, HTML/CSS" description="I created this app to enable Spotify users to have more creativity in finding music that they like. App is still in development mode so must be manually added as a developer to get full access to the app currently." imageUrl="outify.png" link="https://outify-go4ii.ondigitalocean.app/welcome"/>


          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
