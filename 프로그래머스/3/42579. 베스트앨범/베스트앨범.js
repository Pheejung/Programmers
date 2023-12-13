function solution(genres, plays) {
    let answer = [];
    let map = new Map();
    
    for(let i = 0; i < genres.length; i++) {
        if(map.has(genres[i])) {
            map.set(genres[i], map.get(genres[i]) + plays[i]);
        } else {
            map.set(genres[i], plays[i]);
        }
    }

    let thisGenreSongs = [];
    
    while(map.size > 0) {
        let max = [...map.entries()].reduce((a, b) => a[1] > b[1] ? a : b)[0];
        
        genres.filter((genre, index) => {
            if(genre === max) {
                thisGenreSongs.push(plays[index]);
            }
        });

        thisGenreSongs.sort((a, b) => b - a).splice(2);
        
        if(thisGenreSongs[0] === thisGenreSongs[1]) {
            plays.map((play, index) => {
                if(thisGenreSongs[0] === play) {
                    answer.push(index);
                }
            })
            thisGenreSongs = [];
            
        } else {
            while(thisGenreSongs.length > 0) {
                for(let i = 0; i < plays.length; i++) {
                    if(plays[i] === thisGenreSongs[0]) {
                        answer.push(i);
                    }
                }
                thisGenreSongs.shift();
            }
        }
        map.delete(max);
    }
    
    return answer;
}