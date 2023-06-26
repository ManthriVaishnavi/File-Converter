function convertFile() {
  var file = document.getElementById("file").files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    var text = reader.result;
    var convertedText = text.toUpperCase();
    document.getElementById("output").innerHTML = convertedText;
  };
}

