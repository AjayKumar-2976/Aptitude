// 1) A Train running at speed of 60km/hr, 
// find the train length by it to cross in 33sec 
// a bridge of length 250m?

let speed_km = 60
let convert_km_to_ms = (5/18)

let speed_ms = speed_km * (convert_km_to_ms)

let bridge_length = 250
let time = 33
// console.log(speed_ms);

let total_distance = speed_ms * time

let trani_len = total_distance - bridge_length

console.log("Train length in (ms):" , trani_len);



// 2) A train 300m long find the speed, the crossing time of 33 sec 
// and a bridge of length 250m?


let speed = total_distance/(time)
console.log("The speed of Train(s):",speed);
