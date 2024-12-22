# HealthLink - Medical Appointment Booking System

## Description

HealthLink is a simple and intuitive platform for scheduling medical appointments online. Users can book appointments based on availability and choose the desired date and time.

## Why? (Motivation / Problem to Solve)

Scheduling medical appointments can often be a cumbersome process, requiring both patients and medical professionals to spend unnecessary time coordinating. HealthLink was created to streamline the booking process, allowing users to schedule their appointments quickly and efficiently from the comfort of their own homes, and enabling healthcare providers to manage their schedules more effectively.

## Features

- **Appointment Booking**: Users can browse available appointments and choose their preferred date and time, ensuring a smooth scheduling experience.
- **User Authentication**: Login and registration system, allowing users to manage their accounts and access personalized features.
- **Profile Management**: A profile page where users can view their booked appointments.
- **Service Information**: Users can easily explore the available medical services provided by the platform, helping them make informed decisions when booking appointments.
- **Platform Overview**: A comprehensive section providing an introduction to the platform’s features, mission, and functionality.
- **Mobile-Responsive Design**: The platform is designed to provide a seamless user experience across all devices, with a fully responsive interface.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **HTML**: Provides the structure of the web application.
- **CSS**: Used for styling the interface.
- **LocalStorage**: Stores data locally in the browser, such as login state and appointment details.

## How to Run the Project Locally

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LuisSilva7/healthLink-project.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd healthlink-project
   ```

3. **Install project dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

The application will be available at [http://localhost:5000](http://localhost:5000) in your browser.

### Docker Setup (Optional)

If you prefer to run the application inside a Docker container, follow these steps:

1. **Build the Docker image:**

   ```bash
   docker build -t healthlink-app .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 5000:5000 healthlink-app
   ```

The application will be available at [http://localhost:5000](http://localhost:5000) in your browser.

## Link to Deployment

The HealthLink app is deployed and can be accessed at the following link:
[HealthLink Live](https://healthlink-project-live-url.com)

### Maintainer

- **Luis Silva** (Owner/Developer)
