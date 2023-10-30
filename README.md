# SDU-Car-Rental

## Current Tasks
Frederik: Booking and Confirmation Page
Geoffrey: Profile Page
Ethan: Starting on Report
Keen: Database Modelling
Mateusz: Home Page

## About
Figma Design File: https://www.figma.com/file/xqxv1HgYitYUSLF5Gg3EXM/SDU-Car-Rental-App?type=design&node-id=1%3A2&mode=design&t=wNPY4vRmALyl3v7X-1

## Models

### Car
- UID
- Brand
- Model
- Catagory
- Number of Passenger
- Price per Day
- Photo

### User
- UID
- First Name
- Last Name
- Birthday
- Email

### Reservations
- UID
- UID of Cser
- UID of Uar
- Start Date
- End Date
- Duration
- Total Price



## Features
- List of Cars Available
- Details of each car
- Booking for a car
- Profile page to view bookings on rented cars
- Others to be determined...

## Folder Structure
Example Folder Structure

src/  <br>
├── components/  <br>
│   ├── Button.tsx  <br>
│   └── Header.tsx  <br>
├── hooks/  <br>
│   └── useHeader.ts  <br>
├── localization/  <br>
│   ├── languages.ts  <br>
│   └── locales.ts  <br>
├── lib/  <br>
│   ├── axios-instance.ts  <br>
│   └── constants.ts  <br>
├── navigation/  <br>
│   ├── root-navigator.tsx  <br>
│   └── auth-stack.tsx  <br>
├── services/ <br>
│   ├── notification.ts <br>
│   └── logging.ts <br>
├── theme/ <br>
│   └── index.ts <br>
├── types/ <br>
│   ├── env.d.ts <br>
│   └── react-augment.d.ts <br>
├── utils/ <br>
│   └── layout.ts  <br>
└── features/ <br>
    ├── auth/ <br>
    │   ├── api/ <br>
    │   │   ├── login.ts <br>
    │   │   ├── signup.ts <br>
    │   │   └── refresh-token.ts <br>
    │   ├── helpers/ <br>
    │   │   ├── validateToken.ts <br>
    │   │   └── dataTransformer.ts <br>
    │   ├── hooks/ <br>
    │   │   ├── useLoginAction.ts <br>
    │   │   └── useSignupForm.ts <br>
    │   ├── screens/ <br>
    │   │   ├── Login.tsx <br>
    │   │   └── Signup.tsx <br>
    │   ├── services/  
    │   │   └── validation.ts  
    │   └── store/  
    │       └── auth.ts (zustand, redux, jotai etc.)  
    └── ... (other features)  
