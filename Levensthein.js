export function levensthein(a, b) {
   const distance = []
   let i, j = 0
   for (i =0 ; i <= a.length; i++) {
   distance[i] = [i]
   }

   for (j=0; j <= b.length; j++) {
      distance[0][j] = j   
    }
    
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <=  b.length; j++) {
        const cout = a[i-1] === b[j-1] ? 0 : 1
         distance[i][j] = Math.min(
            distance[i-1][j] + 1,
            distance[i][j-1] + 1,
            distance[i-1][j-1] + cout 
         )
      }
      
    }
   //console.log(distance);
   return distance[a.length][b.length]
}