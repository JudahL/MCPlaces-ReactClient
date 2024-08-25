async function addNewPlace(place) {
  const response = await fetch("https://localhost:7047/api/Place", {
    method: 'POST',
    body: JSON.stringify(place),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const responseData = await response.json();

  if (!responseData.isSuccess) {
    throw new Error(responseData.errorMessages[0]);
  }
}

export { addNewPlace };