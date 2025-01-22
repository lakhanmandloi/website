export const parseDate = (date: string) => new Date(date);
export const formatDate = (date?: string) => {
  if (!date) return 'Present';
  const parsedDate = parseDate(date);
  return parsedDate.toLocaleString('en-us', {
    month: 'short',
    year: 'numeric'
  });
};
export const formatDuration = (startDate: string, endDate?: string) => {
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};
export const formatCalculatedDuration = (
  startDate: string,
  endDate?: string
) => {
  const parsedStartDate = parseDate(startDate);
  const parsedEndDate = endDate ? parseDate(endDate) : new Date();
  const years =
    parsedEndDate.getMonth() >= parsedStartDate.getMonth()
      ? parsedEndDate.getFullYear() - parsedStartDate.getFullYear()
      : parsedEndDate.getFullYear() - parsedStartDate.getFullYear() - 1;
  const daysAdjustment =
    parsedEndDate.getDate() + parsedStartDate.getDate() >= 28 ? 1 : 0;
  const months =
    parsedEndDate.getMonth() >= parsedStartDate.getMonth()
      ? parsedEndDate.getMonth() - parsedStartDate.getMonth() + daysAdjustment
      : 12 +
        parsedEndDate.getMonth() -
        parsedStartDate.getMonth() +
        daysAdjustment;
  return `${years} yrs ${months} mos`;
};
export const duration = (startDate: string, endDate?: string) => {
  return `${formatDuration(startDate, endDate)} · ${formatCalculatedDuration(
    startDate,
    endDate
  )}`;
};
