/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment Category on Category {\n  name\n  slug\n  description\n}": types.CategoryFragmentDoc,
    "query CategoriesGetAll {\n  categories {\n    ...Category\n  }\n}": types.CategoriesGetAllDocument,
    "fragment Collection on Collection {\n  name\n  slug\n  description\n}": types.CollectionFragmentDoc,
    "query CollectionsGetAll {\n  collections {\n    ...Collection\n  }\n}": types.CollectionsGetAllDocument,
    "fragment Product on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!, $skip: Int, $first: Int) {\n  categories(where: {slug: $slug}) {\n    products(skip: $skip, first: $first) {\n      ...Product\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!, $skip: Int, $first: Int) {\n  collections(where: {slug: $slug}) {\n    products(skip: $skip, first: $first) {\n      ...Product\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...Product\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    ...Product\n  }\n}": types.ProductGetByNameDocument,
    "query ProductGetByPage($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first) {\n    ...Product\n  }\n}": types.ProductGetByPageDocument,
    "query ProductGetColorSizeVariantsById($id: ID!) {\n  product(where: {id: $id}) {\n    variants {\n      ... on ProductSizeColorVariant {\n        ...Variant\n      }\n    }\n  }\n}": types.ProductGetColorSizeVariantsByIdDocument,
    "query ProductsGetList {\n  products(first: 10) {\n    ...Product\n  }\n}": types.ProductsGetListDocument,
    "fragment Variant on ProductSizeColorVariant {\n  id\n  name\n}": types.VariantFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Category on Category {\n  name\n  slug\n  description\n}"): typeof import('./graphql').CategoryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetAll {\n  categories {\n    ...Category\n  }\n}"): typeof import('./graphql').CategoriesGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Collection on Collection {\n  name\n  slug\n  description\n}"): typeof import('./graphql').CollectionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetAll {\n  collections {\n    ...Collection\n  }\n}"): typeof import('./graphql').CollectionsGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Product on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $skip: Int, $first: Int) {\n  categories(where: {slug: $slug}) {\n    products(skip: $skip, first: $first) {\n      ...Product\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!, $skip: Int, $first: Int) {\n  collections(where: {slug: $slug}) {\n    products(skip: $skip, first: $first) {\n      ...Product\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductGetByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByPage($skip: Int!, $first: Int!) {\n  products(skip: $skip, first: $first) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductGetByPageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetColorSizeVariantsById($id: ID!) {\n  product(where: {id: $id}) {\n    variants {\n      ... on ProductSizeColorVariant {\n        ...Variant\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetColorSizeVariantsByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(first: 10) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Variant on ProductSizeColorVariant {\n  id\n  name\n}"): typeof import('./graphql').VariantFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
