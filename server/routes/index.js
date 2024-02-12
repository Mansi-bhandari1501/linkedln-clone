import express from 'express';
import userRoutes from './user.Routes.js'
import postRoutes from './post.Routes.js'

const router = express.Router();


router.get("/", (req, res) => {
  res.json({ message: "Welcome to mern app" });
});

router.use("/users",userRoutes );
router.use("/posts",postRoutes );

export default router;
