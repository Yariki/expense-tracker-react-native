export function getFormattedDate(date: Date): string {
    const dateStr = date.toISOString().split('T')[0];
    return dateStr;
}

export function getDateMinusDays(date: Date, days: number): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}