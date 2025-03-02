// Removes all non-numeric characters
export function extractNumbers(text: string): string {
  return text.replace(/\D/g, '');
}