const filezone = document.querySelector(".file-zone");
const imagePreviewArea = document.querySelector(".image-list");

filezone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

const displayImages = (transferedFiles) => {
  const imageFileList = [];
  const fileNum = transferedFiles.length;
  for (let i = 0; i < fileNum; i++) {
    if (transferedFiles[i].type.match("image.*") === false) {
      return;
    }
    imageFileList.push(transferedFiles[i]);
  }
  for (let imageFile of imageFileList) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load", (e) => {
      const image = new Image();
      image.src = e.target.result;
      imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild);
    });
  }
};

filezone.addEventListener("drop", (e) => {
  e.preventDefault();
  const transferedFiles = e.dataTransfer.files;
  displayImages(transferedFiles);
});

//e.dataTransfer.files :
