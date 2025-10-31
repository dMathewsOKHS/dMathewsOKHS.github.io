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
//Resets Image to Normal
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
//Applies Filters when the "Apply filter" button is pressed
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
//Helps filter the image
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

// TODO 9 Create the applyFilterNoBackground function

//Applies a filter without changing the background
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var r = 0; r < image.length; r++) {
    var row = image[r];
    for (var c = 0; c < row.length; c++) {
      var pixel2 = image[r][c];
      if (pixel2 !== backgroundColor) {
        var pixelArray2 = rgbStringToArray(pixel2);
        filterFunction(pixelArray2);
        var updatedPixel2 = rgbArrayToString(pixelArray2);
       image[r][c] = updatedPixel2;
      }
    }
  }  
}

// TODO 6: Create the keepInBounds function
//Keeps the color value within 255
function keepInBounds(x) {
 return x < 0 ? 0 : (x > 255 ? 255 : x);
}

// TODO 4: Create reddify filter function
//Increasing red color by 200 filter
function reddify(pixelArray) {
  pixelArray[RED] += 200;
  pixelArray[RED] = keepInBounds(pixelArray[RED]);
}

// TODO 7 & 8: Create more filter functions
//Decreasing Blue color by 50 Filter
function decreaseBlue(pixelArray) {
  pixelArray[BLUE] -= 50;
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE]);
}

//Increasing green by blue value filter
function increaseGreenByBlue(pixelArray) {
  pixelArray[GREEN] += pixelArray[BLUE];
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN]);
}

//Challenge code goes below here
