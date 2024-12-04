// Fetch and log JSON data
const dataFilepath = './artist-dates.json';

function fetchData(dataFilepath) {
    return fetch(dataFilepath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Error fetching JSON:', error);
            throw error;
        });
}

// Randonly Select an Idea

function generateRandomIdea(ideas) {
    if (!ideas || ideas.length === 0) return "There are no ideas available right now, please try again later.";
    const randomIndex = Math.floor(Math.random() * ideas.length);
    return ideas[randomIndex].description;
}

// Fetch and Generate Idea

async function handleGenerateIdea() {
    try {
        const ideas = await fetchData(dataFilepath);
        let idea = generateRandomIdea(ideas);
        console.log('Generated Idea: ', idea);
    } catch (error) {
        console.error('Error generating idea: ', error);
    }
}

// Call function for testing
handleGenerateIdea();
