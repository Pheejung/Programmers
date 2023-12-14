function solution(priorities, location) {
    var answer = 0;
    
     const processes = priorities.map((priority, index) => ({
         priority,
         isTarget: index === location
     }));
    

  while (processes.length > 0) {
      const currentProcess = processes.shift();
      const hasHigherPriority = processes.some((process) => process.priority > currentProcess.priority);
      
    if (hasHigherPriority) {
      processes.push(currentProcess);
    } else {
      answer += 1;
      if (currentProcess.isTarget) {
        return answer;
      }
    }
      
  }
    
    
    
    return answer;
}