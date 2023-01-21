// https://nodejs.org/api/path.html
// The node:path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require("path");
// https://nodejs.org/api/fs.html
// The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require("fs");

// https://nodejs.org/api/path.html#pathjoinpaths
// https://defineall.tistory.com/655
// The path.join() method joins all given path segments together using the "platform-specific separator" as a delimiter, then normalizes the resulting path.
// path.join: string 형식의 인자들을 현재 운영체제에 맞춰 경로를 설정해줌.
// __dirname: 현재 폴더 경로
const directoryPath = path.join(__dirname, "");

// passing directoryPath and callback function
let out = "";
// readdir
/*
Reads the contents of a directory. The callback gets two arguments (err, files)
where files is an array of the names of the files in the directory excluding "." and ".."
*/
fs.readdir(directoryPath, function (err, files) {
    // handling error
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }

    // listing all files using forEach
    out += "const fileList = {\n";
    // avoiding this file
    let i1 = files.indexOf("ListFilesInFolder.js");
    files.splice(i1, 1);
    let i2 = files.indexOf(".DS_Store");
    files.splice(i2, 1);
    files.forEach(function(file, index) {
        // Do whatever you want to do with the file
        let tmp = `    "${index}":"${file}"`;
        if (files.length - 1 != index) tmp += ",";
        out += tmp + "\n";
    });
    out += "}\n";
    out += "export default fileList";

    // https://webruden.tistory.com/937
    // 지정된 데이터를 파일에 비동기적으로 쓴다.
    // fs.writeFile(file data, options, callback)
    // file: 저장할 파일의 경로, 파일명, 확장자명을 기입
    // 파일에 기록될 데이터 양식
    // callback: 메소드가 실행될 때 호출되는 함수
    fs.writeFile("../FileList.js", out, () => {});
    // to delete this file
    // fs.unlink("ListFilesInFolder.js", () => {})

});