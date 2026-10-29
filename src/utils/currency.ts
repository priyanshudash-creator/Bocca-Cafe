/**
 * Format a number as Indian Rupee (INR) currency representation
 * e.g., formatCurrency(208) => "₹208"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
