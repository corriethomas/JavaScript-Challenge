// Read data from data.js
let tableData = data;

// Create table
let table = d3.select("tbody");

tableData.forEach((rec) => {
   let tr = table.append("tr");
   tr.append("td").text(rec.datetime);
   tr.append("td").text(rec.city);
   tr.append("td").text(rec.state);
   tr.append("td").text(rec.country);
   tr.append("td").text(rec.shape);
   tr.append("td").text(rec.durationMinutes);
   tr.append("td").text(rec.comments);
});

// Define variables to be used in search function
let button = d3.select("#filter-btn");

let inputdate = d3.select("#datetime");
let inputcity = d3.select("#city");
let inputstate = d3.select("#state");
let inputcountry = d3.select("#country");
let inputshape = d3.select("#shape");

// Create search function
button.on("click", runSearch);

function runSearch() {
    d3.event.preventDefault();
    let dateElement = inputdate.property("value"); 
    let cityElement = inputcity.property("value");
    let stateElement = inputstate.property("value");
    let countryElement = inputcountry.property("value");
    let shapeElement = inputshape.property("value");  
    let filteredData = tableData.filter(row => (row.datetime === dateElement) 
        || (row.city === cityElement) 
        || (row.state === stateElement) 
        || (row.country === countryElement) 
        || (row.shape === shapeElement));
    console.log(filteredData);
    filteredData.forEach((row) => {        
        let tr = table.append("tr");
        tr.append("td").text(row.datetime);
        tr.append("td").text(row.city);
        tr.append("td").text(row.state);
        tr.append("td").text(row.country);
        tr.append("td").text(row.shape);
        tr.append("td").text(row.durationMinutes);
        tr.append("td").text(row.comments);
    });
};

