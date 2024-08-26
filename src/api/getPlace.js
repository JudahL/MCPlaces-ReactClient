async function getPlace(id) {
  const response = await fetch(`https://localhost:7047/api/Place/${id}`);
  const responseData = await response.json();

  if (!responseData.isSuccess) {
    throw new Error(responseData.errorMessages[0]);
  }

  if (responseData.data == undefined) {
    throw new Error('Incorrect response model returned.');
  }

  return responseData.data;
}

export { getPlace };