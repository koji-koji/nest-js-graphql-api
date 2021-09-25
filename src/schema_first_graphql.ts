
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Recipe {
    id: string;
    title: string;
}

export interface IQuery {
    recipes(): Recipe[] | Promise<Recipe[]>;
}

type Nullable<T> = T | null;
