// from data.js
let tableData = data;

// console.log("tableData", tableData);

// tableData.forEach(function (item) {
//     console.log(item["datetime"]);
// });

// let date = "1/1/2010"

// tableData.filter((datum) => {
//     return datum.datetime === date
// })

// YOUR CODE HERE!

// let filteredData = tableData.slice(0,10);

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

button.on("click", runSearch); 
// inputfield.on("click", runSearch);

function runSearch() {
    d3.event.preventDefault();
    let inputElement = inputfield.property("value");   
    let filteredData = tableData.filter(row => row.datetime === inputElement);
    console.log(filteredData);
    filteredData.forEach((row) => {
        // return table.text(row.datetime)
        // return table.text(row.city)
        // return table.text(row.state)
        // return table.text(row.country)
        // return table.text(row.shape)
        // return table.text(row.durationMinutes)
        // return table.text(row.comments);
        
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



