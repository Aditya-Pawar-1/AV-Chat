# AV-Chat

**AV-Chat** is a WebRTC-based real-time video and chat application that enables users to connect instantly through video streaming and text messaging. This project was developed to explore modern real-time communication technologies and user engagement strategies.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Website Images](#website-images)
- [License](#license)

## Features

- **Random User Pairing**: Users are matched randomly for real-time interactions.
- **Real-Time Video Communication**: Leveraging WebRTC for seamless video streaming.
- **Instant Text Messaging**: Integrated chat system with real-time updates using Socket.io.
- **Low-Latency Communication**: Optimized for fast and smooth interactions.

## Technologies

- **Frontend**: ejs, CSS
- **Real-Time Video**: WebRTC
- **Real-Time Messaging**: Socket.io
- **Backend**: Node.js with Express.js

## Setup Instructions

### Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Clone the Repository

```bash
git clone https://github.com/Aditya-Pawar-1/AV-Chat.git
cd av-chat
```

### Install Dependencies

Install the required packages:

```bash
npm install
```

### Run the Application

Start the server:

```bash
node server.js
```

The app will be available at `http://localhost:3000`.

## Usage

1. **Connect**: Access the app and wait to be paired with another user.
2. **Video Call**: Enjoy a real-time video call using WebRTC.
3. **Chat**: Send and receive messages instantly while on a call.

## Folder Structure

```bash
av-chat/
├── public/
│   ├── css/
│   │   └── style.css
│   │   └── tailwind.css
│   └── Routes/
│       └── index.js
├── views/
│   ├── partials/
|   |      └── header.js
|   └── chat.ejs
|   └── index.ejs
├── app.js
├── package.json
└── README.md
```

## Website Images

### Home Page
![Home](https://github.com/user-attachments/assets/37617c3c-9104-4955-9012-27ab77a41081)

### Chat Page
![chat](https://github.com/user-attachments/assets/28ff724e-e9c9-46d0-b027-efe4f23093d1)


## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

## Acknowledgements

- **[Sheryians Coding School](https://sheryians.com/)**: This project was developed as part of the **Backend Domination** course.
