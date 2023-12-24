const Proj = ({link, title, tools, description, imageUrl}) => {

    const imageAlt = title + "-img";

    return ( 
    <div className="proj">
    <img
      src={imageUrl}
      alt={imageAlt}
      onClick={() => window.open(link)}
    />
    <h2 onClick={() => window.open(link)}>
      {title}
    </h2>
    <h5>{tools}</h5>
    <p>
      {description}
    </p>
  </div> );
}
 
export default Proj;