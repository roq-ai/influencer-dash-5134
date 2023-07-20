const mapping: Record<string, string> = {
  businesses: 'business',
  'credit-transactions': 'credit_transaction',
  influencers: 'influencer',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
