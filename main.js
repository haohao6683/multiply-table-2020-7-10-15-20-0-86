function createMultiplyTable(start, end) {
  return isValid(start, end) ? genTable(start, end) : null;
}

function isValid(start, end){//Valid the data.
  return (start <= end) && (start>=1 && start<=1000) && (end>=1 && end<=1000);
}

function genTable(start, end){//Generate the whole table.
  var result = "";
  for(var x = start; x <= end; x++){
    result = result + genOneLine(start, x);
    if (x != end) {
      result += "\n";
    }
  }
  return result;
}

function genOneLine(start,end){//Generate each line.
  var oneLine = "";
  for (var i = start; i <= end; i++) {
    oneLine = oneLine + i + "*" + end + "=" + i * end;
    if (i != end) {
      oneLine += "\t";
    }
  }
  return oneLine;
}

module.exports = {
  createMultiplyTable,
};
