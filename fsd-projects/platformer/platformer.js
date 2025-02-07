$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 200, 20, 600, "darkblue");
    createPlatform(450, 600, 3, 2, "darkblue");
    createPlatform(250, 700, 100, 20, "darkblue");
    createPlatform(450, 730, 10, 1, "darkblue");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 1350, 50);
    createCollectable("steve", 440, 690,);


    
    // TODO 4 - Create Cannons
    createCannon("right", 450 , 750 ,200 ,20, 1);
    createCannon("top", 800, 30000, 800, 20000, 200);
    createCannon("top", 1400, 30000, 800, 20000, 200);
    createCannon("top", 300, 60000, 800, 20000, 200);
    createCannon("right", 200, 10, 20, 20, 200);
    createCannon("right", 800, 20, 1300, 20, 290);
    createCannon("top", 700, 180000, 5000, 200000, 290);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
