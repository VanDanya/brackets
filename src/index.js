module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0)  {return false};
  let arr=str.split('');
  for (let j=0;j<arr.length;j++){
   for (let i=0;i<bracketsConfig.length;i++){
              if (arr[j]==bracketsConfig[i][0] && arr[j+1]==bracketsConfig[i][1]){
                  arr.splice(j,2);
                  j =- 1;
              }
      }
  }
  return arr.length==0;
}