
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AllEvents
 * 
 */
export type AllEvents = $Result.DefaultSelection<Prisma.$AllEventsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AllEvents
 * const allEvents = await prisma.allEvents.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AllEvents
   * const allEvents = await prisma.allEvents.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.allEvents`: Exposes CRUD operations for the **AllEvents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllEvents
    * const allEvents = await prisma.allEvents.findMany()
    * ```
    */
  get allEvents(): Prisma.AllEventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AllEvents: 'AllEvents',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "allEvents" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AllEvents: {
        payload: Prisma.$AllEventsPayload<ExtArgs>
        fields: Prisma.AllEventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllEventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllEventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload>
          }
          findFirst: {
            args: Prisma.AllEventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllEventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload>
          }
          findMany: {
            args: Prisma.AllEventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload>[]
          }
          create: {
            args: Prisma.AllEventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload>
          }
          createMany: {
            args: Prisma.AllEventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllEventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload>[]
          }
          delete: {
            args: Prisma.AllEventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload>
          }
          update: {
            args: Prisma.AllEventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload>
          }
          deleteMany: {
            args: Prisma.AllEventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllEventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllEventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload>[]
          }
          upsert: {
            args: Prisma.AllEventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllEventsPayload>
          }
          aggregate: {
            args: Prisma.AllEventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllEvents>
          }
          groupBy: {
            args: Prisma.AllEventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllEventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllEventsCountArgs<ExtArgs>
            result: $Utils.Optional<AllEventsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    allEvents?: AllEventsOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AllEventsCountOutputType
   */

  export type AllEventsCountOutputType = {
    User: number
  }

  export type AllEventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AllEventsCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * AllEventsCountOutputType without action
   */
  export type AllEventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEventsCountOutputType
     */
    select?: AllEventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AllEventsCountOutputType without action
   */
  export type AllEventsCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    all_events: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    all_events?: boolean | UserCountOutputTypeCountAll_eventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAll_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllEventsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AllEvents
   */

  export type AggregateAllEvents = {
    _count: AllEventsCountAggregateOutputType | null
    _min: AllEventsMinAggregateOutputType | null
    _max: AllEventsMaxAggregateOutputType | null
  }

  export type AllEventsMinAggregateOutputType = {
    event_id: string | null
    name: string | null
    url: string | null
    start_time: string | null
    start_date: string | null
    end_time: string | null
    end_date: string | null
    duration: string | null
    venue_name: string | null
    venue_address: string | null
    longitude: string | null
    latitude: string | null
    summary: string | null
    is_online_event: string | null
    tickets_url: string | null
    tags: string | null
    data_source: string | null
    image: string | null
  }

  export type AllEventsMaxAggregateOutputType = {
    event_id: string | null
    name: string | null
    url: string | null
    start_time: string | null
    start_date: string | null
    end_time: string | null
    end_date: string | null
    duration: string | null
    venue_name: string | null
    venue_address: string | null
    longitude: string | null
    latitude: string | null
    summary: string | null
    is_online_event: string | null
    tickets_url: string | null
    tags: string | null
    data_source: string | null
    image: string | null
  }

  export type AllEventsCountAggregateOutputType = {
    event_id: number
    name: number
    url: number
    start_time: number
    start_date: number
    end_time: number
    end_date: number
    duration: number
    venue_name: number
    venue_address: number
    longitude: number
    latitude: number
    summary: number
    is_online_event: number
    tickets_url: number
    tags: number
    data_source: number
    image: number
    _all: number
  }


  export type AllEventsMinAggregateInputType = {
    event_id?: true
    name?: true
    url?: true
    start_time?: true
    start_date?: true
    end_time?: true
    end_date?: true
    duration?: true
    venue_name?: true
    venue_address?: true
    longitude?: true
    latitude?: true
    summary?: true
    is_online_event?: true
    tickets_url?: true
    tags?: true
    data_source?: true
    image?: true
  }

  export type AllEventsMaxAggregateInputType = {
    event_id?: true
    name?: true
    url?: true
    start_time?: true
    start_date?: true
    end_time?: true
    end_date?: true
    duration?: true
    venue_name?: true
    venue_address?: true
    longitude?: true
    latitude?: true
    summary?: true
    is_online_event?: true
    tickets_url?: true
    tags?: true
    data_source?: true
    image?: true
  }

  export type AllEventsCountAggregateInputType = {
    event_id?: true
    name?: true
    url?: true
    start_time?: true
    start_date?: true
    end_time?: true
    end_date?: true
    duration?: true
    venue_name?: true
    venue_address?: true
    longitude?: true
    latitude?: true
    summary?: true
    is_online_event?: true
    tickets_url?: true
    tags?: true
    data_source?: true
    image?: true
    _all?: true
  }

  export type AllEventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllEvents to aggregate.
     */
    where?: AllEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllEvents to fetch.
     */
    orderBy?: AllEventsOrderByWithRelationInput | AllEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllEvents
    **/
    _count?: true | AllEventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllEventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllEventsMaxAggregateInputType
  }

  export type GetAllEventsAggregateType<T extends AllEventsAggregateArgs> = {
        [P in keyof T & keyof AggregateAllEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllEvents[P]>
      : GetScalarType<T[P], AggregateAllEvents[P]>
  }




  export type AllEventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllEventsWhereInput
    orderBy?: AllEventsOrderByWithAggregationInput | AllEventsOrderByWithAggregationInput[]
    by: AllEventsScalarFieldEnum[] | AllEventsScalarFieldEnum
    having?: AllEventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllEventsCountAggregateInputType | true
    _min?: AllEventsMinAggregateInputType
    _max?: AllEventsMaxAggregateInputType
  }

  export type AllEventsGroupByOutputType = {
    event_id: string
    name: string | null
    url: string | null
    start_time: string | null
    start_date: string | null
    end_time: string | null
    end_date: string | null
    duration: string | null
    venue_name: string | null
    venue_address: string | null
    longitude: string | null
    latitude: string | null
    summary: string | null
    is_online_event: string | null
    tickets_url: string | null
    tags: string | null
    data_source: string | null
    image: string | null
    _count: AllEventsCountAggregateOutputType | null
    _min: AllEventsMinAggregateOutputType | null
    _max: AllEventsMaxAggregateOutputType | null
  }

  type GetAllEventsGroupByPayload<T extends AllEventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllEventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllEventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllEventsGroupByOutputType[P]>
            : GetScalarType<T[P], AllEventsGroupByOutputType[P]>
        }
      >
    >


  export type AllEventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    name?: boolean
    url?: boolean
    start_time?: boolean
    start_date?: boolean
    end_time?: boolean
    end_date?: boolean
    duration?: boolean
    venue_name?: boolean
    venue_address?: boolean
    longitude?: boolean
    latitude?: boolean
    summary?: boolean
    is_online_event?: boolean
    tickets_url?: boolean
    tags?: boolean
    data_source?: boolean
    image?: boolean
    User?: boolean | AllEvents$UserArgs<ExtArgs>
    _count?: boolean | AllEventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allEvents"]>

  export type AllEventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    name?: boolean
    url?: boolean
    start_time?: boolean
    start_date?: boolean
    end_time?: boolean
    end_date?: boolean
    duration?: boolean
    venue_name?: boolean
    venue_address?: boolean
    longitude?: boolean
    latitude?: boolean
    summary?: boolean
    is_online_event?: boolean
    tickets_url?: boolean
    tags?: boolean
    data_source?: boolean
    image?: boolean
  }, ExtArgs["result"]["allEvents"]>

  export type AllEventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    name?: boolean
    url?: boolean
    start_time?: boolean
    start_date?: boolean
    end_time?: boolean
    end_date?: boolean
    duration?: boolean
    venue_name?: boolean
    venue_address?: boolean
    longitude?: boolean
    latitude?: boolean
    summary?: boolean
    is_online_event?: boolean
    tickets_url?: boolean
    tags?: boolean
    data_source?: boolean
    image?: boolean
  }, ExtArgs["result"]["allEvents"]>

  export type AllEventsSelectScalar = {
    event_id?: boolean
    name?: boolean
    url?: boolean
    start_time?: boolean
    start_date?: boolean
    end_time?: boolean
    end_date?: boolean
    duration?: boolean
    venue_name?: boolean
    venue_address?: boolean
    longitude?: boolean
    latitude?: boolean
    summary?: boolean
    is_online_event?: boolean
    tickets_url?: boolean
    tags?: boolean
    data_source?: boolean
    image?: boolean
  }

  export type AllEventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"event_id" | "name" | "url" | "start_time" | "start_date" | "end_time" | "end_date" | "duration" | "venue_name" | "venue_address" | "longitude" | "latitude" | "summary" | "is_online_event" | "tickets_url" | "tags" | "data_source" | "image", ExtArgs["result"]["allEvents"]>
  export type AllEventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AllEvents$UserArgs<ExtArgs>
    _count?: boolean | AllEventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AllEventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AllEventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AllEventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllEvents"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      event_id: string
      name: string | null
      url: string | null
      start_time: string | null
      start_date: string | null
      end_time: string | null
      end_date: string | null
      duration: string | null
      venue_name: string | null
      venue_address: string | null
      longitude: string | null
      latitude: string | null
      summary: string | null
      is_online_event: string | null
      tickets_url: string | null
      tags: string | null
      data_source: string | null
      image: string | null
    }, ExtArgs["result"]["allEvents"]>
    composites: {}
  }

  type AllEventsGetPayload<S extends boolean | null | undefined | AllEventsDefaultArgs> = $Result.GetResult<Prisma.$AllEventsPayload, S>

  type AllEventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllEventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllEventsCountAggregateInputType | true
    }

  export interface AllEventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllEvents'], meta: { name: 'AllEvents' } }
    /**
     * Find zero or one AllEvents that matches the filter.
     * @param {AllEventsFindUniqueArgs} args - Arguments to find a AllEvents
     * @example
     * // Get one AllEvents
     * const allEvents = await prisma.allEvents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllEventsFindUniqueArgs>(args: SelectSubset<T, AllEventsFindUniqueArgs<ExtArgs>>): Prisma__AllEventsClient<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AllEvents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllEventsFindUniqueOrThrowArgs} args - Arguments to find a AllEvents
     * @example
     * // Get one AllEvents
     * const allEvents = await prisma.allEvents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllEventsFindUniqueOrThrowArgs>(args: SelectSubset<T, AllEventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllEventsClient<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllEventsFindFirstArgs} args - Arguments to find a AllEvents
     * @example
     * // Get one AllEvents
     * const allEvents = await prisma.allEvents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllEventsFindFirstArgs>(args?: SelectSubset<T, AllEventsFindFirstArgs<ExtArgs>>): Prisma__AllEventsClient<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllEvents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllEventsFindFirstOrThrowArgs} args - Arguments to find a AllEvents
     * @example
     * // Get one AllEvents
     * const allEvents = await prisma.allEvents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllEventsFindFirstOrThrowArgs>(args?: SelectSubset<T, AllEventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllEventsClient<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AllEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllEventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllEvents
     * const allEvents = await prisma.allEvents.findMany()
     * 
     * // Get first 10 AllEvents
     * const allEvents = await prisma.allEvents.findMany({ take: 10 })
     * 
     * // Only select the `event_id`
     * const allEventsWithEvent_idOnly = await prisma.allEvents.findMany({ select: { event_id: true } })
     * 
     */
    findMany<T extends AllEventsFindManyArgs>(args?: SelectSubset<T, AllEventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AllEvents.
     * @param {AllEventsCreateArgs} args - Arguments to create a AllEvents.
     * @example
     * // Create one AllEvents
     * const AllEvents = await prisma.allEvents.create({
     *   data: {
     *     // ... data to create a AllEvents
     *   }
     * })
     * 
     */
    create<T extends AllEventsCreateArgs>(args: SelectSubset<T, AllEventsCreateArgs<ExtArgs>>): Prisma__AllEventsClient<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AllEvents.
     * @param {AllEventsCreateManyArgs} args - Arguments to create many AllEvents.
     * @example
     * // Create many AllEvents
     * const allEvents = await prisma.allEvents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllEventsCreateManyArgs>(args?: SelectSubset<T, AllEventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AllEvents and returns the data saved in the database.
     * @param {AllEventsCreateManyAndReturnArgs} args - Arguments to create many AllEvents.
     * @example
     * // Create many AllEvents
     * const allEvents = await prisma.allEvents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AllEvents and only return the `event_id`
     * const allEventsWithEvent_idOnly = await prisma.allEvents.createManyAndReturn({
     *   select: { event_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllEventsCreateManyAndReturnArgs>(args?: SelectSubset<T, AllEventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AllEvents.
     * @param {AllEventsDeleteArgs} args - Arguments to delete one AllEvents.
     * @example
     * // Delete one AllEvents
     * const AllEvents = await prisma.allEvents.delete({
     *   where: {
     *     // ... filter to delete one AllEvents
     *   }
     * })
     * 
     */
    delete<T extends AllEventsDeleteArgs>(args: SelectSubset<T, AllEventsDeleteArgs<ExtArgs>>): Prisma__AllEventsClient<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AllEvents.
     * @param {AllEventsUpdateArgs} args - Arguments to update one AllEvents.
     * @example
     * // Update one AllEvents
     * const allEvents = await prisma.allEvents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllEventsUpdateArgs>(args: SelectSubset<T, AllEventsUpdateArgs<ExtArgs>>): Prisma__AllEventsClient<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AllEvents.
     * @param {AllEventsDeleteManyArgs} args - Arguments to filter AllEvents to delete.
     * @example
     * // Delete a few AllEvents
     * const { count } = await prisma.allEvents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllEventsDeleteManyArgs>(args?: SelectSubset<T, AllEventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllEventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllEvents
     * const allEvents = await prisma.allEvents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllEventsUpdateManyArgs>(args: SelectSubset<T, AllEventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllEvents and returns the data updated in the database.
     * @param {AllEventsUpdateManyAndReturnArgs} args - Arguments to update many AllEvents.
     * @example
     * // Update many AllEvents
     * const allEvents = await prisma.allEvents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AllEvents and only return the `event_id`
     * const allEventsWithEvent_idOnly = await prisma.allEvents.updateManyAndReturn({
     *   select: { event_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AllEventsUpdateManyAndReturnArgs>(args: SelectSubset<T, AllEventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AllEvents.
     * @param {AllEventsUpsertArgs} args - Arguments to update or create a AllEvents.
     * @example
     * // Update or create a AllEvents
     * const allEvents = await prisma.allEvents.upsert({
     *   create: {
     *     // ... data to create a AllEvents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllEvents we want to update
     *   }
     * })
     */
    upsert<T extends AllEventsUpsertArgs>(args: SelectSubset<T, AllEventsUpsertArgs<ExtArgs>>): Prisma__AllEventsClient<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AllEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllEventsCountArgs} args - Arguments to filter AllEvents to count.
     * @example
     * // Count the number of AllEvents
     * const count = await prisma.allEvents.count({
     *   where: {
     *     // ... the filter for the AllEvents we want to count
     *   }
     * })
    **/
    count<T extends AllEventsCountArgs>(
      args?: Subset<T, AllEventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllEventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllEventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllEventsAggregateArgs>(args: Subset<T, AllEventsAggregateArgs>): Prisma.PrismaPromise<GetAllEventsAggregateType<T>>

    /**
     * Group by AllEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllEventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllEventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllEventsGroupByArgs['orderBy'] }
        : { orderBy?: AllEventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllEventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllEvents model
   */
  readonly fields: AllEventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllEvents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllEventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends AllEvents$UserArgs<ExtArgs> = {}>(args?: Subset<T, AllEvents$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AllEvents model
   */
  interface AllEventsFieldRefs {
    readonly event_id: FieldRef<"AllEvents", 'String'>
    readonly name: FieldRef<"AllEvents", 'String'>
    readonly url: FieldRef<"AllEvents", 'String'>
    readonly start_time: FieldRef<"AllEvents", 'String'>
    readonly start_date: FieldRef<"AllEvents", 'String'>
    readonly end_time: FieldRef<"AllEvents", 'String'>
    readonly end_date: FieldRef<"AllEvents", 'String'>
    readonly duration: FieldRef<"AllEvents", 'String'>
    readonly venue_name: FieldRef<"AllEvents", 'String'>
    readonly venue_address: FieldRef<"AllEvents", 'String'>
    readonly longitude: FieldRef<"AllEvents", 'String'>
    readonly latitude: FieldRef<"AllEvents", 'String'>
    readonly summary: FieldRef<"AllEvents", 'String'>
    readonly is_online_event: FieldRef<"AllEvents", 'String'>
    readonly tickets_url: FieldRef<"AllEvents", 'String'>
    readonly tags: FieldRef<"AllEvents", 'String'>
    readonly data_source: FieldRef<"AllEvents", 'String'>
    readonly image: FieldRef<"AllEvents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AllEvents findUnique
   */
  export type AllEventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    /**
     * Filter, which AllEvents to fetch.
     */
    where: AllEventsWhereUniqueInput
  }

  /**
   * AllEvents findUniqueOrThrow
   */
  export type AllEventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    /**
     * Filter, which AllEvents to fetch.
     */
    where: AllEventsWhereUniqueInput
  }

  /**
   * AllEvents findFirst
   */
  export type AllEventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    /**
     * Filter, which AllEvents to fetch.
     */
    where?: AllEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllEvents to fetch.
     */
    orderBy?: AllEventsOrderByWithRelationInput | AllEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllEvents.
     */
    cursor?: AllEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllEvents.
     */
    distinct?: AllEventsScalarFieldEnum | AllEventsScalarFieldEnum[]
  }

  /**
   * AllEvents findFirstOrThrow
   */
  export type AllEventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    /**
     * Filter, which AllEvents to fetch.
     */
    where?: AllEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllEvents to fetch.
     */
    orderBy?: AllEventsOrderByWithRelationInput | AllEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllEvents.
     */
    cursor?: AllEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllEvents.
     */
    distinct?: AllEventsScalarFieldEnum | AllEventsScalarFieldEnum[]
  }

  /**
   * AllEvents findMany
   */
  export type AllEventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    /**
     * Filter, which AllEvents to fetch.
     */
    where?: AllEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllEvents to fetch.
     */
    orderBy?: AllEventsOrderByWithRelationInput | AllEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllEvents.
     */
    cursor?: AllEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllEvents.
     */
    skip?: number
    distinct?: AllEventsScalarFieldEnum | AllEventsScalarFieldEnum[]
  }

  /**
   * AllEvents create
   */
  export type AllEventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    /**
     * The data needed to create a AllEvents.
     */
    data: XOR<AllEventsCreateInput, AllEventsUncheckedCreateInput>
  }

  /**
   * AllEvents createMany
   */
  export type AllEventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllEvents.
     */
    data: AllEventsCreateManyInput | AllEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllEvents createManyAndReturn
   */
  export type AllEventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * The data used to create many AllEvents.
     */
    data: AllEventsCreateManyInput | AllEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllEvents update
   */
  export type AllEventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    /**
     * The data needed to update a AllEvents.
     */
    data: XOR<AllEventsUpdateInput, AllEventsUncheckedUpdateInput>
    /**
     * Choose, which AllEvents to update.
     */
    where: AllEventsWhereUniqueInput
  }

  /**
   * AllEvents updateMany
   */
  export type AllEventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllEvents.
     */
    data: XOR<AllEventsUpdateManyMutationInput, AllEventsUncheckedUpdateManyInput>
    /**
     * Filter which AllEvents to update
     */
    where?: AllEventsWhereInput
    /**
     * Limit how many AllEvents to update.
     */
    limit?: number
  }

  /**
   * AllEvents updateManyAndReturn
   */
  export type AllEventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * The data used to update AllEvents.
     */
    data: XOR<AllEventsUpdateManyMutationInput, AllEventsUncheckedUpdateManyInput>
    /**
     * Filter which AllEvents to update
     */
    where?: AllEventsWhereInput
    /**
     * Limit how many AllEvents to update.
     */
    limit?: number
  }

  /**
   * AllEvents upsert
   */
  export type AllEventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    /**
     * The filter to search for the AllEvents to update in case it exists.
     */
    where: AllEventsWhereUniqueInput
    /**
     * In case the AllEvents found by the `where` argument doesn't exist, create a new AllEvents with this data.
     */
    create: XOR<AllEventsCreateInput, AllEventsUncheckedCreateInput>
    /**
     * In case the AllEvents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllEventsUpdateInput, AllEventsUncheckedUpdateInput>
  }

  /**
   * AllEvents delete
   */
  export type AllEventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    /**
     * Filter which AllEvents to delete.
     */
    where: AllEventsWhereUniqueInput
  }

  /**
   * AllEvents deleteMany
   */
  export type AllEventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllEvents to delete
     */
    where?: AllEventsWhereInput
    /**
     * Limit how many AllEvents to delete.
     */
    limit?: number
  }

  /**
   * AllEvents.User
   */
  export type AllEvents$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * AllEvents without action
   */
  export type AllEventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
    numberChildren: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
    numberChildren: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    age: number | null
    createdAt: Date | null
    updatedAt: Date | null
    childrenAges: string | null
    genderChildren: string | null
    isAdmin: boolean | null
    isDisabled: boolean | null
    location: string | null
    numberChildren: number | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    age: number | null
    createdAt: Date | null
    updatedAt: Date | null
    childrenAges: string | null
    genderChildren: string | null
    isAdmin: boolean | null
    isDisabled: boolean | null
    location: string | null
    numberChildren: number | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    age: number
    createdAt: number
    updatedAt: number
    childrenAges: number
    genderChildren: number
    isAdmin: number
    isDisabled: number
    location: number
    numberChildren: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
    numberChildren?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
    numberChildren?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    childrenAges?: true
    genderChildren?: true
    isAdmin?: true
    isDisabled?: true
    location?: true
    numberChildren?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    childrenAges?: true
    genderChildren?: true
    isAdmin?: true
    isDisabled?: true
    location?: true
    numberChildren?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    age?: true
    createdAt?: true
    updatedAt?: true
    childrenAges?: true
    genderChildren?: true
    isAdmin?: true
    isDisabled?: true
    location?: true
    numberChildren?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    age: number
    createdAt: Date
    updatedAt: Date
    childrenAges: string
    genderChildren: string
    isAdmin: boolean
    isDisabled: boolean
    location: string
    numberChildren: number
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    childrenAges?: boolean
    genderChildren?: boolean
    isAdmin?: boolean
    isDisabled?: boolean
    location?: boolean
    numberChildren?: boolean
    role?: boolean
    all_events?: boolean | User$all_eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    childrenAges?: boolean
    genderChildren?: boolean
    isAdmin?: boolean
    isDisabled?: boolean
    location?: boolean
    numberChildren?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    childrenAges?: boolean
    genderChildren?: boolean
    isAdmin?: boolean
    isDisabled?: boolean
    location?: boolean
    numberChildren?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    age?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    childrenAges?: boolean
    genderChildren?: boolean
    isAdmin?: boolean
    isDisabled?: boolean
    location?: boolean
    numberChildren?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "age" | "createdAt" | "updatedAt" | "childrenAges" | "genderChildren" | "isAdmin" | "isDisabled" | "location" | "numberChildren" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    all_events?: boolean | User$all_eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      all_events: Prisma.$AllEventsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      age: number
      createdAt: Date
      updatedAt: Date
      childrenAges: string
      genderChildren: string
      isAdmin: boolean
      isDisabled: boolean
      location: string
      numberChildren: number
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    all_events<T extends User$all_eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$all_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly childrenAges: FieldRef<"User", 'String'>
    readonly genderChildren: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly isDisabled: FieldRef<"User", 'Boolean'>
    readonly location: FieldRef<"User", 'String'>
    readonly numberChildren: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.all_events
   */
  export type User$all_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllEvents
     */
    select?: AllEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllEvents
     */
    omit?: AllEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllEventsInclude<ExtArgs> | null
    where?: AllEventsWhereInput
    orderBy?: AllEventsOrderByWithRelationInput | AllEventsOrderByWithRelationInput[]
    cursor?: AllEventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AllEventsScalarFieldEnum | AllEventsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AllEventsScalarFieldEnum: {
    event_id: 'event_id',
    name: 'name',
    url: 'url',
    start_time: 'start_time',
    start_date: 'start_date',
    end_time: 'end_time',
    end_date: 'end_date',
    duration: 'duration',
    venue_name: 'venue_name',
    venue_address: 'venue_address',
    longitude: 'longitude',
    latitude: 'latitude',
    summary: 'summary',
    is_online_event: 'is_online_event',
    tickets_url: 'tickets_url',
    tags: 'tags',
    data_source: 'data_source',
    image: 'image'
  };

  export type AllEventsScalarFieldEnum = (typeof AllEventsScalarFieldEnum)[keyof typeof AllEventsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    age: 'age',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    childrenAges: 'childrenAges',
    genderChildren: 'genderChildren',
    isAdmin: 'isAdmin',
    isDisabled: 'isDisabled',
    location: 'location',
    numberChildren: 'numberChildren',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AllEventsWhereInput = {
    AND?: AllEventsWhereInput | AllEventsWhereInput[]
    OR?: AllEventsWhereInput[]
    NOT?: AllEventsWhereInput | AllEventsWhereInput[]
    event_id?: StringFilter<"AllEvents"> | string
    name?: StringNullableFilter<"AllEvents"> | string | null
    url?: StringNullableFilter<"AllEvents"> | string | null
    start_time?: StringNullableFilter<"AllEvents"> | string | null
    start_date?: StringNullableFilter<"AllEvents"> | string | null
    end_time?: StringNullableFilter<"AllEvents"> | string | null
    end_date?: StringNullableFilter<"AllEvents"> | string | null
    duration?: StringNullableFilter<"AllEvents"> | string | null
    venue_name?: StringNullableFilter<"AllEvents"> | string | null
    venue_address?: StringNullableFilter<"AllEvents"> | string | null
    longitude?: StringNullableFilter<"AllEvents"> | string | null
    latitude?: StringNullableFilter<"AllEvents"> | string | null
    summary?: StringNullableFilter<"AllEvents"> | string | null
    is_online_event?: StringNullableFilter<"AllEvents"> | string | null
    tickets_url?: StringNullableFilter<"AllEvents"> | string | null
    tags?: StringNullableFilter<"AllEvents"> | string | null
    data_source?: StringNullableFilter<"AllEvents"> | string | null
    image?: StringNullableFilter<"AllEvents"> | string | null
    User?: UserListRelationFilter
  }

  export type AllEventsOrderByWithRelationInput = {
    event_id?: SortOrder
    name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    venue_name?: SortOrderInput | SortOrder
    venue_address?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    is_online_event?: SortOrderInput | SortOrder
    tickets_url?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    data_source?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type AllEventsWhereUniqueInput = Prisma.AtLeast<{
    event_id?: string
    AND?: AllEventsWhereInput | AllEventsWhereInput[]
    OR?: AllEventsWhereInput[]
    NOT?: AllEventsWhereInput | AllEventsWhereInput[]
    name?: StringNullableFilter<"AllEvents"> | string | null
    url?: StringNullableFilter<"AllEvents"> | string | null
    start_time?: StringNullableFilter<"AllEvents"> | string | null
    start_date?: StringNullableFilter<"AllEvents"> | string | null
    end_time?: StringNullableFilter<"AllEvents"> | string | null
    end_date?: StringNullableFilter<"AllEvents"> | string | null
    duration?: StringNullableFilter<"AllEvents"> | string | null
    venue_name?: StringNullableFilter<"AllEvents"> | string | null
    venue_address?: StringNullableFilter<"AllEvents"> | string | null
    longitude?: StringNullableFilter<"AllEvents"> | string | null
    latitude?: StringNullableFilter<"AllEvents"> | string | null
    summary?: StringNullableFilter<"AllEvents"> | string | null
    is_online_event?: StringNullableFilter<"AllEvents"> | string | null
    tickets_url?: StringNullableFilter<"AllEvents"> | string | null
    tags?: StringNullableFilter<"AllEvents"> | string | null
    data_source?: StringNullableFilter<"AllEvents"> | string | null
    image?: StringNullableFilter<"AllEvents"> | string | null
    User?: UserListRelationFilter
  }, "event_id">

  export type AllEventsOrderByWithAggregationInput = {
    event_id?: SortOrder
    name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    venue_name?: SortOrderInput | SortOrder
    venue_address?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    is_online_event?: SortOrderInput | SortOrder
    tickets_url?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    data_source?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: AllEventsCountOrderByAggregateInput
    _max?: AllEventsMaxOrderByAggregateInput
    _min?: AllEventsMinOrderByAggregateInput
  }

  export type AllEventsScalarWhereWithAggregatesInput = {
    AND?: AllEventsScalarWhereWithAggregatesInput | AllEventsScalarWhereWithAggregatesInput[]
    OR?: AllEventsScalarWhereWithAggregatesInput[]
    NOT?: AllEventsScalarWhereWithAggregatesInput | AllEventsScalarWhereWithAggregatesInput[]
    event_id?: StringWithAggregatesFilter<"AllEvents"> | string
    name?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    url?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    start_time?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    start_date?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    end_time?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    end_date?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    duration?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    venue_name?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    venue_address?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    longitude?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    latitude?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    summary?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    is_online_event?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    tickets_url?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    tags?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    data_source?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
    image?: StringNullableWithAggregatesFilter<"AllEvents"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    childrenAges?: StringFilter<"User"> | string
    genderChildren?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    isDisabled?: BoolFilter<"User"> | boolean
    location?: StringFilter<"User"> | string
    numberChildren?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    all_events?: AllEventsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    childrenAges?: SortOrder
    genderChildren?: SortOrder
    isAdmin?: SortOrder
    isDisabled?: SortOrder
    location?: SortOrder
    numberChildren?: SortOrder
    role?: SortOrder
    all_events?: AllEventsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    childrenAges?: StringFilter<"User"> | string
    genderChildren?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    isDisabled?: BoolFilter<"User"> | boolean
    location?: StringFilter<"User"> | string
    numberChildren?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    all_events?: AllEventsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    childrenAges?: SortOrder
    genderChildren?: SortOrder
    isAdmin?: SortOrder
    isDisabled?: SortOrder
    location?: SortOrder
    numberChildren?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    age?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    childrenAges?: StringWithAggregatesFilter<"User"> | string
    genderChildren?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    isDisabled?: BoolWithAggregatesFilter<"User"> | boolean
    location?: StringWithAggregatesFilter<"User"> | string
    numberChildren?: IntWithAggregatesFilter<"User"> | number
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type AllEventsCreateInput = {
    event_id: string
    name?: string | null
    url?: string | null
    start_time?: string | null
    start_date?: string | null
    end_time?: string | null
    end_date?: string | null
    duration?: string | null
    venue_name?: string | null
    venue_address?: string | null
    longitude?: string | null
    latitude?: string | null
    summary?: string | null
    is_online_event?: string | null
    tickets_url?: string | null
    tags?: string | null
    data_source?: string | null
    image?: string | null
    User?: UserCreateNestedManyWithoutAll_eventsInput
  }

  export type AllEventsUncheckedCreateInput = {
    event_id: string
    name?: string | null
    url?: string | null
    start_time?: string | null
    start_date?: string | null
    end_time?: string | null
    end_date?: string | null
    duration?: string | null
    venue_name?: string | null
    venue_address?: string | null
    longitude?: string | null
    latitude?: string | null
    summary?: string | null
    is_online_event?: string | null
    tickets_url?: string | null
    tags?: string | null
    data_source?: string | null
    image?: string | null
    User?: UserUncheckedCreateNestedManyWithoutAll_eventsInput
  }

  export type AllEventsUpdateInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    venue_name?: NullableStringFieldUpdateOperationsInput | string | null
    venue_address?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    is_online_event?: NullableStringFieldUpdateOperationsInput | string | null
    tickets_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateManyWithoutAll_eventsNestedInput
  }

  export type AllEventsUncheckedUpdateInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    venue_name?: NullableStringFieldUpdateOperationsInput | string | null
    venue_address?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    is_online_event?: NullableStringFieldUpdateOperationsInput | string | null
    tickets_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUncheckedUpdateManyWithoutAll_eventsNestedInput
  }

  export type AllEventsCreateManyInput = {
    event_id: string
    name?: string | null
    url?: string | null
    start_time?: string | null
    start_date?: string | null
    end_time?: string | null
    end_date?: string | null
    duration?: string | null
    venue_name?: string | null
    venue_address?: string | null
    longitude?: string | null
    latitude?: string | null
    summary?: string | null
    is_online_event?: string | null
    tickets_url?: string | null
    tags?: string | null
    data_source?: string | null
    image?: string | null
  }

  export type AllEventsUpdateManyMutationInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    venue_name?: NullableStringFieldUpdateOperationsInput | string | null
    venue_address?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    is_online_event?: NullableStringFieldUpdateOperationsInput | string | null
    tickets_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AllEventsUncheckedUpdateManyInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    venue_name?: NullableStringFieldUpdateOperationsInput | string | null
    venue_address?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    is_online_event?: NullableStringFieldUpdateOperationsInput | string | null
    tickets_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAges: string
    genderChildren: string
    isAdmin?: boolean
    isDisabled?: boolean
    location: string
    numberChildren: number
    role?: $Enums.Role
    all_events?: AllEventsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAges: string
    genderChildren: string
    isAdmin?: boolean
    isDisabled?: boolean
    location: string
    numberChildren: number
    role?: $Enums.Role
    all_events?: AllEventsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAges?: StringFieldUpdateOperationsInput | string
    genderChildren?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    numberChildren?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    all_events?: AllEventsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAges?: StringFieldUpdateOperationsInput | string
    genderChildren?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    numberChildren?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    all_events?: AllEventsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAges: string
    genderChildren: string
    isAdmin?: boolean
    isDisabled?: boolean
    location: string
    numberChildren: number
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAges?: StringFieldUpdateOperationsInput | string
    genderChildren?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    numberChildren?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAges?: StringFieldUpdateOperationsInput | string
    genderChildren?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    numberChildren?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AllEventsCountOrderByAggregateInput = {
    event_id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    start_time?: SortOrder
    start_date?: SortOrder
    end_time?: SortOrder
    end_date?: SortOrder
    duration?: SortOrder
    venue_name?: SortOrder
    venue_address?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    summary?: SortOrder
    is_online_event?: SortOrder
    tickets_url?: SortOrder
    tags?: SortOrder
    data_source?: SortOrder
    image?: SortOrder
  }

  export type AllEventsMaxOrderByAggregateInput = {
    event_id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    start_time?: SortOrder
    start_date?: SortOrder
    end_time?: SortOrder
    end_date?: SortOrder
    duration?: SortOrder
    venue_name?: SortOrder
    venue_address?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    summary?: SortOrder
    is_online_event?: SortOrder
    tickets_url?: SortOrder
    tags?: SortOrder
    data_source?: SortOrder
    image?: SortOrder
  }

  export type AllEventsMinOrderByAggregateInput = {
    event_id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    start_time?: SortOrder
    start_date?: SortOrder
    end_time?: SortOrder
    end_date?: SortOrder
    duration?: SortOrder
    venue_name?: SortOrder
    venue_address?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    summary?: SortOrder
    is_online_event?: SortOrder
    tickets_url?: SortOrder
    tags?: SortOrder
    data_source?: SortOrder
    image?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AllEventsListRelationFilter = {
    every?: AllEventsWhereInput
    some?: AllEventsWhereInput
    none?: AllEventsWhereInput
  }

  export type AllEventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    childrenAges?: SortOrder
    genderChildren?: SortOrder
    isAdmin?: SortOrder
    isDisabled?: SortOrder
    location?: SortOrder
    numberChildren?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
    numberChildren?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    childrenAges?: SortOrder
    genderChildren?: SortOrder
    isAdmin?: SortOrder
    isDisabled?: SortOrder
    location?: SortOrder
    numberChildren?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    childrenAges?: SortOrder
    genderChildren?: SortOrder
    isAdmin?: SortOrder
    isDisabled?: SortOrder
    location?: SortOrder
    numberChildren?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
    numberChildren?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutAll_eventsInput = {
    create?: XOR<UserCreateWithoutAll_eventsInput, UserUncheckedCreateWithoutAll_eventsInput> | UserCreateWithoutAll_eventsInput[] | UserUncheckedCreateWithoutAll_eventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAll_eventsInput | UserCreateOrConnectWithoutAll_eventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAll_eventsInput = {
    create?: XOR<UserCreateWithoutAll_eventsInput, UserUncheckedCreateWithoutAll_eventsInput> | UserCreateWithoutAll_eventsInput[] | UserUncheckedCreateWithoutAll_eventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAll_eventsInput | UserCreateOrConnectWithoutAll_eventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutAll_eventsNestedInput = {
    create?: XOR<UserCreateWithoutAll_eventsInput, UserUncheckedCreateWithoutAll_eventsInput> | UserCreateWithoutAll_eventsInput[] | UserUncheckedCreateWithoutAll_eventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAll_eventsInput | UserCreateOrConnectWithoutAll_eventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAll_eventsInput | UserUpsertWithWhereUniqueWithoutAll_eventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAll_eventsInput | UserUpdateWithWhereUniqueWithoutAll_eventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAll_eventsInput | UserUpdateManyWithWhereWithoutAll_eventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAll_eventsNestedInput = {
    create?: XOR<UserCreateWithoutAll_eventsInput, UserUncheckedCreateWithoutAll_eventsInput> | UserCreateWithoutAll_eventsInput[] | UserUncheckedCreateWithoutAll_eventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAll_eventsInput | UserCreateOrConnectWithoutAll_eventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAll_eventsInput | UserUpsertWithWhereUniqueWithoutAll_eventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAll_eventsInput | UserUpdateWithWhereUniqueWithoutAll_eventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAll_eventsInput | UserUpdateManyWithWhereWithoutAll_eventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AllEventsCreateNestedManyWithoutUserInput = {
    create?: XOR<AllEventsCreateWithoutUserInput, AllEventsUncheckedCreateWithoutUserInput> | AllEventsCreateWithoutUserInput[] | AllEventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AllEventsCreateOrConnectWithoutUserInput | AllEventsCreateOrConnectWithoutUserInput[]
    connect?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
  }

  export type AllEventsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AllEventsCreateWithoutUserInput, AllEventsUncheckedCreateWithoutUserInput> | AllEventsCreateWithoutUserInput[] | AllEventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AllEventsCreateOrConnectWithoutUserInput | AllEventsCreateOrConnectWithoutUserInput[]
    connect?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AllEventsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AllEventsCreateWithoutUserInput, AllEventsUncheckedCreateWithoutUserInput> | AllEventsCreateWithoutUserInput[] | AllEventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AllEventsCreateOrConnectWithoutUserInput | AllEventsCreateOrConnectWithoutUserInput[]
    upsert?: AllEventsUpsertWithWhereUniqueWithoutUserInput | AllEventsUpsertWithWhereUniqueWithoutUserInput[]
    set?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
    disconnect?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
    delete?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
    connect?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
    update?: AllEventsUpdateWithWhereUniqueWithoutUserInput | AllEventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AllEventsUpdateManyWithWhereWithoutUserInput | AllEventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AllEventsScalarWhereInput | AllEventsScalarWhereInput[]
  }

  export type AllEventsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AllEventsCreateWithoutUserInput, AllEventsUncheckedCreateWithoutUserInput> | AllEventsCreateWithoutUserInput[] | AllEventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AllEventsCreateOrConnectWithoutUserInput | AllEventsCreateOrConnectWithoutUserInput[]
    upsert?: AllEventsUpsertWithWhereUniqueWithoutUserInput | AllEventsUpsertWithWhereUniqueWithoutUserInput[]
    set?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
    disconnect?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
    delete?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
    connect?: AllEventsWhereUniqueInput | AllEventsWhereUniqueInput[]
    update?: AllEventsUpdateWithWhereUniqueWithoutUserInput | AllEventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AllEventsUpdateManyWithWhereWithoutUserInput | AllEventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AllEventsScalarWhereInput | AllEventsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserCreateWithoutAll_eventsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAges: string
    genderChildren: string
    isAdmin?: boolean
    isDisabled?: boolean
    location: string
    numberChildren: number
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutAll_eventsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    age: number
    createdAt?: Date | string
    updatedAt?: Date | string
    childrenAges: string
    genderChildren: string
    isAdmin?: boolean
    isDisabled?: boolean
    location: string
    numberChildren: number
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutAll_eventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAll_eventsInput, UserUncheckedCreateWithoutAll_eventsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutAll_eventsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAll_eventsInput, UserUncheckedUpdateWithoutAll_eventsInput>
    create: XOR<UserCreateWithoutAll_eventsInput, UserUncheckedCreateWithoutAll_eventsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAll_eventsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAll_eventsInput, UserUncheckedUpdateWithoutAll_eventsInput>
  }

  export type UserUpdateManyWithWhereWithoutAll_eventsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAll_eventsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    childrenAges?: StringFilter<"User"> | string
    genderChildren?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    isDisabled?: BoolFilter<"User"> | boolean
    location?: StringFilter<"User"> | string
    numberChildren?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type AllEventsCreateWithoutUserInput = {
    event_id: string
    name?: string | null
    url?: string | null
    start_time?: string | null
    start_date?: string | null
    end_time?: string | null
    end_date?: string | null
    duration?: string | null
    venue_name?: string | null
    venue_address?: string | null
    longitude?: string | null
    latitude?: string | null
    summary?: string | null
    is_online_event?: string | null
    tickets_url?: string | null
    tags?: string | null
    data_source?: string | null
    image?: string | null
  }

  export type AllEventsUncheckedCreateWithoutUserInput = {
    event_id: string
    name?: string | null
    url?: string | null
    start_time?: string | null
    start_date?: string | null
    end_time?: string | null
    end_date?: string | null
    duration?: string | null
    venue_name?: string | null
    venue_address?: string | null
    longitude?: string | null
    latitude?: string | null
    summary?: string | null
    is_online_event?: string | null
    tickets_url?: string | null
    tags?: string | null
    data_source?: string | null
    image?: string | null
  }

  export type AllEventsCreateOrConnectWithoutUserInput = {
    where: AllEventsWhereUniqueInput
    create: XOR<AllEventsCreateWithoutUserInput, AllEventsUncheckedCreateWithoutUserInput>
  }

  export type AllEventsUpsertWithWhereUniqueWithoutUserInput = {
    where: AllEventsWhereUniqueInput
    update: XOR<AllEventsUpdateWithoutUserInput, AllEventsUncheckedUpdateWithoutUserInput>
    create: XOR<AllEventsCreateWithoutUserInput, AllEventsUncheckedCreateWithoutUserInput>
  }

  export type AllEventsUpdateWithWhereUniqueWithoutUserInput = {
    where: AllEventsWhereUniqueInput
    data: XOR<AllEventsUpdateWithoutUserInput, AllEventsUncheckedUpdateWithoutUserInput>
  }

  export type AllEventsUpdateManyWithWhereWithoutUserInput = {
    where: AllEventsScalarWhereInput
    data: XOR<AllEventsUpdateManyMutationInput, AllEventsUncheckedUpdateManyWithoutUserInput>
  }

  export type AllEventsScalarWhereInput = {
    AND?: AllEventsScalarWhereInput | AllEventsScalarWhereInput[]
    OR?: AllEventsScalarWhereInput[]
    NOT?: AllEventsScalarWhereInput | AllEventsScalarWhereInput[]
    event_id?: StringFilter<"AllEvents"> | string
    name?: StringNullableFilter<"AllEvents"> | string | null
    url?: StringNullableFilter<"AllEvents"> | string | null
    start_time?: StringNullableFilter<"AllEvents"> | string | null
    start_date?: StringNullableFilter<"AllEvents"> | string | null
    end_time?: StringNullableFilter<"AllEvents"> | string | null
    end_date?: StringNullableFilter<"AllEvents"> | string | null
    duration?: StringNullableFilter<"AllEvents"> | string | null
    venue_name?: StringNullableFilter<"AllEvents"> | string | null
    venue_address?: StringNullableFilter<"AllEvents"> | string | null
    longitude?: StringNullableFilter<"AllEvents"> | string | null
    latitude?: StringNullableFilter<"AllEvents"> | string | null
    summary?: StringNullableFilter<"AllEvents"> | string | null
    is_online_event?: StringNullableFilter<"AllEvents"> | string | null
    tickets_url?: StringNullableFilter<"AllEvents"> | string | null
    tags?: StringNullableFilter<"AllEvents"> | string | null
    data_source?: StringNullableFilter<"AllEvents"> | string | null
    image?: StringNullableFilter<"AllEvents"> | string | null
  }

  export type UserUpdateWithoutAll_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAges?: StringFieldUpdateOperationsInput | string
    genderChildren?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    numberChildren?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutAll_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAges?: StringFieldUpdateOperationsInput | string
    genderChildren?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    numberChildren?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyWithoutAll_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childrenAges?: StringFieldUpdateOperationsInput | string
    genderChildren?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    location?: StringFieldUpdateOperationsInput | string
    numberChildren?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AllEventsUpdateWithoutUserInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    venue_name?: NullableStringFieldUpdateOperationsInput | string | null
    venue_address?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    is_online_event?: NullableStringFieldUpdateOperationsInput | string | null
    tickets_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AllEventsUncheckedUpdateWithoutUserInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    venue_name?: NullableStringFieldUpdateOperationsInput | string | null
    venue_address?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    is_online_event?: NullableStringFieldUpdateOperationsInput | string | null
    tickets_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AllEventsUncheckedUpdateManyWithoutUserInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_time?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    venue_name?: NullableStringFieldUpdateOperationsInput | string | null
    venue_address?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    is_online_event?: NullableStringFieldUpdateOperationsInput | string | null
    tickets_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    data_source?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}