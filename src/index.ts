// function getLength(input: string | string[] | null): number {
//   // TODO: return the length whether input is a string, array, or null
//   if (input === null){
//     return -1;
//   }
//   return input.length;
// }

// console.log(getLength("string"));
// console.log(getLength(["hi", "hello"]));
// console.log(getLength(""));
// console.log(getLength(null));

// function firstElement<T>(arr: T[]) : T{
//    if(arr === undefined || arr[0] === undefined){
//      throw new Error("undefined value passed")
//    } else{
//     return arr[0];
//    }
// }

// const f1 = firstElement([1, 2, 3]);
// const f2 = firstElement(["a", "b"]);

// console.log(f2.toUpperCase());

type Success = { status: "success"; data: string };
type Failure = { status: "error"; message: string };
type Result = Success | Failure;

const handleResult = (result: Result): string => {
  if (result.status === "success") {
    return `Got: ${result.data}`;
  } else {
    return `Failed: ${result.message}`;
  }
};


