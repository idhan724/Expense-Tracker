interface ChangeMonthProps {
  date: Date;
  offset: number;
}

export function isCurrentMonth(date: Date) {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth()
  );
}

export function formatMonthLabel(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function changeMonth({ date, offset }: ChangeMonthProps) {
  return new Date(date.getFullYear(), date.getMonth() + offset, 1);
}
