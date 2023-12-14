function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let currentWeight = 0;
    const bridgeQueue = [];
    
    while (truck_weights.length > 0 || bridgeQueue.length > 0) {
        time += 1;

        if (bridgeQueue.length > 0 && bridgeQueue[0].endTime === time) {
          const departedTruck = bridgeQueue.shift();
          currentWeight -= departedTruck.weight;
        }

    if (truck_weights.length > 0 && currentWeight + truck_weights[0] <= weight) {
      const newTruck = {
        weight: truck_weights.shift(),
        endTime: time + bridge_length
      };
      bridgeQueue.push(newTruck);
      currentWeight += newTruck.weight;
    }
  }

  return time;
}