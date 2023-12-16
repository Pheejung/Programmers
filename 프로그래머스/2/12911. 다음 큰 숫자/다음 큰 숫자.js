function solution(n) {
    let count = n.toString(2).split("1").length;
    
    while(true) {
        n++;
      if (n.toString(2).split("1").length === count) return n;
    }
}