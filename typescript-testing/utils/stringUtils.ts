// Default export
export default function formatString(str: string): string {
    return str.trim().toLowerCase();
}

// Named exports
export const uppercase = (str: string): string => str.toUpperCase();
export const lowercase = (str: string): string => str.toLowerCase();

// Export type
export type StringFormatter = (str: string) => string;

// Export interface
export interface StringConfig {
    prefix?: string;
    suffix?: string;
}
