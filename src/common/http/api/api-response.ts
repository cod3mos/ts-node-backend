export interface APIResponse<T = any> {
  getStatusCode: () => number
  getData: () => T
}
