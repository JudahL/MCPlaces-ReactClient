async function uploadImage(image) {
  const formData = new FormData();

  formData.append('key', '7a83b09db53c02f38a2773adb7b03fcb');
  formData.append('image', image);

  const response = await fetch("https://api.imgbb.com/1/upload", {
    method: 'POST',
    body: formData
  });

  const responseData = await response.json();

  if (!responseData.success) {
    throw new Error("There was an error uploading the image.");
  }

  return responseData.data.url;
}

export { uploadImage };