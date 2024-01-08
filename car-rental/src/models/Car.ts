export enum CarType {
    SEDAN,
    SUV,
    COUPE,
    PICKUP,
    VAN,
    SPORT,
    HATCHBACK,
    LUXURY,
    OFF_ROAD,
    CROSSOVER,
    COMPACT,
    ELECTRIC
}

export enum TransmissionType {
    AUTOMATIC,
    MANUAL
}

interface Car {
    id: number;
    manufacturer: string;
    model: string;
    seatsNumber: number;
    carType: CarType;
    color: string;
    pricePerDay: number;
    transmissionType: TransmissionType;
    fileName: string;
}

export default Car;