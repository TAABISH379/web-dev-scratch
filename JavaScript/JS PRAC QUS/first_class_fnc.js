function shout(msg) {
 return msg.toUpperCase();
}
function processMessage(fn) {
 console.log(fn("hello"));
}
processMessage(shout);