//const fs = require("fs");

const toPostDetails = function(row) {
  return row.split(",");
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
  posts = posts.map(toPostDetails);
  console.log(posts);
  let postlist = posts.map(addIDInPostList);
  console.log(postlist);

    return ;
};*/
exports.addIDInPostList = addIDInPostList; 
exports.toPostDetails = toPostDetails;
exports.filterHeader =filterHeader;
