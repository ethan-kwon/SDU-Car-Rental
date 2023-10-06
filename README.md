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
- Photo
- Brand
- Model
- Year
- Price of Rental

### Reservations
- UID of User
- UID of Car
- Total Price
- Rental Start
- Rental End

### User
- UID
- Name
- Reserved Cars
  - UIDs of Cars

## Features
- List of Cars Available
- Details of each car
- Booking for a car
- Profile page to view bookings on rented cars
- Others to be determined...

## Folder Structure
Example Folder Structure

src/
├── components/
│   ├── Button.tsx
│   └── Header.tsx
├── hooks/
│   └── useHeader.ts
├── localization/
│   ├── languages.ts
│   └── locales.ts
├── lib/
│   ├── axios-instance.ts
│   └── constants.ts
├── navigation/
│   ├── root-navigator.tsx
│   └── auth-stack.tsx
├── services/
│   ├── notification.ts
│   └── logging.ts
├── theme/
│   └── index.ts
├── types/
│   ├── env.d.ts
│   └── react-augment.d.ts
├── utils/
│   └── layout.ts
└── features/
    ├── auth/
    │   ├── api/
    │   │   ├── login.ts
    │   │   ├── signup.ts
    │   │   └── refresh-token.ts
    │   ├── helpers/
    │   │   ├── validateToken.ts
    │   │   └── dataTransformer.ts
    │   ├── hooks/
    │   │   ├── useLoginAction.ts
    │   │   └── useSignupForm.ts
    │   ├── screens/
    │   │   ├── Login.tsx
    │   │   └── Signup.tsx
    │   ├── services/
    │   │   └── validation.ts
    │   └── store/
    │       └── auth.ts (zustand, redux, jotai etc.)
    └── ... (other features)
