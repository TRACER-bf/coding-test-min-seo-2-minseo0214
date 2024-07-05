import { Observable, scan } from "rxjs";

export function accumulateStringLengths(
  input: Observable<string>
): Observable<number> {
  return input.pipe(scan((acc, cur) => acc + cur.length, 0));
}
