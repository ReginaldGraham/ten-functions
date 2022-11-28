"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(x){
    return x ===true;
}
function isFalse(x){
    return x===false;
}
function isEven(input){
    if(typeof input ==='boolean'){
        return false;
    }
    else  {
        return input % 2 === 0;
    }
}
function concat(x,y){
    return  x.toString() + y.toString()

}
function addOne(x){
    return x*1+1
}
function isEqual(x,y){
    return x==y;
}
function isIdentical(x,y){
    return x===y;
}
function or(x,y){
    return x||y;
}
function and(x,y){
    return x && y;
}
function not(x){
    return !x;
}
