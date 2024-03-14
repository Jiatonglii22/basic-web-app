export default function QueryProcessor(query: string): any {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  };
  if (query.toLowerCase().includes("andrew")) {
    return (
      "jiatong4"
    );
  };
  if (query.toLowerCase().includes("your name")) {
    return (
      "J"
    );
  };
  if (query.toLowerCase().includes("plus")) {
    var qlist:string[] = query.split('');
    var num1:number = Number(qlist[2]); 
    var num2:number = Number(qlist[4].slice(0,1));
    var result = (num1 + num2);
    return ( 
      result
    );
  };

  if (query.toLowerCase().includes("Which of the following numbers is the largest:")) {
    var qlist:string[] = query.split('');
    var num1:number = Number(qlist[9].slice(0, -1)); 
    var num2:number = Number(qlist[10].slice(0, -1));
    var num3:number = Number(qlist[11].slice(0, -1));
    var largest:number = num1;
    if (num1 > num2) {
      if (num1 > num3) {
        largest = num1;
      }
      else {
        largest = num3;
      }
    }
    if (num2 > num3) {
      if (num2 > num1) {
        largest = num2 
      }
      else {
        largest = num1
      }
    }
    if (num3 > num2) {
      if (num3 > num1) {
        largest = num3 
      }
      else {
        largest = num1
      }
    }
    return ( 
      largest
    );
  };

  //Which of the following numbers is the largest: 96, 88, 46?


  return "";
}
