let 이름 :string = "강성욱"
let 어레이 :number[] = [1,2,3,4]
let 오브젝트 : {name?:string} = {name:"kim"}
// name 속성은 옵션이에요

// 다양한타입은 union type
let union : string | number = "kim"

// 변수 만들고싶을떄

type 내타입 = string | number
type 맴버 = [number,boolean]
type 맴버목록 = {
    // 글자로 된 object 속성은 string
    [key : string] : string
}
// string 과 number 를 동시에가지는 유니온타입 지정
let 타입테스트 :내타입 = 123
let 맴버1 :맴버 = [1,true]
let 맴버2 :맴버 = [2,true]
let 맴버3 :맴버목록 = {이름:"성욱",나이:"123"}

// class 타입지정
class User{
    name : string;
    constructor(name :string){
        this.name = name
    }
}



function 함수(x:number) : number{
    return x * 2
}
// 파라미터 로 number 리턴은 number 타입

함수(12)

// 네로잉 
let 제목 = document.querySelector("#title")
if (제목 != null){
    제목.innerHTML = "반가워요"
}

console.log("hello world")