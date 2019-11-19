//const fs = require("fs");

const arrayMaker = function(string) {
  return string.split(",");
};

const addIDInPostList = function(post) {
  let postList = {};
  let ID = post[0].split('"').join("");
  postList[ID] = {};
  return postList;
};

const filterHeader = function(content) {
  content = content.split(";\n");
  let contentHeaders = content.slice(0,1);
  return contentHeaders[0].split(",");
};

/*const createPostsList  = function() {
  let posts = content.slice(1,3);
  posts = posts.map(arrayMaker);
  console.log(posts);
  let postlist = posts.map(addIDInPostList);
  console.log(postlist);

    return ;
};*/
exports.addIDInPostList = addIDInPostList; 
exports.arrayMaker = arrayMaker;
exports.filterHeader =filterHeader;
