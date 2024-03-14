export default function QueryProcessor(query: string): string {
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
  if (query.toLowerCase().includes("What is plus")) {
    var qlist:string[] = query.split('');
    var num1:number = Number(qlist[2]); 
    var num2:number = Number(qlist[4]);
    var result = (num1 + num2).toString();
    return ( 
      result
    );
  };


  return "";
}
