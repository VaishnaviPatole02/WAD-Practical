const OurMenu = () => {
    const menuItems = [
      { name: "ROASTED LAMB RUMP", img: "./breakfast1.png" },
      { name: "CITRUS CURED SALMON", img: "dinner2.png" },
      { name: "PAN SEARED SEA BASS", img: "dinner3.png" },
      { name: "MUSSELS SOUP", img: "dinner4.png" },
      { name: "BEEF BURGER MEAL", img: "lunch1.png", tag: "Lunch" },
      { name: "STUFFED STRAWBERRY", img: "dinner5.png", tag: "Dinner" },
      { name: "ITALIAN SPAGHETTI", img: "dinner6.png", tag: "Dinner" },
      { name: "GRILLED FISH", img: "dinner1.jpeg", tag: "Dinner" }
    ];
  
    return (
      <div className="container my-5 text-center">
        <h2 className="display-6 fw-bold">OUR MENU</h2>
        <p className="text-muted mb-5">
          Explore our delicious selections crafted with passion and precision.
        </p>
        <div className="row justify-content-center">
          {menuItems.map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="card border-0 shadow-sm">
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                {item.tag && (
                  <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small m-2 rounded">
                    {item.tag}
                  </span>
                )}
                <div className="card-body">
                  <h6 className="card-title fw-bold">{item.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurMenu;
  