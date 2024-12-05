// Fetch and log JSON data
async function fetchData() {
    try {
        const response = await fetch(radgData.jsonUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching JSON:', error);
        throw error; // Rethrow to handle it in other functions
    }
}

// Randomly Select an Idea
function generateRandomIdea(ideas) {
    if (!ideas || ideas.length === 0) {
        return "There are no ideas available right now, please try again later.";
    }
    const randomIndex = Math.floor(Math.random() * ideas.length);
    return ideas[randomIndex].description;
}

// Fetch and Generate Idea
async function handleGenerateIdea() {
    try {
        const ideas = await fetchData(); // Use fetchData to get ideas
        const idea = generateRandomIdea(ideas);
        document.getElementById('displayIdea').textContent = idea; // Update paragraph
    } catch (error) {
        console.error('Error generating idea: ', error);
        document.getElementById('displayIdea').textContent = 'Something went wrong. Please try again!';
    }
}

// Attach event listener to the button
document.getElementById('generateButton').addEventListener('click', handleGenerateIdea);
