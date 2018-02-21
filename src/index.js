module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
var j=0;
    for (var i=0 ; i<preferences.length; i++)
{
    if (i+1==preferences[ preferences[preferences[i]-1]-1]  && i+1 != preferences[i]) {j++;}
}
    return(j/3);

    };

