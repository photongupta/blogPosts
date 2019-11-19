const assert = require("assert")
const lib = require("../src/postLib.js");

describe("addIDInPostList",function(){
  it("should add the IDs in the postLists",function(){
    assert.deepStrictEqual(lib.addIDInPostList(["1","2","3"]),{1:{}})
  });
});

describe("arrayMaker",function(){
    it("should split the string and give array ",function(){
      assert.deepStrictEqual(lib.arrayMaker("r,a,s"),["r","a","s"]);
    });
});

describe("filterHeader",function(){
    it("should filter the headers and give them into an array",function(){
      let actual = lib.filterHeader("name,father's name;\n rashmi,anand")
      let expected = ["name","father's name"]
      assert.deepStrictEqual(actual,expected);
    });
});
