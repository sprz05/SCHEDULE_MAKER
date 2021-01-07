var text;
var selectedText;
var next = document.getElementById("next");
var inputAssignments = document.getElementById("inputAssignments");
var addAssignmentBtn = document.getElementById("addAssignmentBtn");
var closeAssignmentBtn = document.getElementById("closeAssignmentBtn");
var schedule = document.getElementById("schedule");
var closeAddAssignmentBtn = document.getElementById("closeAddAssignmentBtn");


var currentlyDragged;
 var currentClass;

var blue = document.getElementById("blue");
var blue2 = document.getElementById("blue2");

var mulAsi = document.getElementById("mulAsi");
var oneAsi = document.getElementById("oneAsi");


  window.addEventListener('load', (event) => {
    getAndSet();
});

function getAndSet(){
  var table = localStorage.getItem('Table');
  console.log(table);

  document.getElementById("tableInIndex").innerHTML = table;
}

function set(){
 localStorage.setItem('Table', document.getElementById("tableInIndex").innerHTML);
 getAndSet();
}


function showInputA(){
  inputAssignments.style.display = "block";
  
  blue.style.display = "none";
  mulAsi.style.display = "none";

  oneAsi.style.display = "block";
  blue2.style.display = "block";
  closeAddAssignmentBtn.style.display = "block";

  next.style.display = "none";
  addAssignmentBtn.style.display = "none";
}


function closeInputA(){
    inputAssignments.style.display = "none";
}

function closeInputA(){
  inputAssignments.style.display = "none";
  addAssignmentBtn.style.display = "block";
}

function showSchedule(){
  inputAssignments.style.display = "none";
  schedule.style.display = "block";
}





var elementCounter = 0;
function addElement() {
  var classN = event.target.id;
  text = document.getElementById("input").value;
  // create a new div element and give it a unique id
  var newDiv = document.createElement("div");
  newDiv.id = 'temp' + elementCounter;
  newDiv.classList = "div";
  elementCounter++
  if (classN == "blue") {
    newDiv.classList = "blue"
    newDiv.setAttribute("data-id", "blue"); 
  } 
  var newContent = document.createTextNode(text);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  
  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

  $(function() {

    var currentlyDragged;


    $("[id^='temp']").draggable({
      drag: function(e) {
        currentClass = $("#" + currentlyDragged).attr("class");
        console.log(currentClass);

        currentlyDragged = e.target.id;
        console.log(currentlyDragged)

        selectedText = event.target;
        text = $(selectedText).html();
      }
    });


    var slectedTD;
    var currentlyDraggedNewDiv;
    $("td").droppable({
      drop: function(event, ui) {
        selectedTD = event.target.id;

        $(this).removeClass();
        var newDiv = $("<div>"+ text +"</div>");
        //$(newDiv).addClass($("#" + currentlyDragged).attr("data-id"));
        $( this ).append(newDiv);
 
        console.log(currentlyDragged)

        $("div").draggable({
        drag: function(e) {

        currentlyDraggedNewDiv = e.target;
        text = $(currentlyDraggedNewDiv).html();
        console.log(currentlyDraggedNewDiv);

      }
    }); 
        $("#" + currentlyDragged).remove();
      } 
    });

  });



  document.getElementById("input").value = " ";
  checkLink()

}


var clickedTH;

 /* $(function () {
    $(".th").dblclick(function (e) {
        clickedTH = event.target; 
        e.stopPropagation();
        var currentEle = $(clickedTH);
        var value = $(clickedTH).html();
        updateVal2(currentEle, value);
    });
});*/



$(function () {
    $(".th").dblclick(function (e) {
        e.stopPropagation();
        var currentEle = $(this);
        var value9 = $(this).html();
        updateVal9(currentEle, value9);
    });
});

function updateVal9(currentEle, value9) {
    $(document).off('click');
    $(currentEle).html('<input class="thVal9" type="text" value="' + value9 + '" />');
    $(".thVal9").focus();
    $(".thVal9").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal9").val().trim());
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal9").val().trim());
    });
}





