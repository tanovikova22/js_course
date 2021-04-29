// #1
// var x = 6,
//     y = 15,
//     z = 4;
// y /= x + 5 % z;


//  the first one is 5%z = 1 (%)
// the second one is x+5%z = 7 (+)
// the last one y /= 7 = 2.14 (/=)
// answer : 2.14


// #2
// var x = 6,
//     y = 15,
//     z = 4;
// z = x++ + y * 5;

// the first one is x++ = 6 (because firstly we return the value and only after that add 1) (++)
// the second one is y * 5 = 75 (*)
// then 6+75 = 81 (+)
// the last one is z = 81 (=)
// answer: 81


// #3
// var x = 6,
//     y = 15,
//     z = 4;
// x += y - x++ * z;

//  1 -> x++ = 6 (the same explanation as in a previous) (++)
// 2 -> x++ * z = 24 (*)
// 3 -> y - 24  = -9(-)
// 4 -> x += -9 = -3 (firstly we add 6 + (-9) and then assign it to the x ) (+=)
// answer: -3


// #4
// var x = 6,
//     y = 15,
//     z = 4;
// z = --x - y * 5;

// 1 -> --x = 5 (this is prefix increment, that's why firstly we remove 1 and only after that return 5) (--)
// 2 -> y * 5 = 75 (*)
// 3 -> 5 - 75 = -71 (-)
// 4 -> z = -71 (=)
// answer: -71

// #5
// var a = 3
// var b = ++a + 1 + a++;

// 1 -> a++ = 3 (postfix inctement, return 3, then add 1) (++ postfix)
// 2 -> ++a = 5 ('cause a was 4)(++ prefix)
// 3 -> 5 + 1 + 3 = 9 (+)
// 4 -> b = 9 (=)
// answer: 9