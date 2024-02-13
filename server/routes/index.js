import express from 'express';
import userRoutes from './user.Routes.js'
import postRoutes from './post.Routes.js'
import commentRoutes from './comment.Routes.js'
import reactionRoutes from './reaction.Routes.js'
const router = express.Router();


router.get("/", (req, res) => {
  res.json({ message: "Welcome to mern app" });
});

router.use("/users",userRoutes );
router.use("/posts",postRoutes );
router.use("/comments",commentRoutes );
router.use("/comments",reactionRoutes );

export default router;
