// __dirname and __filename
console.log("Directory name:", __dirname);
console.log("File name:", __filename);

// setTimeout
setTimeout(() => {
    console.log("This message is printed after 2 seconds");
}, 2000);

// setInterval
let count = 0;
const interval = setInterval(() => {
    console.log("Interval count:", ++count);
    if (count === 3) clearInterval(interval); // Stop after 3 times
}, 1000);

// global object
global.myGlobalValue = "This is a global variable";
console.log("Global variable value:", global.myGlobalValue);

// process object
console.log("Process information:");
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Process ID:", process.pid);
