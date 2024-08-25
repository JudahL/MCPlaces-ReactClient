async function getPlaces() {
  const response = await fetch("https://localhost:7047/api/Place");
  const responseData = await response.json();

  if (!responseData.isSuccess) {
    throw new Error('Failed to retrieve places.');
  }

  if (responseData.data == undefined) {
    throw new Error('Incorrect response model returned.');
  }

  return responseData.data;
}

export { getPlaces };