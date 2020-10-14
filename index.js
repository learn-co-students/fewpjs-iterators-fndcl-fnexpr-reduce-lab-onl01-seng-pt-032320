const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// function customReducer(total, element) { return total + element; }
const customReducer = (total, element) => total + element; 

let totalBatteries = batteryBatches.reduce(customReducer, 0);