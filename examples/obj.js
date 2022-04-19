var o = { name:'ccc', age:52 };

print(o);
print(o.name);
print(o.age);
var t = typeof o;
print(t);
print(typeof t);
if (t === 'object') {
    print('t is a object');
}

var fields = o.children;
print(fields);
