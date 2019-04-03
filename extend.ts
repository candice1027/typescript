#!/usr/bin/env ts-node
{
  interface things {
    get():void,
    material: string
  }
  interface Animal{
    move(): void;
    material: string
  }
  interface Human extends Animal,things{
    name: string;
    age: number;
  }
  let frank:Human = {
    name: 'frank',
    age: 333,
    material: 'water',
    move(){
      console.log('this.name')
    },
    get() {
      console.log('2')
    }
  }
}