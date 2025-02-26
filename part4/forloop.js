// INFO: For Loop

console.log("Program Started");

for (let i = 1; i < 11; i++) {
    console.log(`${i} I Like for loop so much ....`);
}

console.log("Program Ended");


for (let i = 0; i < 102; i += 2) {
    console.log(`Print Even numbers ${i}`)
}

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0){
        console.log(`Event numbers ${i}`);
    }else {
        console.log(`Odd numbers ${i}`);
    }
}



// NOTE: Quizses for (for loops)

// INFO: First Quiz 
for (let i = 1; i <= 3; i++) {
    console.log(i);
} // Answer : 1 2 3


// INFO: Second Quiz
for (let i = 5; i > 0; i--) {
    console.log(i);
} // Answer : 5 4 3 2 1


// INFO: Third Quiz 
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
} // Answer : 1 3 5 7 9


// INFO: Fourth Quiz 
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
} // Answer : 1 2


// INFO: Fifth Quiz 
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; 
    console.log(i);
} // Answer : 1 2 3 4 5
