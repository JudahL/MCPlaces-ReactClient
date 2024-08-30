async function uploadImage(image) {
  const formData = new FormData();

  formData.append('api_key', 'zEyRDSTWJkeplTuL0KssKvNlyqQm6AW5');
  formData.append('file', image);

  const response = await fetch("https://www.imghippo.com/v1/upload", {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  const responseData = await response.json();

  if (!responseData.success) {
    throw new Error("There was an error uploading the image.");
  }

  return responseData.data.view_url;
}

export { uploadImage };