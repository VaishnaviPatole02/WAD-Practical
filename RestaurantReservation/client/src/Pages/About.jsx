const About = () => (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="display-6">ABOUT US</h2>
          <p className="text-muted">The only thing we’re serious about is food.</p>
          <p>
          At CrazyBites, we believe food is more than just a meal—it's an experience. Since day one, our mission has been to bring people together over delicious dishes made with the finest ingredients, love, and a whole lot of flavor.

From farm-fresh produce to expertly crafted recipes, every item on our menu is a celebration of quality, taste, and authenticity. Whether you're craving a comforting classic or a bold new flavor, our chefs are here to deliver an unforgettable culinary experience.

We don’t just serve food—we serve happiness, warmth, and a passion for excellence.

Come for the taste. Stay for the experience. 
          </p>
        </div>
  
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="./about.png" // Replace with your actual path or URL
            alt="Colorful Food Bowl"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: "400px" }}
          />
        </div>
  
      </div>
    </div>
  );
  
  export default About;
  