async function deletePlace(id) {
  const response = await fetch(`https://localhost:7047/api/Place/${id}`, { method: 'DELETE' });
  const responseData = await response.json();

  if (!responseData.isSuccess) {
    throw new Error(responseData.errorMessages[0]);
  }
}

export { deletePlace };