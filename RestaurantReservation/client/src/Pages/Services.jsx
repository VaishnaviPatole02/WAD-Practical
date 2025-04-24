const Services = () => {
  const features = [
    {
      title: "QUALITY FOOD",
      desc: "We use only the freshest ingredients, handpicked daily to ensure every dish is packed with nutrition, flavor, and unmatched quality. From farm to fork, your satisfaction is our top priority.",
      img: "./quality_food.svg"
    },
    {
      title: "SUPER TASTE",
      desc: "Our chefs blend tradition and creativity to craft bold, mouthwatering flavors that linger long after the last bite. Every meal is a carefully balanced taste sensation.",
      img: "./super_taste.svg"
    },
    {
      title: "FAST DELIVERY",
      desc: "Enjoy gourmet meals at your doorstep in no time. With our prompt and reliable delivery service, hot and fresh food reaches you faster—without compromising on quality.",
      img: "./fast_delivery.svg"
    }
  ];

  return (
    <div className="container my-5">
      <div className="row text-center">
        {features.map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="mx-auto mb-3">
              <img
                src={feature.img}
                alt={feature.title}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  borderRadius: "50%",
                  backgroundColor: "#f8f9fa",
                  padding: "10px"
                }}
              />
            </div>
            <h5 className="fw-bold">{feature.title}</h5>
            <p className="text-muted small">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
