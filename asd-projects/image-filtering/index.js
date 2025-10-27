// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter();
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    var row = image[r];
    for (var c = 0; c < row.length; c++) {
      var pixel = image[r][c];
      var pixelArray = rgbStringToArray(pixel);
      //This is where I'll modify the color values later
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[r][c] = updatedPixel;
    }
  }
}
applyFilter(reddify);
// TODO 9 Create the applyFilterNoBackground function


// TODO 6: Create the keepInBounds function
function keepInBounds(x) {
  if (x < 0) {
    return 0;
  } else if (x > 255) {
    return 255;
  } else {
    return x;
  }
}
// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[0] += 200;
}
// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
  pixelArray[2] -= 50;
  pixelArray[2] = keepInBounds(pixelArray[2]);
}

// CHALLENGE code goes below here
