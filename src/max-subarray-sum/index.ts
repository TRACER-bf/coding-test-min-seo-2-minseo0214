import { Observable, map, reduce } from "rxjs";

/** @link[Kadane’s Algorithm](https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/) */
function getMaxSumContiguousSubarray(arr: number[]): number[] {
  let maxSum = -Infinity;
  let currSum = 0;
  let start = 0;
  let end = 0;
  let tempStart = 0;

  arr.map((num, i) => {
    currSum += num;
    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }
    if (currSum < 0) {
      currSum = 0;
      tempStart = i + 1;
    }
  });

  return arr.slice(start, end + 1);
}

export function maxSubarraySum(m: Observable<number>): Observable<number[]> {
  return m.pipe(
    reduce((acc, cur) => [...acc, cur], [] as number[]),
    map(getMaxSumContiguousSubarray)
  );
}
