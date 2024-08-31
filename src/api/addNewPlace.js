async function addNewPlace(place) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/Place`, {
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