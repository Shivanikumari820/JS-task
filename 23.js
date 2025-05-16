  function insert_Row() {
      var table = document.getElementById("sampleTable");
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "New Cell 1";
      cell2.innerHTML = "New Cell 2";
  }
  