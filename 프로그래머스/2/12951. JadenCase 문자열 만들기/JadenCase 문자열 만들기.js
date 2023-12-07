function solution(s) {
    var answer = '';
    
    const arr = s.split(' ').map(word => word.substr(0,1).toUpperCase() + 
                               word.substr(1).toLowerCase());
    
    answer = arr.join(' ');
    
    return answer;
}