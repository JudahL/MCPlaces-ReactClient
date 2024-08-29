async function editPlace(id, place) {
  const response = await fetch(`https://localhost:7047/api/Place/${id}`, {
    method: 'PUT',
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

export { editPlace };