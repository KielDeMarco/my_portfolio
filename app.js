const express = require('express');
const app = express();
const port = 3000;

// Serve files from the 'public' directory and its subdirectories
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
