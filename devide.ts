#!/usr/bin/env ts-node
{
    let a:number = parseInt(process.argv[2])
    let b:number = parseInt(process.argv[3])
    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log('只接受数字')
        process.exit(1)
    }
    if (b === 0) {
        console.log('除数不能为0')
        process.exit(2) 
    }
    console.log(a/b);
    process.exit(0)
}
