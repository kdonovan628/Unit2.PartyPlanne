// fetch party data from the API
const fetchData = async () => {
  try {
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events');
    const partyData = await response.json();
    console.log(partyData);

    // access the events directly from partyData.data
    const events = partyData.data;

    // grab list elements from HTML
    const eventNameList = document.querySelector('#eventNameList');
    const eventDateTimeList = document.querySelector('#eventDateTimeList');
    const eventLocationList = document.querySelector('#eventLocationList');
    const eventDescriptionList = document.querySelector('#eventDescriptionList');

    // loop through the party data
    events.forEach(event => {
      // create new list items for each event
      const nameItem = document.createElement('li');
      const dateTimeItem = document.createElement('li');
      const locationItem = document.createElement('li');
      const descriptionItem = document.createElement('li');

      // Set the text content of each list item
      nameItem.textContent = event.name;
      locationItem.textContent = event.location;
      descriptionItem.textContent = event.description;

      // format date
      const eventDate = new Date(event.date);
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      dateTimeItem.textContent = eventDate.toLocaleString('en-US', options); // Format date and time

      // Append each item to the appropriate list
      eventNameList.appendChild(nameItem);
      eventDateTimeList.appendChild(dateTimeItem);
      eventLocationList.appendChild(locationItem);
      eventDescriptionList.appendChild(descriptionItem);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();