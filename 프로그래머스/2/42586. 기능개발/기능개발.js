function solution(progresses, speeds) {
    
    
    let days = progresses.map((progress, index) => {
       return Math.ceil((100 - progress) / speeds[index])
    });
  
    
    for( let i = 0; i < days.length; i++ ) {
        if( days[i] >= days[i+1] ) {
            days[i+1] = days[i];
        }
    }
    
    const result = days.reduce((accu, curr) => { 
        accu[curr] = ( accu[curr] || 0 ) + 1; 
        return accu;
    }, {});
    
    
    return Object.values(result);
}