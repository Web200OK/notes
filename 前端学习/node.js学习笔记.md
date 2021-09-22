模块化
    在node中，一个js代码就是一个模块
    在node中，每一个js文件中的js代码都是独立运行在一个函数中的
        而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
    //暴露模块
    我们可以通过exports来向外部暴露变量和方法
        只需要将需要暴露给外部的变量或方法设置为exports的属性即可
    向外部暴露属性或方法的例子：
        exports.x = "你好"
        exports.fn = function(){}
    //引入模块
    在node中通过require()来引入外部的模块
        require()可以传递一个文件路径作为参数。node会自动根据该路径来引入外部模块
            这里的路径如果使用相对路径必须使用.或..开头
        使用require()引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块
    我们使用requir()引入外部模块时，使用就是模块标识，我们可以通过模块标识来知道指定的模块
        模块分为两大类
        -核心模块
            由node引擎提供的模块
            核心模块就是模块的名字
        -文件模块
            由用户自己创建的模块
            文件模块的标识就是文件的路径

    在node中有一个全局对象global，它的作用和网页中的window类似
        在全局中创建的变量都会作为global的属性保存
        在全局中创建的函数都会作为global的方法保存
    当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码：
        function (exports, require, module, __filename, __dirname) {
    在代码的最底部，添加如下代码：
        }
    实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个参数
        exports
            -该对象用来将变量或函数暴露在外部
        require
            -函数，用来引入外部的模块
        moudle
            -moudle代表的当前模块本身
            -exports就是moudle的属性
            -既可以是使用exports导出也可以使用moudle.exports导出
        __filename
            -当前模块的完整路径
        __dirname
            -当前模块所在文件夹的完整路径
    arguments。callee
        -这个属性保存的是当前执行的函数对象

    exports和moudle.exports
        -通过exports只能使用.的方式向外暴露内部变量
            exports.xxx = xxx
        -而moudle.exports既可以通过.的方式也可以直接赋值
            moudle.exports.xxx = xxx
            moudle.exports = {}

包（package）
    -将多个模块组合为一个完整的功能，就是一个包
    -包结构
        bin
            -二进制的文件，一般都是一些工具包才有
        lib
            -js文件
        doc
            -文档
        test
            -测试代码
        package.json
            -包的描述文件
            -是一个json格式的文件，在它里面保存了包的各种相关信息
                name 包名
                version 版本
                dependencies 依赖
                main 包的主要文件
                bin 可执行文件

npm(Node Package Manager)-node的包管理器
    -通过npm可以对node中的包进行上传下载搜索等操作
    -npm的常用指令
        npm -v 查看npm的版本
        npm version 查看所有模块的版本
        npm i/install 包名 安装指定的包
        npm i/install 包名 --save 安装指定的包并添加依赖
        npm i/install 包名 -g 全局安装（一般都是一些工具）
        npm i/install 安装当前项目所依赖的包
        npm s/search 包名 搜索包
        npm r/remove 包名 删除一个包
    通过npm下载的包都放在node_moudles文件夹中
        我们通过npm下载的包，直接通过包名引入即可
    node在使用模板名字来引入模块时，它会首先在当前目录的node_moudles中寻找是否含有该模块
        如果有则直接使用，没有则去上一级目录的node_moudles中寻找
        如果有则直接使用，没有则再去上一级目录找，知道找到为止
        知道找到磁盘的根目录，如果还没有则报错
文件系统
    Buffer（缓冲区）
    -Buffer和数组的结构非常类似，Buffer是用来存储二进制数据的
    -Buffer的方法：
        Buffer.from(字符串)
            将一个字符串中的内容保存到一个buffer里面
        Buffer.toString()
            将buffer转换为一个字符串
        Buffer.alloc(size)
            创建一个指定大小的buffer对象
        Buffer.allocUnsafe(size)
            创建一个指定大小的buffer对象，可以包含敏感数据
        
    fs模块
        在Node通过fs模块对系统中的文件进行操作，fs模块时node中已经继承好的，不需要在使用npm下载，直接引入即可
        引入fs
            var fs = requires("fs")
        fs模块中的大部分操作都提供了两种方法，同步方法与异步方法
            同步方法带有sync
            异步方法没有sync，都需要回调函数
        写入文件
            1、同步写入
            2、异步写入

            打开文件
                fs.open(path,flags[,mode],callback)
                fs.openSync(path,flags[,mode])
            读写文件
                fs.write(fd,string[,position[,encoding]],callback)
                fs.writeSync(fd,string[,position[,encoding]])

                fs.read(fd,buffer,offset,length,position,callback)
                fs.readSync(fd,buffer,offset,length,position)
            关闭文件
                fs.close(fd,callback)
                fs.closeSync(fd)

            3、简单读取写入

            fs.writeFile(file,data[,options],callback)
            fs.writeFileSync(file,data[,options])

            fs.readFile(path[,options],callback)
            fs.readFileSync(path[,options])

            4、流式读取写入
            
            fs.createWriteStream(path[,options])
            fs.createReadStream(path[,options])

       


    
    
    
            
    