var _speedconstant = 8.9997e-9;
var d = new Date();
var amount = 150000000;

var estprocessor = 1.7;
console.log("running loop " + amount + " times.\nEstimated time (for " + estprocessor + "ghz processor) is "
 + (Math.round(((_speedconstant * amount) / estprocessor) * 100) / 100) + "s");
for (var i = amount; i > 0; i--) { }
var newd = new Date();
var accnewd = Number(String(newd.getSeconds()) + "." + String(newd.getMilliseconds()));
var accd = Number(String(d.getSeconds()) + "." + String(d.getMilliseconds()));
var di = accnewd - accd;
if (d.getMinutes() != newd.getMinutes()) {
    di = (60 * (newd.getMinutes() - d.getMinutes())) + di
}
spd = ((_speedconstant * amount) / di);
console.log("Time: " + Math.round(di * 1000) / 1000 + "s, \nestimated speed: " + Math.round(spd * 1000) / 1000 + "GHZ");
var cpu = navigator.hardwareConcurrency
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    document.getElementById('amorpm').innerHTML = ampm
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
document.getElementById('loops').innerHTML = `Running ${amount} Loops`;
document.getElementById('espro').innerHTML = `Processor: ${estprocessor} ghx processor`
document.getElementById('tottime').innerHTML = `Time: ${Math.round(di * 1000) / 1000} s`
document.getElementById('cpuCount').innerHTML = `Cpu: ${cpu}`

document.onload(startTime());




