export const parseDate = (date: string) => new Date(date);
// Career started at Tekdi Technologies on 2015-01-21.
export const CAREER_START = '2015-01-21';
export const yearsSince = (startDate: string) => {
  const start = parseDate(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  ) {
    years -= 1;
  }
  return years;
};
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
const plural = (count: number, singular: string, pluralForm: string) =>
  `${count} ${count === 1 ? singular : pluralForm}`;

// Counts calendar months inclusively, like LinkedIn (Jun–Oct = 5 mos).
export const formatCalculatedDuration = (
  startDate: string,
  endDate?: string
) => {
  const start = parseDate(startDate);
  const end = endDate ? parseDate(endDate) : new Date();
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [
    years > 0 ? plural(years, 'yr', 'yrs') : '',
    months > 0 || years === 0 ? plural(months, 'mo', 'mos') : ''
  ];
  return parts.filter(Boolean).join(' ');
};
export const duration = (startDate: string, endDate?: string) => {
  return `${formatDuration(startDate, endDate)} · ${formatCalculatedDuration(
    startDate,
    endDate
  )}`;
};
