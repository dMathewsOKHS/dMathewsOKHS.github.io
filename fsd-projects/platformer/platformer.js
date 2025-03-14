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
    createPlatform(430, 500, 75, 10, "darkblue");
    createPlatform(430, 390, 75, 10, "darkblue");
    createPlatform(430, 290, 75, 10, "darkblue");
    createPlatform(160, 300, 80, 10, "darkblue");
    createPlatform(160, 200, 20, 100, "darkblue");
    createPlatform(830, 350, 75, 10, "darkblue");
    createPlatform(830, 500, 75, 10, "darkblue");
    createPlatform(1129, 500, 75, 10, "darkblue");
    createPlatform(1129, 350, 75, 10, "darkblue");
    createPlatform(980, 425, 75, 10, "darkblue");
    createPlatform(0, 125, 75, 10, "darkblue");
    createPlatform(350, 600, 20, 120, "darkblue");
    createPlatform(350, 600, 100, 20, "darkblue");
    createPlatform(250, 700, 100, 20, "darkblue");
    createPlatform(440, 730, 10, 1, "darkblue");


    //platforms on right side of wall
    createPlatform(600, 300, 75, 10, "darkblue");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 870, 300);
    createCollectable("diamond", 1170, 300);
    createCollectable("diamond", 430, 690);
    createCollectable("diamond", 0, 90);

    // TODO 4 - Create Cannons
    createCannon("top", 700, 150000, 5000, 200000, 290);
    createCannon("top", 700, 150000, 5000, 200000, 290);
    createCannon("top", 525, 10000, 50, 20000, 20);
    createCannon("top", 875, 5000, 40, 20000, 200);
    createCannon("top", 975, 5000, 30, 20000, 200);
    createCannon("top", 1075, 5000, 20, 20000, 200);
    createCannon("top", 1175, 5000, 30, 20000, 200);
    createCannon("top", 1275, 5000, 40, 20000, 200);
    createCannon("top", 300, 60000, 800, 20000, 200);
    createCannon("right", 200, 500, 20, 20, 200);
    createCannon("right", 500 , 400 ,100 ,20, 1);
    createCannon("right", 800, 20, 1300, 20, 290);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
