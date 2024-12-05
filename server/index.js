const express = require("express");
const socket = require("socket.io");
const connectDB = require("./config/db");
const authRouter = require("./routes/auth.routes");
const docModel = require("./models/docModel");
const docsRouter = require("./routes/doc.routes");
// const profileRouter = require("./routes/profile.routes");
const authCheck = require("./middlewares/auth.middleware");
const { getSingleDoc } = require("./controllers/doc.controller");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Authentication routes
app.use("/auth", authRouter);

app.use("/docs", docsRouter); // Routes for documents
app.use(authCheck); // Authentication middleware
// app.use('/profile', profileRouter) // Routes for user profiles

// Wrong endpoint URL
app.use("*", async (req, res) => {
  res.sendStatus(422); // Unprocessable Entity status code
});

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"));
  }); 
} else {
  app.get("/", async (req, res) => {
    try {
      res.status(200).send({ message: "Welcome to homepage" });
    } catch (error) {
      console.log("error:", error);
      res.status(500).send({ message: "Internal server error!", error });
    }
  });
}

// App listener
const server = app.listen(process.env.PORT || 8080, async () => {
  console.log(`Server running on port ${process.env.PORT || 8080}`);
  try {
    console.log("⏳ Database connecting...");
    await connectDB;
    console.log("✅ Database connected.");
  } catch (error) {
    console.log("❌ Error:", error);
  }
});

// Socket.IO configuration
const io = socket(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PATCH"],
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await getSingleDoc(documentId);
    socket.join(documentId);
    socket.emit("load-document", document);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await docModel.findByIdAndUpdate(documentId, { doc: data });
    });
  });
});
