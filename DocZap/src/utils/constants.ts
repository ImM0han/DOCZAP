export const ROUTES = {
  HOME: "home",
  VIEW: "view",
  MERGE: "merge",
  SCAN: "scan",
} as const;

export type RouteKey = typeof ROUTES[keyof typeof ROUTES];