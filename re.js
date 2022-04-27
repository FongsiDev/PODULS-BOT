var glob = require("glob");
var fs = require("fs");
var replace = require("replace");

let content = "<@678106287820505089>";
let content_ = "<@678106287820505089>";

glob("./**/*js", function (err, files) {
  if (err) {
    throw err;
  }
  files.forEach(function (item, index, array) {
    replace({
      regex: content,
      replacement: content_,
      paths: [item],
      recursive: true,
      silent: true,
    });
    console.log("Replacement complete");
  });
});

glob("./**/*json", function (err, files) {
  if (err) {
    throw err;
  }
  files.forEach(function (item, index, array) {
    replace({
      regex: content,
      replacement: content_,
      paths: [item],
      recursive: true,
      silent: true,
    });
    console.log("Replacement complete");
  });
});