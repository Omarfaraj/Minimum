const readline = require("readline")

function displayMin() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the first number: ", (input1) => {
        let number1 = parseFloat(input1);

        if (isNaN(number1)) {
            console.log("Invalid input. Please enter a valid number.");
            rl.close();
            return;
        }

        rl.question("Enter the second number: ", (input2) => {
            let number2 = parseFloat(input2);

            if (isNaN(number2)) {
                console.log("Invalid input. Please enter a valid number");
                rl.close();
                return;
            }
            let minNumber = Math.min(number1, number2);
            console.log(`The smaller number is: ${minNumber}`);
            rl.close();
        });
    });

}

displayMin();