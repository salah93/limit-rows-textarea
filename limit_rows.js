var maxl = 1000000;
var maxRows = 7;

function limitRows(e){
  var text = this.value;
  text = text.split('\n');
  var rows = text.length;
  if (rows > maxRows){
    this.maxLength = this.value.length;
    text.splice(maxRows,(text.length-maxRows),'');
    this.value = text.join('\n');
  }
  else
    this.maxLength = maxl;
}

//put id of textarea
var text = document.getElementById('textarea');
text.addEventListener('input',limitRows,false);

