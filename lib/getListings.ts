function getTomorrowDate() {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
}

function getWeekLaterDate() {
    var weekLater = new Date();
    weekLater.setDate(weekLater.getDate() + 8); 
    return weekLater.toISOString().split('T')[0];
}

export async function getListings(){
    var checkin = getTomorrowDate();
    var checkout = getWeekLaterDate();
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=United%20States&checkin=${checkin}&checkout=${checkout}&adults=2&children=0&infants=0&pets=0&page=1&currency=USD`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	},
    next:{
        revalidate:60*60*1000,
    }
};
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.results;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}