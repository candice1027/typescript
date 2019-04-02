#!/usr/bin/env ts-node
{
  interface Add{
    (a:number,b:number):number;
    逆运算(a:number,b:number):number;

  }
  let a:Add = (
    (): Add =>{
      let X: any = function(a:number,b:number):number{
        return a + b
      }

      X.逆运算 = function(a:number,b:number):number{
        return a - b;
      }
      return X
    }
  )();
 console.log(a(3,2))
}