//create tr into table
var tdCounter = 0;
function addTr() {
  var newTr = 
  $("<tr><th class='th' width=100>0:00 PM</th><td width='100'></td><td width='100'></td><td width='100'></td><td width='100'></td><td width='100'></td><td class='delTr'></td>")
  newTr.id = 'td' + tdCounter;
  newTr.classList = "div";
  tdCounter++

  // add the newly created element and its content into the table
  $("table").append(newTr)

   /*(".th").dblclick(function (e) {
        clickedTH = event.target; 
        e.stopPropagation();
        var currentEle = $(clickedTH);
        var value = $(clickedTH).html();
        updateVal2(currentEle, value);
    });*/
 alert("you just added a row to your table double click the 0:00 to edit the time")
 $(".th").dblclick(function (e) {
        clickedTH = event.target; 
        e.stopPropagation();
        var currentEle10 = $(clickedTH);
        var value10 = $(clickedTH).html();
        updateVal10(currentEle10, value10);
    });
}

function updateVal10(currentEle10, value10) {

    $(document).off('click');
    $(currentEle10).html('<input class="thVal" type="text" value="" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle10).html($(".thVal").val().trim());
        }
    });

    $(document).click(function () {
            $(currentEle10).html($(".thVal").val().trim());
    });
}

 $("#tbUser").on('click', '.btnDelete', function () {
    //$(this).closest('tr').remove();
    alert("wow")
});

//when they click the delte button delets closest tr



var editTxt = document.getElementById("editTxt");
var redBg = document.getElementById("redBg");
var del = document.getElementById("del");
var clickedTD;


//edit text

  $(function () {
    $(editTxt).click(function (e) {
        e.stopPropagation();
        var currentEle = $(clickedTD);
        var value = $(clickedTD).html();
        updateVal(currentEle, value);
    });
});

function updateVal(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val());
            closeEditH();
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val());
            closeEditH();
    });
}



function updateVal(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text"/>');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val());
             $("#editHeader").css("display","none");
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val());
            $("#editHeader").css("display","none");
    });



}


  //"trash can"


  $(function() {
    
    var trash = document.getElementById('trash');

    $("#trash").droppable({
      drop: function( event, ui ) {
      for (let i = 0; i < ui.draggable.length; i++) {
        ui.draggable[i].remove();
      }
      
      }
    });
  });


/*

var doubleClickedTD;

$(function () {
    $("td").dblclick(function (e) {
      doubleClickedTD = event.target;
        $("#editHeader").css("display","none");
        $("#editTDHeader").css("display","block");       
    });
});
*/

function closeEditHTD(){
  $("#editTDHeader").css("display","none");
}

//edit text


  $(function () {
    $(editTDTxt).click(function (e) {
        e.stopPropagation();
        var currentEle = $(doubleClickedTD);
        var value = $(doubleClickedTD).html();
        updateVal(currentEle, value);
    });
});

function updateVal(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text" value="' +  text  + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val());
            closeEditHTD();
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val());
            closeEditHTD();
    });
}

//edit color


  $(function () {
    $(redBgTD).click(function (e) {
      $(doubleClickedTD).removeClass();
        $(doubleClickedTD).addClass("redBg");
        closeEditHTD();
    });
});

$(function () {
    $(blueBgTD).click(function (e) {
      $(doubleClickedTD).removeClass();
        $(doubleClickedTD).addClass("blue2Bg");
        closeEditHTD();
    });
});


$(function () {
    $(purpleBgTD).click(function (e) {
      $(doubleClickedTD).removeClass();
        $(doubleClickedTD).addClass("blueBg");
        closeEditHTD();
    });
});

$(function () {
    $(greenBgTD).click(function (e) {
      $(doubleClickedTD).removeClass();
        $(doubleClickedTD).addClass("greenBg");
        closeEditHTD();
    });
});



window.addEventListener('load', (event) => {

      var currentlyDragged;

    $("div").draggable({
      drag: function(e) {

        currentlyDragged = e.target;
        newDiv = currentlyDragged;
        console.log(currentlyDragged)

        text = $(currentlyDragged).html();

      }
    });



    var slectedTD;
    var currentlyDraggedNewDiv;
    $("td").droppable({
      drop: function(event, ui) {
        selectedTD = event.target.id;


        var newDiv = $("<div>"+ text +"</div>");


        $( this ).append(newDiv);
 
        console.log(currentlyDragged)

        $("div").draggable({
        drag: function(e) {

        currentlyDraggedNewDiv = e.target;
        text = $(currentlyDraggedNewDiv).html();




        console.log(currentlyDraggedNewDiv);

      }
    }); 
        $(currentlyDraggedNewDiv).remove();
      }
    });

  });



function updateVal2(currentEle, value) {
    $(currentEle).html('<input class="thVal" type="text" value="' +  value  + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val());
        }
    });

    $(document).click(function () {
            $(currentEle).html($(".thVal").val());
    });
}



    
