// import React, { useState } from 'react';
// import axios from 'axios';

// const ReservationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//   });

//   const [successMsg, setSuccessMsg] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://localhost:4000/api/v1/reservation/send',
//         formData,
//         { withCredentials: true }
//       );
//       setSuccessMsg(response.data.message);
//       setErrorMsg('');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         date: '',
//         time: '',
//       });
//     } catch (error) {
//       const msg =
//         error.response?.data?.message || 'Reservation failed. Try again.';
//       setErrorMsg(msg);
//       setSuccessMsg('');
//     }
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">Make a Reservation</h2>
//       <form onSubmit={handleSubmit} className="row g-3">
//         {[
//           ['firstName', 'First Name'],
//           ['lastName', 'Last Name'],
//           ['email', 'Email', 'email'],
//           ['phone', 'Phone'],
//           ['date', 'Date', 'date'],
//           ['time', 'Time', 'time'],
//         ].map(([name, label, type = 'text']) => (
//           <div className="col-md-6" key={name}>
//             <input
//               type={type}
//               name={name}
//               className="form-control"
//               placeholder={label}
//               value={formData[name]}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         ))}

//         <div className="col-12">
//           <button type="submit" className="btn btn-dark w-100">
//             Submit Reservation
//           </button>
//         </div>
//         {successMsg && <div className="alert alert-success mt-3">{successMsg}</div>}
//         {errorMsg && <div className="alert alert-danger mt-3">{errorMsg}</div>}
//       </form>
//     </div>
//   );
// };

// export default ReservationForm;
import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/reservation/send',
        formData,
        { withCredentials: true }
      );
      setSuccessMsg(response.data.message);
      setErrorMsg('');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
      });
    } catch (error) {
      const msg =
        error.response?.data?.message || 'Reservation failed. Try again.';
      setErrorMsg(msg);
      setSuccessMsg('');
    }
  };

  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src="/reservation.png" // Change path if needed
            alt="Salad"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-center mb-4">Make a Reservation</h2>
          <form onSubmit={handleSubmit} className="row g-3">
            {[
              ['firstName', 'First Name'],
              ['lastName', 'Last Name'],
              ['email', 'Email', 'email'],
              ['phone', 'Phone'],
              ['date', 'Date', 'date'],
              ['time', 'Time', 'time'],
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
                Submit Reservation
              </button>
            </div>

            {successMsg && (
              <div className="alert alert-success mt-3">{successMsg}</div>
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

export default ReservationForm;
