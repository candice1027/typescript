#!/usr/bin/env ts-node
{
    let a:number = parseInt(process.argv[2])
    let b:number = parseInt(process.argv[3])
    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log('只接受数字')
        process.exit(1)
    }
    console.log(a*b);
    process.exit(0)
}
