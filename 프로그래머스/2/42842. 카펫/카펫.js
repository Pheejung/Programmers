function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;
    
    for( let i = 3; i <= brown; i++ ) {
        if( sum % i === 0 ) {
            let j = sum / i;
            if( ( i - 2 ) * ( j - 2 ) === yellow ) {
                return [j, i];
            }
        }
    }
    return answer;
}