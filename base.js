//基础类型
var isdone = false;
var num = 10;
var str = '字符串';
var setenc = "Hello, my name is " + str;
function nullfun() {
    console.log("空的返回值");
}
// undefined  null 和void 区别是 他们是所有类型的子类型 
// 也就是说 undefined类型的变量 可以赋值给number类型
var un = undefined;
var nu = null;
var numun = undefined;
var un2;
var num2 = un2;
// 小点就是void 类型变量
var void2;
// let void3: number = void2
//任意值
// 普通类型  在赋值过程中改变类型是不被允许的
var mynum = 'renyizhi';
// mynum = 7
// 但如果是any类型 则允许被赋值为任意类型
// 任意值上访问任何属性都是允许的  也允许调用任何方法
var myanynum = 'anyrenyizi';
myanynum = 5;
// 如果变量在声明的时候 未指定类型  那么会被认为是任意类型
var something;
something = 'something';
something = 6;
// 类型推论  
// 没有指定类型  但是在编译时候报错
var mytuilunnum = 'leixingtuilun';
// mytuilunnum = 7
var mytuilunnum2 = 'leixingtuilun';
// mytuilunnum2 = 7
// ts 在没有明确指定类型的时候推测出一个类型  如果定义的时候没有赋值 不管后面有无赋值 
//  都会被推断为any类型 而完全不被类型检查
//联合类型
// 以下可以允许两种类型 但是其他的类型就不允许了
var lianhenum;
var myis4 = {
    name: 'dfsdafsda'
};
// myis4.name = 'ghjk.l/'
//数组类型     
// 类型+方括号   
var numberarr = [1, 2, 4];
var numcai = [1, 2, 43];
//函数类型
function funsum(x, y) {
    return x + y;
}
console.log("函数的输出", funsum(2, 3));
//下面这种函数表达式有个问题就是 只是对等号右侧匿名函数做了类型定义 左边的funsum2 是通过赋值操作惊醒类型推论来的 需要手动添加下类型
var funsum2 = function (x, y) {
    return x + y;
};
console.log("函数2222的输出", funsum2(5, 6));
var funsum3 = function (x, y) {
    return x + y;
};
var myfunsum4;
myfunsum4 = function (a, b) {
    return a.search(b) !== -1;
};
// 可选参数
function keifun(a, b) {
    if (b) {
        return a + ' ' + b;
    }
    else {
        return a;
    }
}
var concatke = keifun("aaa", "ccc");
//剩余参数
function pushother(arr) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        arr.push(item);
    });
}
var pusharr = [];
pushother(pusharr, 1, 2, 3);
