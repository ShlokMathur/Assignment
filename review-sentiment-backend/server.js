// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5002;

app.use(cors());

// Mock data simulating reviews
const reviews = [
  {
    reviewer_name: "Barbara",
    content: "We had a relaxing time ❤.\n\n[Positive]: The spa was excellent. We had a wonderful relaxing time! [Negative]: The food choices at the Rowe restaurant. Parking should be included in your stay because you pay a lot to stay here already.",
    date: "05 Dec 2023",
    rating_review_score: 10.0,
    out_of: 10.0,
    analytics: [
      {
        category: "spa",
        topic: "spa",
        sentences: ["The spa was excellent"],
        sentiment: "Positive",
        highlight_indices: [[40, 61, "Positive"]]
      },
      {
        category: "facilities",
        topic: "facilities",
        sentences: ["Parking should be included in your stay because you pay a lot to stay here already"],
        sentiment: "Negative",
        highlight_indices: [[155, 237, "Negative"]]
      }
    ]
  },
  // Add more reviews as needed
];

app.get('/reviews', (req, res) => {
  res.json(reviews);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
