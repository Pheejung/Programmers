function solution(s) {
    var answer = '';
    
    let arr = s.split(" ");
    
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    
    answer = minNum + " " + maxNum;
    
    return answer;
}