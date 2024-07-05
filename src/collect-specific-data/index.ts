import { Observable, first, scan } from "rxjs";

export function collectSpecificData(
  input: Observable<number>
): Observable<number[]> {
  return input.pipe(
    scan((acc, cur) => (cur % 2 === 0 && cur > 5 ? [...acc, cur] : acc), []),
    first((arr) => arr.length === 3)
  );
}
