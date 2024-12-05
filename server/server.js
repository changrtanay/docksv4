// const express = require("express")
// const dotenv = require("dotenv")
// const mongoose = require("mongoose");
// const documentModel = require("./models/documentModel");

// dotenv.config()

// const app = express()

// mongoose.connect(process.env.MONGODB_URI);
// // console.log("connected to db")
// const io = require("socket.io")(8080, {
//   cors: {
//     origin: "http://localhost:3000" || process.env.FRONTEND_URL,
//     methods: ["GET", "POST"],
//   },
// });

// const defaultValue = "";

// io.on("connection", (socket) => {
//   console.log("connected");

//   socket.on("get-document", async (documentId) => {
//     const document = await findOrCreateDocument(documentId);
//     socket.join(documentId);
//     socket.emit("load-document", document.data);

//     socket.on("send-changes", (delta) => {
//       socket.broadcast.to(documentId).emit("receive-changes", delta);
//     });

//     socket.on("save-document", async (data) => {
//       await documentModel.findByIdAndUpdate(documentId, { data });
//       console.log("saved")
//     });
//   });
// });

// async function findOrCreateDocument(id) {
//   if (id == null) return;

//   const document = await documentModel.findById(id);
//   console.log(document)
//   if (document) return document;
//   return await documentModel.create({ _id: id, data: defaultValue });
// }
