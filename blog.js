let blogs = []; //length nya adalah 0

function addBlog(e) {
  e.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  if (title == "" || content == "" || image.files.length === 0) {
    return alert("All Input Field Cannot Be Empty");
  }
  let imageInput = URL.createObjectURL(image.files[0]);

  let blog = {
    author: "Pandu Rizky",
    title: title,
    content: content,
    image: imageInput,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  console.log(blogs);

  let blogListElement = document.getElementById("blogList");
  blogListElement.innerHTML = firstBlogContent();
}
