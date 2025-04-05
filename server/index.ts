import { publicProcedure, router } from './trpc';
import { z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
 

// const todoInputType = z.object({
//     title: z.string(),
//     description: z.string(),
// })

const signUpInputType = z.object({
  email: z.string(),
  password: z.string(),
})

const appRouter = router({
  // createTodo: publicProcedure
  //   .input(todoInputType) 
  //   .mutation(async (opts) => {
  //       const title = opts.input.title; 
  //       const description = opts.input.description;

  //       return {
  //           id : "1",
  //       }
  //   }),

    signUp: publicProcedure 
    .input(signUpInputType)
    .mutation(async (opts) => {  

          let email = opts.input.email;   
          let password = opts.input.password;       

          let token = "123123";
          return {
            token
          }
          
    })

});

const server = createHTTPServer({
    router: appRouter,
  });
   
  server.listen(3000);

export type AppRouter = typeof appRouter;