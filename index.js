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

    // map through the party data
    const eventItems = events.map(event => {
      // create new list items for each event
      const nameItem = document.createElement('li');
      const dateTimeItem = document.createElement('li');
      const locationItem = document.createElement('li');
      const descriptionItem = document.createElement('li');

      // set the text content of each list item
      nameItem.textContent = event.name;
      locationItem.textContent = event.location;
      descriptionItem.textContent = event.description;

      // format date
      const eventDate = new Date(event.date);
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      dateTimeItem.textContent = eventDate.toLocaleString('en-US', options); // Format date and time

      // return the list items as an object
      return { nameItem, dateTimeItem, locationItem, descriptionItem };
    });

    eventItems.forEach(({ nameItem, dateTimeItem, locationItem, descriptionItem }) => {
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
