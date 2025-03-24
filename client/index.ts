import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

async function main() {
    let res = await trpc.createTodo.mutate({ 
            title: 'GO to gym',
            description: 'Hit the gym '
        });      
    console.log(res);
}

main();

