import { Observable, distinctUntilChanged } from "rxjs";

interface Point {
  x: number;
  y: number;
}

function getUclidianDistance(point1: Point, point2: Point): number {
  return Math.sqrt(
    Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
  );
}

export function filterClosePoints(
  input: Observable<{ x: number; y: number }>
): Observable<{ x: number; y: number }> {
  return input.pipe(
    distinctUntilChanged((prev, cur) => getUclidianDistance(prev, cur) < 1)
  );
}
