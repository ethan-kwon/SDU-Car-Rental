import React, { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface BookingsContextType {
  bookings: any[];
  setBookings: React.Dispatch<React.SetStateAction<any[]>>;
}

export const BookingsContext = createContext<BookingsContextType | undefined>(undefined);

interface BookingsProviderProps {
  children: ReactNode;
}

const BookingsContextProvider: React.FC<BookingsProviderProps> = ({ children }) => {
  const [bookings, setBookings] = useState<any[]>([]);

  return (
    <BookingsContext.Provider value={{ bookings, setBookings }}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingsContextProvider;