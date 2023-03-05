/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTesterInput {
    exampleField: number;
}

export interface UpdateTesterInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface CreateUserInput {
    fullname: string;
    username: string;
    email: string;
    password: string;
    avatar: string;
}

export interface UpdateUserInput {
    fullname?: Nullable<string>;
    username?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    avatar?: Nullable<string>;
    id: number;
}

export interface Tester {
    exampleField: number;
}

export interface User {
    exampleField: number;
}

export interface IQuery {
    tester(id: number): Tester | Promise<Tester>;
    user(id: number): User | Promise<User>;
}

export interface IMutation {
    createTester(createTesterInput: CreateTesterInput): Tester | Promise<Tester>;
    updateTester(updateTesterInput: UpdateTesterInput): Tester | Promise<Tester>;
    removeTester(id: number): Tester | Promise<Tester>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): User | Promise<User>;
}

type Nullable<T> = T | null;
