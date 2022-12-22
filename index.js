var 이름 = "강성욱";
var 어레이 = [1, 2, 3, 4];
var 오브젝트 = { name: "kim" };
// name 속성은 옵션이에요
// 다양한타입은 union type
var union = "kim";
// string 과 number 를 동시에가지는 유니온타입 지정
var 타입테스트 = 123;
var 맴버1 = [1, true];
var 맴버2 = [2, true];
function 함수(x) {
    return x * 2;
}
// 파라미터 로 number 리턴은 number 타입
함수(12);
