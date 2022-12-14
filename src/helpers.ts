import { ErrorException } from './common/exceptions'

export function not (value: any): boolean {
  return !(value)
}

export function isNull (value: any): boolean {
  return value === null || value === undefined
}

export function isNotNull (value: any): boolean {
  return not(isNull(value))
}

export function isEmpty (value: any): boolean {
  if (Array.isArray(value) || typeof value === 'string') return value.length === 0
  if (typeof value === 'object' && value !== null) return isEmpty(Object.keys(value))

  return isNull(value)
}

export function isNotEmpty (value: any): boolean {
  return not(isEmpty(value))
}

export function onlyDefined (items: any[]): Array<[string, any]> {
  return items.filter(values => !values.includes(undefined))
}

export function keyIncluded (items: Record<string, any>, key: string): Boolean {
  return Object.keys(items).includes(key)
}

export function valueIncluded (items: Record<string, any>, value: any): Boolean {
  return Object.values(items).includes(value)
}

export function first<T = any> (items: T[]): T {
  return items[0]
}

export function last<T = any> (items: T[]): T {
  return items.splice(-1)[0]
}

export function throwIf<T extends ErrorException = any> (isWrong: boolean, Exception: new () => T): void {
  if (isWrong) throw new Exception()
}
