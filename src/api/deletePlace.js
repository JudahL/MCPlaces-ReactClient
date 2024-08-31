async function deletePlace(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/Place/${id}`, { method: 'DELETE' });
  const responseData = await response.json();

  if (!responseData.isSuccess) {
    throw new Error(responseData.errorMessages[0]);
  }
}

export { deletePlace };