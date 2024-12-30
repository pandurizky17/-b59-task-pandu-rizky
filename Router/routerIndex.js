const express = require("express");
const router = express.Router();

const controllerPage = require("../controller/controllerPages");

router.get("/", controllerPage.renderHome);

router.get("/blog", controllerPage.renderBlog);
router.post("/blog", controllerPage.addBlog);

router.get("/MyProject", controllerPage.renderMyproject);
router.get("/blogdetail/:id", controllerPage.renderDetailBlog);
router.get("/contactme", controllerPage.contact);
router.get("/testimonial", controllerPage.testimonial);
router.get("/addblog", controllerPage.renderAddBlog);

router.get("/editblog/:id", controllerPage.editPost);
router.patch("/editblogs/:id", controllerPage.newEditPost);
router.delete("/blog/:id", controllerPage.deletePost);
router.get("*", controllerPage.notfound);

module.exports = router;
