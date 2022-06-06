const url = "myapp-back-sv.myapp"

var tableRef = document.getElementsByTagName('tbody')[0];


fetch(url)
  .then(response => response.json())
  .then(json => {
    members = json.members
    members.forEach(element => {
      el = "<th scope='row'>" + element.id + "</th><td>" + element.name + "</td><td>" + element.surname + "</td><td>" + element.mission + "</td"
     
      var newRow = tableRef.insertRow(tableRef.rows.length);
      newRow.innerHTML = el;


    })
  })
  .catch(error => console.log(error));

