var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
//There was some weird error showing up after restarting VSCode, and restarting it again fixed it sooooo LGTM
function fizzbuzz(list) {
    for (var i = 0; i < list.length; i++) {
        if (typeof list[i] === "number") {
            /*Had to write "(list[i] as number)" instead of simply list[i], or else
            there is an error saying that ts doesn't know for sure it is a number or a string.
            It will still run perfectly fine even though the error is there*/
            if ((list[i] % 3 === 0) && (list[i] % 5 === 0)) { //Can also write 15, but for clarity and iteration you can also just write 3 && 5
                list[i] = "fizzbuzz ";
            }
            else if (list[i] % 3 === 0) {
                list[i] = "fizz";
            }
            else if (list[i] % 5 === 0) {
                list[i] = "buzz";
            }
        }
    }
    return list;
}
/*
for (let i = 0; i < 100; i++){
    var output: (string|number) = ""

    if (i % 3 === 0) {output += "fizz"}
    if (i % 5 === 0) {output += "buzz"}
    
    console.log(output === "" ? i : output)
}
*/
console.log(fizzbuzz(array));
