let arrBlog = [];

const { Sequelize, QueryTypes, DataTypes } = require("sequelize");
const config = require("../config/config.json");
const { SELECT } = require("sequelize/lib/query-types");
const sequelize = new Sequelize(config.development);

const renderHome = (req, res) => {
  res.render("index");
};

let datas = [];
const renderBlog = async (req, res) => {
  const query = `SELECT*FROM public."Blogs"`;
  const blog = await sequelize.query(query, { type: QueryTypes.SELECT });
  console.log(blog);
  res.render("blog", { data: blog });
};

// Ini buat menambahkan blog
const addBlog = async (req, res) => {
  const { name, description, images } = req.body;
  const { nodejs, reactjs, nextjs, typescript } = req.body;
  let checkbox = []; // array untuk checkbox kosong
  //kondisi jika nodeJs nya ada
  if (nodejs) {
    checkbox.push(nodejs); // masukkan data node js ke dalam array Check box
  }
  if (reactjs) {
    checkbox.push(reactjs); // masukkan data reactjs ke dalam array Check box
  }
  if (nextjs) {
    checkbox.push(nextjs);
  }
  if (typescript) {
    checkbox.push(typescript);
  }

  const query = `INSERT INTO public."Blogs" (title, content, technologies, image) VALUES ('${name}', '${description}', '${checkbox}','${images}')`;
  await sequelize.query(query, { type: QueryTypes.INSERT });
  res.redirect("blog");
};

const renderMyproject = (req, res) => {
  res.render("blog");
};

const renderAddBlog = (req, res) => {
  res.render("addblog");
};

const editPost = async (req, res) => {
  const { id } = req.params; //params untuk mendapat url
  const query = `SELECT*FROM public."Blogs" WHERE id = ${id}`;
  const blog = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render("editblog", { data: blog[0] });
};

async function newEditPost(req, res) {
  const { id } = req.params;
  const img = req.query.image;
  console.log(img);
  let { name, description, images } = req.body;
  let { nodejs, reactjs, nextjs, typescript } = req.body;
  if (images == "") {
    images = img;
  }
  let checkbox = []; // array untuk checkbox kosong
  //kondisi jika nodeJs nya ada
  if (nodejs) {
    checkbox.push(nodejs); // masukkan data node js ke dalam array Check box
  }
  if (reactjs) {
    checkbox.push(reactjs); // masukkan data reactjs ke dalam array Check box
  }
  if (nextjs) {
    checkbox.push(nextjs);
  }
  if (typescript) {
    checkbox.push(typescript);
  }
  const query = `UPDATE public."Blogs" SET title='${name}', content='${description}', technologies='${checkbox}', image='${images}' WHERE id = ${id}`;
  await sequelize.query(query, { type: QueryTypes.UPDATE });
  res.redirect("/blog");
}

const deletePost = async (req, res) => {
  const index = req.params.id;
  const query = `DELETE FROM public."Blogs" WHERE id= ${index}`;
  await sequelize.query(query, { type: QueryTypes.DELETE });
  res.redirect("/blog");
};

const renderDetailBlog = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT*FROM public."Blogs" WHERE id = ${id}`;
  const blog = await sequelize.query(query, { type: QueryTypes.DELETE });
  res.render("blogdetail", { data: blog[0] });
};
const contact = (req, res) => {
  res.render("contactme");
};
const testimonial = (req, res) => {
  res.render("testimonial");
};
const notfound = (req, res) => {
  res.render("notfound");
};

module.exports = {
  renderHome,
  renderBlog,
  renderMyproject,
  renderDetailBlog,
  renderAddBlog,
  contact,
  testimonial,
  notfound,
  addBlog,
  editPost,
  deletePost,
  newEditPost,
};
