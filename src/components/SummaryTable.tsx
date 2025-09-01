import { generateNextDays } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateNextDays(90);

const minimumSummaryDatesSize = 18 * 7;

const summaryDatesToRender = summaryDates.slice(0, minimumSummaryDatesSize);

const amountOfDaysToFill =
  minimumSummaryDatesSize - summaryDatesToRender.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 gap-3">
        {weekDays.map((weekDay, i) => (
          <div
            key={`${weekDay}-${i}`}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDatesToRender.map((date) => (
          <HabitDay amount={5} completed={4} key={date.toString()} />
        ))}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  );
}
