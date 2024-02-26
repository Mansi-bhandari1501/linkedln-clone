import express from 'express';
import userRoutes from './user.routes.js';
import postRoutes from './post.routes.js';
import reactionRoutes from './reaction.routes.js';
import commentRoutes from './comment.routes.js';
import connectionRoutes from './connection.routes.js';
const router = express.Router();


router.get("/", (req, res) => {
  res.json({ message: "Welcome to mern app" });
});

router.use("/users",userRoutes );
router.use("/posts",postRoutes );
router.use("/comments",commentRoutes );
router.use("/reactions",reactionRoutes );
router.use("/connections",connectionRoutes );

export default router;

