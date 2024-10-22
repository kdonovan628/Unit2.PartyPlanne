// fetch party data from the API
const fetchData = async () => {
  try {
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events`);
    const partyData = await response.json();
    console.log (partyData);

  // create a new array from the objects in the party data set 

    const partyNames = partyData.names.map((partyName) => {
      return partyName.name;

    });

  // grab list elements from HTML
  
    const eventNameList = document.querySelector(`#eventNameList`);
    const eventDateTimeList = document.querySelector(`#eventDateTimeList`);
    const eventLocationList = document.querySelector(`#eventLocationList`);
    const eventDescriptionList = document.querySelector(`#eventDescriptionList`);
    
  // loop through the party data

    partyData.forEach(event => {
      const nameItem = document.createElement(`li`);
      const dateTimeItem = document.createElement(`li`);
      const locationItem = document.createElement(`li`);
      const descriptionItem = document.createElement(`li`);

  // update the lists' text content to reflect the event data API 

    eventNameList.innerHTML = `
      <h3>${partyData.name}</h3>
    `;

  // append each item to appropriate list
    eventNameList.appendChild(nameItem);
    eventDateTimeList.appendChild(dateTimeItem);
    eventLocationList.appendChild(locationItem);
    eventDescriptionList.appendChild(descriptionItem);

  });

  } catch (error) {
    console.error(`Error fetching data:`, error);
  }
};

fetchData();
