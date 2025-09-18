import dayjs from "dayjs";

export function getCurrentWeekDays(): Date[] {
  const startOfWeek = dayjs().startOf("week"); // domingo
  const days: Date[] = [];
  for (let i = 0; i < 7; i++) {
    days.push(startOfWeek.add(i, "day").toDate());
  }
  return days;
}

console.log(getCurrentWeekDays());
