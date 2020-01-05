

$(function(){
  $("#nav-placeholder").load("./nav.html");
});

  function filterChanged() {
    var nameValue = $("#kitchenNameSearch").val().toLowerCase();
    var dayValue = $("#kitchenDayOpenSearch").val().toLowerCase();

    $(".foodbank-table tr").not(":first").filter(function() {             // gets a list of each element with class table-name-row
      var tableRow = $(this);                                   // this currently refers to the <td> (table-name-row), the parent is the whole <tr>
                                                                         //  we need the whole <tr> because we want to hide the whole row
      var nameFilterPasses = $('.table-name-row', this).text().toLowerCase().indexOf(nameValue) > -1;
      var dayFilterPasses = $('.table-day-open-row', this).text().toLowerCase().indexOf(dayValue) > -1;


      var shouldShowRow = nameFilterPasses && dayFilterPasses; // gets the current text in table-name-row. indexOf sees if our value (text input)
                                                                            //  is in the <td>
      tableRow.toggle(shouldShowRow)                                        // shows or hides <tr> based on shouldShowRow variable
    });
  }

  $(document).ready(function() {                                           // the code in here is only run when the webpage is ready
    $("#kitchenNameSearch").on("keyup", filterChanged);

    $("#kitchenDayOpenSearch").on("keyup", filterChanged);
  });
  </script>
