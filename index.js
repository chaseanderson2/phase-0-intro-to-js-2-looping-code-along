function writeCards(names, eventName)   {
    let messages = [];
    
    for (let i = 0; i< names.length; i++)   {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }

    return messages;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));


function countDown(num)    {
    let currentNumber = num;

    while (currentNumber >= 0)  {
        console.log(currentNumber);
        currentNumber--;
    }
}

countDown(10);