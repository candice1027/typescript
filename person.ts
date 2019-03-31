#!/usr/bin/env ts-node
// {
//     class Person {
//         public children: Person[] = [];
//         constructor(public name:string) {}
//         introduceFamily(n?:number) {
//             if (!n) {
//                 n = 1;
//             }
//             console.log('--'.repeat(n-1)+this.name)
//             this.children.forEach(child =>{
//                 child.introduceFamily(n+1)
//             })
//         }
//         addChildren(child: Person):void {
//             this.children.push(child)
//         }
//     }
//     let a = new Person('灭霸')
//     let b = new Person('灭霸的儿子1')
//     let c = new Person('灭霸的儿子2')
//     a.addChildren(b)
//     a.addChildren(c)
//      a.introduceFamily();
// }


class Person{
    public children: Person[]=[];
    constructor(public name:string){
    }
    addChild(child: Person) {
        this.children.push(child)
    }
    introduceFamily() {
        console.log(this.name)
        this.children.forEach(child =>{
            child.introduceFamily()
        })
    }
}
let parent = new Person('miemie');
let child = new Person('child1');
parent.addChild(child)
parent.introduceFamily();