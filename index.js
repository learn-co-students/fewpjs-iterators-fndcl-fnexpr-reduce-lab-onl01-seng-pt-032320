const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(total, battery){ return total += battery}, 0)



// Let's say we are hard at work in the battery factory. 
// We've assembled several batches of batteries today. 
// Let's count how many assembled batteries we ended up with.

// Create a new variable called totalBatteries which is 
// the sum of all of the battery amounts in the batteryBatches array. 
// Naturally, use reduce() for this!