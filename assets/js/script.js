const client = contentful.createClient({
  space: "ly7a2axwaoo6",
  accessToken: "LPvNBROxobxcRz6aUlxmon6eeDwCLPVJpvnAIzmDlms",
});

//BLOG
client
  .getEntry("7I7T7ZxdbJ3cH7f7xWAqga")
  .then((entry) => {
    document.getElementById(
      "blog"
    ).innerHTML = `  <a href="${entry.fields.bloglink}"> <img src="assets/blog2.png"  class="pic1">
      <span class="caption">Blogs</span></a>`;
  })
  .catch((err) => console.log(err));

// EVENT
client
  .getEntry("2H4aWdKpsx7kqy9Txxl8yU")
  .then((entry) => {
    document.getElementById(
      "event"
    ).innerHTML = `  <a href="${entry.fields.eventlink}"><img src="assets/event.png" class="pic3">
      <span class="caption">Events</span></a>`;
  })
  .catch((err) => console.log(err));

//PROJECT
client
  .getEntry("5sMoQthXmfYpwWCqYaetUp")
  .then((entry) => {
    document.getElementById(
      "project"
    ).innerHTML = `<a href="${entry.fields.projectlink}""> <img src="assets/project.png" class="pic2">
      <span class="caption">Projects</span></a>`;
  })
  .catch((err) => console.log(err));

//WEBSITE
client
  .getEntry("5ajPLzIsywGfSRn6BUZf2k")
  .then((entry) => {
    document.getElementById(
      "website"
    ).innerHTML = ` <a href="${entry.fields.websitelink}"><img src="assets/web.png" class="pic4">
    <span class="caption">Website</span></a>`;
  })
  .catch((err) => console.log(err));
