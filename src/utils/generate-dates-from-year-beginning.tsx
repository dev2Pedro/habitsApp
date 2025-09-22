import dayjs from "dayjs";

export function getCurrentMonthFromSunday(): Date[] {
  const startOfMonth = dayjs().startOf("month");
  const endOfMonth = dayjs().endOf("month");

  const start = startOfMonth.startOf("week");

  const days: Date[] = [];
  let current = start;

  while (
    current.isBefore(endOfMonth.endOf("week")) ||
    current.isSame(endOfMonth.endOf("week"))
  ) {
    days.push(current.toDate());
    current = current.add(1, "day");
  }

  return days;
}

console.log(getCurrentMonthFromSunday());
