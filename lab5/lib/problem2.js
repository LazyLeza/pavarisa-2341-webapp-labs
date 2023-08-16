function readInput() {
    const inputList = [];
  
    while (true) {
        const inputText = prompt("Enter a positive integer:");
        
        if (isNaN(inputText) || inputText === ""){}

        else if (parseInt(inputText) < 0) {break;} 
            
        else {
            const numbers = parseInt(inputText);
            inputList.push(numbers);
        }
    }
  
    return inputList;
}

function displayStats(list) {
    const average = list.length > 0 ? list.reduce((a, b) => a + b, 0) / list.length : 0;
    const min = list.length > 0 ? Math.min(...list) : 0;
    const max = list.length > 0 ? Math.max(...list) : 0;
    
    // return [average, min, max];
    alert('For the list ' + list + ' the average is ' + average.toFixed(2) + ', the minimum is ' + min + ', and the maximum is ' + max) 
}

while (true) {
    list = readInput();
    var stats = displayStats(list)
    break;
}
