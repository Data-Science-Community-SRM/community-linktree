const blog = document.getElementById("blog");
const event = document.getElementById("event");
const project = document.getElementById("project");
const website = document.getElementById("website");

const client = contentful.createClient({
  space: "ly7a2axwaoo6",
  accessToken: "LPvNBROxobxcRz6aUlxmon6eeDwCLPVJpvnAIzmDlms",
});

//BLOG
client
  .getEntry("7I7T7ZxdbJ3cH7f7xWAqga")
  .then((entry) => {
    blog.href = entry.fields.bloglink;
  })
  .catch((err) => {
    alert("We are facing some issues. Please try again after some time.");
  });

// EVENT
client
  .getEntry("2H4aWdKpsx7kqy9Txxl8yU")
  .then((entry) => {
    event.href = entry.fields.eventlink;
  })
  .catch((err) => {
    alert("We are facing some issues. Please try again after some time.");
  });

//PROJECT
client
  .getEntry("5sMoQthXmfYpwWCqYaetUp")
  .then((entry) => {
    project.href = entry.fields.projectlink;
  })
  .catch((err) => {
    alert("We are facing some issues. Please try again after some time.");
  });

//WEBSITE
client
  .getEntry("5ajPLzIsywGfSRn6BUZf2k")
  .then((entry) => {
    website.href = entry.fields.websitelink;
  })
  .catch((err) => {
    alert("We are facing some issues. Please try again after some time.");
  });
