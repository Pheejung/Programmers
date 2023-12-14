function solution(priorities, location) {
  const processes = priorities.map((priority, index) => ({
    priority,
    isTarget: index === location,
  }));

  let order = 0;

  while (processes.length > 0) {
    const currentProcess = processes.shift();
    const hasHigherPriority = processes.some((process) => process.priority > currentProcess.priority);

    if (hasHigherPriority) {
      processes.push(currentProcess);
    } else {
      order += 1;
      if (currentProcess.isTarget) {
        return order;
      }
    }
  }

  return order;
}