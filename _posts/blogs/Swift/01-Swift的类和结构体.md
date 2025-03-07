# Swift本质探究-01



>  我们学习一门语言的时候最重要的事情就是弄清楚其在计算机内存的本质。



## 1. Swift类和结构体

在所有的高级语言当中，都有类和结构体的概念，因为**类和结构体是所有计算机程序语言中最基础的逻辑单元**。

当我们在写类和结构体的时候，我们到底在写什么呢？

我们了解他们的内存结构吗？

为什么他们被设计成不同的内存结构并具有各自的特性呢？

下面就带着这些问题进行探索。



二 内存区域的简介

它们都可以声明不同类型的变量，并执行一定的方法和操作，然后在不同的时机被操作系统回收。

程序的本质是一堆0和1的排列组合

一个bit可以表示布尔类型的数值

8个bit可以表示 0到255以内的Int数值类型

我们所熟知的控制逻辑，if else，switch case，for in等等，本质上也是内存中的地址跳转



先看看下面的一段代码

```swift
struct StructPoint {
  var x, y: Double
}

class ClassPoint {
  var x, y: Double
  init(x: Double, y: Double) { (self.x, self.y) = (x, y) }
}
```



## 2. 类和结构体的不同之处

1. 自动的初始化init函数

   最显著的不同就是编译器会自动给struct声明初始化函数，来初始化struct内部的所有属性变量，更加方便程序员使用

   而class需要程序员去显式的声明初始化的init函数

   
   
2. Copy的机制不同

   struct是值类型，复制的时候是拷贝整个栈中的内存结构

   class是引用类型，复制的时候只拷贝引用的指针，并将引用计数加1，class的属性是存在堆中的，被拷贝的时候

   

3. 可改变的范围不同

   struct在大括号中的属性和方法，都是默认不能改变的

   即使声明的var的属性变量，也无法在方法中更改，除非在方法前面增加mutating 关键字

   而class则具有更强的动态性，其声明的属性变量可以在其方法中修改

   

4. Heap和Stack

   ![img](https://segmentfault.com/img/remote/1460000016884257?w=480&h=151)

   一般来说：

   struct是存储在Stack中

   class存储在Heap当中

   

5. 生命周期

   struct的生命周期由heap维护，出栈之后内存就被回收

   class的生命周期由引用计数的ARC来管理，不需要程序员手动管理

   

   

6. 其他的不同之处

   - 继承和多态
   - 方法的派发

   

#### 	2.1 相同点

 - 都可以声明属性和方法
 - 定义方法
 - 定义初始化器
 - 都可以使用extension扩展功能
 - 遵循协议来提供特定的功能

#### 	2.2 不同点

- 类可以继承的特性，结构体不能继承
- 类具有动态性，可以在运行时
- 类具有析构函数来释放自身资源
- 类使用引用计数，结构体是值类型





## 3. Swift Compiler

<img src="https://raw.githubusercontent.com/lengdaxia/ImageBed/main/uPic/2181641122211_.pic.jpg" alt="2181641122211_.pic" style="zoom:50%;" />

1: Parse 解析，

2：Semantic Analysis 语法分析

3：SILGen，生成Swift中间语言，这一步进行Swift Type 检查和，ARC和方法派发的实现

4：IRGen： 生成中间语言，也是LLVM的输入语言，这一步跟Swift的语言特性无关，任何使用LLVM编译器的语言都需要生成IR的前端源语言

5：LLVM：最好一步，将IR编译成特定平台的机器指令，eg：x86，ARM等



分析输出AST的terminal命令

```shell
// 分析输出AST
swiftc main.swift -dump-parse

// 分析并且检查类型输出AST
swiftc main.swift -dump-ast

//生成中间体语言（SIL），未优化
swiftc main.swift -emit-silgen

// 生成优化后的SIL
swiftc main.swift -emit-sil

//生成LLVM中间体语言（ll文件）
swiftc main.swift -emit-bc

//生成汇编
swift main.swift -emit-assembly

//编译生成可执行 .out文件
swiftc -o main.o main.swift
```

@main： 入口函数

%0: 虚拟的寄存器，编译器使用

xcrun swift-demangle





## 4. 类的生命周期

![image-20220102220943703](https://raw.githubusercontent.com/lengdaxia/ImageBed/main/uPic/image-20220102220943703.png)

OC通过clang编译器，编译成IR，然后再生成可执行文件 .o（机器码）

Swift则是通过Swift编译器编译成IR，然后在 生成可执行文件

![image-20220102221054653](https://raw.githubusercontent.com/lengdaxia/ImageBed/main/uPic/image-20220102221054653.png)





#### Swift 对象内存分配

- __allocating_init --> swift_allocObject --> _swift_allocObject --> swift_slowAlloc --> Malloc

- Swift对象的内存结构，HeapObject（OC object_object） 有两个属性，一个是Metadata，一个是RefCount，默认占用16字节大小

  obje_object {

  ​	isa

  }

  源码Kind的种类

  ![image-20220102222127400](https://raw.githubusercontent.com/lengdaxia/ImageBed/main/uPic/image-20220102222127400.png)



> Swift三板斧： 汇编, SIL, mach.o

经过别人的源码分析（自己也要会）

得出了swift类的数据结构

```swift
struct Metadata{
	var kind: Int 
  var superClass: Any.Type
  var cacheData: (Int, Int)
  var data: Int
  var classFlags: Int32
  var instanceAddressPoint: UInt32
  var instanceSize: UInt32
  var instanceAlignmentMask: UInt16
  var reserved: UInt16
  var classSize: UInt32
  var classAddressPoint:UInt32
  var typeDescriptor: UnsafeMutableRawPointer
  var iVarDestroyer: UnsafeRawPointer
  
}
```







## 5. class和struct的性能测试

使用这个例子进行[StructVsClassPerformance](https://github.com/knguyen2708/StructVsClassPerformance) class和struct的性能指标的观察，会发现struct总体上比class快了30%，下图是自测的结果：

<img src="https://raw.githubusercontent.com/lengdaxia/ImageBed/main/uPic/image-20211226212048798.png" alt="image-20211226212048798" style="zoom:33%;" />

### 5.1. 性能优化

```swift
enum Color { case blue, green, gray }
enum Orientation {  case left, right } 
enum Tail { case none, tail, bubble }

var cache = [String : UIImage]()

func makeBalloon(_ balloon: Ballon) -> UIImage { 
  if let image = cache[balloon] { return image } ...
}

struct Balloon: Hashable{
  var color: Color var orientation: Orientation var tail: Tail
}
```



```swift
struct Attachment {

	let fileURL: URL let uuid: UUID let mineType: MimeType

	init?(fileURL: URL, uuid: String, mimeType: String) { 
  	guard mineType.isMineType else { return nil }

		self.fileURL = fileURL self.uuid = uuid self.mineType = mimeType
	} 
}

enum MimeType: String{
	case jpeg = "image/jpeg"
....

}
```

以上是官方的性格优化的代码，将使用struct声明，并尽量使用值类型成员变量





现在开始回顾一下

最初的三个问题，我的答案是：

1- struct和class的本质依然是最小的复合逻辑单元

2- struct存在栈中，class存在堆中

3- struct用来进行即时的复制和传递操作，class可以具有更复杂的继承结构和更灵活的特性，但是用不好容易带来更大的麻烦

4- 编程的一个原则就是，从最简单的开始入手，直到不满足需求才开始寻求改变，不必一开始就追求完美







