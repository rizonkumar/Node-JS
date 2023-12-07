// Tasks:
// 1. Write a function to download data from a URL.
// 2. Write a function to save that downloaded data in a file & return the fileName
// 3. Write a function to upload the file written in previous step in a newURL.

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from url", url);
    setTimeout(function processDownloading() {
      let data = "Dummy Data";
      console.log("Download Completed");
      resolve(data);
    }, 7000);
  });
}

function writeFile(data) {
  return new Promise(function (resolve, resject) {
    console.log("Started writing ", data, " in a file");
    setTimeout(function processWriting() {
      let fileName = "result.txt";
      console.log("File written successfully");
      resolve(fileName);
    }, 3000);
  });
}

function uploadData(fileName, url) {
  return new Promise(function (resolve, reject) {
    console.log("Upload started on url", url, " file name is", fileName);
    setTimeout(function processUpload() {
      let result = "SUCCESS";
      console.log("Uploading done");
      resolve(result);
    }, 5000);
  });
}

// let data = fetchData("www.datadrive.com");
// let fileName = writeFile(data);
// let response = uploadData(fileName, "www.googledrive.com");
// the above code will not work in required fashion

// let downloadPromise = fetchData("www.datadrive.com");
// downloadPromise.then(function processDownload(value) {
//   console.log("Download promise fulfill");
//   let writePromise = writeFile(value);
//   writePromise.then(function processWriting(value) {
//     console.log("Wrting done");
//     console.log("file name is ", value);
//   });
// });


// let downloadPromise = fetchData("www.datadrive.com");
// x = downloadPromise
// .then(function processDownload(value) {
//     console.log("Downloading is done with the following value", value);
//     // return "Rizon";  
// })

// x.then(function processDownload(value) {
//     console.log("x promise value is", value);
// })



let downloadPromise = fetchData("www.datadrive.com");
downloadPromise
.then(function processDownload(value) {
    console.log("Downloading done with the following value", value);
    return value;
})
.then(function processWrite(value) {
    return writeFile(value);
})
.then(function processUpload(value) {
    return uploadData(value, "www.googledrive.com");
})
