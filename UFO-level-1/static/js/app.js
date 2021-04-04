// from data.js
let tableData = data;

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

let button = d3.select("#filter-btn");
let inputfield = d3.select("#datetime");
let form = d3.select("#form");

button.on("click", runSearch);

function runSearch() {
    d3.event.preventDefault();
    let inputElement = inputfield.property("value");   
    let filteredData = tableData.filter(row => row.datetime === inputElement);
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
}