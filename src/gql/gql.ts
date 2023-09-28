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
    "mutation CartAddProduct($productId: ID!, $orderId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}, quantity: 1, total: $total}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    ...CardOrderItem\n  }\n}": types.CartFragmentDoc,
    "fragment CardOrderItem on OrderItem {\n  id\n  quantity\n  total\n  product {\n    ...CartOrderProduct\n  }\n}": types.CardOrderItemFragmentDoc,
    "fragment CartOrderProduct on Product {\n  name\n  price\n  id\n  images {\n    url\n  }\n}": types.CartOrderProductFragmentDoc,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "fragment Category on Category {\n  name\n  slug\n  description\n}": types.CategoryFragmentDoc,
    "query CategoriesGetAll {\n  categories {\n    ...Category\n  }\n}": types.CategoriesGetAllDocument,
    "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...Category\n  }\n}": types.CategoryGetBySlugDocument,
    "fragment Collection on Collection {\n  name\n  slug\n  description\n}": types.CollectionFragmentDoc,
    "query CollectionsGetAll {\n  collections {\n    ...Collection\n  }\n}": types.CollectionsGetAllDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...Collection\n  }\n}": types.CollectionGetBySlugDocument,
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
export function graphql(source: "mutation CartAddProduct($productId: ID!, $orderId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}, quantity: 1, total: $total}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    ...CardOrderItem\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CardOrderItem on OrderItem {\n  id\n  quantity\n  total\n  product {\n    ...CartOrderProduct\n  }\n}"): typeof import('./graphql').CardOrderItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartOrderProduct on Product {\n  name\n  price\n  id\n  images {\n    url\n  }\n}"): typeof import('./graphql').CartOrderProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
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
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...Category\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
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
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...Collection\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
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
