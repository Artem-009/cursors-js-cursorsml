const cursorsjs = require("cursors-js");

const cjs = new cursorsjs.Client({
  ws: "wss://ws.cursors.ml:8443/",
  origin: "https://cursors.ml/",
	controller: true,
	reconnect: true,
	recconectTimeout: 5000
});

cjs.on("gotId", async function() {
  console.log("Connected. Your id is " + cjs.id);
  await cjs.move(300, 175); // first level
  // await cjs.drawWord("Howdy")
});

cjs.on("level", async function(level) {
  console.log("Bot stay on level: " + level) //when level changes it logs your bot level

  if (level == 2) {

    /*
    while (level == 2) {
       await cjs.move(64, 131);
      await cjs.drawWord("Cursors.io dead 2021", x = 70, y = 20, fontSize = 4, kerning = 3, timeout = 250, sneaky = true);
      await cjs.drawWord("Make this game great again!", x = 70, y = 100, fontSize = 4, kerning = 3, timeout = 250, sneaky = true);
      //  cjs.click();
    }
    */
    await cjs.move(5, 3); // 3 lvl (first)
  }
  while (level == 3) {
    await cjs.move(75, 130);
    cjs.click();
  }

});

cjs.on("close", function() {
  console.log("Disconnected");
});

