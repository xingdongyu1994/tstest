//基础类型
let  isdone: boolean = false
let  num: number = 10
let  str: string = '字符串'
let  setenc: string = `Hello, my name is ${str}`
function nullfun(): void {
  console.log("空的返回值")
}
// undefined  null 和void 区别是 他们是所有类型的子类型 
// 也就是说 undefined类型的变量 可以赋值给number类型
let un: undefined = undefined
let nu: null = null

let numun: number = undefined
let un2: undefined
let num2: number = un2
// 小点就是void 类型变量
let void2: void
// let void3: number = void2



//任意值
  // 普通类型  在赋值过程中改变类型是不被允许的
let mynum: string = 'renyizhi'
// mynum = 7
  // 但如果是any类型 则允许被赋值为任意类型
  // 任意值上访问任何属性都是允许的  也允许调用任何方法
let myanynum: any = 'anyrenyizi'
myanynum = 5

// 如果变量在声明的时候 未指定类型  那么会被认为是任意类型
let something
something = 'something'
something = 6



// 类型推论  
   // 没有指定类型  但是在编译时候报错
let mytuilunnum = 'leixingtuilun'
// mytuilunnum = 7
let mytuilunnum2: string = 'leixingtuilun'
// mytuilunnum2 = 7

// ts 在没有明确指定类型的时候推测出一个类型  如果定义的时候没有赋值 不管后面有无赋值 
//  都会被推断为any类型 而完全不被类型检查



//联合类型
  // 以下可以允许两种类型 但是其他的类型就不允许了
 let lianhenum: string | number



 // 对象类型 接口 interface  一般首字母大写
   // ts中使用接口来定义对象的类型  除了可用于对类的一部分行为进行抽象以外 
   // 常用于对 对象的形状进行描述   多了少了属性 都是不允许的  但是可以用可选属性
interface Person {
  name: string;
  age: number;
}
// let myis: Person = {
//   name: 'myis',
//   age: 12
// }
interface Person2 {
  name: string;
  age?: number;
}
// let myis2: Person2 = {
//   name: "dddd"
// }
// 注意 一旦定义了任意属性  那么确定属性  可选属性都必须是他的子属性
interface Person3 {
  name: string;
  [proName: string]: any
}
// let myis3: Person3 = {
//    name: "33333",
//    dddd: "ddddddddd"
// }
// readonly可以设置只读属性   
interface Person4 {
  readonly name: string
}
let myis4: Person4 = {
  name: 'dfsdafsda'
}
// myis4.name = 'ghjk.l/'




//数组类型     
   // 类型+方括号   
let  numberarr: number[] = [1,2,4]
   // 接口表示     这个表示只要index的类型是number  那么值得类型必须是number 
interface numArray {
  [index: number]: number
}
let numcai: numArray = [1,2,43]




//函数类型
function funsum(x: number, y: number): number {
  return x+y
}
console.log("函数的输出",funsum(2,3))
//下面这种函数表达式有个问题就是 只是对等号右侧匿名函数做了类型定义 左边的funsum2 是通过赋值操作惊醒类型推论来的 需要手动添加下类型
let funsum2 = function(x: number, y: number): number {
  return x+y
}
console.log("函数2222的输出",funsum2(5,6))
let  funsum3: (x: number, y: number) => number = function(x: number, y:number): number {
  return x+y
}
// 接口定义函数的形状
interface funsum4 {
  (a: string, b: string): boolean
}
let myfunsum4: funsum4
myfunsum4 = function(a: string, b: string) {
  return a.search(b) !== -1
}
// 可选参数
function keifun(a: string, b?: string) {
  if(b) {
    return a+' '+b
  } else {
    return a
  }
}
var concatke = keifun("aaa","ccc")
//剩余参数
function pushother(arr, ...items) {
  items.forEach(function(item){
    arr.push(item)
  })
}
let pusharr = []
pushother(pusharr,1,2,3)

