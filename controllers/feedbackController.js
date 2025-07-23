import Feedback from "../models/feedback.js";


// Display all feedback
export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 }).lean();
    res.render('testimonials', { feedbacks });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


// Show feedback form
export const showForm = (req, res) => {
  res.render('submit');
};

// Handle form submission
export const submitFeedback = async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.render('submit', { error: 'All fields are required', name, message });
  }

  try {
    await Feedback.create({ name, message });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
