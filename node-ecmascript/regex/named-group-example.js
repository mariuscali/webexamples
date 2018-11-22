var TEXT = " var aa = 100; let b= 130 ; const c= 110 ; ";


var regex = /\s*(?<keywork>var|let|const)\s+(?<variable>\w+)\s*=\s*(?<value>\d+)\s*;/g;


var result;

while (result = regex.exec(TEXT) ) {
    console.log(result);
    console.log("substring: " + result[0]);
    console.log("keyword: " + result[1]);
    console.log("variable: " + result[2]);
    console.log("value: " + result[3]);
    console.log("------------------------------");
}
