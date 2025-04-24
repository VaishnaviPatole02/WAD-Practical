import ErrorHandler from '../error/error.js';
import { Reservation } from '../models/reservationSchema.js';

export const trackReservation = async (req, res, next) => {
    const { firstName, lastName, email } = req.query;

    if (!firstName || !lastName || !email) {
        return next(new ErrorHandler('Please provide first name, last name, and email.', 400));
    }

    try {
        // Query the reservation using the provided query parameters
        const reservation = await Reservation.findOne({ firstName, lastName, email });

        if (!reservation) {
            return next(new ErrorHandler('Reservation not found.', 404));
        }

        // Return the found reservation data
        res.status(200).json(reservation);
    } catch (error) {
        return next(new ErrorHandler('An error occurred while tracking the reservation.', 500));
    }
};

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill the form", 400));
    }

    try {
        await Reservation.create({ firstName, lastName, email, phone, date, time });

        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }

        return next(error);
    }
};


// export const sendReservation = async (req, res, next) => {
//     console.log("REQ.HEADERS:", req.headers);
//     console.log("REQ.BODY:", req.body);
  
//     res.status(200).json({
//       message: "Body test",
//       body: req.body
//     });
//   };
  