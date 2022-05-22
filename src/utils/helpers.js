/*
 * Formats dates for fing
 * hides year if same year
 * 2022-01-22 -> 22nd Jan
 * 2022-01-23 -> 22nd Jan 2022
 */
export function formatDate(date) {
  if (!date) return;
  const today = new Date();
  const taskDate = new Date(date);

  if (today.getYear() === taskDate.getYear()) {
    return taskDate.toLocaleDateString('en-gb', {
      month: 'long',
      day: 'numeric',
    });
  } else {
    return taskDate.toLocaleDateString('en-gb', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
