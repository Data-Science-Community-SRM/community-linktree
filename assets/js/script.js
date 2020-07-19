const client = contentful.createClient({
  space: "ly7a2axwaoo6",
  accessToken: "LPvNBROxobxcRz6aUlxmon6eeDwCLPVJpvnAIzmDlms",
});

//BLOG
client
  .getEntry("7I7T7ZxdbJ3cH7f7xWAqga")
  .then((entry) => { 
    let box1 = document.querySelector('#blog');
  box1.setAttribute("onclick", `window.location.href='${entry.fields.bloglink}'`);
  })
  .catch((err) => alert("We are facing some issues. Please try again after some time."));

// EVENT
client
  .getEntry("2H4aWdKpsx7kqy9Txxl8yU")
  .then((entry) => { 
    let box2 = document.querySelector('#event');
  box2.setAttribute("onclick", `window.location.href='${entry.fields.eventlink}'`);
  })
  .catch((err) => alert("We are facing some issues. Please try again after some time."));

//PROJECT
client
  .getEntry("5sMoQthXmfYpwWCqYaetUp")
  .then((entry) => { 
    let box3 = document.querySelector('#project');
  box3.setAttribute("onclick", `window.location.href='${entry.fields.projectlink}'`);
  })
  .catch((err) => alert("We are facing some issues. Please try again after some time."));

//WEBSITE
client
  .getEntry("5ajPLzIsywGfSRn6BUZf2k")
  .then((entry) => { 
    let box4 = document.querySelector('#website');
  box4.setAttribute("onclick", `window.location.href='${entry.fields.websitelink}'`);
  })
  .catch((err) => alert("We are facing some issues. Please try again after some time."));
