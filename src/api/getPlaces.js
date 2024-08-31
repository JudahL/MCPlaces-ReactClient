async function getPlaces() {  
  console.log(import.meta.env.VITE_API_URL);
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/Place`);
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