const express = require("express");
const app = express();
const videosRoute = require("./routes/videopage.route");
const commentRoute = require("./routes/comment.route");
const productRoute = require("./routes/product.route");
const connectDb = require("./config/db");
const cors = require("cors");
const port = 3080;

app.use(cors());
app.use(express.json());

// routes
app.use("/api/videos", videosRoute);
app.use("/api/comments", commentRoute);
app.use("/api/products", productRoute);

app.listen(port, () => {
  connectDb();
  console.log(`Server berjalan di port ${port}`);
});
