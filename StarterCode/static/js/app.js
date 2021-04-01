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