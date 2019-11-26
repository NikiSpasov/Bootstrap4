$(document).ready(function () {
  $('#btnAdd').on('click', addNumbers);
  $('#btnSubtract').on('click', subtractNumbers)
  $('#btnMultiplication').on('click', multiplyNumbers)
  $('#btnDivision').on('click', divideNumbers)
});
// function addNumbers() {
//   var x = document.getElementById('x').value;
//   var y = document.getElementById('y').value;
//   var result = document.getElementById('result');
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function () {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//       var jsonObject = JSON.parse(xmlhttp.response);
//       result.innerHTML = jsonObject.result;
//     }
//   }
//   xmlhttp.addEventListener("progress", updateProgress, false);
//   xmlhttp.addEventListener("error", failed, false);
//   xmlhttp.addEventListener("abort", canceled, false);
//   xmlhttp.open("GET", "/addition?x=" + x + "&y=" + y, true);
//   xmlhttp.send();
// }

//jQuery way:
// function addNumbers() {
//   var x = $('#x').val();
//   var y = $('#y').val();
//   var data = { "x": x, "y": y };
//   $.ajax({
//     url: '/addition',
//     data: data,
//     type: 'GET',
//     cache: false,
//     dataType: 'json',
//     success: function (data) {
//       $('#result').html(data.result);
//     }
//   });
// }

//or 
function addNumbers() {
  var x = $('#x').val();
  var y = $('#y').val();
  var data = { "x": x, "y": y };
  $.getJSON('/addition', data, function (data) {
    $('#result').html(data.result);
  });
}

function subtractNumbers() {
  var x = $('#x').val();
  var y = $('#y').val();
  var data = { "x": x, "y": y };
  $.post('/subtraction', data, function (data) {
    $('#result').html(data.result);
  }, 'json');
}

function multiplyNumbers() {
  var x = $('#x').val();
  var y = $('#y').val();
  var data = { "x": x, "y": y };
  $.ajax({
    url: '/multiply',
    data: data,
    type: 'PUT',
    dataType: 'json',
    cache: false,
    success: function (data) {
      $('#result').html(data.result);
    }
  });
}

function divideNumbers() {
  var x = $('#x').val();
  var y = $('#y').val();
  var data = { "x": x, "y": y };
  $.ajax({
    url: '/divide',
    data: data,
    type: 'DELETE',
    dataType: 'json',
    cache: false,
    success: function (data) {
      $('#result').html(data.result);
    }
  });
}

function updateProgress(evt) {
  if (evt.lengthComputable) {
    var percentComplete = evt.loaded / evt.total;
    //display percenComplete
  } else {
    // Need total size to compute progress
  }
}

function failed(evt) {
  alert("An error occurred");
}

function canceled(evt) {
  alert("canceled by the user");
}