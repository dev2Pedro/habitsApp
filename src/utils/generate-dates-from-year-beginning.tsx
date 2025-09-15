import dayjs from "dayjs";

export function generateRangeDates(from: Date, to: Date) {
  const dates: Date[] = [];
  let compareDate = dayjs(from).startOf("day");

  while (compareDate.isBefore(to) || compareDate.isSame(to, "day")) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}
