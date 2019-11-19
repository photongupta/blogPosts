const fs = require("fs");

const arrayMaker = function(string) {
  let splittedString = string.split(",");
  return splittedString;
};

const addIDInPostList = function(postList,post) {
  let ID = post[0].split('"').join("");
  postList[ID] = {};
  return postList;
};

const main = function() {
  let content = fs.readFileSync("./posts.csv","utf8");
  content = content.split(";\n");
  let contentHeaders = content.slice(0,1);
  let posts = content.slice(1,3);
  contentHeaders = contentHeaders[0].split(",");
  posts = posts.map(arrayMaker);
  console.log(posts);
  let postlist = posts.reduce(addIDInPostList,{});
  console.log(postlist);
};

main();

