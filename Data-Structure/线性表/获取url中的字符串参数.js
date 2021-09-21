let url = "https：//○△×□.cn/?●=▲×■＆○=△×□&a=1"
        let reg = /(?<=y)\?/
        let result = url.match(reg).map((item)=>{
            return [].concat(item)
        })
        console.log(result)