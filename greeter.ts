class Student {
  fullName: string;
  constructor(public aName,public bName) {
    this.fullName = 'aName:'+this.aName+''+' bName:'+this.bName
  }
}
interface User {
  aName: string;
  bName: string;
}
function greeter (user: User) {
  return 'hello'+user.aName+'hello'+user.bName 
}
console.log(greeter(new Student('aaaaaa','bbbbbbb')))