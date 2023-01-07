const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean();;
      res.render("profile.ejs", { 
        posts: posts, 
        user: req.user, 
        isoValues: [
          { value: "50", label: "50" },
          { value: "100", label: "100" },
          { value: "200", label: "200" },
          { value: "400", label: "400" },
          { value: "800", label: "800" },
          { value: "1600", label: "1600" },
          { value: "3200", label: "3200" },
          { value: "6400", label: "6400" },
          { value: "12800", label: "12800" },
          { value: "25600", label: "25600" },
          { value: "NA", label: "NA" },
        ],
        apertureValues: [
          { value: "f/1.4", label: "f/1.4" },
          { value: "f/1.8", label: "f/1.8" },
          { value: "f/2", label: "f/2" },
          { value: "f/2.8", label: "f/2.8" },
          { value: "f/4", label: "f/4" },
          { value: "f/5.6", label: "f/5.6" },
          { value: "f/8", label: "f/8" },
          { value: "f/11", label: "f/11" },
          { value: "f/16", label: "f/16" },
          { value: "f/22", label: "f/22" },
          { value: "f/32", label: "f/32" },
          { value: "NA", label: "NA" },
        ],
        shutterSpeedValues: [
          { value: "2\"", label: "2\"" },
          { value: "1\"", label: "1\"" },
          { value: "1/2", label: "1/2" },
          { value: "1/4", label: "1/4" },
          { value: "1/8", label: "1/8" },
          { value: "1/15", label: "1/15" },
          { value: "1/30", label: "1/30" },
          { value: "1/60", label: "1/60" },
          { value: "1/125", label: "1/125" },
          { value: "1/250", label: "1/250" },
          { value: "1/500", label: "1/500" },
          { value: "1/1000", label: "1/1000" },
          { value: "1/2000", label: "1/2000" },
          { value: "NA", label: "NA" },
        ]
      });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      //! Changed sort order to desc because it makes more sense
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "asc" }).lean();
      res.render("post.ejs", { post: post, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
        iso: req.body.iso,
        aperture: req.body.aperture,
        shutterSpeed: req.body.shutterSpeed,
        filmStock: req.body.filmStock,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
