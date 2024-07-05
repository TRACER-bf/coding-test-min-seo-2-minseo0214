import { Observable, delayWhen, range, interval, map } from "rxjs";

export function powerOfN(m: number): Observable<number> {
  return range(1, m).pipe(
    delayWhen((n) => (n === 1 ? interval(0) : interval(n ** 2 * 1000))),
    map((n) => n ** 2)
  );
}
