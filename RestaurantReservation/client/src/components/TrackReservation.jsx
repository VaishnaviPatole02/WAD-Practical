import React, { useState } from 'react';
import axios from 'axios';

const TrackReservation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [reservation, setReservation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/reservation/track?firstName=${formData.firstName}&lastName=${formData.lastName}&email=${formData.email}`
      );
      setReservation(response.data);
      setErrorMsg('');
    } catch (error) {
      const msg =
        error.response?.data?.message || 'Reservation not found. Try again.';
      setErrorMsg(msg);
      setReservation(null);
    }
  };

  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src="/reservation.png"
            alt="Track Reservation"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-center mb-4">Track Your Reservation</h2>
          <form onSubmit={handleSubmit} className="row g-3">
            {[
              ['firstName', 'First Name'],
              ['lastName', 'Last Name'],
              ['email', 'Email', 'email'],
            ].map(([name, label, type = 'text']) => (
              <div className="col-md-6" key={name}>
                <input
                  type={type}
                  name={name}
                  className="form-control"
                  placeholder={label}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div className="col-12">
              <button type="submit" className="btn btn-dark w-100">
                Track Reservation
              </button>
            </div>

            {reservation && (
              <div className="mt-4">
                <h4>Reservation Details:</h4>
                <p>
                  <strong>Name:</strong> {reservation.firstName}{' '}
                  {reservation.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {reservation.email}
                </p>
                <p>
                  <strong>Date:</strong> {reservation.date}
                </p>
                <p>
                  <strong>Time:</strong> {reservation.time}
                </p>
              </div>
            )}

            {errorMsg && (
              <div className="alert alert-danger mt-3">{errorMsg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default TrackReservation;
