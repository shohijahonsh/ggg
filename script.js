var a = +prompt("son kiriting")
while (isNaN(a) || a == 0 || a < 0) {
  a = +prompt("hato")
}
var b = +prompt("darajasini yozing")
while (isNaN(b) || b == 0 || b < 0) {
  b = +prompt("hato")
}


var c = a
for (var i = 1; i < b; i++) {
  c = c *a
}
console.log(c);