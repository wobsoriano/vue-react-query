import { QueryClient } from 'react-query/core'

const QueryClientSymbol = Symbol()

export function provideQueryClient() {
  const queryClient = new QueryClient();

  provide(QueryClientSymbol, queryClient);
}