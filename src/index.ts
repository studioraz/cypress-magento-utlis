/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { logout } from './commands/logout';
import { login } from './commands/login';

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            logout: typeof logout;
            login: typeof login;
        }
    }
}

Cypress.Commands.add('logout', logout);
Cypress.Commands.add('login', login);