////////////////////////////////////////////////////// Operators.

// 1. JavaScript Arithmetic Operators.
if (true) {
     let a = 2;
     let b = 4;
     let c;
     c = a + b;
     console.log('Addition - ' + c);

     c = b - a;
     console.log('Subtraction - ' + c);

     c = b / a;
     console.log('Divied - ' + c);

     c = a * b;
     console.log('Multiplication - ' + c);

     c = b % a;
     console.log('Modulus (Remainder) - ' + c);

     c = b ** a;
     console.log('Exponentiation - ' + c);

     c++;
     console.log('Increment - ' + c);

     c--;
     console.log('Decrement - ' + c);
}

// 2. JavaScript Comparison Operators.
if (false) {
     let a = 2;
     let b = 4;
     let c = 'hello';
     let d = '2';
     let e = 2;
     if (a == d) {
          console.log('a and b is equal.');
     }
     if (a === e) {
          console.log('a and b  values or datatypes are equal. ');
     }
     if (a != c) {
          console.log('a and c is not equal.');
     }
     if (a !== d) {
          console.log('a and d values or datatypes are not equal');
     }
     if (b > a) {
          console.log('B is Greater.');
     }
     if (a < b) {
          console.log('A is smaller');
     }
     if (a <= e) {
          console.log('A is equal to E.');
     }
     if (e >= a) {
          console.log('E is equal to A.');
     }
}

// 3. JavaScript Bitwise Operators.
if (false) {
     let a = 2; // 0010
     let b = 3; // 0011
     let c, d;

     c = a & b; // 0010
     console.log('A AND B - ' + c);

     c = a | b; // 0011
     console.log('A OR B - ' + c);

     c = a ^ b; // 0001
     console.log('A XOR B - ' + c);

     c = ~a;
     console.log('A NOT - ' + c);

     c = a << 1; // 0100
     console.log('Left Shift - ' + c);

     d = 5 // 00000101
     c = d >> 1; // 00000010
     console.log('Right Shift - ' + c);

     d = -5 // 11111111111111111111111111111011
     c = d >>> 1; // 01111111111111111111111111111101
     console.log('Zero-fill Right Shift - ' + c);

}

// 4. JavaScript Logical Operators.
if (false) {
     let a = true;
     let b = true;
     let c = false;
     if (a && b) {  // Logical AND
          console.log('When Both are true .');
     }
     if (a || c) {  // Logical OR	
          console.log('if Both have any one is True .');
     }
     if (!c) {      // Logical Not	
          console.log('when condition is not True.');
     }
}

// 5. JavaScript Assignment Operators.
if (false) {
     let a = 2;
     let b = 4;
     let c;
     c = 'Shivaay'; // = Basic Assignment Operator.
     console.log(c);

     a += b; // Addition assignment.
     console.log(a);

     a -= b; // Subtraction assignment. 
     console.log(a);

     a *= b; // Multiplication assignment. 
     console.log(a);

     a /= b; // Division assignment.
     console.log(a);

     b %= a; // Remainder assignment
     console.log(b);

     b = 8;
     b **= a; // Exponentiation assignment.
     console.log(b);
}


// 6. JavaScript Special Operators.
if (false) {
     let a = 2;
     let b = 4;
     let c;

     c = a < b ? true : false; // 1. Ternary (Conditional) Operator.
     console.log('' + c);

     let d = 12, e = 4, f = 20; // 2. Comma Operator.
     console.log('D, E and F - ' + d, e, f);

     // 3. Unary Plus (+) and Unary Negation (-)
     c = +a; // Unary Plus (+)
     console.log('' + c);

     c = -a; // Unary Negation (-)
     console.log('' + c);

     console.log(typeof (c)); // 4. typeof Operator

     let obj = {
          nfname: 'hrx',
          no: 354,
          isAdmin: true
     };
     console.log(obj);
     delete obj.no; // 5. delete Operator.
     console.log(obj);

     // 6. void Operator
     let x = 5;
     console.log(void (x = 10)); // undefined
     console.log(x); // 10

     //7. in Operator
     let obj1 = {
          fname: 'shivaay',
          no: 0,
          isAdmin: true
     };
     let res = ("no" in obj1);
     console.log('res 1 - ' + res);

     // 8. instanceof Operator
     let date = new Date();
     console.log(date instanceof Date); // true
     console.log(date instanceof Object); // true
     console.log(date instanceof Array); // false
     console.log(date instanceof String); // false

     // 9. Spread Operator (...)
     let arr1 = [1, 2, 3, 4, 5];
     let arr2 = [...arr1, 6, 7, 8, 9, 10];
     console.log('Data 1 = ' + arr2);

     let obj11 = {
          n1: 25,
          s1: 45,
          a1: 85
     };
     let obj22 = {
          ...obj11,
          c2: 65,
          d2: 95
     };
     console.log('Data 2 - ');
     console.log(obj22);

     // 10. Rest Operator (...)
     let [a1, b1, ...rest] = [1, 2, 3, 4, 5];
     console.log(a1); // 1
     console.log(b1); // 2
     console.log(rest); // [3, 4, 5]

     // 11. Nullish Coalescing Operator (??)
     let foo = null ?? "default string";
     console.log(foo); // "default string"

     let bar = 0 ?? 42;
     console.log(bar); // 0

     // 12. Optional Chaining Operator (?.)
     let user = { name: "John", address: { city: "New York" } };
     console.log(user?.address?.city); // "New York"
     console.log(user?.contact?.phone); // undefined
}