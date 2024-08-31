async function editPlace(id, place) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/Place/${id}`, {
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