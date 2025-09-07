/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Elder
 *
 */
export type Elder = $Result.DefaultSelection<Prisma.$ElderPayload>;
/**
 * Model Caregiver
 *
 */
export type Caregiver = $Result.DefaultSelection<Prisma.$CaregiverPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const GenderEnum: {
    MALE: 'MALE';
    FEMALE: 'FEMALE';
    NONE: 'NONE';
  };

  export type GenderEnum = (typeof GenderEnum)[keyof typeof GenderEnum];

  export const RoleEnum: {
    ADMIN: 'ADMIN';
    ELDER: 'ELDER';
    CAREGIVER: 'CAREGIVER';
  };

  export type RoleEnum = (typeof RoleEnum)[keyof typeof RoleEnum];
}

export type GenderEnum = $Enums.GenderEnum;

export const GenderEnum: typeof $Enums.GenderEnum;

export type RoleEnum = $Enums.RoleEnum;

export const RoleEnum: typeof $Enums.RoleEnum;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elder`: Exposes CRUD operations for the **Elder** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Elders
   * const elders = await prisma.elder.findMany()
   * ```
   */
  get elder(): Prisma.ElderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caregiver`: Exposes CRUD operations for the **Caregiver** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Caregivers
   * const caregivers = await prisma.caregiver.findMany()
   * ```
   */
  get caregiver(): Prisma.CaregiverDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
    ? 'Please either choose `select` or `omit`.'
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Elder: 'Elder';
    Caregiver: 'Caregiver';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'user' | 'elder' | 'caregiver';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Elder: {
        payload: Prisma.$ElderPayload<ExtArgs>;
        fields: Prisma.ElderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ElderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ElderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload>;
          };
          findFirst: {
            args: Prisma.ElderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ElderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload>;
          };
          findMany: {
            args: Prisma.ElderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload>[];
          };
          create: {
            args: Prisma.ElderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload>;
          };
          createMany: {
            args: Prisma.ElderCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ElderCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload>[];
          };
          delete: {
            args: Prisma.ElderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload>;
          };
          update: {
            args: Prisma.ElderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload>;
          };
          deleteMany: {
            args: Prisma.ElderDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ElderUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ElderUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload>[];
          };
          upsert: {
            args: Prisma.ElderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ElderPayload>;
          };
          aggregate: {
            args: Prisma.ElderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateElder>;
          };
          groupBy: {
            args: Prisma.ElderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ElderGroupByOutputType>[];
          };
          count: {
            args: Prisma.ElderCountArgs<ExtArgs>;
            result: $Utils.Optional<ElderCountAggregateOutputType> | number;
          };
        };
      };
      Caregiver: {
        payload: Prisma.$CaregiverPayload<ExtArgs>;
        fields: Prisma.CaregiverFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CaregiverFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CaregiverFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>;
          };
          findFirst: {
            args: Prisma.CaregiverFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CaregiverFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>;
          };
          findMany: {
            args: Prisma.CaregiverFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>[];
          };
          create: {
            args: Prisma.CaregiverCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>;
          };
          createMany: {
            args: Prisma.CaregiverCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CaregiverCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>[];
          };
          delete: {
            args: Prisma.CaregiverDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>;
          };
          update: {
            args: Prisma.CaregiverUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>;
          };
          deleteMany: {
            args: Prisma.CaregiverDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CaregiverUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CaregiverUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>[];
          };
          upsert: {
            args: Prisma.CaregiverUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>;
          };
          aggregate: {
            args: Prisma.CaregiverAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCaregiver>;
          };
          groupBy: {
            args: Prisma.CaregiverGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CaregiverGroupByOutputType>[];
          };
          count: {
            args: Prisma.CaregiverCountArgs<ExtArgs>;
            result: $Utils.Optional<CaregiverCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    elder?: ElderOmit;
    caregiver?: CaregiverOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    nationalityCode: string | null;
    mobileNumber: string | null;
    email: string | null;
    password: string | null;
    gender: $Enums.GenderEnum | null;
    role: $Enums.RoleEnum | null;
    dateOfBirth: Date | null;
    enabled: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    nationalityCode: string | null;
    mobileNumber: string | null;
    email: string | null;
    password: string | null;
    gender: $Enums.GenderEnum | null;
    role: $Enums.RoleEnum | null;
    dateOfBirth: Date | null;
    enabled: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    avatar: number;
    nationalityCode: number;
    mobileNumber: number;
    email: number;
    password: number;
    gender: number;
    role: number;
    dateOfBirth: number;
    enabled: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    avatar?: true;
    nationalityCode?: true;
    mobileNumber?: true;
    email?: true;
    password?: true;
    gender?: true;
    role?: true;
    dateOfBirth?: true;
    enabled?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    avatar?: true;
    nationalityCode?: true;
    mobileNumber?: true;
    email?: true;
    password?: true;
    gender?: true;
    role?: true;
    dateOfBirth?: true;
    enabled?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    avatar?: true;
    nationalityCode?: true;
    mobileNumber?: true;
    email?: true;
    password?: true;
    gender?: true;
    role?: true;
    dateOfBirth?: true;
    enabled?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    nationalityCode: string | null;
    mobileNumber: string | null;
    email: string | null;
    password: string | null;
    gender: $Enums.GenderEnum;
    role: $Enums.RoleEnum;
    dateOfBirth: Date | null;
    enabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      avatar?: boolean;
      nationalityCode?: boolean;
      mobileNumber?: boolean;
      email?: boolean;
      password?: boolean;
      gender?: boolean;
      role?: boolean;
      dateOfBirth?: boolean;
      enabled?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      caregiver?: boolean | User$caregiverArgs<ExtArgs>;
      elder?: boolean | User$elderArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      avatar?: boolean;
      nationalityCode?: boolean;
      mobileNumber?: boolean;
      email?: boolean;
      password?: boolean;
      gender?: boolean;
      role?: boolean;
      dateOfBirth?: boolean;
      enabled?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      avatar?: boolean;
      nationalityCode?: boolean;
      mobileNumber?: boolean;
      email?: boolean;
      password?: boolean;
      gender?: boolean;
      role?: boolean;
      dateOfBirth?: boolean;
      enabled?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    avatar?: boolean;
    nationalityCode?: boolean;
    mobileNumber?: boolean;
    email?: boolean;
    password?: boolean;
    gender?: boolean;
    role?: boolean;
    dateOfBirth?: boolean;
    enabled?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'firstName'
    | 'lastName'
    | 'avatar'
    | 'nationalityCode'
    | 'mobileNumber'
    | 'email'
    | 'password'
    | 'gender'
    | 'role'
    | 'dateOfBirth'
    | 'enabled'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    caregiver?: boolean | User$caregiverArgs<ExtArgs>;
    elder?: boolean | User$elderArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'User';
    objects: {
      caregiver: Prisma.$CaregiverPayload<ExtArgs> | null;
      elder: Prisma.$ElderPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        nationalityCode: string | null;
        mobileNumber: string | null;
        email: string | null;
        password: string | null;
        gender: $Enums.GenderEnum;
        role: $Enums.RoleEnum;
        dateOfBirth: Date | null;
        enabled: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    caregiver<T extends User$caregiverArgs<ExtArgs> = {}>(
      args?: Subset<T, User$caregiverArgs<ExtArgs>>
    ): Prisma__CaregiverClient<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    elder<T extends User$elderArgs<ExtArgs> = {}>(
      args?: Subset<T, User$elderArgs<ExtArgs>>
    ): Prisma__ElderClient<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly firstName: FieldRef<'User', 'String'>;
    readonly lastName: FieldRef<'User', 'String'>;
    readonly avatar: FieldRef<'User', 'String'>;
    readonly nationalityCode: FieldRef<'User', 'String'>;
    readonly mobileNumber: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly gender: FieldRef<'User', 'GenderEnum'>;
    readonly role: FieldRef<'User', 'RoleEnum'>;
    readonly dateOfBirth: FieldRef<'User', 'DateTime'>;
    readonly enabled: FieldRef<'User', 'Boolean'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.caregiver
   */
  export type User$caregiverArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    where?: CaregiverWhereInput;
  };

  /**
   * User.elder
   */
  export type User$elderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    where?: ElderWhereInput;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Elder
   */

  export type AggregateElder = {
    _count: ElderCountAggregateOutputType | null;
    _min: ElderMinAggregateOutputType | null;
    _max: ElderMaxAggregateOutputType | null;
  };

  export type ElderMinAggregateOutputType = {
    userId: string | null;
  };

  export type ElderMaxAggregateOutputType = {
    userId: string | null;
  };

  export type ElderCountAggregateOutputType = {
    userId: number;
    drugAllergy: number;
    disease: number;
    _all: number;
  };

  export type ElderMinAggregateInputType = {
    userId?: true;
  };

  export type ElderMaxAggregateInputType = {
    userId?: true;
  };

  export type ElderCountAggregateInputType = {
    userId?: true;
    drugAllergy?: true;
    disease?: true;
    _all?: true;
  };

  export type ElderAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Elder to aggregate.
     */
    where?: ElderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Elders to fetch.
     */
    orderBy?: ElderOrderByWithRelationInput | ElderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ElderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Elders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Elders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Elders
     **/
    _count?: true | ElderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ElderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ElderMaxAggregateInputType;
  };

  export type GetElderAggregateType<T extends ElderAggregateArgs> = {
    [P in keyof T & keyof AggregateElder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElder[P]>
      : GetScalarType<T[P], AggregateElder[P]>;
  };

  export type ElderGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ElderWhereInput;
    orderBy?:
      | ElderOrderByWithAggregationInput
      | ElderOrderByWithAggregationInput[];
    by: ElderScalarFieldEnum[] | ElderScalarFieldEnum;
    having?: ElderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ElderCountAggregateInputType | true;
    _min?: ElderMinAggregateInputType;
    _max?: ElderMaxAggregateInputType;
  };

  export type ElderGroupByOutputType = {
    userId: string;
    drugAllergy: string[];
    disease: string[];
    _count: ElderCountAggregateOutputType | null;
    _min: ElderMinAggregateOutputType | null;
    _max: ElderMaxAggregateOutputType | null;
  };

  type GetElderGroupByPayload<T extends ElderGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ElderGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ElderGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElderGroupByOutputType[P]>
            : GetScalarType<T[P], ElderGroupByOutputType[P]>;
        }
      >
    >;

  export type ElderSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      drugAllergy?: boolean;
      disease?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['elder']
  >;

  export type ElderSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      drugAllergy?: boolean;
      disease?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['elder']
  >;

  export type ElderSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      drugAllergy?: boolean;
      disease?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['elder']
  >;

  export type ElderSelectScalar = {
    userId?: boolean;
    drugAllergy?: boolean;
    disease?: boolean;
  };

  export type ElderOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'userId' | 'drugAllergy' | 'disease',
    ExtArgs['result']['elder']
  >;
  export type ElderInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ElderIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ElderIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ElderPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Elder';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        drugAllergy: string[];
        disease: string[];
      },
      ExtArgs['result']['elder']
    >;
    composites: {};
  };

  type ElderGetPayload<
    S extends boolean | null | undefined | ElderDefaultArgs
  > = $Result.GetResult<Prisma.$ElderPayload, S>;

  type ElderCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<ElderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ElderCountAggregateInputType | true;
  };

  export interface ElderDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Elder'];
      meta: { name: 'Elder' };
    };
    /**
     * Find zero or one Elder that matches the filter.
     * @param {ElderFindUniqueArgs} args - Arguments to find a Elder
     * @example
     * // Get one Elder
     * const elder = await prisma.elder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ElderFindUniqueArgs>(
      args: SelectSubset<T, ElderFindUniqueArgs<ExtArgs>>
    ): Prisma__ElderClient<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Elder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ElderFindUniqueOrThrowArgs} args - Arguments to find a Elder
     * @example
     * // Get one Elder
     * const elder = await prisma.elder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ElderFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ElderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ElderClient<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Elder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElderFindFirstArgs} args - Arguments to find a Elder
     * @example
     * // Get one Elder
     * const elder = await prisma.elder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ElderFindFirstArgs>(
      args?: SelectSubset<T, ElderFindFirstArgs<ExtArgs>>
    ): Prisma__ElderClient<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Elder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElderFindFirstOrThrowArgs} args - Arguments to find a Elder
     * @example
     * // Get one Elder
     * const elder = await prisma.elder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ElderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ElderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ElderClient<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Elders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elders
     * const elders = await prisma.elder.findMany()
     *
     * // Get first 10 Elders
     * const elders = await prisma.elder.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const elderWithUserIdOnly = await prisma.elder.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends ElderFindManyArgs>(
      args?: SelectSubset<T, ElderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Elder.
     * @param {ElderCreateArgs} args - Arguments to create a Elder.
     * @example
     * // Create one Elder
     * const Elder = await prisma.elder.create({
     *   data: {
     *     // ... data to create a Elder
     *   }
     * })
     *
     */
    create<T extends ElderCreateArgs>(
      args: SelectSubset<T, ElderCreateArgs<ExtArgs>>
    ): Prisma__ElderClient<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Elders.
     * @param {ElderCreateManyArgs} args - Arguments to create many Elders.
     * @example
     * // Create many Elders
     * const elder = await prisma.elder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ElderCreateManyArgs>(
      args?: SelectSubset<T, ElderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Elders and returns the data saved in the database.
     * @param {ElderCreateManyAndReturnArgs} args - Arguments to create many Elders.
     * @example
     * // Create many Elders
     * const elder = await prisma.elder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Elders and only return the `userId`
     * const elderWithUserIdOnly = await prisma.elder.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ElderCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ElderCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Elder.
     * @param {ElderDeleteArgs} args - Arguments to delete one Elder.
     * @example
     * // Delete one Elder
     * const Elder = await prisma.elder.delete({
     *   where: {
     *     // ... filter to delete one Elder
     *   }
     * })
     *
     */
    delete<T extends ElderDeleteArgs>(
      args: SelectSubset<T, ElderDeleteArgs<ExtArgs>>
    ): Prisma__ElderClient<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Elder.
     * @param {ElderUpdateArgs} args - Arguments to update one Elder.
     * @example
     * // Update one Elder
     * const elder = await prisma.elder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ElderUpdateArgs>(
      args: SelectSubset<T, ElderUpdateArgs<ExtArgs>>
    ): Prisma__ElderClient<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Elders.
     * @param {ElderDeleteManyArgs} args - Arguments to filter Elders to delete.
     * @example
     * // Delete a few Elders
     * const { count } = await prisma.elder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ElderDeleteManyArgs>(
      args?: SelectSubset<T, ElderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Elders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elders
     * const elder = await prisma.elder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ElderUpdateManyArgs>(
      args: SelectSubset<T, ElderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Elders and returns the data updated in the database.
     * @param {ElderUpdateManyAndReturnArgs} args - Arguments to update many Elders.
     * @example
     * // Update many Elders
     * const elder = await prisma.elder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Elders and only return the `userId`
     * const elderWithUserIdOnly = await prisma.elder.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends ElderUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ElderUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Elder.
     * @param {ElderUpsertArgs} args - Arguments to update or create a Elder.
     * @example
     * // Update or create a Elder
     * const elder = await prisma.elder.upsert({
     *   create: {
     *     // ... data to create a Elder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Elder we want to update
     *   }
     * })
     */
    upsert<T extends ElderUpsertArgs>(
      args: SelectSubset<T, ElderUpsertArgs<ExtArgs>>
    ): Prisma__ElderClient<
      $Result.GetResult<
        Prisma.$ElderPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Elders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElderCountArgs} args - Arguments to filter Elders to count.
     * @example
     * // Count the number of Elders
     * const count = await prisma.elder.count({
     *   where: {
     *     // ... the filter for the Elders we want to count
     *   }
     * })
     **/
    count<T extends ElderCountArgs>(
      args?: Subset<T, ElderCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Elder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElderAggregateArgs>(
      args: Subset<T, ElderAggregateArgs>
    ): Prisma.PrismaPromise<GetElderAggregateType<T>>;

    /**
     * Group by Elder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElderGroupByArgs} args - Group by arguments.
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
      T extends ElderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElderGroupByArgs['orderBy'] }
        : { orderBy?: ElderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, ElderGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetElderGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Elder model
     */
    readonly fields: ElderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Elder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Elder model
   */
  interface ElderFieldRefs {
    readonly userId: FieldRef<'Elder', 'String'>;
    readonly drugAllergy: FieldRef<'Elder', 'String[]'>;
    readonly disease: FieldRef<'Elder', 'String[]'>;
  }

  // Custom InputTypes
  /**
   * Elder findUnique
   */
  export type ElderFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    /**
     * Filter, which Elder to fetch.
     */
    where: ElderWhereUniqueInput;
  };

  /**
   * Elder findUniqueOrThrow
   */
  export type ElderFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    /**
     * Filter, which Elder to fetch.
     */
    where: ElderWhereUniqueInput;
  };

  /**
   * Elder findFirst
   */
  export type ElderFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    /**
     * Filter, which Elder to fetch.
     */
    where?: ElderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Elders to fetch.
     */
    orderBy?: ElderOrderByWithRelationInput | ElderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Elders.
     */
    cursor?: ElderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Elders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Elders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Elders.
     */
    distinct?: ElderScalarFieldEnum | ElderScalarFieldEnum[];
  };

  /**
   * Elder findFirstOrThrow
   */
  export type ElderFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    /**
     * Filter, which Elder to fetch.
     */
    where?: ElderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Elders to fetch.
     */
    orderBy?: ElderOrderByWithRelationInput | ElderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Elders.
     */
    cursor?: ElderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Elders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Elders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Elders.
     */
    distinct?: ElderScalarFieldEnum | ElderScalarFieldEnum[];
  };

  /**
   * Elder findMany
   */
  export type ElderFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    /**
     * Filter, which Elders to fetch.
     */
    where?: ElderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Elders to fetch.
     */
    orderBy?: ElderOrderByWithRelationInput | ElderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Elders.
     */
    cursor?: ElderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Elders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Elders.
     */
    skip?: number;
    distinct?: ElderScalarFieldEnum | ElderScalarFieldEnum[];
  };

  /**
   * Elder create
   */
  export type ElderCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    /**
     * The data needed to create a Elder.
     */
    data: XOR<ElderCreateInput, ElderUncheckedCreateInput>;
  };

  /**
   * Elder createMany
   */
  export type ElderCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Elders.
     */
    data: ElderCreateManyInput | ElderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Elder createManyAndReturn
   */
  export type ElderCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * The data used to create many Elders.
     */
    data: ElderCreateManyInput | ElderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Elder update
   */
  export type ElderUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    /**
     * The data needed to update a Elder.
     */
    data: XOR<ElderUpdateInput, ElderUncheckedUpdateInput>;
    /**
     * Choose, which Elder to update.
     */
    where: ElderWhereUniqueInput;
  };

  /**
   * Elder updateMany
   */
  export type ElderUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Elders.
     */
    data: XOR<ElderUpdateManyMutationInput, ElderUncheckedUpdateManyInput>;
    /**
     * Filter which Elders to update
     */
    where?: ElderWhereInput;
    /**
     * Limit how many Elders to update.
     */
    limit?: number;
  };

  /**
   * Elder updateManyAndReturn
   */
  export type ElderUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * The data used to update Elders.
     */
    data: XOR<ElderUpdateManyMutationInput, ElderUncheckedUpdateManyInput>;
    /**
     * Filter which Elders to update
     */
    where?: ElderWhereInput;
    /**
     * Limit how many Elders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Elder upsert
   */
  export type ElderUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    /**
     * The filter to search for the Elder to update in case it exists.
     */
    where: ElderWhereUniqueInput;
    /**
     * In case the Elder found by the `where` argument doesn't exist, create a new Elder with this data.
     */
    create: XOR<ElderCreateInput, ElderUncheckedCreateInput>;
    /**
     * In case the Elder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElderUpdateInput, ElderUncheckedUpdateInput>;
  };

  /**
   * Elder delete
   */
  export type ElderDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
    /**
     * Filter which Elder to delete.
     */
    where: ElderWhereUniqueInput;
  };

  /**
   * Elder deleteMany
   */
  export type ElderDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Elders to delete
     */
    where?: ElderWhereInput;
    /**
     * Limit how many Elders to delete.
     */
    limit?: number;
  };

  /**
   * Elder without action
   */
  export type ElderDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Elder
     */
    select?: ElderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Elder
     */
    omit?: ElderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElderInclude<ExtArgs> | null;
  };

  /**
   * Model Caregiver
   */

  export type AggregateCaregiver = {
    _count: CaregiverCountAggregateOutputType | null;
    _min: CaregiverMinAggregateOutputType | null;
    _max: CaregiverMaxAggregateOutputType | null;
  };

  export type CaregiverMinAggregateOutputType = {
    userId: string | null;
    MSN: string | null;
  };

  export type CaregiverMaxAggregateOutputType = {
    userId: string | null;
    MSN: string | null;
  };

  export type CaregiverCountAggregateOutputType = {
    userId: number;
    MSN: number;
    _all: number;
  };

  export type CaregiverMinAggregateInputType = {
    userId?: true;
    MSN?: true;
  };

  export type CaregiverMaxAggregateInputType = {
    userId?: true;
    MSN?: true;
  };

  export type CaregiverCountAggregateInputType = {
    userId?: true;
    MSN?: true;
    _all?: true;
  };

  export type CaregiverAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Caregiver to aggregate.
     */
    where?: CaregiverWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Caregivers to fetch.
     */
    orderBy?:
      | CaregiverOrderByWithRelationInput
      | CaregiverOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CaregiverWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Caregivers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Caregivers
     **/
    _count?: true | CaregiverCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CaregiverMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CaregiverMaxAggregateInputType;
  };

  export type GetCaregiverAggregateType<T extends CaregiverAggregateArgs> = {
    [P in keyof T & keyof AggregateCaregiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaregiver[P]>
      : GetScalarType<T[P], AggregateCaregiver[P]>;
  };

  export type CaregiverGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CaregiverWhereInput;
    orderBy?:
      | CaregiverOrderByWithAggregationInput
      | CaregiverOrderByWithAggregationInput[];
    by: CaregiverScalarFieldEnum[] | CaregiverScalarFieldEnum;
    having?: CaregiverScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CaregiverCountAggregateInputType | true;
    _min?: CaregiverMinAggregateInputType;
    _max?: CaregiverMaxAggregateInputType;
  };

  export type CaregiverGroupByOutputType = {
    userId: string;
    MSN: string;
    _count: CaregiverCountAggregateOutputType | null;
    _min: CaregiverMinAggregateOutputType | null;
    _max: CaregiverMaxAggregateOutputType | null;
  };

  type GetCaregiverGroupByPayload<T extends CaregiverGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CaregiverGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CaregiverGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaregiverGroupByOutputType[P]>
            : GetScalarType<T[P], CaregiverGroupByOutputType[P]>;
        }
      >
    >;

  export type CaregiverSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      MSN?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['caregiver']
  >;

  export type CaregiverSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      MSN?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['caregiver']
  >;

  export type CaregiverSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      MSN?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['caregiver']
  >;

  export type CaregiverSelectScalar = {
    userId?: boolean;
    MSN?: boolean;
  };

  export type CaregiverOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<'userId' | 'MSN', ExtArgs['result']['caregiver']>;
  export type CaregiverInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type CaregiverIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type CaregiverIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $CaregiverPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Caregiver';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        MSN: string;
      },
      ExtArgs['result']['caregiver']
    >;
    composites: {};
  };

  type CaregiverGetPayload<
    S extends boolean | null | undefined | CaregiverDefaultArgs
  > = $Result.GetResult<Prisma.$CaregiverPayload, S>;

  type CaregiverCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    CaregiverFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CaregiverCountAggregateInputType | true;
  };

  export interface CaregiverDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Caregiver'];
      meta: { name: 'Caregiver' };
    };
    /**
     * Find zero or one Caregiver that matches the filter.
     * @param {CaregiverFindUniqueArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaregiverFindUniqueArgs>(
      args: SelectSubset<T, CaregiverFindUniqueArgs<ExtArgs>>
    ): Prisma__CaregiverClient<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Caregiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaregiverFindUniqueOrThrowArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaregiverFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CaregiverFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CaregiverClient<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Caregiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindFirstArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaregiverFindFirstArgs>(
      args?: SelectSubset<T, CaregiverFindFirstArgs<ExtArgs>>
    ): Prisma__CaregiverClient<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Caregiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindFirstOrThrowArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaregiverFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CaregiverFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CaregiverClient<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Caregivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caregivers
     * const caregivers = await prisma.caregiver.findMany()
     *
     * // Get first 10 Caregivers
     * const caregivers = await prisma.caregiver.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const caregiverWithUserIdOnly = await prisma.caregiver.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends CaregiverFindManyArgs>(
      args?: SelectSubset<T, CaregiverFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Caregiver.
     * @param {CaregiverCreateArgs} args - Arguments to create a Caregiver.
     * @example
     * // Create one Caregiver
     * const Caregiver = await prisma.caregiver.create({
     *   data: {
     *     // ... data to create a Caregiver
     *   }
     * })
     *
     */
    create<T extends CaregiverCreateArgs>(
      args: SelectSubset<T, CaregiverCreateArgs<ExtArgs>>
    ): Prisma__CaregiverClient<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Caregivers.
     * @param {CaregiverCreateManyArgs} args - Arguments to create many Caregivers.
     * @example
     * // Create many Caregivers
     * const caregiver = await prisma.caregiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CaregiverCreateManyArgs>(
      args?: SelectSubset<T, CaregiverCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Caregivers and returns the data saved in the database.
     * @param {CaregiverCreateManyAndReturnArgs} args - Arguments to create many Caregivers.
     * @example
     * // Create many Caregivers
     * const caregiver = await prisma.caregiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Caregivers and only return the `userId`
     * const caregiverWithUserIdOnly = await prisma.caregiver.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CaregiverCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CaregiverCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Caregiver.
     * @param {CaregiverDeleteArgs} args - Arguments to delete one Caregiver.
     * @example
     * // Delete one Caregiver
     * const Caregiver = await prisma.caregiver.delete({
     *   where: {
     *     // ... filter to delete one Caregiver
     *   }
     * })
     *
     */
    delete<T extends CaregiverDeleteArgs>(
      args: SelectSubset<T, CaregiverDeleteArgs<ExtArgs>>
    ): Prisma__CaregiverClient<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Caregiver.
     * @param {CaregiverUpdateArgs} args - Arguments to update one Caregiver.
     * @example
     * // Update one Caregiver
     * const caregiver = await prisma.caregiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CaregiverUpdateArgs>(
      args: SelectSubset<T, CaregiverUpdateArgs<ExtArgs>>
    ): Prisma__CaregiverClient<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Caregivers.
     * @param {CaregiverDeleteManyArgs} args - Arguments to filter Caregivers to delete.
     * @example
     * // Delete a few Caregivers
     * const { count } = await prisma.caregiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CaregiverDeleteManyArgs>(
      args?: SelectSubset<T, CaregiverDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caregivers
     * const caregiver = await prisma.caregiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CaregiverUpdateManyArgs>(
      args: SelectSubset<T, CaregiverUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Caregivers and returns the data updated in the database.
     * @param {CaregiverUpdateManyAndReturnArgs} args - Arguments to update many Caregivers.
     * @example
     * // Update many Caregivers
     * const caregiver = await prisma.caregiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Caregivers and only return the `userId`
     * const caregiverWithUserIdOnly = await prisma.caregiver.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends CaregiverUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CaregiverUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Caregiver.
     * @param {CaregiverUpsertArgs} args - Arguments to update or create a Caregiver.
     * @example
     * // Update or create a Caregiver
     * const caregiver = await prisma.caregiver.upsert({
     *   create: {
     *     // ... data to create a Caregiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caregiver we want to update
     *   }
     * })
     */
    upsert<T extends CaregiverUpsertArgs>(
      args: SelectSubset<T, CaregiverUpsertArgs<ExtArgs>>
    ): Prisma__CaregiverClient<
      $Result.GetResult<
        Prisma.$CaregiverPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverCountArgs} args - Arguments to filter Caregivers to count.
     * @example
     * // Count the number of Caregivers
     * const count = await prisma.caregiver.count({
     *   where: {
     *     // ... the filter for the Caregivers we want to count
     *   }
     * })
     **/
    count<T extends CaregiverCountArgs>(
      args?: Subset<T, CaregiverCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaregiverCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Caregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaregiverAggregateArgs>(
      args: Subset<T, CaregiverAggregateArgs>
    ): Prisma.PrismaPromise<GetCaregiverAggregateType<T>>;

    /**
     * Group by Caregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverGroupByArgs} args - Group by arguments.
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
      T extends CaregiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaregiverGroupByArgs['orderBy'] }
        : { orderBy?: CaregiverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, CaregiverGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetCaregiverGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Caregiver model
     */
    readonly fields: CaregiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caregiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaregiverClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Caregiver model
   */
  interface CaregiverFieldRefs {
    readonly userId: FieldRef<'Caregiver', 'String'>;
    readonly MSN: FieldRef<'Caregiver', 'String'>;
  }

  // Custom InputTypes
  /**
   * Caregiver findUnique
   */
  export type CaregiverFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    /**
     * Filter, which Caregiver to fetch.
     */
    where: CaregiverWhereUniqueInput;
  };

  /**
   * Caregiver findUniqueOrThrow
   */
  export type CaregiverFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    /**
     * Filter, which Caregiver to fetch.
     */
    where: CaregiverWhereUniqueInput;
  };

  /**
   * Caregiver findFirst
   */
  export type CaregiverFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    /**
     * Filter, which Caregiver to fetch.
     */
    where?: CaregiverWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Caregivers to fetch.
     */
    orderBy?:
      | CaregiverOrderByWithRelationInput
      | CaregiverOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Caregivers.
     */
    cursor?: CaregiverWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Caregivers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Caregivers.
     */
    distinct?: CaregiverScalarFieldEnum | CaregiverScalarFieldEnum[];
  };

  /**
   * Caregiver findFirstOrThrow
   */
  export type CaregiverFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    /**
     * Filter, which Caregiver to fetch.
     */
    where?: CaregiverWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Caregivers to fetch.
     */
    orderBy?:
      | CaregiverOrderByWithRelationInput
      | CaregiverOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Caregivers.
     */
    cursor?: CaregiverWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Caregivers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Caregivers.
     */
    distinct?: CaregiverScalarFieldEnum | CaregiverScalarFieldEnum[];
  };

  /**
   * Caregiver findMany
   */
  export type CaregiverFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    /**
     * Filter, which Caregivers to fetch.
     */
    where?: CaregiverWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Caregivers to fetch.
     */
    orderBy?:
      | CaregiverOrderByWithRelationInput
      | CaregiverOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Caregivers.
     */
    cursor?: CaregiverWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Caregivers.
     */
    skip?: number;
    distinct?: CaregiverScalarFieldEnum | CaregiverScalarFieldEnum[];
  };

  /**
   * Caregiver create
   */
  export type CaregiverCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    /**
     * The data needed to create a Caregiver.
     */
    data: XOR<CaregiverCreateInput, CaregiverUncheckedCreateInput>;
  };

  /**
   * Caregiver createMany
   */
  export type CaregiverCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Caregivers.
     */
    data: CaregiverCreateManyInput | CaregiverCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Caregiver createManyAndReturn
   */
  export type CaregiverCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * The data used to create many Caregivers.
     */
    data: CaregiverCreateManyInput | CaregiverCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Caregiver update
   */
  export type CaregiverUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    /**
     * The data needed to update a Caregiver.
     */
    data: XOR<CaregiverUpdateInput, CaregiverUncheckedUpdateInput>;
    /**
     * Choose, which Caregiver to update.
     */
    where: CaregiverWhereUniqueInput;
  };

  /**
   * Caregiver updateMany
   */
  export type CaregiverUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Caregivers.
     */
    data: XOR<
      CaregiverUpdateManyMutationInput,
      CaregiverUncheckedUpdateManyInput
    >;
    /**
     * Filter which Caregivers to update
     */
    where?: CaregiverWhereInput;
    /**
     * Limit how many Caregivers to update.
     */
    limit?: number;
  };

  /**
   * Caregiver updateManyAndReturn
   */
  export type CaregiverUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * The data used to update Caregivers.
     */
    data: XOR<
      CaregiverUpdateManyMutationInput,
      CaregiverUncheckedUpdateManyInput
    >;
    /**
     * Filter which Caregivers to update
     */
    where?: CaregiverWhereInput;
    /**
     * Limit how many Caregivers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Caregiver upsert
   */
  export type CaregiverUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    /**
     * The filter to search for the Caregiver to update in case it exists.
     */
    where: CaregiverWhereUniqueInput;
    /**
     * In case the Caregiver found by the `where` argument doesn't exist, create a new Caregiver with this data.
     */
    create: XOR<CaregiverCreateInput, CaregiverUncheckedCreateInput>;
    /**
     * In case the Caregiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaregiverUpdateInput, CaregiverUncheckedUpdateInput>;
  };

  /**
   * Caregiver delete
   */
  export type CaregiverDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
    /**
     * Filter which Caregiver to delete.
     */
    where: CaregiverWhereUniqueInput;
  };

  /**
   * Caregiver deleteMany
   */
  export type CaregiverDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Caregivers to delete
     */
    where?: CaregiverWhereInput;
    /**
     * Limit how many Caregivers to delete.
     */
    limit?: number;
  };

  /**
   * Caregiver without action
   */
  export type CaregiverDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    firstName: 'firstName';
    lastName: 'lastName';
    avatar: 'avatar';
    nationalityCode: 'nationalityCode';
    mobileNumber: 'mobileNumber';
    email: 'email';
    password: 'password';
    gender: 'gender';
    role: 'role';
    dateOfBirth: 'dateOfBirth';
    enabled: 'enabled';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ElderScalarFieldEnum: {
    userId: 'userId';
    drugAllergy: 'drugAllergy';
    disease: 'disease';
  };

  export type ElderScalarFieldEnum =
    (typeof ElderScalarFieldEnum)[keyof typeof ElderScalarFieldEnum];

  export const CaregiverScalarFieldEnum: {
    userId: 'userId';
    MSN: 'MSN';
  };

  export type CaregiverScalarFieldEnum =
    (typeof CaregiverScalarFieldEnum)[keyof typeof CaregiverScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'GenderEnum'
   */
  export type EnumGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'GenderEnum'
  >;

  /**
   * Reference to a field of type 'GenderEnum[]'
   */
  export type ListEnumGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'GenderEnum[]'
  >;

  /**
   * Reference to a field of type 'RoleEnum'
   */
  export type EnumRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'RoleEnum'
  >;

  /**
   * Reference to a field of type 'RoleEnum[]'
   */
  export type ListEnumRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'RoleEnum[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    firstName?: StringNullableFilter<'User'> | string | null;
    lastName?: StringNullableFilter<'User'> | string | null;
    avatar?: StringNullableFilter<'User'> | string | null;
    nationalityCode?: StringNullableFilter<'User'> | string | null;
    mobileNumber?: StringNullableFilter<'User'> | string | null;
    email?: StringNullableFilter<'User'> | string | null;
    password?: StringNullableFilter<'User'> | string | null;
    gender?: EnumGenderEnumFilter<'User'> | $Enums.GenderEnum;
    role?: EnumRoleEnumFilter<'User'> | $Enums.RoleEnum;
    dateOfBirth?: DateTimeNullableFilter<'User'> | Date | string | null;
    enabled?: BoolFilter<'User'> | boolean;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    caregiver?: XOR<
      CaregiverNullableScalarRelationFilter,
      CaregiverWhereInput
    > | null;
    elder?: XOR<ElderNullableScalarRelationFilter, ElderWhereInput> | null;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    avatar?: SortOrderInput | SortOrder;
    nationalityCode?: SortOrderInput | SortOrder;
    mobileNumber?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    gender?: SortOrder;
    role?: SortOrder;
    dateOfBirth?: SortOrderInput | SortOrder;
    enabled?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    caregiver?: CaregiverOrderByWithRelationInput;
    elder?: ElderOrderByWithRelationInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      nationalityCode?: string;
      mobileNumber?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      firstName?: StringNullableFilter<'User'> | string | null;
      lastName?: StringNullableFilter<'User'> | string | null;
      avatar?: StringNullableFilter<'User'> | string | null;
      password?: StringNullableFilter<'User'> | string | null;
      gender?: EnumGenderEnumFilter<'User'> | $Enums.GenderEnum;
      role?: EnumRoleEnumFilter<'User'> | $Enums.RoleEnum;
      dateOfBirth?: DateTimeNullableFilter<'User'> | Date | string | null;
      enabled?: BoolFilter<'User'> | boolean;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      caregiver?: XOR<
        CaregiverNullableScalarRelationFilter,
        CaregiverWhereInput
      > | null;
      elder?: XOR<ElderNullableScalarRelationFilter, ElderWhereInput> | null;
    },
    'id' | 'nationalityCode' | 'mobileNumber' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    avatar?: SortOrderInput | SortOrder;
    nationalityCode?: SortOrderInput | SortOrder;
    mobileNumber?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    gender?: SortOrder;
    role?: SortOrder;
    dateOfBirth?: SortOrderInput | SortOrder;
    enabled?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    firstName?: StringNullableWithAggregatesFilter<'User'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'User'> | string | null;
    avatar?: StringNullableWithAggregatesFilter<'User'> | string | null;
    nationalityCode?:
      | StringNullableWithAggregatesFilter<'User'>
      | string
      | null;
    mobileNumber?: StringNullableWithAggregatesFilter<'User'> | string | null;
    email?: StringNullableWithAggregatesFilter<'User'> | string | null;
    password?: StringNullableWithAggregatesFilter<'User'> | string | null;
    gender?: EnumGenderEnumWithAggregatesFilter<'User'> | $Enums.GenderEnum;
    role?: EnumRoleEnumWithAggregatesFilter<'User'> | $Enums.RoleEnum;
    dateOfBirth?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    enabled?: BoolWithAggregatesFilter<'User'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type ElderWhereInput = {
    AND?: ElderWhereInput | ElderWhereInput[];
    OR?: ElderWhereInput[];
    NOT?: ElderWhereInput | ElderWhereInput[];
    userId?: StringFilter<'Elder'> | string;
    drugAllergy?: StringNullableListFilter<'Elder'>;
    disease?: StringNullableListFilter<'Elder'>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ElderOrderByWithRelationInput = {
    userId?: SortOrder;
    drugAllergy?: SortOrder;
    disease?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ElderWhereUniqueInput = Prisma.AtLeast<
    {
      userId?: string;
      AND?: ElderWhereInput | ElderWhereInput[];
      OR?: ElderWhereInput[];
      NOT?: ElderWhereInput | ElderWhereInput[];
      drugAllergy?: StringNullableListFilter<'Elder'>;
      disease?: StringNullableListFilter<'Elder'>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'userId'
  >;

  export type ElderOrderByWithAggregationInput = {
    userId?: SortOrder;
    drugAllergy?: SortOrder;
    disease?: SortOrder;
    _count?: ElderCountOrderByAggregateInput;
    _max?: ElderMaxOrderByAggregateInput;
    _min?: ElderMinOrderByAggregateInput;
  };

  export type ElderScalarWhereWithAggregatesInput = {
    AND?:
      | ElderScalarWhereWithAggregatesInput
      | ElderScalarWhereWithAggregatesInput[];
    OR?: ElderScalarWhereWithAggregatesInput[];
    NOT?:
      | ElderScalarWhereWithAggregatesInput
      | ElderScalarWhereWithAggregatesInput[];
    userId?: StringWithAggregatesFilter<'Elder'> | string;
    drugAllergy?: StringNullableListFilter<'Elder'>;
    disease?: StringNullableListFilter<'Elder'>;
  };

  export type CaregiverWhereInput = {
    AND?: CaregiverWhereInput | CaregiverWhereInput[];
    OR?: CaregiverWhereInput[];
    NOT?: CaregiverWhereInput | CaregiverWhereInput[];
    userId?: StringFilter<'Caregiver'> | string;
    MSN?: StringFilter<'Caregiver'> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type CaregiverOrderByWithRelationInput = {
    userId?: SortOrder;
    MSN?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type CaregiverWhereUniqueInput = Prisma.AtLeast<
    {
      userId?: string;
      MSN?: string;
      AND?: CaregiverWhereInput | CaregiverWhereInput[];
      OR?: CaregiverWhereInput[];
      NOT?: CaregiverWhereInput | CaregiverWhereInput[];
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'userId' | 'MSN'
  >;

  export type CaregiverOrderByWithAggregationInput = {
    userId?: SortOrder;
    MSN?: SortOrder;
    _count?: CaregiverCountOrderByAggregateInput;
    _max?: CaregiverMaxOrderByAggregateInput;
    _min?: CaregiverMinOrderByAggregateInput;
  };

  export type CaregiverScalarWhereWithAggregatesInput = {
    AND?:
      | CaregiverScalarWhereWithAggregatesInput
      | CaregiverScalarWhereWithAggregatesInput[];
    OR?: CaregiverScalarWhereWithAggregatesInput[];
    NOT?:
      | CaregiverScalarWhereWithAggregatesInput
      | CaregiverScalarWhereWithAggregatesInput[];
    userId?: StringWithAggregatesFilter<'Caregiver'> | string;
    MSN?: StringWithAggregatesFilter<'Caregiver'> | string;
  };

  export type UserCreateInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    avatar?: string | null;
    nationalityCode?: string | null;
    mobileNumber?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: $Enums.GenderEnum;
    role?: $Enums.RoleEnum;
    dateOfBirth?: Date | string | null;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caregiver?: CaregiverCreateNestedOneWithoutUserInput;
    elder?: ElderCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    avatar?: string | null;
    nationalityCode?: string | null;
    mobileNumber?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: $Enums.GenderEnum;
    role?: $Enums.RoleEnum;
    dateOfBirth?: Date | string | null;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caregiver?: CaregiverUncheckedCreateNestedOneWithoutUserInput;
    elder?: ElderUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    nationalityCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum;
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enabled?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiver?: CaregiverUpdateOneWithoutUserNestedInput;
    elder?: ElderUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    nationalityCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum;
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enabled?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiver?: CaregiverUncheckedUpdateOneWithoutUserNestedInput;
    elder?: ElderUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    avatar?: string | null;
    nationalityCode?: string | null;
    mobileNumber?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: $Enums.GenderEnum;
    role?: $Enums.RoleEnum;
    dateOfBirth?: Date | string | null;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    nationalityCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum;
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enabled?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    nationalityCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum;
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enabled?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ElderCreateInput = {
    drugAllergy?: ElderCreatedrugAllergyInput | string[];
    disease?: ElderCreatediseaseInput | string[];
    user: UserCreateNestedOneWithoutElderInput;
  };

  export type ElderUncheckedCreateInput = {
    userId: string;
    drugAllergy?: ElderCreatedrugAllergyInput | string[];
    disease?: ElderCreatediseaseInput | string[];
  };

  export type ElderUpdateInput = {
    drugAllergy?: ElderUpdatedrugAllergyInput | string[];
    disease?: ElderUpdatediseaseInput | string[];
    user?: UserUpdateOneRequiredWithoutElderNestedInput;
  };

  export type ElderUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    drugAllergy?: ElderUpdatedrugAllergyInput | string[];
    disease?: ElderUpdatediseaseInput | string[];
  };

  export type ElderCreateManyInput = {
    userId: string;
    drugAllergy?: ElderCreatedrugAllergyInput | string[];
    disease?: ElderCreatediseaseInput | string[];
  };

  export type ElderUpdateManyMutationInput = {
    drugAllergy?: ElderUpdatedrugAllergyInput | string[];
    disease?: ElderUpdatediseaseInput | string[];
  };

  export type ElderUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    drugAllergy?: ElderUpdatedrugAllergyInput | string[];
    disease?: ElderUpdatediseaseInput | string[];
  };

  export type CaregiverCreateInput = {
    MSN: string;
    user: UserCreateNestedOneWithoutCaregiverInput;
  };

  export type CaregiverUncheckedCreateInput = {
    userId: string;
    MSN: string;
  };

  export type CaregiverUpdateInput = {
    MSN?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutCaregiverNestedInput;
  };

  export type CaregiverUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    MSN?: StringFieldUpdateOperationsInput | string;
  };

  export type CaregiverCreateManyInput = {
    userId: string;
    MSN: string;
  };

  export type CaregiverUpdateManyMutationInput = {
    MSN?: StringFieldUpdateOperationsInput | string;
  };

  export type CaregiverUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    MSN?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type EnumGenderEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>;
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>;
    not?: NestedEnumGenderEnumFilter<$PrismaModel> | $Enums.GenderEnum;
  };

  export type EnumRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>;
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleEnumFilter<$PrismaModel> | $Enums.RoleEnum;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CaregiverNullableScalarRelationFilter = {
    is?: CaregiverWhereInput | null;
    isNot?: CaregiverWhereInput | null;
  };

  export type ElderNullableScalarRelationFilter = {
    is?: ElderWhereInput | null;
    isNot?: ElderWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    avatar?: SortOrder;
    nationalityCode?: SortOrder;
    mobileNumber?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    gender?: SortOrder;
    role?: SortOrder;
    dateOfBirth?: SortOrder;
    enabled?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    avatar?: SortOrder;
    nationalityCode?: SortOrder;
    mobileNumber?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    gender?: SortOrder;
    role?: SortOrder;
    dateOfBirth?: SortOrder;
    enabled?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    avatar?: SortOrder;
    nationalityCode?: SortOrder;
    mobileNumber?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    gender?: SortOrder;
    role?: SortOrder;
    dateOfBirth?: SortOrder;
    enabled?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumGenderEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>;
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumGenderEnumWithAggregatesFilter<$PrismaModel>
      | $Enums.GenderEnum;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumGenderEnumFilter<$PrismaModel>;
    _max?: NestedEnumGenderEnumFilter<$PrismaModel>;
  };

  export type EnumRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>;
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel>
      | $Enums.RoleEnum;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleEnumFilter<$PrismaModel>;
    _max?: NestedEnumRoleEnumFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ElderCountOrderByAggregateInput = {
    userId?: SortOrder;
    drugAllergy?: SortOrder;
    disease?: SortOrder;
  };

  export type ElderMaxOrderByAggregateInput = {
    userId?: SortOrder;
  };

  export type ElderMinOrderByAggregateInput = {
    userId?: SortOrder;
  };

  export type CaregiverCountOrderByAggregateInput = {
    userId?: SortOrder;
    MSN?: SortOrder;
  };

  export type CaregiverMaxOrderByAggregateInput = {
    userId?: SortOrder;
    MSN?: SortOrder;
  };

  export type CaregiverMinOrderByAggregateInput = {
    userId?: SortOrder;
    MSN?: SortOrder;
  };

  export type CaregiverCreateNestedOneWithoutUserInput = {
    create?: XOR<
      CaregiverCreateWithoutUserInput,
      CaregiverUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: CaregiverCreateOrConnectWithoutUserInput;
    connect?: CaregiverWhereUniqueInput;
  };

  export type ElderCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ElderCreateWithoutUserInput,
      ElderUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ElderCreateOrConnectWithoutUserInput;
    connect?: ElderWhereUniqueInput;
  };

  export type CaregiverUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      CaregiverCreateWithoutUserInput,
      CaregiverUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: CaregiverCreateOrConnectWithoutUserInput;
    connect?: CaregiverWhereUniqueInput;
  };

  export type ElderUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ElderCreateWithoutUserInput,
      ElderUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ElderCreateOrConnectWithoutUserInput;
    connect?: ElderWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type EnumGenderEnumFieldUpdateOperationsInput = {
    set?: $Enums.GenderEnum;
  };

  export type EnumRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.RoleEnum;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CaregiverUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      CaregiverCreateWithoutUserInput,
      CaregiverUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: CaregiverCreateOrConnectWithoutUserInput;
    upsert?: CaregiverUpsertWithoutUserInput;
    disconnect?: CaregiverWhereInput | boolean;
    delete?: CaregiverWhereInput | boolean;
    connect?: CaregiverWhereUniqueInput;
    update?: XOR<
      XOR<
        CaregiverUpdateToOneWithWhereWithoutUserInput,
        CaregiverUpdateWithoutUserInput
      >,
      CaregiverUncheckedUpdateWithoutUserInput
    >;
  };

  export type ElderUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ElderCreateWithoutUserInput,
      ElderUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ElderCreateOrConnectWithoutUserInput;
    upsert?: ElderUpsertWithoutUserInput;
    disconnect?: ElderWhereInput | boolean;
    delete?: ElderWhereInput | boolean;
    connect?: ElderWhereUniqueInput;
    update?: XOR<
      XOR<
        ElderUpdateToOneWithWhereWithoutUserInput,
        ElderUpdateWithoutUserInput
      >,
      ElderUncheckedUpdateWithoutUserInput
    >;
  };

  export type CaregiverUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      CaregiverCreateWithoutUserInput,
      CaregiverUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: CaregiverCreateOrConnectWithoutUserInput;
    upsert?: CaregiverUpsertWithoutUserInput;
    disconnect?: CaregiverWhereInput | boolean;
    delete?: CaregiverWhereInput | boolean;
    connect?: CaregiverWhereUniqueInput;
    update?: XOR<
      XOR<
        CaregiverUpdateToOneWithWhereWithoutUserInput,
        CaregiverUpdateWithoutUserInput
      >,
      CaregiverUncheckedUpdateWithoutUserInput
    >;
  };

  export type ElderUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ElderCreateWithoutUserInput,
      ElderUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ElderCreateOrConnectWithoutUserInput;
    upsert?: ElderUpsertWithoutUserInput;
    disconnect?: ElderWhereInput | boolean;
    delete?: ElderWhereInput | boolean;
    connect?: ElderWhereUniqueInput;
    update?: XOR<
      XOR<
        ElderUpdateToOneWithWhereWithoutUserInput,
        ElderUpdateWithoutUserInput
      >,
      ElderUncheckedUpdateWithoutUserInput
    >;
  };

  export type ElderCreatedrugAllergyInput = {
    set: string[];
  };

  export type ElderCreatediseaseInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutElderInput = {
    create?: XOR<
      UserCreateWithoutElderInput,
      UserUncheckedCreateWithoutElderInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutElderInput;
    connect?: UserWhereUniqueInput;
  };

  export type ElderUpdatedrugAllergyInput = {
    set?: string[];
    push?: string | string[];
  };

  export type ElderUpdatediseaseInput = {
    set?: string[];
    push?: string | string[];
  };

  export type UserUpdateOneRequiredWithoutElderNestedInput = {
    create?: XOR<
      UserCreateWithoutElderInput,
      UserUncheckedCreateWithoutElderInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutElderInput;
    upsert?: UserUpsertWithoutElderInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutElderInput,
        UserUpdateWithoutElderInput
      >,
      UserUncheckedUpdateWithoutElderInput
    >;
  };

  export type UserCreateNestedOneWithoutCaregiverInput = {
    create?: XOR<
      UserCreateWithoutCaregiverInput,
      UserUncheckedCreateWithoutCaregiverInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCaregiverInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutCaregiverNestedInput = {
    create?: XOR<
      UserCreateWithoutCaregiverInput,
      UserUncheckedCreateWithoutCaregiverInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCaregiverInput;
    upsert?: UserUpsertWithoutCaregiverInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCaregiverInput,
        UserUpdateWithoutCaregiverInput
      >,
      UserUncheckedUpdateWithoutCaregiverInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumGenderEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>;
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>;
    not?: NestedEnumGenderEnumFilter<$PrismaModel> | $Enums.GenderEnum;
  };

  export type NestedEnumRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>;
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleEnumFilter<$PrismaModel> | $Enums.RoleEnum;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumGenderEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderEnum | EnumGenderEnumFieldRefInput<$PrismaModel>;
    in?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GenderEnum[] | ListEnumGenderEnumFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumGenderEnumWithAggregatesFilter<$PrismaModel>
      | $Enums.GenderEnum;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumGenderEnumFilter<$PrismaModel>;
    _max?: NestedEnumGenderEnumFilter<$PrismaModel>;
  };

  export type NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>;
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel>
      | $Enums.RoleEnum;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleEnumFilter<$PrismaModel>;
    _max?: NestedEnumRoleEnumFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type CaregiverCreateWithoutUserInput = {
    MSN: string;
  };

  export type CaregiverUncheckedCreateWithoutUserInput = {
    MSN: string;
  };

  export type CaregiverCreateOrConnectWithoutUserInput = {
    where: CaregiverWhereUniqueInput;
    create: XOR<
      CaregiverCreateWithoutUserInput,
      CaregiverUncheckedCreateWithoutUserInput
    >;
  };

  export type ElderCreateWithoutUserInput = {
    drugAllergy?: ElderCreatedrugAllergyInput | string[];
    disease?: ElderCreatediseaseInput | string[];
  };

  export type ElderUncheckedCreateWithoutUserInput = {
    drugAllergy?: ElderCreatedrugAllergyInput | string[];
    disease?: ElderCreatediseaseInput | string[];
  };

  export type ElderCreateOrConnectWithoutUserInput = {
    where: ElderWhereUniqueInput;
    create: XOR<
      ElderCreateWithoutUserInput,
      ElderUncheckedCreateWithoutUserInput
    >;
  };

  export type CaregiverUpsertWithoutUserInput = {
    update: XOR<
      CaregiverUpdateWithoutUserInput,
      CaregiverUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CaregiverCreateWithoutUserInput,
      CaregiverUncheckedCreateWithoutUserInput
    >;
    where?: CaregiverWhereInput;
  };

  export type CaregiverUpdateToOneWithWhereWithoutUserInput = {
    where?: CaregiverWhereInput;
    data: XOR<
      CaregiverUpdateWithoutUserInput,
      CaregiverUncheckedUpdateWithoutUserInput
    >;
  };

  export type CaregiverUpdateWithoutUserInput = {
    MSN?: StringFieldUpdateOperationsInput | string;
  };

  export type CaregiverUncheckedUpdateWithoutUserInput = {
    MSN?: StringFieldUpdateOperationsInput | string;
  };

  export type ElderUpsertWithoutUserInput = {
    update: XOR<
      ElderUpdateWithoutUserInput,
      ElderUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ElderCreateWithoutUserInput,
      ElderUncheckedCreateWithoutUserInput
    >;
    where?: ElderWhereInput;
  };

  export type ElderUpdateToOneWithWhereWithoutUserInput = {
    where?: ElderWhereInput;
    data: XOR<
      ElderUpdateWithoutUserInput,
      ElderUncheckedUpdateWithoutUserInput
    >;
  };

  export type ElderUpdateWithoutUserInput = {
    drugAllergy?: ElderUpdatedrugAllergyInput | string[];
    disease?: ElderUpdatediseaseInput | string[];
  };

  export type ElderUncheckedUpdateWithoutUserInput = {
    drugAllergy?: ElderUpdatedrugAllergyInput | string[];
    disease?: ElderUpdatediseaseInput | string[];
  };

  export type UserCreateWithoutElderInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    avatar?: string | null;
    nationalityCode?: string | null;
    mobileNumber?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: $Enums.GenderEnum;
    role?: $Enums.RoleEnum;
    dateOfBirth?: Date | string | null;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caregiver?: CaregiverCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutElderInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    avatar?: string | null;
    nationalityCode?: string | null;
    mobileNumber?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: $Enums.GenderEnum;
    role?: $Enums.RoleEnum;
    dateOfBirth?: Date | string | null;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caregiver?: CaregiverUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutElderInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutElderInput,
      UserUncheckedCreateWithoutElderInput
    >;
  };

  export type UserUpsertWithoutElderInput = {
    update: XOR<
      UserUpdateWithoutElderInput,
      UserUncheckedUpdateWithoutElderInput
    >;
    create: XOR<
      UserCreateWithoutElderInput,
      UserUncheckedCreateWithoutElderInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutElderInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutElderInput,
      UserUncheckedUpdateWithoutElderInput
    >;
  };

  export type UserUpdateWithoutElderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    nationalityCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum;
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enabled?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiver?: CaregiverUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutElderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    nationalityCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum;
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enabled?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiver?: CaregiverUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateWithoutCaregiverInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    avatar?: string | null;
    nationalityCode?: string | null;
    mobileNumber?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: $Enums.GenderEnum;
    role?: $Enums.RoleEnum;
    dateOfBirth?: Date | string | null;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elder?: ElderCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCaregiverInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    avatar?: string | null;
    nationalityCode?: string | null;
    mobileNumber?: string | null;
    email?: string | null;
    password?: string | null;
    gender?: $Enums.GenderEnum;
    role?: $Enums.RoleEnum;
    dateOfBirth?: Date | string | null;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elder?: ElderUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCaregiverInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCaregiverInput,
      UserUncheckedCreateWithoutCaregiverInput
    >;
  };

  export type UserUpsertWithoutCaregiverInput = {
    update: XOR<
      UserUpdateWithoutCaregiverInput,
      UserUncheckedUpdateWithoutCaregiverInput
    >;
    create: XOR<
      UserCreateWithoutCaregiverInput,
      UserUncheckedCreateWithoutCaregiverInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCaregiverInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCaregiverInput,
      UserUncheckedUpdateWithoutCaregiverInput
    >;
  };

  export type UserUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    nationalityCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum;
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enabled?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elder?: ElderUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: NullableStringFieldUpdateOperationsInput | string | null;
    nationalityCode?: NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    gender?: EnumGenderEnumFieldUpdateOperationsInput | $Enums.GenderEnum;
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    enabled?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elder?: ElderUncheckedUpdateOneWithoutUserNestedInput;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
