// Conditional Statement

// 3. JavaScript If...else if statement.

if (true) {
     const no = 1;
     if (no > 0) {
          console.log('Number is Positive...');
     } else if (no < 0) {
          console.log('Number is Negative. . . . . .!');
     } else {
          console.log('Number is Equal to = 0');
     }
}

if (false) {
     let num = 60;
     if ((num > 90) && (num <= 100)) {
          console.log('A Grade.');
     } else if ((num > 80) && (num <= 90)) {
          console.log('B Grade.');
     } else if ((num > 70) && (num <= 80)) {
          console.log('C Grade.');
     } else if ((num > 60) && (num <= 70)) {
          console.log('D Grade.');
     } else if ((num > 39) && (num <= 60)) {
          console.log('E Grade.');
     } else {
          console.log('You are Fail.');
     }
}