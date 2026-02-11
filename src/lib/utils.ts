import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `€${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `€${(value / 1000).toFixed(1)}K`
  }
  return `€${value.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}

export function formatPercent(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals).replace('.', ',')}%`
}

export function formatNumber(value: number): string {
  return value.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}
