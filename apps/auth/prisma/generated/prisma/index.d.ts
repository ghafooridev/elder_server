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
 * Model Relative
 *
 */
export type Relative = $Result.DefaultSelection<Prisma.$RelativePayload>;

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
    RELATIVE: 'RELATIVE';
    CAREGIVER: 'CAREGIVER';
  };

  export type RoleEnum = (typeof RoleEnum)[keyof typeof RoleEnum];

  export const CaregiverType: {
    CAREGIVER: 'CAREGIVER';
    NURSE: 'NURSE';
    DOCTOR: 'DOCTOR';
    PHYSIOTHERAPIST: 'PHYSIOTHERAPIST';
    OTHER: 'OTHER';
  };

  export type CaregiverType =
    (typeof CaregiverType)[keyof typeof CaregiverType];
}

export type GenderEnum = $Enums.GenderEnum;

export const GenderEnum: typeof $Enums.GenderEnum;

export type RoleEnum = $Enums.RoleEnum;

export const RoleEnum: typeof $Enums.RoleEnum;

export type CaregiverType = $Enums.CaregiverType;

export const CaregiverType: typeof $Enums.CaregiverType;

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

  /**
   * `prisma.relative`: Exposes CRUD operations for the **Relative** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Relatives
   * const relatives = await prisma.relative.findMany()
   * ```
   */
  get relative(): Prisma.RelativeDelegate<ExtArgs, ClientOptions>;
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
    Relative: 'Relative';
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
      modelProps: 'user' | 'elder' | 'caregiver' | 'relative';
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
      Relative: {
        payload: Prisma.$RelativePayload<ExtArgs>;
        fields: Prisma.RelativeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RelativeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RelativeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload>;
          };
          findFirst: {
            args: Prisma.RelativeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RelativeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload>;
          };
          findMany: {
            args: Prisma.RelativeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload>[];
          };
          create: {
            args: Prisma.RelativeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload>;
          };
          createMany: {
            args: Prisma.RelativeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RelativeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload>[];
          };
          delete: {
            args: Prisma.RelativeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload>;
          };
          update: {
            args: Prisma.RelativeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload>;
          };
          deleteMany: {
            args: Prisma.RelativeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RelativeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RelativeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload>[];
          };
          upsert: {
            args: Prisma.RelativeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RelativePayload>;
          };
          aggregate: {
            args: Prisma.RelativeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRelative>;
          };
          groupBy: {
            args: Prisma.RelativeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RelativeGroupByOutputType>[];
          };
          count: {
            args: Prisma.RelativeCountArgs<ExtArgs>;
            result: $Utils.Optional<RelativeCountAggregateOutputType> | number;
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
    relative?: RelativeOmit;
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
   * Count Type ElderCountOutputType
   */

  export type ElderCountOutputType = {
    relative: number;
  };

  export type ElderCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    relative?: boolean | ElderCountOutputTypeCountRelativeArgs;
  };

  // Custom InputTypes
  /**
   * ElderCountOutputType without action
   */
  export type ElderCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ElderCountOutputType
     */
    select?: ElderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ElderCountOutputType without action
   */
  export type ElderCountOutputTypeCountRelativeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: RelativeWhereInput;
  };

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
      relative?: boolean | User$relativeArgs<ExtArgs>;
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
    relative?: boolean | User$relativeArgs<ExtArgs>;
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
      relative: Prisma.$RelativePayload<ExtArgs> | null;
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
    relative<T extends User$relativeArgs<ExtArgs> = {}>(
      args?: Subset<T, User$relativeArgs<ExtArgs>>
    ): Prisma__RelativeClient<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
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
   * User.relative
   */
  export type User$relativeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    where?: RelativeWhereInput;
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
    bloodType: string | null;
    disability: string | null;
    mobilityStatus: string | null;
    cognitiveStatus: string | null;
    maritalStatus: string | null;
    occupation: string | null;
    religion: string | null;
    dietaryNeeds: string | null;
    emergencyContactName: string | null;
    emergencyContactPhone: string | null;
    emergencyContactRelation: string | null;
  };

  export type ElderMaxAggregateOutputType = {
    userId: string | null;
    bloodType: string | null;
    disability: string | null;
    mobilityStatus: string | null;
    cognitiveStatus: string | null;
    maritalStatus: string | null;
    occupation: string | null;
    religion: string | null;
    dietaryNeeds: string | null;
    emergencyContactName: string | null;
    emergencyContactPhone: string | null;
    emergencyContactRelation: string | null;
  };

  export type ElderCountAggregateOutputType = {
    userId: number;
    bloodType: number;
    medicalConditions: number;
    allergies: number;
    medications: number;
    disability: number;
    mobilityStatus: number;
    cognitiveStatus: number;
    maritalStatus: number;
    occupation: number;
    languages: number;
    religion: number;
    dietaryNeeds: number;
    emergencyContactName: number;
    emergencyContactPhone: number;
    emergencyContactRelation: number;
    _all: number;
  };

  export type ElderMinAggregateInputType = {
    userId?: true;
    bloodType?: true;
    disability?: true;
    mobilityStatus?: true;
    cognitiveStatus?: true;
    maritalStatus?: true;
    occupation?: true;
    religion?: true;
    dietaryNeeds?: true;
    emergencyContactName?: true;
    emergencyContactPhone?: true;
    emergencyContactRelation?: true;
  };

  export type ElderMaxAggregateInputType = {
    userId?: true;
    bloodType?: true;
    disability?: true;
    mobilityStatus?: true;
    cognitiveStatus?: true;
    maritalStatus?: true;
    occupation?: true;
    religion?: true;
    dietaryNeeds?: true;
    emergencyContactName?: true;
    emergencyContactPhone?: true;
    emergencyContactRelation?: true;
  };

  export type ElderCountAggregateInputType = {
    userId?: true;
    bloodType?: true;
    medicalConditions?: true;
    allergies?: true;
    medications?: true;
    disability?: true;
    mobilityStatus?: true;
    cognitiveStatus?: true;
    maritalStatus?: true;
    occupation?: true;
    languages?: true;
    religion?: true;
    dietaryNeeds?: true;
    emergencyContactName?: true;
    emergencyContactPhone?: true;
    emergencyContactRelation?: true;
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
    bloodType: string | null;
    medicalConditions: string[];
    allergies: string[];
    medications: string[];
    disability: string | null;
    mobilityStatus: string | null;
    cognitiveStatus: string | null;
    maritalStatus: string | null;
    occupation: string | null;
    languages: string[];
    religion: string | null;
    dietaryNeeds: string | null;
    emergencyContactName: string | null;
    emergencyContactPhone: string | null;
    emergencyContactRelation: string | null;
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
      bloodType?: boolean;
      medicalConditions?: boolean;
      allergies?: boolean;
      medications?: boolean;
      disability?: boolean;
      mobilityStatus?: boolean;
      cognitiveStatus?: boolean;
      maritalStatus?: boolean;
      occupation?: boolean;
      languages?: boolean;
      religion?: boolean;
      dietaryNeeds?: boolean;
      emergencyContactName?: boolean;
      emergencyContactPhone?: boolean;
      emergencyContactRelation?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      relative?: boolean | Elder$relativeArgs<ExtArgs>;
      _count?: boolean | ElderCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['elder']
  >;

  export type ElderSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      bloodType?: boolean;
      medicalConditions?: boolean;
      allergies?: boolean;
      medications?: boolean;
      disability?: boolean;
      mobilityStatus?: boolean;
      cognitiveStatus?: boolean;
      maritalStatus?: boolean;
      occupation?: boolean;
      languages?: boolean;
      religion?: boolean;
      dietaryNeeds?: boolean;
      emergencyContactName?: boolean;
      emergencyContactPhone?: boolean;
      emergencyContactRelation?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['elder']
  >;

  export type ElderSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      bloodType?: boolean;
      medicalConditions?: boolean;
      allergies?: boolean;
      medications?: boolean;
      disability?: boolean;
      mobilityStatus?: boolean;
      cognitiveStatus?: boolean;
      maritalStatus?: boolean;
      occupation?: boolean;
      languages?: boolean;
      religion?: boolean;
      dietaryNeeds?: boolean;
      emergencyContactName?: boolean;
      emergencyContactPhone?: boolean;
      emergencyContactRelation?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['elder']
  >;

  export type ElderSelectScalar = {
    userId?: boolean;
    bloodType?: boolean;
    medicalConditions?: boolean;
    allergies?: boolean;
    medications?: boolean;
    disability?: boolean;
    mobilityStatus?: boolean;
    cognitiveStatus?: boolean;
    maritalStatus?: boolean;
    occupation?: boolean;
    languages?: boolean;
    religion?: boolean;
    dietaryNeeds?: boolean;
    emergencyContactName?: boolean;
    emergencyContactPhone?: boolean;
    emergencyContactRelation?: boolean;
  };

  export type ElderOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'userId'
    | 'bloodType'
    | 'medicalConditions'
    | 'allergies'
    | 'medications'
    | 'disability'
    | 'mobilityStatus'
    | 'cognitiveStatus'
    | 'maritalStatus'
    | 'occupation'
    | 'languages'
    | 'religion'
    | 'dietaryNeeds'
    | 'emergencyContactName'
    | 'emergencyContactPhone'
    | 'emergencyContactRelation',
    ExtArgs['result']['elder']
  >;
  export type ElderInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    relative?: boolean | Elder$relativeArgs<ExtArgs>;
    _count?: boolean | ElderCountOutputTypeDefaultArgs<ExtArgs>;
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
      relative: Prisma.$RelativePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        bloodType: string | null;
        medicalConditions: string[];
        allergies: string[];
        medications: string[];
        disability: string | null;
        mobilityStatus: string | null;
        cognitiveStatus: string | null;
        maritalStatus: string | null;
        occupation: string | null;
        languages: string[];
        religion: string | null;
        dietaryNeeds: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        emergencyContactRelation: string | null;
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
    relative<T extends Elder$relativeArgs<ExtArgs> = {}>(
      args?: Subset<T, Elder$relativeArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RelativePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
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
    readonly bloodType: FieldRef<'Elder', 'String'>;
    readonly medicalConditions: FieldRef<'Elder', 'String[]'>;
    readonly allergies: FieldRef<'Elder', 'String[]'>;
    readonly medications: FieldRef<'Elder', 'String[]'>;
    readonly disability: FieldRef<'Elder', 'String'>;
    readonly mobilityStatus: FieldRef<'Elder', 'String'>;
    readonly cognitiveStatus: FieldRef<'Elder', 'String'>;
    readonly maritalStatus: FieldRef<'Elder', 'String'>;
    readonly occupation: FieldRef<'Elder', 'String'>;
    readonly languages: FieldRef<'Elder', 'String[]'>;
    readonly religion: FieldRef<'Elder', 'String'>;
    readonly dietaryNeeds: FieldRef<'Elder', 'String'>;
    readonly emergencyContactName: FieldRef<'Elder', 'String'>;
    readonly emergencyContactPhone: FieldRef<'Elder', 'String'>;
    readonly emergencyContactRelation: FieldRef<'Elder', 'String'>;
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
   * Elder.relative
   */
  export type Elder$relativeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    where?: RelativeWhereInput;
    orderBy?:
      | RelativeOrderByWithRelationInput
      | RelativeOrderByWithRelationInput[];
    cursor?: RelativeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RelativeScalarFieldEnum | RelativeScalarFieldEnum[];
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
    _avg: CaregiverAvgAggregateOutputType | null;
    _sum: CaregiverSumAggregateOutputType | null;
    _min: CaregiverMinAggregateOutputType | null;
    _max: CaregiverMaxAggregateOutputType | null;
  };

  export type CaregiverAvgAggregateOutputType = {
    experienceYears: number | null;
  };

  export type CaregiverSumAggregateOutputType = {
    experienceYears: number | null;
  };

  export type CaregiverMinAggregateOutputType = {
    userId: string | null;
    caregiverType: $Enums.CaregiverType | null;
    specialization: string | null;
    licenseNumber: string | null;
    experienceYears: number | null;
    available: boolean | null;
  };

  export type CaregiverMaxAggregateOutputType = {
    userId: string | null;
    caregiverType: $Enums.CaregiverType | null;
    specialization: string | null;
    licenseNumber: string | null;
    experienceYears: number | null;
    available: boolean | null;
  };

  export type CaregiverCountAggregateOutputType = {
    userId: number;
    caregiverType: number;
    specialization: number;
    licenseNumber: number;
    experienceYears: number;
    languages: number;
    available: number;
    _all: number;
  };

  export type CaregiverAvgAggregateInputType = {
    experienceYears?: true;
  };

  export type CaregiverSumAggregateInputType = {
    experienceYears?: true;
  };

  export type CaregiverMinAggregateInputType = {
    userId?: true;
    caregiverType?: true;
    specialization?: true;
    licenseNumber?: true;
    experienceYears?: true;
    available?: true;
  };

  export type CaregiverMaxAggregateInputType = {
    userId?: true;
    caregiverType?: true;
    specialization?: true;
    licenseNumber?: true;
    experienceYears?: true;
    available?: true;
  };

  export type CaregiverCountAggregateInputType = {
    userId?: true;
    caregiverType?: true;
    specialization?: true;
    licenseNumber?: true;
    experienceYears?: true;
    languages?: true;
    available?: true;
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
     * Select which fields to average
     **/
    _avg?: CaregiverAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CaregiverSumAggregateInputType;
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
    _avg?: CaregiverAvgAggregateInputType;
    _sum?: CaregiverSumAggregateInputType;
    _min?: CaregiverMinAggregateInputType;
    _max?: CaregiverMaxAggregateInputType;
  };

  export type CaregiverGroupByOutputType = {
    userId: string;
    caregiverType: $Enums.CaregiverType;
    specialization: string | null;
    licenseNumber: string | null;
    experienceYears: number | null;
    languages: string[];
    available: boolean;
    _count: CaregiverCountAggregateOutputType | null;
    _avg: CaregiverAvgAggregateOutputType | null;
    _sum: CaregiverSumAggregateOutputType | null;
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
      caregiverType?: boolean;
      specialization?: boolean;
      licenseNumber?: boolean;
      experienceYears?: boolean;
      languages?: boolean;
      available?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['caregiver']
  >;

  export type CaregiverSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      caregiverType?: boolean;
      specialization?: boolean;
      licenseNumber?: boolean;
      experienceYears?: boolean;
      languages?: boolean;
      available?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['caregiver']
  >;

  export type CaregiverSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      caregiverType?: boolean;
      specialization?: boolean;
      licenseNumber?: boolean;
      experienceYears?: boolean;
      languages?: boolean;
      available?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['caregiver']
  >;

  export type CaregiverSelectScalar = {
    userId?: boolean;
    caregiverType?: boolean;
    specialization?: boolean;
    licenseNumber?: boolean;
    experienceYears?: boolean;
    languages?: boolean;
    available?: boolean;
  };

  export type CaregiverOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'userId'
    | 'caregiverType'
    | 'specialization'
    | 'licenseNumber'
    | 'experienceYears'
    | 'languages'
    | 'available',
    ExtArgs['result']['caregiver']
  >;
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
        caregiverType: $Enums.CaregiverType;
        specialization: string | null;
        licenseNumber: string | null;
        experienceYears: number | null;
        languages: string[];
        available: boolean;
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
    readonly caregiverType: FieldRef<'Caregiver', 'CaregiverType'>;
    readonly specialization: FieldRef<'Caregiver', 'String'>;
    readonly licenseNumber: FieldRef<'Caregiver', 'String'>;
    readonly experienceYears: FieldRef<'Caregiver', 'Int'>;
    readonly languages: FieldRef<'Caregiver', 'String[]'>;
    readonly available: FieldRef<'Caregiver', 'Boolean'>;
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
   * Model Relative
   */

  export type AggregateRelative = {
    _count: RelativeCountAggregateOutputType | null;
    _min: RelativeMinAggregateOutputType | null;
    _max: RelativeMaxAggregateOutputType | null;
  };

  export type RelativeMinAggregateOutputType = {
    userId: string | null;
    relationshipToElder: string | null;
    elderId: string | null;
  };

  export type RelativeMaxAggregateOutputType = {
    userId: string | null;
    relationshipToElder: string | null;
    elderId: string | null;
  };

  export type RelativeCountAggregateOutputType = {
    userId: number;
    relationshipToElder: number;
    elderId: number;
    _all: number;
  };

  export type RelativeMinAggregateInputType = {
    userId?: true;
    relationshipToElder?: true;
    elderId?: true;
  };

  export type RelativeMaxAggregateInputType = {
    userId?: true;
    relationshipToElder?: true;
    elderId?: true;
  };

  export type RelativeCountAggregateInputType = {
    userId?: true;
    relationshipToElder?: true;
    elderId?: true;
    _all?: true;
  };

  export type RelativeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Relative to aggregate.
     */
    where?: RelativeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Relatives to fetch.
     */
    orderBy?:
      | RelativeOrderByWithRelationInput
      | RelativeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RelativeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Relatives from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Relatives.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Relatives
     **/
    _count?: true | RelativeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RelativeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RelativeMaxAggregateInputType;
  };

  export type GetRelativeAggregateType<T extends RelativeAggregateArgs> = {
    [P in keyof T & keyof AggregateRelative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelative[P]>
      : GetScalarType<T[P], AggregateRelative[P]>;
  };

  export type RelativeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: RelativeWhereInput;
    orderBy?:
      | RelativeOrderByWithAggregationInput
      | RelativeOrderByWithAggregationInput[];
    by: RelativeScalarFieldEnum[] | RelativeScalarFieldEnum;
    having?: RelativeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RelativeCountAggregateInputType | true;
    _min?: RelativeMinAggregateInputType;
    _max?: RelativeMaxAggregateInputType;
  };

  export type RelativeGroupByOutputType = {
    userId: string;
    relationshipToElder: string;
    elderId: string;
    _count: RelativeCountAggregateOutputType | null;
    _min: RelativeMinAggregateOutputType | null;
    _max: RelativeMaxAggregateOutputType | null;
  };

  type GetRelativeGroupByPayload<T extends RelativeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RelativeGroupByOutputType, T['by']> & {
          [P in keyof T & keyof RelativeGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelativeGroupByOutputType[P]>
            : GetScalarType<T[P], RelativeGroupByOutputType[P]>;
        }
      >
    >;

  export type RelativeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      relationshipToElder?: boolean;
      elderId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      elder?: boolean | ElderDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['relative']
  >;

  export type RelativeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      relationshipToElder?: boolean;
      elderId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      elder?: boolean | ElderDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['relative']
  >;

  export type RelativeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      relationshipToElder?: boolean;
      elderId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      elder?: boolean | ElderDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['relative']
  >;

  export type RelativeSelectScalar = {
    userId?: boolean;
    relationshipToElder?: boolean;
    elderId?: boolean;
  };

  export type RelativeOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'userId' | 'relationshipToElder' | 'elderId',
    ExtArgs['result']['relative']
  >;
  export type RelativeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    elder?: boolean | ElderDefaultArgs<ExtArgs>;
  };
  export type RelativeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    elder?: boolean | ElderDefaultArgs<ExtArgs>;
  };
  export type RelativeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    elder?: boolean | ElderDefaultArgs<ExtArgs>;
  };

  export type $RelativePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Relative';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      elder: Prisma.$ElderPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        relationshipToElder: string;
        elderId: string;
      },
      ExtArgs['result']['relative']
    >;
    composites: {};
  };

  type RelativeGetPayload<
    S extends boolean | null | undefined | RelativeDefaultArgs
  > = $Result.GetResult<Prisma.$RelativePayload, S>;

  type RelativeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<RelativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RelativeCountAggregateInputType | true;
  };

  export interface RelativeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Relative'];
      meta: { name: 'Relative' };
    };
    /**
     * Find zero or one Relative that matches the filter.
     * @param {RelativeFindUniqueArgs} args - Arguments to find a Relative
     * @example
     * // Get one Relative
     * const relative = await prisma.relative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelativeFindUniqueArgs>(
      args: SelectSubset<T, RelativeFindUniqueArgs<ExtArgs>>
    ): Prisma__RelativeClient<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Relative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelativeFindUniqueOrThrowArgs} args - Arguments to find a Relative
     * @example
     * // Get one Relative
     * const relative = await prisma.relative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelativeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RelativeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RelativeClient<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Relative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelativeFindFirstArgs} args - Arguments to find a Relative
     * @example
     * // Get one Relative
     * const relative = await prisma.relative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelativeFindFirstArgs>(
      args?: SelectSubset<T, RelativeFindFirstArgs<ExtArgs>>
    ): Prisma__RelativeClient<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Relative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelativeFindFirstOrThrowArgs} args - Arguments to find a Relative
     * @example
     * // Get one Relative
     * const relative = await prisma.relative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelativeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RelativeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RelativeClient<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Relatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relatives
     * const relatives = await prisma.relative.findMany()
     *
     * // Get first 10 Relatives
     * const relatives = await prisma.relative.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const relativeWithUserIdOnly = await prisma.relative.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends RelativeFindManyArgs>(
      args?: SelectSubset<T, RelativeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Relative.
     * @param {RelativeCreateArgs} args - Arguments to create a Relative.
     * @example
     * // Create one Relative
     * const Relative = await prisma.relative.create({
     *   data: {
     *     // ... data to create a Relative
     *   }
     * })
     *
     */
    create<T extends RelativeCreateArgs>(
      args: SelectSubset<T, RelativeCreateArgs<ExtArgs>>
    ): Prisma__RelativeClient<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Relatives.
     * @param {RelativeCreateManyArgs} args - Arguments to create many Relatives.
     * @example
     * // Create many Relatives
     * const relative = await prisma.relative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RelativeCreateManyArgs>(
      args?: SelectSubset<T, RelativeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Relatives and returns the data saved in the database.
     * @param {RelativeCreateManyAndReturnArgs} args - Arguments to create many Relatives.
     * @example
     * // Create many Relatives
     * const relative = await prisma.relative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Relatives and only return the `userId`
     * const relativeWithUserIdOnly = await prisma.relative.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RelativeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RelativeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Relative.
     * @param {RelativeDeleteArgs} args - Arguments to delete one Relative.
     * @example
     * // Delete one Relative
     * const Relative = await prisma.relative.delete({
     *   where: {
     *     // ... filter to delete one Relative
     *   }
     * })
     *
     */
    delete<T extends RelativeDeleteArgs>(
      args: SelectSubset<T, RelativeDeleteArgs<ExtArgs>>
    ): Prisma__RelativeClient<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Relative.
     * @param {RelativeUpdateArgs} args - Arguments to update one Relative.
     * @example
     * // Update one Relative
     * const relative = await prisma.relative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RelativeUpdateArgs>(
      args: SelectSubset<T, RelativeUpdateArgs<ExtArgs>>
    ): Prisma__RelativeClient<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Relatives.
     * @param {RelativeDeleteManyArgs} args - Arguments to filter Relatives to delete.
     * @example
     * // Delete a few Relatives
     * const { count } = await prisma.relative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RelativeDeleteManyArgs>(
      args?: SelectSubset<T, RelativeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Relatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relatives
     * const relative = await prisma.relative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RelativeUpdateManyArgs>(
      args: SelectSubset<T, RelativeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Relatives and returns the data updated in the database.
     * @param {RelativeUpdateManyAndReturnArgs} args - Arguments to update many Relatives.
     * @example
     * // Update many Relatives
     * const relative = await prisma.relative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Relatives and only return the `userId`
     * const relativeWithUserIdOnly = await prisma.relative.updateManyAndReturn({
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
    updateManyAndReturn<T extends RelativeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RelativeUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Relative.
     * @param {RelativeUpsertArgs} args - Arguments to update or create a Relative.
     * @example
     * // Update or create a Relative
     * const relative = await prisma.relative.upsert({
     *   create: {
     *     // ... data to create a Relative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relative we want to update
     *   }
     * })
     */
    upsert<T extends RelativeUpsertArgs>(
      args: SelectSubset<T, RelativeUpsertArgs<ExtArgs>>
    ): Prisma__RelativeClient<
      $Result.GetResult<
        Prisma.$RelativePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Relatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelativeCountArgs} args - Arguments to filter Relatives to count.
     * @example
     * // Count the number of Relatives
     * const count = await prisma.relative.count({
     *   where: {
     *     // ... the filter for the Relatives we want to count
     *   }
     * })
     **/
    count<T extends RelativeCountArgs>(
      args?: Subset<T, RelativeCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelativeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Relative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelativeAggregateArgs>(
      args: Subset<T, RelativeAggregateArgs>
    ): Prisma.PrismaPromise<GetRelativeAggregateType<T>>;

    /**
     * Group by Relative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelativeGroupByArgs} args - Group by arguments.
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
      T extends RelativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelativeGroupByArgs['orderBy'] }
        : { orderBy?: RelativeGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, RelativeGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetRelativeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Relative model
     */
    readonly fields: RelativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelativeClient<
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
    elder<T extends ElderDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ElderDefaultArgs<ExtArgs>>
    ): Prisma__ElderClient<
      | $Result.GetResult<
          Prisma.$ElderPayload<ExtArgs>,
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
   * Fields of the Relative model
   */
  interface RelativeFieldRefs {
    readonly userId: FieldRef<'Relative', 'String'>;
    readonly relationshipToElder: FieldRef<'Relative', 'String'>;
    readonly elderId: FieldRef<'Relative', 'String'>;
  }

  // Custom InputTypes
  /**
   * Relative findUnique
   */
  export type RelativeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    /**
     * Filter, which Relative to fetch.
     */
    where: RelativeWhereUniqueInput;
  };

  /**
   * Relative findUniqueOrThrow
   */
  export type RelativeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    /**
     * Filter, which Relative to fetch.
     */
    where: RelativeWhereUniqueInput;
  };

  /**
   * Relative findFirst
   */
  export type RelativeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    /**
     * Filter, which Relative to fetch.
     */
    where?: RelativeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Relatives to fetch.
     */
    orderBy?:
      | RelativeOrderByWithRelationInput
      | RelativeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Relatives.
     */
    cursor?: RelativeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Relatives from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Relatives.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Relatives.
     */
    distinct?: RelativeScalarFieldEnum | RelativeScalarFieldEnum[];
  };

  /**
   * Relative findFirstOrThrow
   */
  export type RelativeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    /**
     * Filter, which Relative to fetch.
     */
    where?: RelativeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Relatives to fetch.
     */
    orderBy?:
      | RelativeOrderByWithRelationInput
      | RelativeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Relatives.
     */
    cursor?: RelativeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Relatives from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Relatives.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Relatives.
     */
    distinct?: RelativeScalarFieldEnum | RelativeScalarFieldEnum[];
  };

  /**
   * Relative findMany
   */
  export type RelativeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    /**
     * Filter, which Relatives to fetch.
     */
    where?: RelativeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Relatives to fetch.
     */
    orderBy?:
      | RelativeOrderByWithRelationInput
      | RelativeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Relatives.
     */
    cursor?: RelativeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Relatives from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Relatives.
     */
    skip?: number;
    distinct?: RelativeScalarFieldEnum | RelativeScalarFieldEnum[];
  };

  /**
   * Relative create
   */
  export type RelativeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Relative.
     */
    data: XOR<RelativeCreateInput, RelativeUncheckedCreateInput>;
  };

  /**
   * Relative createMany
   */
  export type RelativeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Relatives.
     */
    data: RelativeCreateManyInput | RelativeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Relative createManyAndReturn
   */
  export type RelativeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * The data used to create many Relatives.
     */
    data: RelativeCreateManyInput | RelativeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Relative update
   */
  export type RelativeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Relative.
     */
    data: XOR<RelativeUpdateInput, RelativeUncheckedUpdateInput>;
    /**
     * Choose, which Relative to update.
     */
    where: RelativeWhereUniqueInput;
  };

  /**
   * Relative updateMany
   */
  export type RelativeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Relatives.
     */
    data: XOR<
      RelativeUpdateManyMutationInput,
      RelativeUncheckedUpdateManyInput
    >;
    /**
     * Filter which Relatives to update
     */
    where?: RelativeWhereInput;
    /**
     * Limit how many Relatives to update.
     */
    limit?: number;
  };

  /**
   * Relative updateManyAndReturn
   */
  export type RelativeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * The data used to update Relatives.
     */
    data: XOR<
      RelativeUpdateManyMutationInput,
      RelativeUncheckedUpdateManyInput
    >;
    /**
     * Filter which Relatives to update
     */
    where?: RelativeWhereInput;
    /**
     * Limit how many Relatives to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Relative upsert
   */
  export type RelativeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Relative to update in case it exists.
     */
    where: RelativeWhereUniqueInput;
    /**
     * In case the Relative found by the `where` argument doesn't exist, create a new Relative with this data.
     */
    create: XOR<RelativeCreateInput, RelativeUncheckedCreateInput>;
    /**
     * In case the Relative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelativeUpdateInput, RelativeUncheckedUpdateInput>;
  };

  /**
   * Relative delete
   */
  export type RelativeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
    /**
     * Filter which Relative to delete.
     */
    where: RelativeWhereUniqueInput;
  };

  /**
   * Relative deleteMany
   */
  export type RelativeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Relatives to delete
     */
    where?: RelativeWhereInput;
    /**
     * Limit how many Relatives to delete.
     */
    limit?: number;
  };

  /**
   * Relative without action
   */
  export type RelativeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Relative
     */
    select?: RelativeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Relative
     */
    omit?: RelativeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelativeInclude<ExtArgs> | null;
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
    bloodType: 'bloodType';
    medicalConditions: 'medicalConditions';
    allergies: 'allergies';
    medications: 'medications';
    disability: 'disability';
    mobilityStatus: 'mobilityStatus';
    cognitiveStatus: 'cognitiveStatus';
    maritalStatus: 'maritalStatus';
    occupation: 'occupation';
    languages: 'languages';
    religion: 'religion';
    dietaryNeeds: 'dietaryNeeds';
    emergencyContactName: 'emergencyContactName';
    emergencyContactPhone: 'emergencyContactPhone';
    emergencyContactRelation: 'emergencyContactRelation';
  };

  export type ElderScalarFieldEnum =
    (typeof ElderScalarFieldEnum)[keyof typeof ElderScalarFieldEnum];

  export const CaregiverScalarFieldEnum: {
    userId: 'userId';
    caregiverType: 'caregiverType';
    specialization: 'specialization';
    licenseNumber: 'licenseNumber';
    experienceYears: 'experienceYears';
    languages: 'languages';
    available: 'available';
  };

  export type CaregiverScalarFieldEnum =
    (typeof CaregiverScalarFieldEnum)[keyof typeof CaregiverScalarFieldEnum];

  export const RelativeScalarFieldEnum: {
    userId: 'userId';
    relationshipToElder: 'relationshipToElder';
    elderId: 'elderId';
  };

  export type RelativeScalarFieldEnum =
    (typeof RelativeScalarFieldEnum)[keyof typeof RelativeScalarFieldEnum];

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
   * Reference to a field of type 'CaregiverType'
   */
  export type EnumCaregiverTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'CaregiverType'
  >;

  /**
   * Reference to a field of type 'CaregiverType[]'
   */
  export type ListEnumCaregiverTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'CaregiverType[]'>;

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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
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
    relative?: XOR<
      RelativeNullableScalarRelationFilter,
      RelativeWhereInput
    > | null;
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
    relative?: RelativeOrderByWithRelationInput;
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
      relative?: XOR<
        RelativeNullableScalarRelationFilter,
        RelativeWhereInput
      > | null;
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
    bloodType?: StringNullableFilter<'Elder'> | string | null;
    medicalConditions?: StringNullableListFilter<'Elder'>;
    allergies?: StringNullableListFilter<'Elder'>;
    medications?: StringNullableListFilter<'Elder'>;
    disability?: StringNullableFilter<'Elder'> | string | null;
    mobilityStatus?: StringNullableFilter<'Elder'> | string | null;
    cognitiveStatus?: StringNullableFilter<'Elder'> | string | null;
    maritalStatus?: StringNullableFilter<'Elder'> | string | null;
    occupation?: StringNullableFilter<'Elder'> | string | null;
    languages?: StringNullableListFilter<'Elder'>;
    religion?: StringNullableFilter<'Elder'> | string | null;
    dietaryNeeds?: StringNullableFilter<'Elder'> | string | null;
    emergencyContactName?: StringNullableFilter<'Elder'> | string | null;
    emergencyContactPhone?: StringNullableFilter<'Elder'> | string | null;
    emergencyContactRelation?: StringNullableFilter<'Elder'> | string | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    relative?: RelativeListRelationFilter;
  };

  export type ElderOrderByWithRelationInput = {
    userId?: SortOrder;
    bloodType?: SortOrderInput | SortOrder;
    medicalConditions?: SortOrder;
    allergies?: SortOrder;
    medications?: SortOrder;
    disability?: SortOrderInput | SortOrder;
    mobilityStatus?: SortOrderInput | SortOrder;
    cognitiveStatus?: SortOrderInput | SortOrder;
    maritalStatus?: SortOrderInput | SortOrder;
    occupation?: SortOrderInput | SortOrder;
    languages?: SortOrder;
    religion?: SortOrderInput | SortOrder;
    dietaryNeeds?: SortOrderInput | SortOrder;
    emergencyContactName?: SortOrderInput | SortOrder;
    emergencyContactPhone?: SortOrderInput | SortOrder;
    emergencyContactRelation?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
    relative?: RelativeOrderByRelationAggregateInput;
  };

  export type ElderWhereUniqueInput = Prisma.AtLeast<
    {
      userId?: string;
      AND?: ElderWhereInput | ElderWhereInput[];
      OR?: ElderWhereInput[];
      NOT?: ElderWhereInput | ElderWhereInput[];
      bloodType?: StringNullableFilter<'Elder'> | string | null;
      medicalConditions?: StringNullableListFilter<'Elder'>;
      allergies?: StringNullableListFilter<'Elder'>;
      medications?: StringNullableListFilter<'Elder'>;
      disability?: StringNullableFilter<'Elder'> | string | null;
      mobilityStatus?: StringNullableFilter<'Elder'> | string | null;
      cognitiveStatus?: StringNullableFilter<'Elder'> | string | null;
      maritalStatus?: StringNullableFilter<'Elder'> | string | null;
      occupation?: StringNullableFilter<'Elder'> | string | null;
      languages?: StringNullableListFilter<'Elder'>;
      religion?: StringNullableFilter<'Elder'> | string | null;
      dietaryNeeds?: StringNullableFilter<'Elder'> | string | null;
      emergencyContactName?: StringNullableFilter<'Elder'> | string | null;
      emergencyContactPhone?: StringNullableFilter<'Elder'> | string | null;
      emergencyContactRelation?: StringNullableFilter<'Elder'> | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      relative?: RelativeListRelationFilter;
    },
    'userId'
  >;

  export type ElderOrderByWithAggregationInput = {
    userId?: SortOrder;
    bloodType?: SortOrderInput | SortOrder;
    medicalConditions?: SortOrder;
    allergies?: SortOrder;
    medications?: SortOrder;
    disability?: SortOrderInput | SortOrder;
    mobilityStatus?: SortOrderInput | SortOrder;
    cognitiveStatus?: SortOrderInput | SortOrder;
    maritalStatus?: SortOrderInput | SortOrder;
    occupation?: SortOrderInput | SortOrder;
    languages?: SortOrder;
    religion?: SortOrderInput | SortOrder;
    dietaryNeeds?: SortOrderInput | SortOrder;
    emergencyContactName?: SortOrderInput | SortOrder;
    emergencyContactPhone?: SortOrderInput | SortOrder;
    emergencyContactRelation?: SortOrderInput | SortOrder;
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
    bloodType?: StringNullableWithAggregatesFilter<'Elder'> | string | null;
    medicalConditions?: StringNullableListFilter<'Elder'>;
    allergies?: StringNullableListFilter<'Elder'>;
    medications?: StringNullableListFilter<'Elder'>;
    disability?: StringNullableWithAggregatesFilter<'Elder'> | string | null;
    mobilityStatus?:
      | StringNullableWithAggregatesFilter<'Elder'>
      | string
      | null;
    cognitiveStatus?:
      | StringNullableWithAggregatesFilter<'Elder'>
      | string
      | null;
    maritalStatus?: StringNullableWithAggregatesFilter<'Elder'> | string | null;
    occupation?: StringNullableWithAggregatesFilter<'Elder'> | string | null;
    languages?: StringNullableListFilter<'Elder'>;
    religion?: StringNullableWithAggregatesFilter<'Elder'> | string | null;
    dietaryNeeds?: StringNullableWithAggregatesFilter<'Elder'> | string | null;
    emergencyContactName?:
      | StringNullableWithAggregatesFilter<'Elder'>
      | string
      | null;
    emergencyContactPhone?:
      | StringNullableWithAggregatesFilter<'Elder'>
      | string
      | null;
    emergencyContactRelation?:
      | StringNullableWithAggregatesFilter<'Elder'>
      | string
      | null;
  };

  export type CaregiverWhereInput = {
    AND?: CaregiverWhereInput | CaregiverWhereInput[];
    OR?: CaregiverWhereInput[];
    NOT?: CaregiverWhereInput | CaregiverWhereInput[];
    userId?: StringFilter<'Caregiver'> | string;
    caregiverType?: EnumCaregiverTypeFilter<'Caregiver'> | $Enums.CaregiverType;
    specialization?: StringNullableFilter<'Caregiver'> | string | null;
    licenseNumber?: StringNullableFilter<'Caregiver'> | string | null;
    experienceYears?: IntNullableFilter<'Caregiver'> | number | null;
    languages?: StringNullableListFilter<'Caregiver'>;
    available?: BoolFilter<'Caregiver'> | boolean;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type CaregiverOrderByWithRelationInput = {
    userId?: SortOrder;
    caregiverType?: SortOrder;
    specialization?: SortOrderInput | SortOrder;
    licenseNumber?: SortOrderInput | SortOrder;
    experienceYears?: SortOrderInput | SortOrder;
    languages?: SortOrder;
    available?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type CaregiverWhereUniqueInput = Prisma.AtLeast<
    {
      userId?: string;
      AND?: CaregiverWhereInput | CaregiverWhereInput[];
      OR?: CaregiverWhereInput[];
      NOT?: CaregiverWhereInput | CaregiverWhereInput[];
      caregiverType?:
        | EnumCaregiverTypeFilter<'Caregiver'>
        | $Enums.CaregiverType;
      specialization?: StringNullableFilter<'Caregiver'> | string | null;
      licenseNumber?: StringNullableFilter<'Caregiver'> | string | null;
      experienceYears?: IntNullableFilter<'Caregiver'> | number | null;
      languages?: StringNullableListFilter<'Caregiver'>;
      available?: BoolFilter<'Caregiver'> | boolean;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'userId'
  >;

  export type CaregiverOrderByWithAggregationInput = {
    userId?: SortOrder;
    caregiverType?: SortOrder;
    specialization?: SortOrderInput | SortOrder;
    licenseNumber?: SortOrderInput | SortOrder;
    experienceYears?: SortOrderInput | SortOrder;
    languages?: SortOrder;
    available?: SortOrder;
    _count?: CaregiverCountOrderByAggregateInput;
    _avg?: CaregiverAvgOrderByAggregateInput;
    _max?: CaregiverMaxOrderByAggregateInput;
    _min?: CaregiverMinOrderByAggregateInput;
    _sum?: CaregiverSumOrderByAggregateInput;
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
    caregiverType?:
      | EnumCaregiverTypeWithAggregatesFilter<'Caregiver'>
      | $Enums.CaregiverType;
    specialization?:
      | StringNullableWithAggregatesFilter<'Caregiver'>
      | string
      | null;
    licenseNumber?:
      | StringNullableWithAggregatesFilter<'Caregiver'>
      | string
      | null;
    experienceYears?:
      | IntNullableWithAggregatesFilter<'Caregiver'>
      | number
      | null;
    languages?: StringNullableListFilter<'Caregiver'>;
    available?: BoolWithAggregatesFilter<'Caregiver'> | boolean;
  };

  export type RelativeWhereInput = {
    AND?: RelativeWhereInput | RelativeWhereInput[];
    OR?: RelativeWhereInput[];
    NOT?: RelativeWhereInput | RelativeWhereInput[];
    userId?: StringFilter<'Relative'> | string;
    relationshipToElder?: StringFilter<'Relative'> | string;
    elderId?: StringFilter<'Relative'> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    elder?: XOR<ElderScalarRelationFilter, ElderWhereInput>;
  };

  export type RelativeOrderByWithRelationInput = {
    userId?: SortOrder;
    relationshipToElder?: SortOrder;
    elderId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    elder?: ElderOrderByWithRelationInput;
  };

  export type RelativeWhereUniqueInput = Prisma.AtLeast<
    {
      userId?: string;
      AND?: RelativeWhereInput | RelativeWhereInput[];
      OR?: RelativeWhereInput[];
      NOT?: RelativeWhereInput | RelativeWhereInput[];
      relationshipToElder?: StringFilter<'Relative'> | string;
      elderId?: StringFilter<'Relative'> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      elder?: XOR<ElderScalarRelationFilter, ElderWhereInput>;
    },
    'userId'
  >;

  export type RelativeOrderByWithAggregationInput = {
    userId?: SortOrder;
    relationshipToElder?: SortOrder;
    elderId?: SortOrder;
    _count?: RelativeCountOrderByAggregateInput;
    _max?: RelativeMaxOrderByAggregateInput;
    _min?: RelativeMinOrderByAggregateInput;
  };

  export type RelativeScalarWhereWithAggregatesInput = {
    AND?:
      | RelativeScalarWhereWithAggregatesInput
      | RelativeScalarWhereWithAggregatesInput[];
    OR?: RelativeScalarWhereWithAggregatesInput[];
    NOT?:
      | RelativeScalarWhereWithAggregatesInput
      | RelativeScalarWhereWithAggregatesInput[];
    userId?: StringWithAggregatesFilter<'Relative'> | string;
    relationshipToElder?: StringWithAggregatesFilter<'Relative'> | string;
    elderId?: StringWithAggregatesFilter<'Relative'> | string;
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
    relative?: RelativeCreateNestedOneWithoutUserInput;
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
    relative?: RelativeUncheckedCreateNestedOneWithoutUserInput;
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
    relative?: RelativeUpdateOneWithoutUserNestedInput;
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
    relative?: RelativeUncheckedUpdateOneWithoutUserNestedInput;
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
    bloodType?: string | null;
    medicalConditions?: ElderCreatemedicalConditionsInput | string[];
    allergies?: ElderCreateallergiesInput | string[];
    medications?: ElderCreatemedicationsInput | string[];
    disability?: string | null;
    mobilityStatus?: string | null;
    cognitiveStatus?: string | null;
    maritalStatus?: string | null;
    occupation?: string | null;
    languages?: ElderCreatelanguagesInput | string[];
    religion?: string | null;
    dietaryNeeds?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelation?: string | null;
    user: UserCreateNestedOneWithoutElderInput;
    relative?: RelativeCreateNestedManyWithoutElderInput;
  };

  export type ElderUncheckedCreateInput = {
    userId: string;
    bloodType?: string | null;
    medicalConditions?: ElderCreatemedicalConditionsInput | string[];
    allergies?: ElderCreateallergiesInput | string[];
    medications?: ElderCreatemedicationsInput | string[];
    disability?: string | null;
    mobilityStatus?: string | null;
    cognitiveStatus?: string | null;
    maritalStatus?: string | null;
    occupation?: string | null;
    languages?: ElderCreatelanguagesInput | string[];
    religion?: string | null;
    dietaryNeeds?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelation?: string | null;
    relative?: RelativeUncheckedCreateNestedManyWithoutElderInput;
  };

  export type ElderUpdateInput = {
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null;
    medicalConditions?: ElderUpdatemedicalConditionsInput | string[];
    allergies?: ElderUpdateallergiesInput | string[];
    medications?: ElderUpdatemedicationsInput | string[];
    disability?: NullableStringFieldUpdateOperationsInput | string | null;
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    cognitiveStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: NullableStringFieldUpdateOperationsInput | string | null;
    languages?: ElderUpdatelanguagesInput | string[];
    religion?: NullableStringFieldUpdateOperationsInput | string | null;
    dietaryNeeds?: NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactPhone?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactRelation?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    user?: UserUpdateOneRequiredWithoutElderNestedInput;
    relative?: RelativeUpdateManyWithoutElderNestedInput;
  };

  export type ElderUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null;
    medicalConditions?: ElderUpdatemedicalConditionsInput | string[];
    allergies?: ElderUpdateallergiesInput | string[];
    medications?: ElderUpdatemedicationsInput | string[];
    disability?: NullableStringFieldUpdateOperationsInput | string | null;
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    cognitiveStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: NullableStringFieldUpdateOperationsInput | string | null;
    languages?: ElderUpdatelanguagesInput | string[];
    religion?: NullableStringFieldUpdateOperationsInput | string | null;
    dietaryNeeds?: NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactPhone?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactRelation?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    relative?: RelativeUncheckedUpdateManyWithoutElderNestedInput;
  };

  export type ElderCreateManyInput = {
    userId: string;
    bloodType?: string | null;
    medicalConditions?: ElderCreatemedicalConditionsInput | string[];
    allergies?: ElderCreateallergiesInput | string[];
    medications?: ElderCreatemedicationsInput | string[];
    disability?: string | null;
    mobilityStatus?: string | null;
    cognitiveStatus?: string | null;
    maritalStatus?: string | null;
    occupation?: string | null;
    languages?: ElderCreatelanguagesInput | string[];
    religion?: string | null;
    dietaryNeeds?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelation?: string | null;
  };

  export type ElderUpdateManyMutationInput = {
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null;
    medicalConditions?: ElderUpdatemedicalConditionsInput | string[];
    allergies?: ElderUpdateallergiesInput | string[];
    medications?: ElderUpdatemedicationsInput | string[];
    disability?: NullableStringFieldUpdateOperationsInput | string | null;
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    cognitiveStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: NullableStringFieldUpdateOperationsInput | string | null;
    languages?: ElderUpdatelanguagesInput | string[];
    religion?: NullableStringFieldUpdateOperationsInput | string | null;
    dietaryNeeds?: NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactPhone?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactRelation?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
  };

  export type ElderUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null;
    medicalConditions?: ElderUpdatemedicalConditionsInput | string[];
    allergies?: ElderUpdateallergiesInput | string[];
    medications?: ElderUpdatemedicationsInput | string[];
    disability?: NullableStringFieldUpdateOperationsInput | string | null;
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    cognitiveStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: NullableStringFieldUpdateOperationsInput | string | null;
    languages?: ElderUpdatelanguagesInput | string[];
    religion?: NullableStringFieldUpdateOperationsInput | string | null;
    dietaryNeeds?: NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactPhone?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactRelation?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
  };

  export type CaregiverCreateInput = {
    caregiverType: $Enums.CaregiverType;
    specialization?: string | null;
    licenseNumber?: string | null;
    experienceYears?: number | null;
    languages?: CaregiverCreatelanguagesInput | string[];
    available?: boolean;
    user: UserCreateNestedOneWithoutCaregiverInput;
  };

  export type CaregiverUncheckedCreateInput = {
    userId: string;
    caregiverType: $Enums.CaregiverType;
    specialization?: string | null;
    licenseNumber?: string | null;
    experienceYears?: number | null;
    languages?: CaregiverCreatelanguagesInput | string[];
    available?: boolean;
  };

  export type CaregiverUpdateInput = {
    caregiverType?:
      | EnumCaregiverTypeFieldUpdateOperationsInput
      | $Enums.CaregiverType;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null;
    languages?: CaregiverUpdatelanguagesInput | string[];
    available?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutCaregiverNestedInput;
  };

  export type CaregiverUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverType?:
      | EnumCaregiverTypeFieldUpdateOperationsInput
      | $Enums.CaregiverType;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null;
    languages?: CaregiverUpdatelanguagesInput | string[];
    available?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type CaregiverCreateManyInput = {
    userId: string;
    caregiverType: $Enums.CaregiverType;
    specialization?: string | null;
    licenseNumber?: string | null;
    experienceYears?: number | null;
    languages?: CaregiverCreatelanguagesInput | string[];
    available?: boolean;
  };

  export type CaregiverUpdateManyMutationInput = {
    caregiverType?:
      | EnumCaregiverTypeFieldUpdateOperationsInput
      | $Enums.CaregiverType;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null;
    languages?: CaregiverUpdatelanguagesInput | string[];
    available?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type CaregiverUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverType?:
      | EnumCaregiverTypeFieldUpdateOperationsInput
      | $Enums.CaregiverType;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null;
    languages?: CaregiverUpdatelanguagesInput | string[];
    available?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type RelativeCreateInput = {
    relationshipToElder: string;
    user: UserCreateNestedOneWithoutRelativeInput;
    elder: ElderCreateNestedOneWithoutRelativeInput;
  };

  export type RelativeUncheckedCreateInput = {
    userId: string;
    relationshipToElder: string;
    elderId: string;
  };

  export type RelativeUpdateInput = {
    relationshipToElder?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutRelativeNestedInput;
    elder?: ElderUpdateOneRequiredWithoutRelativeNestedInput;
  };

  export type RelativeUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    relationshipToElder?: StringFieldUpdateOperationsInput | string;
    elderId?: StringFieldUpdateOperationsInput | string;
  };

  export type RelativeCreateManyInput = {
    userId: string;
    relationshipToElder: string;
    elderId: string;
  };

  export type RelativeUpdateManyMutationInput = {
    relationshipToElder?: StringFieldUpdateOperationsInput | string;
  };

  export type RelativeUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    relationshipToElder?: StringFieldUpdateOperationsInput | string;
    elderId?: StringFieldUpdateOperationsInput | string;
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

  export type RelativeNullableScalarRelationFilter = {
    is?: RelativeWhereInput | null;
    isNot?: RelativeWhereInput | null;
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

  export type RelativeListRelationFilter = {
    every?: RelativeWhereInput;
    some?: RelativeWhereInput;
    none?: RelativeWhereInput;
  };

  export type RelativeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ElderCountOrderByAggregateInput = {
    userId?: SortOrder;
    bloodType?: SortOrder;
    medicalConditions?: SortOrder;
    allergies?: SortOrder;
    medications?: SortOrder;
    disability?: SortOrder;
    mobilityStatus?: SortOrder;
    cognitiveStatus?: SortOrder;
    maritalStatus?: SortOrder;
    occupation?: SortOrder;
    languages?: SortOrder;
    religion?: SortOrder;
    dietaryNeeds?: SortOrder;
    emergencyContactName?: SortOrder;
    emergencyContactPhone?: SortOrder;
    emergencyContactRelation?: SortOrder;
  };

  export type ElderMaxOrderByAggregateInput = {
    userId?: SortOrder;
    bloodType?: SortOrder;
    disability?: SortOrder;
    mobilityStatus?: SortOrder;
    cognitiveStatus?: SortOrder;
    maritalStatus?: SortOrder;
    occupation?: SortOrder;
    religion?: SortOrder;
    dietaryNeeds?: SortOrder;
    emergencyContactName?: SortOrder;
    emergencyContactPhone?: SortOrder;
    emergencyContactRelation?: SortOrder;
  };

  export type ElderMinOrderByAggregateInput = {
    userId?: SortOrder;
    bloodType?: SortOrder;
    disability?: SortOrder;
    mobilityStatus?: SortOrder;
    cognitiveStatus?: SortOrder;
    maritalStatus?: SortOrder;
    occupation?: SortOrder;
    religion?: SortOrder;
    dietaryNeeds?: SortOrder;
    emergencyContactName?: SortOrder;
    emergencyContactPhone?: SortOrder;
    emergencyContactRelation?: SortOrder;
  };

  export type EnumCaregiverTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CaregiverType
      | EnumCaregiverTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CaregiverType[]
      | ListEnumCaregiverTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CaregiverType[]
      | ListEnumCaregiverTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumCaregiverTypeFilter<$PrismaModel> | $Enums.CaregiverType;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type CaregiverCountOrderByAggregateInput = {
    userId?: SortOrder;
    caregiverType?: SortOrder;
    specialization?: SortOrder;
    licenseNumber?: SortOrder;
    experienceYears?: SortOrder;
    languages?: SortOrder;
    available?: SortOrder;
  };

  export type CaregiverAvgOrderByAggregateInput = {
    experienceYears?: SortOrder;
  };

  export type CaregiverMaxOrderByAggregateInput = {
    userId?: SortOrder;
    caregiverType?: SortOrder;
    specialization?: SortOrder;
    licenseNumber?: SortOrder;
    experienceYears?: SortOrder;
    available?: SortOrder;
  };

  export type CaregiverMinOrderByAggregateInput = {
    userId?: SortOrder;
    caregiverType?: SortOrder;
    specialization?: SortOrder;
    licenseNumber?: SortOrder;
    experienceYears?: SortOrder;
    available?: SortOrder;
  };

  export type CaregiverSumOrderByAggregateInput = {
    experienceYears?: SortOrder;
  };

  export type EnumCaregiverTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CaregiverType
      | EnumCaregiverTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CaregiverType[]
      | ListEnumCaregiverTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CaregiverType[]
      | ListEnumCaregiverTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCaregiverTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.CaregiverType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCaregiverTypeFilter<$PrismaModel>;
    _max?: NestedEnumCaregiverTypeFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type ElderScalarRelationFilter = {
    is?: ElderWhereInput;
    isNot?: ElderWhereInput;
  };

  export type RelativeCountOrderByAggregateInput = {
    userId?: SortOrder;
    relationshipToElder?: SortOrder;
    elderId?: SortOrder;
  };

  export type RelativeMaxOrderByAggregateInput = {
    userId?: SortOrder;
    relationshipToElder?: SortOrder;
    elderId?: SortOrder;
  };

  export type RelativeMinOrderByAggregateInput = {
    userId?: SortOrder;
    relationshipToElder?: SortOrder;
    elderId?: SortOrder;
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

  export type RelativeCreateNestedOneWithoutUserInput = {
    create?: XOR<
      RelativeCreateWithoutUserInput,
      RelativeUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: RelativeCreateOrConnectWithoutUserInput;
    connect?: RelativeWhereUniqueInput;
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

  export type RelativeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      RelativeCreateWithoutUserInput,
      RelativeUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: RelativeCreateOrConnectWithoutUserInput;
    connect?: RelativeWhereUniqueInput;
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

  export type RelativeUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      RelativeCreateWithoutUserInput,
      RelativeUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: RelativeCreateOrConnectWithoutUserInput;
    upsert?: RelativeUpsertWithoutUserInput;
    disconnect?: RelativeWhereInput | boolean;
    delete?: RelativeWhereInput | boolean;
    connect?: RelativeWhereUniqueInput;
    update?: XOR<
      XOR<
        RelativeUpdateToOneWithWhereWithoutUserInput,
        RelativeUpdateWithoutUserInput
      >,
      RelativeUncheckedUpdateWithoutUserInput
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

  export type RelativeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      RelativeCreateWithoutUserInput,
      RelativeUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: RelativeCreateOrConnectWithoutUserInput;
    upsert?: RelativeUpsertWithoutUserInput;
    disconnect?: RelativeWhereInput | boolean;
    delete?: RelativeWhereInput | boolean;
    connect?: RelativeWhereUniqueInput;
    update?: XOR<
      XOR<
        RelativeUpdateToOneWithWhereWithoutUserInput,
        RelativeUpdateWithoutUserInput
      >,
      RelativeUncheckedUpdateWithoutUserInput
    >;
  };

  export type ElderCreatemedicalConditionsInput = {
    set: string[];
  };

  export type ElderCreateallergiesInput = {
    set: string[];
  };

  export type ElderCreatemedicationsInput = {
    set: string[];
  };

  export type ElderCreatelanguagesInput = {
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

  export type RelativeCreateNestedManyWithoutElderInput = {
    create?:
      | XOR<
          RelativeCreateWithoutElderInput,
          RelativeUncheckedCreateWithoutElderInput
        >
      | RelativeCreateWithoutElderInput[]
      | RelativeUncheckedCreateWithoutElderInput[];
    connectOrCreate?:
      | RelativeCreateOrConnectWithoutElderInput
      | RelativeCreateOrConnectWithoutElderInput[];
    createMany?: RelativeCreateManyElderInputEnvelope;
    connect?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
  };

  export type RelativeUncheckedCreateNestedManyWithoutElderInput = {
    create?:
      | XOR<
          RelativeCreateWithoutElderInput,
          RelativeUncheckedCreateWithoutElderInput
        >
      | RelativeCreateWithoutElderInput[]
      | RelativeUncheckedCreateWithoutElderInput[];
    connectOrCreate?:
      | RelativeCreateOrConnectWithoutElderInput
      | RelativeCreateOrConnectWithoutElderInput[];
    createMany?: RelativeCreateManyElderInputEnvelope;
    connect?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
  };

  export type ElderUpdatemedicalConditionsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type ElderUpdateallergiesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type ElderUpdatemedicationsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type ElderUpdatelanguagesInput = {
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

  export type RelativeUpdateManyWithoutElderNestedInput = {
    create?:
      | XOR<
          RelativeCreateWithoutElderInput,
          RelativeUncheckedCreateWithoutElderInput
        >
      | RelativeCreateWithoutElderInput[]
      | RelativeUncheckedCreateWithoutElderInput[];
    connectOrCreate?:
      | RelativeCreateOrConnectWithoutElderInput
      | RelativeCreateOrConnectWithoutElderInput[];
    upsert?:
      | RelativeUpsertWithWhereUniqueWithoutElderInput
      | RelativeUpsertWithWhereUniqueWithoutElderInput[];
    createMany?: RelativeCreateManyElderInputEnvelope;
    set?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
    disconnect?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
    delete?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
    connect?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
    update?:
      | RelativeUpdateWithWhereUniqueWithoutElderInput
      | RelativeUpdateWithWhereUniqueWithoutElderInput[];
    updateMany?:
      | RelativeUpdateManyWithWhereWithoutElderInput
      | RelativeUpdateManyWithWhereWithoutElderInput[];
    deleteMany?: RelativeScalarWhereInput | RelativeScalarWhereInput[];
  };

  export type RelativeUncheckedUpdateManyWithoutElderNestedInput = {
    create?:
      | XOR<
          RelativeCreateWithoutElderInput,
          RelativeUncheckedCreateWithoutElderInput
        >
      | RelativeCreateWithoutElderInput[]
      | RelativeUncheckedCreateWithoutElderInput[];
    connectOrCreate?:
      | RelativeCreateOrConnectWithoutElderInput
      | RelativeCreateOrConnectWithoutElderInput[];
    upsert?:
      | RelativeUpsertWithWhereUniqueWithoutElderInput
      | RelativeUpsertWithWhereUniqueWithoutElderInput[];
    createMany?: RelativeCreateManyElderInputEnvelope;
    set?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
    disconnect?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
    delete?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
    connect?: RelativeWhereUniqueInput | RelativeWhereUniqueInput[];
    update?:
      | RelativeUpdateWithWhereUniqueWithoutElderInput
      | RelativeUpdateWithWhereUniqueWithoutElderInput[];
    updateMany?:
      | RelativeUpdateManyWithWhereWithoutElderInput
      | RelativeUpdateManyWithWhereWithoutElderInput[];
    deleteMany?: RelativeScalarWhereInput | RelativeScalarWhereInput[];
  };

  export type CaregiverCreatelanguagesInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutCaregiverInput = {
    create?: XOR<
      UserCreateWithoutCaregiverInput,
      UserUncheckedCreateWithoutCaregiverInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCaregiverInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumCaregiverTypeFieldUpdateOperationsInput = {
    set?: $Enums.CaregiverType;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CaregiverUpdatelanguagesInput = {
    set?: string[];
    push?: string | string[];
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

  export type UserCreateNestedOneWithoutRelativeInput = {
    create?: XOR<
      UserCreateWithoutRelativeInput,
      UserUncheckedCreateWithoutRelativeInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRelativeInput;
    connect?: UserWhereUniqueInput;
  };

  export type ElderCreateNestedOneWithoutRelativeInput = {
    create?: XOR<
      ElderCreateWithoutRelativeInput,
      ElderUncheckedCreateWithoutRelativeInput
    >;
    connectOrCreate?: ElderCreateOrConnectWithoutRelativeInput;
    connect?: ElderWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutRelativeNestedInput = {
    create?: XOR<
      UserCreateWithoutRelativeInput,
      UserUncheckedCreateWithoutRelativeInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRelativeInput;
    upsert?: UserUpsertWithoutRelativeInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutRelativeInput,
        UserUpdateWithoutRelativeInput
      >,
      UserUncheckedUpdateWithoutRelativeInput
    >;
  };

  export type ElderUpdateOneRequiredWithoutRelativeNestedInput = {
    create?: XOR<
      ElderCreateWithoutRelativeInput,
      ElderUncheckedCreateWithoutRelativeInput
    >;
    connectOrCreate?: ElderCreateOrConnectWithoutRelativeInput;
    upsert?: ElderUpsertWithoutRelativeInput;
    connect?: ElderWhereUniqueInput;
    update?: XOR<
      XOR<
        ElderUpdateToOneWithWhereWithoutRelativeInput,
        ElderUpdateWithoutRelativeInput
      >,
      ElderUncheckedUpdateWithoutRelativeInput
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

  export type NestedEnumCaregiverTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CaregiverType
      | EnumCaregiverTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CaregiverType[]
      | ListEnumCaregiverTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CaregiverType[]
      | ListEnumCaregiverTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumCaregiverTypeFilter<$PrismaModel> | $Enums.CaregiverType;
  };

  export type NestedEnumCaregiverTypeWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.CaregiverType
      | EnumCaregiverTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CaregiverType[]
      | ListEnumCaregiverTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CaregiverType[]
      | ListEnumCaregiverTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCaregiverTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.CaregiverType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCaregiverTypeFilter<$PrismaModel>;
    _max?: NestedEnumCaregiverTypeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type CaregiverCreateWithoutUserInput = {
    caregiverType: $Enums.CaregiverType;
    specialization?: string | null;
    licenseNumber?: string | null;
    experienceYears?: number | null;
    languages?: CaregiverCreatelanguagesInput | string[];
    available?: boolean;
  };

  export type CaregiverUncheckedCreateWithoutUserInput = {
    caregiverType: $Enums.CaregiverType;
    specialization?: string | null;
    licenseNumber?: string | null;
    experienceYears?: number | null;
    languages?: CaregiverCreatelanguagesInput | string[];
    available?: boolean;
  };

  export type CaregiverCreateOrConnectWithoutUserInput = {
    where: CaregiverWhereUniqueInput;
    create: XOR<
      CaregiverCreateWithoutUserInput,
      CaregiverUncheckedCreateWithoutUserInput
    >;
  };

  export type ElderCreateWithoutUserInput = {
    bloodType?: string | null;
    medicalConditions?: ElderCreatemedicalConditionsInput | string[];
    allergies?: ElderCreateallergiesInput | string[];
    medications?: ElderCreatemedicationsInput | string[];
    disability?: string | null;
    mobilityStatus?: string | null;
    cognitiveStatus?: string | null;
    maritalStatus?: string | null;
    occupation?: string | null;
    languages?: ElderCreatelanguagesInput | string[];
    religion?: string | null;
    dietaryNeeds?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelation?: string | null;
    relative?: RelativeCreateNestedManyWithoutElderInput;
  };

  export type ElderUncheckedCreateWithoutUserInput = {
    bloodType?: string | null;
    medicalConditions?: ElderCreatemedicalConditionsInput | string[];
    allergies?: ElderCreateallergiesInput | string[];
    medications?: ElderCreatemedicationsInput | string[];
    disability?: string | null;
    mobilityStatus?: string | null;
    cognitiveStatus?: string | null;
    maritalStatus?: string | null;
    occupation?: string | null;
    languages?: ElderCreatelanguagesInput | string[];
    religion?: string | null;
    dietaryNeeds?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelation?: string | null;
    relative?: RelativeUncheckedCreateNestedManyWithoutElderInput;
  };

  export type ElderCreateOrConnectWithoutUserInput = {
    where: ElderWhereUniqueInput;
    create: XOR<
      ElderCreateWithoutUserInput,
      ElderUncheckedCreateWithoutUserInput
    >;
  };

  export type RelativeCreateWithoutUserInput = {
    relationshipToElder: string;
    elder: ElderCreateNestedOneWithoutRelativeInput;
  };

  export type RelativeUncheckedCreateWithoutUserInput = {
    relationshipToElder: string;
    elderId: string;
  };

  export type RelativeCreateOrConnectWithoutUserInput = {
    where: RelativeWhereUniqueInput;
    create: XOR<
      RelativeCreateWithoutUserInput,
      RelativeUncheckedCreateWithoutUserInput
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
    caregiverType?:
      | EnumCaregiverTypeFieldUpdateOperationsInput
      | $Enums.CaregiverType;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null;
    languages?: CaregiverUpdatelanguagesInput | string[];
    available?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type CaregiverUncheckedUpdateWithoutUserInput = {
    caregiverType?:
      | EnumCaregiverTypeFieldUpdateOperationsInput
      | $Enums.CaregiverType;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null;
    languages?: CaregiverUpdatelanguagesInput | string[];
    available?: BoolFieldUpdateOperationsInput | boolean;
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
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null;
    medicalConditions?: ElderUpdatemedicalConditionsInput | string[];
    allergies?: ElderUpdateallergiesInput | string[];
    medications?: ElderUpdatemedicationsInput | string[];
    disability?: NullableStringFieldUpdateOperationsInput | string | null;
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    cognitiveStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: NullableStringFieldUpdateOperationsInput | string | null;
    languages?: ElderUpdatelanguagesInput | string[];
    religion?: NullableStringFieldUpdateOperationsInput | string | null;
    dietaryNeeds?: NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactPhone?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactRelation?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    relative?: RelativeUpdateManyWithoutElderNestedInput;
  };

  export type ElderUncheckedUpdateWithoutUserInput = {
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null;
    medicalConditions?: ElderUpdatemedicalConditionsInput | string[];
    allergies?: ElderUpdateallergiesInput | string[];
    medications?: ElderUpdatemedicationsInput | string[];
    disability?: NullableStringFieldUpdateOperationsInput | string | null;
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    cognitiveStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: NullableStringFieldUpdateOperationsInput | string | null;
    languages?: ElderUpdatelanguagesInput | string[];
    religion?: NullableStringFieldUpdateOperationsInput | string | null;
    dietaryNeeds?: NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactPhone?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactRelation?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    relative?: RelativeUncheckedUpdateManyWithoutElderNestedInput;
  };

  export type RelativeUpsertWithoutUserInput = {
    update: XOR<
      RelativeUpdateWithoutUserInput,
      RelativeUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      RelativeCreateWithoutUserInput,
      RelativeUncheckedCreateWithoutUserInput
    >;
    where?: RelativeWhereInput;
  };

  export type RelativeUpdateToOneWithWhereWithoutUserInput = {
    where?: RelativeWhereInput;
    data: XOR<
      RelativeUpdateWithoutUserInput,
      RelativeUncheckedUpdateWithoutUserInput
    >;
  };

  export type RelativeUpdateWithoutUserInput = {
    relationshipToElder?: StringFieldUpdateOperationsInput | string;
    elder?: ElderUpdateOneRequiredWithoutRelativeNestedInput;
  };

  export type RelativeUncheckedUpdateWithoutUserInput = {
    relationshipToElder?: StringFieldUpdateOperationsInput | string;
    elderId?: StringFieldUpdateOperationsInput | string;
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
    relative?: RelativeCreateNestedOneWithoutUserInput;
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
    relative?: RelativeUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutElderInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutElderInput,
      UserUncheckedCreateWithoutElderInput
    >;
  };

  export type RelativeCreateWithoutElderInput = {
    relationshipToElder: string;
    user: UserCreateNestedOneWithoutRelativeInput;
  };

  export type RelativeUncheckedCreateWithoutElderInput = {
    userId: string;
    relationshipToElder: string;
  };

  export type RelativeCreateOrConnectWithoutElderInput = {
    where: RelativeWhereUniqueInput;
    create: XOR<
      RelativeCreateWithoutElderInput,
      RelativeUncheckedCreateWithoutElderInput
    >;
  };

  export type RelativeCreateManyElderInputEnvelope = {
    data: RelativeCreateManyElderInput | RelativeCreateManyElderInput[];
    skipDuplicates?: boolean;
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
    relative?: RelativeUpdateOneWithoutUserNestedInput;
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
    relative?: RelativeUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type RelativeUpsertWithWhereUniqueWithoutElderInput = {
    where: RelativeWhereUniqueInput;
    update: XOR<
      RelativeUpdateWithoutElderInput,
      RelativeUncheckedUpdateWithoutElderInput
    >;
    create: XOR<
      RelativeCreateWithoutElderInput,
      RelativeUncheckedCreateWithoutElderInput
    >;
  };

  export type RelativeUpdateWithWhereUniqueWithoutElderInput = {
    where: RelativeWhereUniqueInput;
    data: XOR<
      RelativeUpdateWithoutElderInput,
      RelativeUncheckedUpdateWithoutElderInput
    >;
  };

  export type RelativeUpdateManyWithWhereWithoutElderInput = {
    where: RelativeScalarWhereInput;
    data: XOR<
      RelativeUpdateManyMutationInput,
      RelativeUncheckedUpdateManyWithoutElderInput
    >;
  };

  export type RelativeScalarWhereInput = {
    AND?: RelativeScalarWhereInput | RelativeScalarWhereInput[];
    OR?: RelativeScalarWhereInput[];
    NOT?: RelativeScalarWhereInput | RelativeScalarWhereInput[];
    userId?: StringFilter<'Relative'> | string;
    relationshipToElder?: StringFilter<'Relative'> | string;
    elderId?: StringFilter<'Relative'> | string;
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
    relative?: RelativeCreateNestedOneWithoutUserInput;
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
    relative?: RelativeUncheckedCreateNestedOneWithoutUserInput;
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
    relative?: RelativeUpdateOneWithoutUserNestedInput;
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
    relative?: RelativeUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateWithoutRelativeInput = {
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

  export type UserUncheckedCreateWithoutRelativeInput = {
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

  export type UserCreateOrConnectWithoutRelativeInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRelativeInput,
      UserUncheckedCreateWithoutRelativeInput
    >;
  };

  export type ElderCreateWithoutRelativeInput = {
    bloodType?: string | null;
    medicalConditions?: ElderCreatemedicalConditionsInput | string[];
    allergies?: ElderCreateallergiesInput | string[];
    medications?: ElderCreatemedicationsInput | string[];
    disability?: string | null;
    mobilityStatus?: string | null;
    cognitiveStatus?: string | null;
    maritalStatus?: string | null;
    occupation?: string | null;
    languages?: ElderCreatelanguagesInput | string[];
    religion?: string | null;
    dietaryNeeds?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelation?: string | null;
    user: UserCreateNestedOneWithoutElderInput;
  };

  export type ElderUncheckedCreateWithoutRelativeInput = {
    userId: string;
    bloodType?: string | null;
    medicalConditions?: ElderCreatemedicalConditionsInput | string[];
    allergies?: ElderCreateallergiesInput | string[];
    medications?: ElderCreatemedicationsInput | string[];
    disability?: string | null;
    mobilityStatus?: string | null;
    cognitiveStatus?: string | null;
    maritalStatus?: string | null;
    occupation?: string | null;
    languages?: ElderCreatelanguagesInput | string[];
    religion?: string | null;
    dietaryNeeds?: string | null;
    emergencyContactName?: string | null;
    emergencyContactPhone?: string | null;
    emergencyContactRelation?: string | null;
  };

  export type ElderCreateOrConnectWithoutRelativeInput = {
    where: ElderWhereUniqueInput;
    create: XOR<
      ElderCreateWithoutRelativeInput,
      ElderUncheckedCreateWithoutRelativeInput
    >;
  };

  export type UserUpsertWithoutRelativeInput = {
    update: XOR<
      UserUpdateWithoutRelativeInput,
      UserUncheckedUpdateWithoutRelativeInput
    >;
    create: XOR<
      UserCreateWithoutRelativeInput,
      UserUncheckedCreateWithoutRelativeInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutRelativeInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutRelativeInput,
      UserUncheckedUpdateWithoutRelativeInput
    >;
  };

  export type UserUpdateWithoutRelativeInput = {
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

  export type UserUncheckedUpdateWithoutRelativeInput = {
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

  export type ElderUpsertWithoutRelativeInput = {
    update: XOR<
      ElderUpdateWithoutRelativeInput,
      ElderUncheckedUpdateWithoutRelativeInput
    >;
    create: XOR<
      ElderCreateWithoutRelativeInput,
      ElderUncheckedCreateWithoutRelativeInput
    >;
    where?: ElderWhereInput;
  };

  export type ElderUpdateToOneWithWhereWithoutRelativeInput = {
    where?: ElderWhereInput;
    data: XOR<
      ElderUpdateWithoutRelativeInput,
      ElderUncheckedUpdateWithoutRelativeInput
    >;
  };

  export type ElderUpdateWithoutRelativeInput = {
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null;
    medicalConditions?: ElderUpdatemedicalConditionsInput | string[];
    allergies?: ElderUpdateallergiesInput | string[];
    medications?: ElderUpdatemedicationsInput | string[];
    disability?: NullableStringFieldUpdateOperationsInput | string | null;
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    cognitiveStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: NullableStringFieldUpdateOperationsInput | string | null;
    languages?: ElderUpdatelanguagesInput | string[];
    religion?: NullableStringFieldUpdateOperationsInput | string | null;
    dietaryNeeds?: NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactPhone?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactRelation?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    user?: UserUpdateOneRequiredWithoutElderNestedInput;
  };

  export type ElderUncheckedUpdateWithoutRelativeInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null;
    medicalConditions?: ElderUpdatemedicalConditionsInput | string[];
    allergies?: ElderUpdateallergiesInput | string[];
    medications?: ElderUpdatemedicationsInput | string[];
    disability?: NullableStringFieldUpdateOperationsInput | string | null;
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    cognitiveStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: NullableStringFieldUpdateOperationsInput | string | null;
    languages?: ElderUpdatelanguagesInput | string[];
    religion?: NullableStringFieldUpdateOperationsInput | string | null;
    dietaryNeeds?: NullableStringFieldUpdateOperationsInput | string | null;
    emergencyContactName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactPhone?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    emergencyContactRelation?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
  };

  export type RelativeCreateManyElderInput = {
    userId: string;
    relationshipToElder: string;
  };

  export type RelativeUpdateWithoutElderInput = {
    relationshipToElder?: StringFieldUpdateOperationsInput | string;
    user?: UserUpdateOneRequiredWithoutRelativeNestedInput;
  };

  export type RelativeUncheckedUpdateWithoutElderInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    relationshipToElder?: StringFieldUpdateOperationsInput | string;
  };

  export type RelativeUncheckedUpdateManyWithoutElderInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    relationshipToElder?: StringFieldUpdateOperationsInput | string;
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
