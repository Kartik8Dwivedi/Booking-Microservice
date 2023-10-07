const { StatusCodes } = require('http-status-codes');
const {BookingService} = require('../services/index'); 

const bookingService = new BookingService();

const create = async (req, res) => {
    try {
        const booking = await bookingService.createBooking(req.body);
        res.status(StatusCodes.OK).json({
            message: 'Booking created successfully',
            data: booking,
            success: true,
            err: {}
        });
    } catch (error) {
        console.log("ERROR: ", error)
        return res.status(500).json({
            message: error.message,
            data: {},
            success: false,
            err: error.explanation
        })
    }
}

module.exports = {
    create,
}