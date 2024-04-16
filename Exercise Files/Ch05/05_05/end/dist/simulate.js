"use strict";

(function() {
	// log type status to console
	const types = ["Type A", "Type B", "Type C"];
	let type;
  let level;
	for (let i = 0; i <= 100; i += 1) {
		level = Math.floor(Math.random() * 10) + 1;
    let typeSelection = Math.ceil(Math.random() * types.length) - 1;
    // console.log(typeSelection);
    // if (typeSelection === 3) {
    //   console.error(typeSelection);
    // } else {
    //   console.warn(typeSelection);
    // }
		type = types[typeSelection];
		console.log( type + " is at level " + level);
	}
})();
