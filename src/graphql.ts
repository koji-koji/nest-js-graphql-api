
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    getTodos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;
    todo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export interface Todo {
    title?: Nullable<string>;
    id?: Nullable<string>;
    description?: Nullable<string>;
}

type Nullable<T> = T | null;
