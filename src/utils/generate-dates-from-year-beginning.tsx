import dayjs from "dayjs";

/**
 * Gera uma lista de datas consecutivas a partir de uma data inicial.
 *
 * @param startDate Data inicial (Date ou string ISO)
 * @param amount Quantidade de dias a gerar
 * @returns Array de objetos Date
 */
export function generateNextDaysFrom(
  startDate: Date | string,
  amount: number
): Date[] {
  const firstDay = dayjs(startDate).startOf("day");
  const dates: Date[] = [];

  let compareDate = firstDay;

  for (let i = 0; i < amount; i++) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}
