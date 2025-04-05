"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@trpc/client");
const trpc = (0, client_1.createTRPCClient)({
    links: [
        (0, client_1.httpBatchLink)({
            url: 'http://localhost:3000',
        }),
    ],
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield trpc.createTodo.mutate({
            title: 'GO to gym',
            description: 'Hit the gym '
        });
        console.log(res);
        let res2 = yield trpc.signUp.mutate({
            email: 'Vd4mW@example.com',
            password: '123456'
        });
        console.log(res2);
    });
}
main();
