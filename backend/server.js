const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
// const { trainChatbot } = require("C:\\Users\\Sadaqat Rasool\\Downloads\\FMS ChatBot\\backend\\controllers\\chatController.js"); // Adjust path as needed

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Train the chatbot before starting the server
// (async function initializeBot() {
  // try {
//     await trainChatbot();
//     console.log("Chatbot training completed. Server ready.");
//   } catch (error) {
//     console.error("Error during chatbot training:", error.message);
//     process.exit(1);
//   }
// })();

// Routes
const chatRoutes = require("./routes/chatRoutes");
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
