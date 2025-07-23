Feedback App
A simple web application built with Node.js, Express, Handlebars, and MongoDB.
Users can submit feedback/testimonials and view all submissions on a public page.

Features
✔ Submit feedback through a simple form
✔ Display all feedback on the main page
✔ Server-side validation for empty fields
✔ MVC architecture for clean code
✔ Uses MongoDB for storage
✔ Templating with Handlebars
✔ Basic CSS styling

Tech Stack
Backend: Node.js, Express.js

Frontend: Handlebars (HBS)

Database: MongoDB

Styling: CSS

Environment Variables: dotenv

Project Structure

feedback-app/
│
├── controllers/
│   └── feedbackController.js
├── models/
│   └── Feedback.js
├── routes/
│   └── feedback.js
├── views/
│   ├── layouts/main.hbs
│   ├── submit.hbs
│   └── testimonials.hbs
├── public/css/style.css
├── .env
├── app.js
└── package.json

github url:- https://github.com/mickeybera/Feedback-App.git