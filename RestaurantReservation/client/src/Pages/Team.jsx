const Team = () => {
    const teamMembers = [
      {
        name: "JONATHAN TYLER",
        role: "Founder & Head Chef",
        img: "./team_member_1.png"
      },
      {
        name: "WADE WARREN",
        role: "Sous Chef",
        img: "./team_member_2.png"
      },
      {
        name: "JHON DOE",
        role: "Pastry Chef",
        img: "./team_member_3.png"
      },
      {
        name: "ALEX COAL",
        role: "Sushi Chef",
        img: "./team_member_4.png"
      }
      ,
      {
        name: "MAYA LIN",
        role: "Dessert Specialist",
        img: "./team_member_5.jfif"
      },
      {
        name: "ETHAN RAY",
        role: "Grill Master",
        img: "./team_member_6.jfif"
      },
      {
        name: "LISA KANE",
        role: "Food Stylist",
        img: "./team_member_7.jfif"
      },
      {
        name: "JACKSON BRIGHT",
        role: "Barbecue Chef",
        img: "./team_member_8.jfif"
      }
    ];
  
    return (
      <div className="container text-center my-5">
        <h2 className="display-6 fw-bold">OUR TEAM</h2>
        <p className="text-muted mb-5">
          Meet the real team who ensures every dish is perfect, every moment is memorable.
        </p>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="img-fluid rounded-circle mb-3 shadow"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h6 className="fw-bold">{member.name}</h6>
              <p className="text-muted small">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;
  