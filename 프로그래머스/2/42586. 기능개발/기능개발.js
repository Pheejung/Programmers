function solution(progresses, speeds) {
    const gigan = [];
    
    for( let i = 0; i < progresses.length; i++ ) {
        gigan[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    
    for( let i = 0; i < gigan.length; i++ ) {
        if( gigan[i] >= gigan[i+1] ) {
            gigan[i+1] = gigan[i];
        }
    }
    
    const result = gigan.reduce((accu, curr) => { 
        accu[curr] = ( accu[curr] || 0 ) + 1; 
        return accu;
    }, {});
    
    
    return Object.values(result);
}