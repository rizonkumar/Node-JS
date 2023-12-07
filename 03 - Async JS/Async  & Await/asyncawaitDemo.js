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


async function processing() {
    let downloadData = await fetchData("www.google.com");
    console.log("Downloading await completed")
    let file = await writeFile(downloadData);
    console.log("Writing await completed")
    let uploadResponse = await uploadData(file, "www.drive.google.com");
    console.log("Uploading await completed")
    console.log("Completed process with response", uploadResponse);

    return true;
}

processing();