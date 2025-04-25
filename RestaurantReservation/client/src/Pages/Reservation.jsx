import React from 'react';
import { Link } from 'react-router-dom';

const Reservation = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src="/reservation.png"
            alt="Reservation"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 text-center">
          <h2 className="mb-4">Reservations</h2>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/do-reservation" className="btn btn-dark px-4">
              Do Reservation
            </Link>
            <Link to="/track-reservation" className="btn btn-dark px-4">
              Track Reservation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
