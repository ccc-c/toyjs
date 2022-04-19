var a = [1, 2, 3];

print(a);
print(a.length);

var arrayPrint = function (a) {
    var i=0;
    while (i<a.length) {
        print(a[i]);
        i = i+1;
    }
};

var arrayToStr = function (a) {
    var s = '';
    var i=0;
    while (i<a.length) {
        s = s + a[i] + ',';
        i = i+1;
    }
    return s;
};


arrayPrint(a);
var sa = arrayToStr(a);
print('sa='+sa);
