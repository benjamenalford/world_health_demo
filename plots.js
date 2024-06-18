// Create an array of each country's numbers
let australia = Object.values(country_data.australia);

// Create an array of category labels
let labels = Object.keys(country_data);

// Display the default plot
function init() {

  //create dropdowns for each key:
  let dropdown = d3.select("#selDataset")
  labels.forEach(country => {
    dropdown.append('option').text(country).property('country')
  })
  // Default trace for the country data
  let trace = {
    values: Object.values(country_data.australia),
    labels: labels,
    type: "pie",
    sort: false // Ensure sectors are not reordered
  }

  // Data Array
  let data = [trace]

  // Layout object
  layout = {}

  // Render the plot to the div tag with id "pie"
  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  // Assign the value of the dropdown menu option to a variable
  let selectedData = dropdownMenu.property('value')
  console.log(selectedData)
  // Initialize an empty array for the new country's data
  let newData = Object.values(country_data[selectedData])
  console.log(newData)


  //change countryName 
  d3.select("#countryName").text(selectedData)
  // countryPop
  //change countryName 
  d3.select("#countryPop").text(newData[0])
  // Call function to update the chart
  Plotly.restyle("pie", "values", [newData])
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
