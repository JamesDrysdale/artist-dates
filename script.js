// Fetch and log JSON data
fetch('./artist-dates.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Log the array to confirm access
  })
  .catch((error) => {
    console.error('Error fetching JSON:', error);
  });