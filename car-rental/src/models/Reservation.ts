import User from "./User";

interface Reservation {
    id: number,
    start: Date,
    end: Date,
    userIds: number[],
    carId: number,
}

export default Reservation;