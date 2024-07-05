import { Observable, filter, reduce } from "rxjs";

interface Data {
  value: number;
  category: string;
}

interface Stats {
  totalSum: number;
  categoryCounts: Record<string, number>;
}

const CATEGORY_TO_PROCESS = ["A", "B"];

export function processDataAndComputeStats(
  input: Observable<Data>
): Observable<Stats> {
  return input.pipe(
    filter((data) => CATEGORY_TO_PROCESS.includes(data.category)),
    reduce(
      (acc, curr) => {
        const categoryCounts = {
          ...acc.categoryCounts,
          [curr.category]: (acc.categoryCounts[curr.category] || 0) + 1,
        };

        return {
          totalSum: acc.totalSum + curr.value,
          categoryCounts,
        };
      },
      { totalSum: 0, categoryCounts: {} } as Stats
    )
  );
}
