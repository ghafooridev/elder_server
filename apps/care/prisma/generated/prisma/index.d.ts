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
 * Model CareCategory
 *
 */
export type CareCategory =
  $Result.DefaultSelection<Prisma.$CareCategoryPayload>;
/**
 * Model Care
 *
 */
export type Care = $Result.DefaultSelection<Prisma.$CarePayload>;
/**
 * Model Booking
 *
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const BookingStatus: {
    PENDING: 'PENDING';
    CONFIRMED: 'CONFIRMED';
    CANCELLED: 'CANCELLED';
    COMPLETED: 'COMPLETED';
  };

  export type BookingStatus =
    (typeof BookingStatus)[keyof typeof BookingStatus];
}

export type BookingStatus = $Enums.BookingStatus;

export const BookingStatus: typeof $Enums.BookingStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CareCategories
 * const careCategories = await prisma.careCategory.findMany()
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
   * // Fetch zero or more CareCategories
   * const careCategories = await prisma.careCategory.findMany()
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
   * `prisma.careCategory`: Exposes CRUD operations for the **CareCategory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CareCategories
   * const careCategories = await prisma.careCategory.findMany()
   * ```
   */
  get careCategory(): Prisma.CareCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.care`: Exposes CRUD operations for the **Care** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cares
   * const cares = await prisma.care.findMany()
   * ```
   */
  get care(): Prisma.CareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
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
    CareCategory: 'CareCategory';
    Care: 'Care';
    Booking: 'Booking';
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
      modelProps: 'careCategory' | 'care' | 'booking';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      CareCategory: {
        payload: Prisma.$CareCategoryPayload<ExtArgs>;
        fields: Prisma.CareCategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CareCategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CareCategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload>;
          };
          findFirst: {
            args: Prisma.CareCategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CareCategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload>;
          };
          findMany: {
            args: Prisma.CareCategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload>[];
          };
          create: {
            args: Prisma.CareCategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload>;
          };
          createMany: {
            args: Prisma.CareCategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CareCategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload>[];
          };
          delete: {
            args: Prisma.CareCategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload>;
          };
          update: {
            args: Prisma.CareCategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CareCategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CareCategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CareCategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload>[];
          };
          upsert: {
            args: Prisma.CareCategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CareCategoryPayload>;
          };
          aggregate: {
            args: Prisma.CareCategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCareCategory>;
          };
          groupBy: {
            args: Prisma.CareCategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CareCategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CareCategoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CareCategoryCountAggregateOutputType>
              | number;
          };
        };
      };
      Care: {
        payload: Prisma.$CarePayload<ExtArgs>;
        fields: Prisma.CareFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CareFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CareFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload>;
          };
          findFirst: {
            args: Prisma.CareFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CareFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload>;
          };
          findMany: {
            args: Prisma.CareFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload>[];
          };
          create: {
            args: Prisma.CareCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload>;
          };
          createMany: {
            args: Prisma.CareCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CareCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload>[];
          };
          delete: {
            args: Prisma.CareDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload>;
          };
          update: {
            args: Prisma.CareUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload>;
          };
          deleteMany: {
            args: Prisma.CareDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CareUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CareUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload>[];
          };
          upsert: {
            args: Prisma.CareUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarePayload>;
          };
          aggregate: {
            args: Prisma.CareAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCare>;
          };
          groupBy: {
            args: Prisma.CareGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CareGroupByOutputType>[];
          };
          count: {
            args: Prisma.CareCountArgs<ExtArgs>;
            result: $Utils.Optional<CareCountAggregateOutputType> | number;
          };
        };
      };
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>;
        fields: Prisma.BookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
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
    careCategory?: CareCategoryOmit;
    care?: CareOmit;
    booking?: BookingOmit;
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
   * Count Type CareCategoryCountOutputType
   */

  export type CareCategoryCountOutputType = {
    cares: number;
  };

  export type CareCategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    cares?: boolean | CareCategoryCountOutputTypeCountCaresArgs;
  };

  // Custom InputTypes
  /**
   * CareCategoryCountOutputType without action
   */
  export type CareCategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategoryCountOutputType
     */
    select?: CareCategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CareCategoryCountOutputType without action
   */
  export type CareCategoryCountOutputTypeCountCaresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CareWhereInput;
  };

  /**
   * Count Type CareCountOutputType
   */

  export type CareCountOutputType = {
    bookings: number;
  };

  export type CareCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    bookings?: boolean | CareCountOutputTypeCountBookingsArgs;
  };

  // Custom InputTypes
  /**
   * CareCountOutputType without action
   */
  export type CareCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCountOutputType
     */
    select?: CareCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CareCountOutputType without action
   */
  export type CareCountOutputTypeCountBookingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model CareCategory
   */

  export type AggregateCareCategory = {
    _count: CareCategoryCountAggregateOutputType | null;
    _min: CareCategoryMinAggregateOutputType | null;
    _max: CareCategoryMaxAggregateOutputType | null;
  };

  export type CareCategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
  };

  export type CareCategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
  };

  export type CareCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    _all: number;
  };

  export type CareCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
  };

  export type CareCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
  };

  export type CareCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
  };

  export type CareCategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which CareCategory to aggregate.
     */
    where?: CareCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CareCategories to fetch.
     */
    orderBy?:
      | CareCategoryOrderByWithRelationInput
      | CareCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CareCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CareCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CareCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CareCategories
     **/
    _count?: true | CareCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CareCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CareCategoryMaxAggregateInputType;
  };

  export type GetCareCategoryAggregateType<
    T extends CareCategoryAggregateArgs
  > = {
    [P in keyof T & keyof AggregateCareCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareCategory[P]>
      : GetScalarType<T[P], AggregateCareCategory[P]>;
  };

  export type CareCategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CareCategoryWhereInput;
    orderBy?:
      | CareCategoryOrderByWithAggregationInput
      | CareCategoryOrderByWithAggregationInput[];
    by: CareCategoryScalarFieldEnum[] | CareCategoryScalarFieldEnum;
    having?: CareCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CareCategoryCountAggregateInputType | true;
    _min?: CareCategoryMinAggregateInputType;
    _max?: CareCategoryMaxAggregateInputType;
  };

  export type CareCategoryGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    _count: CareCategoryCountAggregateOutputType | null;
    _min: CareCategoryMinAggregateOutputType | null;
    _max: CareCategoryMaxAggregateOutputType | null;
  };

  type GetCareCategoryGroupByPayload<T extends CareCategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CareCategoryGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof CareCategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CareCategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CareCategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
      cares?: boolean | CareCategory$caresArgs<ExtArgs>;
      _count?: boolean | CareCategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['careCategory']
  >;

  export type CareCategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['careCategory']
  >;

  export type CareCategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['careCategory']
  >;

  export type CareCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
  };

  export type CareCategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'id' | 'name' | 'description' | 'createdAt',
    ExtArgs['result']['careCategory']
  >;
  export type CareCategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    cares?: boolean | CareCategory$caresArgs<ExtArgs>;
    _count?: boolean | CareCategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CareCategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};
  export type CareCategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};

  export type $CareCategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'CareCategory';
    objects: {
      cares: Prisma.$CarePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
      },
      ExtArgs['result']['careCategory']
    >;
    composites: {};
  };

  type CareCategoryGetPayload<
    S extends boolean | null | undefined | CareCategoryDefaultArgs
  > = $Result.GetResult<Prisma.$CareCategoryPayload, S>;

  type CareCategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    CareCategoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CareCategoryCountAggregateInputType | true;
  };

  export interface CareCategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CareCategory'];
      meta: { name: 'CareCategory' };
    };
    /**
     * Find zero or one CareCategory that matches the filter.
     * @param {CareCategoryFindUniqueArgs} args - Arguments to find a CareCategory
     * @example
     * // Get one CareCategory
     * const careCategory = await prisma.careCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareCategoryFindUniqueArgs>(
      args: SelectSubset<T, CareCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CareCategoryClient<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CareCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareCategoryFindUniqueOrThrowArgs} args - Arguments to find a CareCategory
     * @example
     * // Get one CareCategory
     * const careCategory = await prisma.careCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareCategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CareCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CareCategoryClient<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CareCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCategoryFindFirstArgs} args - Arguments to find a CareCategory
     * @example
     * // Get one CareCategory
     * const careCategory = await prisma.careCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareCategoryFindFirstArgs>(
      args?: SelectSubset<T, CareCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CareCategoryClient<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CareCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCategoryFindFirstOrThrowArgs} args - Arguments to find a CareCategory
     * @example
     * // Get one CareCategory
     * const careCategory = await prisma.careCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CareCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CareCategoryClient<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CareCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareCategories
     * const careCategories = await prisma.careCategory.findMany()
     *
     * // Get first 10 CareCategories
     * const careCategories = await prisma.careCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const careCategoryWithIdOnly = await prisma.careCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CareCategoryFindManyArgs>(
      args?: SelectSubset<T, CareCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CareCategory.
     * @param {CareCategoryCreateArgs} args - Arguments to create a CareCategory.
     * @example
     * // Create one CareCategory
     * const CareCategory = await prisma.careCategory.create({
     *   data: {
     *     // ... data to create a CareCategory
     *   }
     * })
     *
     */
    create<T extends CareCategoryCreateArgs>(
      args: SelectSubset<T, CareCategoryCreateArgs<ExtArgs>>
    ): Prisma__CareCategoryClient<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CareCategories.
     * @param {CareCategoryCreateManyArgs} args - Arguments to create many CareCategories.
     * @example
     * // Create many CareCategories
     * const careCategory = await prisma.careCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CareCategoryCreateManyArgs>(
      args?: SelectSubset<T, CareCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CareCategories and returns the data saved in the database.
     * @param {CareCategoryCreateManyAndReturnArgs} args - Arguments to create many CareCategories.
     * @example
     * // Create many CareCategories
     * const careCategory = await prisma.careCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CareCategories and only return the `id`
     * const careCategoryWithIdOnly = await prisma.careCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CareCategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CareCategoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CareCategory.
     * @param {CareCategoryDeleteArgs} args - Arguments to delete one CareCategory.
     * @example
     * // Delete one CareCategory
     * const CareCategory = await prisma.careCategory.delete({
     *   where: {
     *     // ... filter to delete one CareCategory
     *   }
     * })
     *
     */
    delete<T extends CareCategoryDeleteArgs>(
      args: SelectSubset<T, CareCategoryDeleteArgs<ExtArgs>>
    ): Prisma__CareCategoryClient<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CareCategory.
     * @param {CareCategoryUpdateArgs} args - Arguments to update one CareCategory.
     * @example
     * // Update one CareCategory
     * const careCategory = await prisma.careCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CareCategoryUpdateArgs>(
      args: SelectSubset<T, CareCategoryUpdateArgs<ExtArgs>>
    ): Prisma__CareCategoryClient<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CareCategories.
     * @param {CareCategoryDeleteManyArgs} args - Arguments to filter CareCategories to delete.
     * @example
     * // Delete a few CareCategories
     * const { count } = await prisma.careCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CareCategoryDeleteManyArgs>(
      args?: SelectSubset<T, CareCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CareCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareCategories
     * const careCategory = await prisma.careCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CareCategoryUpdateManyArgs>(
      args: SelectSubset<T, CareCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CareCategories and returns the data updated in the database.
     * @param {CareCategoryUpdateManyAndReturnArgs} args - Arguments to update many CareCategories.
     * @example
     * // Update many CareCategories
     * const careCategory = await prisma.careCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CareCategories and only return the `id`
     * const careCategoryWithIdOnly = await prisma.careCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends CareCategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CareCategoryUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CareCategory.
     * @param {CareCategoryUpsertArgs} args - Arguments to update or create a CareCategory.
     * @example
     * // Update or create a CareCategory
     * const careCategory = await prisma.careCategory.upsert({
     *   create: {
     *     // ... data to create a CareCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareCategory we want to update
     *   }
     * })
     */
    upsert<T extends CareCategoryUpsertArgs>(
      args: SelectSubset<T, CareCategoryUpsertArgs<ExtArgs>>
    ): Prisma__CareCategoryClient<
      $Result.GetResult<
        Prisma.$CareCategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CareCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCategoryCountArgs} args - Arguments to filter CareCategories to count.
     * @example
     * // Count the number of CareCategories
     * const count = await prisma.careCategory.count({
     *   where: {
     *     // ... the filter for the CareCategories we want to count
     *   }
     * })
     **/
    count<T extends CareCategoryCountArgs>(
      args?: Subset<T, CareCategoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareCategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CareCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareCategoryAggregateArgs>(
      args: Subset<T, CareCategoryAggregateArgs>
    ): Prisma.PrismaPromise<GetCareCategoryAggregateType<T>>;

    /**
     * Group by CareCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCategoryGroupByArgs} args - Group by arguments.
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
      T extends CareCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareCategoryGroupByArgs['orderBy'] }
        : { orderBy?: CareCategoryGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, CareCategoryGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetCareCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CareCategory model
     */
    readonly fields: CareCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareCategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    cares<T extends CareCategory$caresArgs<ExtArgs> = {}>(
      args?: Subset<T, CareCategory$caresArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CarePayload<ExtArgs>,
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
   * Fields of the CareCategory model
   */
  interface CareCategoryFieldRefs {
    readonly id: FieldRef<'CareCategory', 'String'>;
    readonly name: FieldRef<'CareCategory', 'String'>;
    readonly description: FieldRef<'CareCategory', 'String'>;
    readonly createdAt: FieldRef<'CareCategory', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * CareCategory findUnique
   */
  export type CareCategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CareCategory to fetch.
     */
    where: CareCategoryWhereUniqueInput;
  };

  /**
   * CareCategory findUniqueOrThrow
   */
  export type CareCategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CareCategory to fetch.
     */
    where: CareCategoryWhereUniqueInput;
  };

  /**
   * CareCategory findFirst
   */
  export type CareCategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CareCategory to fetch.
     */
    where?: CareCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CareCategories to fetch.
     */
    orderBy?:
      | CareCategoryOrderByWithRelationInput
      | CareCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CareCategories.
     */
    cursor?: CareCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CareCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CareCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CareCategories.
     */
    distinct?: CareCategoryScalarFieldEnum | CareCategoryScalarFieldEnum[];
  };

  /**
   * CareCategory findFirstOrThrow
   */
  export type CareCategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CareCategory to fetch.
     */
    where?: CareCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CareCategories to fetch.
     */
    orderBy?:
      | CareCategoryOrderByWithRelationInput
      | CareCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CareCategories.
     */
    cursor?: CareCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CareCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CareCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CareCategories.
     */
    distinct?: CareCategoryScalarFieldEnum | CareCategoryScalarFieldEnum[];
  };

  /**
   * CareCategory findMany
   */
  export type CareCategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which CareCategories to fetch.
     */
    where?: CareCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CareCategories to fetch.
     */
    orderBy?:
      | CareCategoryOrderByWithRelationInput
      | CareCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CareCategories.
     */
    cursor?: CareCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CareCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CareCategories.
     */
    skip?: number;
    distinct?: CareCategoryScalarFieldEnum | CareCategoryScalarFieldEnum[];
  };

  /**
   * CareCategory create
   */
  export type CareCategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a CareCategory.
     */
    data: XOR<CareCategoryCreateInput, CareCategoryUncheckedCreateInput>;
  };

  /**
   * CareCategory createMany
   */
  export type CareCategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many CareCategories.
     */
    data: CareCategoryCreateManyInput | CareCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CareCategory createManyAndReturn
   */
  export type CareCategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many CareCategories.
     */
    data: CareCategoryCreateManyInput | CareCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CareCategory update
   */
  export type CareCategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a CareCategory.
     */
    data: XOR<CareCategoryUpdateInput, CareCategoryUncheckedUpdateInput>;
    /**
     * Choose, which CareCategory to update.
     */
    where: CareCategoryWhereUniqueInput;
  };

  /**
   * CareCategory updateMany
   */
  export type CareCategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update CareCategories.
     */
    data: XOR<
      CareCategoryUpdateManyMutationInput,
      CareCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which CareCategories to update
     */
    where?: CareCategoryWhereInput;
    /**
     * Limit how many CareCategories to update.
     */
    limit?: number;
  };

  /**
   * CareCategory updateManyAndReturn
   */
  export type CareCategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update CareCategories.
     */
    data: XOR<
      CareCategoryUpdateManyMutationInput,
      CareCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which CareCategories to update
     */
    where?: CareCategoryWhereInput;
    /**
     * Limit how many CareCategories to update.
     */
    limit?: number;
  };

  /**
   * CareCategory upsert
   */
  export type CareCategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the CareCategory to update in case it exists.
     */
    where: CareCategoryWhereUniqueInput;
    /**
     * In case the CareCategory found by the `where` argument doesn't exist, create a new CareCategory with this data.
     */
    create: XOR<CareCategoryCreateInput, CareCategoryUncheckedCreateInput>;
    /**
     * In case the CareCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareCategoryUpdateInput, CareCategoryUncheckedUpdateInput>;
  };

  /**
   * CareCategory delete
   */
  export type CareCategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
    /**
     * Filter which CareCategory to delete.
     */
    where: CareCategoryWhereUniqueInput;
  };

  /**
   * CareCategory deleteMany
   */
  export type CareCategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which CareCategories to delete
     */
    where?: CareCategoryWhereInput;
    /**
     * Limit how many CareCategories to delete.
     */
    limit?: number;
  };

  /**
   * CareCategory.cares
   */
  export type CareCategory$caresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    where?: CareWhereInput;
    orderBy?: CareOrderByWithRelationInput | CareOrderByWithRelationInput[];
    cursor?: CareWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CareScalarFieldEnum | CareScalarFieldEnum[];
  };

  /**
   * CareCategory without action
   */
  export type CareCategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CareCategory
     */
    select?: CareCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CareCategory
     */
    omit?: CareCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Care
   */

  export type AggregateCare = {
    _count: CareCountAggregateOutputType | null;
    _avg: CareAvgAggregateOutputType | null;
    _sum: CareSumAggregateOutputType | null;
    _min: CareMinAggregateOutputType | null;
    _max: CareMaxAggregateOutputType | null;
  };

  export type CareAvgAggregateOutputType = {
    price: number | null;
    durationMin: number | null;
  };

  export type CareSumAggregateOutputType = {
    price: number | null;
    durationMin: number | null;
  };

  export type CareMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    price: number | null;
    durationMin: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    categoryId: string | null;
    caregiverId: string | null;
  };

  export type CareMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    price: number | null;
    durationMin: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    categoryId: string | null;
    caregiverId: string | null;
  };

  export type CareCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    price: number;
    durationMin: number;
    createdAt: number;
    updatedAt: number;
    categoryId: number;
    caregiverId: number;
    _all: number;
  };

  export type CareAvgAggregateInputType = {
    price?: true;
    durationMin?: true;
  };

  export type CareSumAggregateInputType = {
    price?: true;
    durationMin?: true;
  };

  export type CareMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    price?: true;
    durationMin?: true;
    createdAt?: true;
    updatedAt?: true;
    categoryId?: true;
    caregiverId?: true;
  };

  export type CareMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    price?: true;
    durationMin?: true;
    createdAt?: true;
    updatedAt?: true;
    categoryId?: true;
    caregiverId?: true;
  };

  export type CareCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    price?: true;
    durationMin?: true;
    createdAt?: true;
    updatedAt?: true;
    categoryId?: true;
    caregiverId?: true;
    _all?: true;
  };

  export type CareAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Care to aggregate.
     */
    where?: CareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cares to fetch.
     */
    orderBy?: CareOrderByWithRelationInput | CareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Cares
     **/
    _count?: true | CareCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CareAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CareSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CareMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CareMaxAggregateInputType;
  };

  export type GetCareAggregateType<T extends CareAggregateArgs> = {
    [P in keyof T & keyof AggregateCare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCare[P]>
      : GetScalarType<T[P], AggregateCare[P]>;
  };

  export type CareGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CareWhereInput;
    orderBy?:
      | CareOrderByWithAggregationInput
      | CareOrderByWithAggregationInput[];
    by: CareScalarFieldEnum[] | CareScalarFieldEnum;
    having?: CareScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CareCountAggregateInputType | true;
    _avg?: CareAvgAggregateInputType;
    _sum?: CareSumAggregateInputType;
    _min?: CareMinAggregateInputType;
    _max?: CareMaxAggregateInputType;
  };

  export type CareGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    price: number;
    durationMin: number | null;
    createdAt: Date;
    updatedAt: Date;
    categoryId: string;
    caregiverId: string;
    _count: CareCountAggregateOutputType | null;
    _avg: CareAvgAggregateOutputType | null;
    _sum: CareSumAggregateOutputType | null;
    _min: CareMinAggregateOutputType | null;
    _max: CareMaxAggregateOutputType | null;
  };

  type GetCareGroupByPayload<T extends CareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CareGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CareGroupByOutputType[P]>
          : GetScalarType<T[P], CareGroupByOutputType[P]>;
      }
    >
  >;

  export type CareSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      price?: boolean;
      durationMin?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      categoryId?: boolean;
      caregiverId?: boolean;
      category?: boolean | CareCategoryDefaultArgs<ExtArgs>;
      bookings?: boolean | Care$bookingsArgs<ExtArgs>;
      _count?: boolean | CareCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['care']
  >;

  export type CareSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      price?: boolean;
      durationMin?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      categoryId?: boolean;
      caregiverId?: boolean;
      category?: boolean | CareCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['care']
  >;

  export type CareSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      price?: boolean;
      durationMin?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      categoryId?: boolean;
      caregiverId?: boolean;
      category?: boolean | CareCategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['care']
  >;

  export type CareSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    price?: boolean;
    durationMin?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoryId?: boolean;
    caregiverId?: boolean;
  };

  export type CareOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'title'
    | 'description'
    | 'price'
    | 'durationMin'
    | 'createdAt'
    | 'updatedAt'
    | 'categoryId'
    | 'caregiverId',
    ExtArgs['result']['care']
  >;
  export type CareInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    category?: boolean | CareCategoryDefaultArgs<ExtArgs>;
    bookings?: boolean | Care$bookingsArgs<ExtArgs>;
    _count?: boolean | CareCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CareIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    category?: boolean | CareCategoryDefaultArgs<ExtArgs>;
  };
  export type CareIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    category?: boolean | CareCategoryDefaultArgs<ExtArgs>;
  };

  export type $CarePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Care';
    objects: {
      category: Prisma.$CareCategoryPayload<ExtArgs>;
      bookings: Prisma.$BookingPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        price: number;
        durationMin: number | null;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        caregiverId: string;
      },
      ExtArgs['result']['care']
    >;
    composites: {};
  };

  type CareGetPayload<S extends boolean | null | undefined | CareDefaultArgs> =
    $Result.GetResult<Prisma.$CarePayload, S>;

  type CareCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<CareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CareCountAggregateInputType | true;
  };

  export interface CareDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Care'];
      meta: { name: 'Care' };
    };
    /**
     * Find zero or one Care that matches the filter.
     * @param {CareFindUniqueArgs} args - Arguments to find a Care
     * @example
     * // Get one Care
     * const care = await prisma.care.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareFindUniqueArgs>(
      args: SelectSubset<T, CareFindUniqueArgs<ExtArgs>>
    ): Prisma__CareClient<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Care that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareFindUniqueOrThrowArgs} args - Arguments to find a Care
     * @example
     * // Get one Care
     * const care = await prisma.care.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CareFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CareClient<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Care that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareFindFirstArgs} args - Arguments to find a Care
     * @example
     * // Get one Care
     * const care = await prisma.care.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareFindFirstArgs>(
      args?: SelectSubset<T, CareFindFirstArgs<ExtArgs>>
    ): Prisma__CareClient<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Care that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareFindFirstOrThrowArgs} args - Arguments to find a Care
     * @example
     * // Get one Care
     * const care = await prisma.care.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CareFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CareClient<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Cares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cares
     * const cares = await prisma.care.findMany()
     *
     * // Get first 10 Cares
     * const cares = await prisma.care.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const careWithIdOnly = await prisma.care.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CareFindManyArgs>(
      args?: SelectSubset<T, CareFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Care.
     * @param {CareCreateArgs} args - Arguments to create a Care.
     * @example
     * // Create one Care
     * const Care = await prisma.care.create({
     *   data: {
     *     // ... data to create a Care
     *   }
     * })
     *
     */
    create<T extends CareCreateArgs>(
      args: SelectSubset<T, CareCreateArgs<ExtArgs>>
    ): Prisma__CareClient<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Cares.
     * @param {CareCreateManyArgs} args - Arguments to create many Cares.
     * @example
     * // Create many Cares
     * const care = await prisma.care.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CareCreateManyArgs>(
      args?: SelectSubset<T, CareCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Cares and returns the data saved in the database.
     * @param {CareCreateManyAndReturnArgs} args - Arguments to create many Cares.
     * @example
     * // Create many Cares
     * const care = await prisma.care.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Cares and only return the `id`
     * const careWithIdOnly = await prisma.care.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CareCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CareCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Care.
     * @param {CareDeleteArgs} args - Arguments to delete one Care.
     * @example
     * // Delete one Care
     * const Care = await prisma.care.delete({
     *   where: {
     *     // ... filter to delete one Care
     *   }
     * })
     *
     */
    delete<T extends CareDeleteArgs>(
      args: SelectSubset<T, CareDeleteArgs<ExtArgs>>
    ): Prisma__CareClient<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Care.
     * @param {CareUpdateArgs} args - Arguments to update one Care.
     * @example
     * // Update one Care
     * const care = await prisma.care.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CareUpdateArgs>(
      args: SelectSubset<T, CareUpdateArgs<ExtArgs>>
    ): Prisma__CareClient<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Cares.
     * @param {CareDeleteManyArgs} args - Arguments to filter Cares to delete.
     * @example
     * // Delete a few Cares
     * const { count } = await prisma.care.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CareDeleteManyArgs>(
      args?: SelectSubset<T, CareDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cares
     * const care = await prisma.care.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CareUpdateManyArgs>(
      args: SelectSubset<T, CareUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cares and returns the data updated in the database.
     * @param {CareUpdateManyAndReturnArgs} args - Arguments to update many Cares.
     * @example
     * // Update many Cares
     * const care = await prisma.care.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Cares and only return the `id`
     * const careWithIdOnly = await prisma.care.updateManyAndReturn({
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
    updateManyAndReturn<T extends CareUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CareUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Care.
     * @param {CareUpsertArgs} args - Arguments to update or create a Care.
     * @example
     * // Update or create a Care
     * const care = await prisma.care.upsert({
     *   create: {
     *     // ... data to create a Care
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Care we want to update
     *   }
     * })
     */
    upsert<T extends CareUpsertArgs>(
      args: SelectSubset<T, CareUpsertArgs<ExtArgs>>
    ): Prisma__CareClient<
      $Result.GetResult<
        Prisma.$CarePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Cares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCountArgs} args - Arguments to filter Cares to count.
     * @example
     * // Count the number of Cares
     * const count = await prisma.care.count({
     *   where: {
     *     // ... the filter for the Cares we want to count
     *   }
     * })
     **/
    count<T extends CareCountArgs>(
      args?: Subset<T, CareCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Care.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareAggregateArgs>(
      args: Subset<T, CareAggregateArgs>
    ): Prisma.PrismaPromise<GetCareAggregateType<T>>;

    /**
     * Group by Care.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareGroupByArgs} args - Group by arguments.
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
      T extends CareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareGroupByArgs['orderBy'] }
        : { orderBy?: CareGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, CareGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCareGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Care model
     */
    readonly fields: CareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Care.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    category<T extends CareCategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CareCategoryDefaultArgs<ExtArgs>>
    ): Prisma__CareCategoryClient<
      | $Result.GetResult<
          Prisma.$CareCategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    bookings<T extends Care$bookingsArgs<ExtArgs> = {}>(
      args?: Subset<T, Care$bookingsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookingPayload<ExtArgs>,
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
   * Fields of the Care model
   */
  interface CareFieldRefs {
    readonly id: FieldRef<'Care', 'String'>;
    readonly title: FieldRef<'Care', 'String'>;
    readonly description: FieldRef<'Care', 'String'>;
    readonly price: FieldRef<'Care', 'Float'>;
    readonly durationMin: FieldRef<'Care', 'Int'>;
    readonly createdAt: FieldRef<'Care', 'DateTime'>;
    readonly updatedAt: FieldRef<'Care', 'DateTime'>;
    readonly categoryId: FieldRef<'Care', 'String'>;
    readonly caregiverId: FieldRef<'Care', 'String'>;
  }

  // Custom InputTypes
  /**
   * Care findUnique
   */
  export type CareFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    /**
     * Filter, which Care to fetch.
     */
    where: CareWhereUniqueInput;
  };

  /**
   * Care findUniqueOrThrow
   */
  export type CareFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    /**
     * Filter, which Care to fetch.
     */
    where: CareWhereUniqueInput;
  };

  /**
   * Care findFirst
   */
  export type CareFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    /**
     * Filter, which Care to fetch.
     */
    where?: CareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cares to fetch.
     */
    orderBy?: CareOrderByWithRelationInput | CareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cares.
     */
    cursor?: CareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cares.
     */
    distinct?: CareScalarFieldEnum | CareScalarFieldEnum[];
  };

  /**
   * Care findFirstOrThrow
   */
  export type CareFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    /**
     * Filter, which Care to fetch.
     */
    where?: CareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cares to fetch.
     */
    orderBy?: CareOrderByWithRelationInput | CareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cares.
     */
    cursor?: CareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cares.
     */
    distinct?: CareScalarFieldEnum | CareScalarFieldEnum[];
  };

  /**
   * Care findMany
   */
  export type CareFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    /**
     * Filter, which Cares to fetch.
     */
    where?: CareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cares to fetch.
     */
    orderBy?: CareOrderByWithRelationInput | CareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Cares.
     */
    cursor?: CareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cares.
     */
    skip?: number;
    distinct?: CareScalarFieldEnum | CareScalarFieldEnum[];
  };

  /**
   * Care create
   */
  export type CareCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    /**
     * The data needed to create a Care.
     */
    data: XOR<CareCreateInput, CareUncheckedCreateInput>;
  };

  /**
   * Care createMany
   */
  export type CareCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Cares.
     */
    data: CareCreateManyInput | CareCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Care createManyAndReturn
   */
  export type CareCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * The data used to create many Cares.
     */
    data: CareCreateManyInput | CareCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Care update
   */
  export type CareUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    /**
     * The data needed to update a Care.
     */
    data: XOR<CareUpdateInput, CareUncheckedUpdateInput>;
    /**
     * Choose, which Care to update.
     */
    where: CareWhereUniqueInput;
  };

  /**
   * Care updateMany
   */
  export type CareUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Cares.
     */
    data: XOR<CareUpdateManyMutationInput, CareUncheckedUpdateManyInput>;
    /**
     * Filter which Cares to update
     */
    where?: CareWhereInput;
    /**
     * Limit how many Cares to update.
     */
    limit?: number;
  };

  /**
   * Care updateManyAndReturn
   */
  export type CareUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * The data used to update Cares.
     */
    data: XOR<CareUpdateManyMutationInput, CareUncheckedUpdateManyInput>;
    /**
     * Filter which Cares to update
     */
    where?: CareWhereInput;
    /**
     * Limit how many Cares to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Care upsert
   */
  export type CareUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    /**
     * The filter to search for the Care to update in case it exists.
     */
    where: CareWhereUniqueInput;
    /**
     * In case the Care found by the `where` argument doesn't exist, create a new Care with this data.
     */
    create: XOR<CareCreateInput, CareUncheckedCreateInput>;
    /**
     * In case the Care was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareUpdateInput, CareUncheckedUpdateInput>;
  };

  /**
   * Care delete
   */
  export type CareDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
    /**
     * Filter which Care to delete.
     */
    where: CareWhereUniqueInput;
  };

  /**
   * Care deleteMany
   */
  export type CareDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Cares to delete
     */
    where?: CareWhereInput;
    /**
     * Limit how many Cares to delete.
     */
    limit?: number;
  };

  /**
   * Care.bookings
   */
  export type Care$bookingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    where?: BookingWhereInput;
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    cursor?: BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Care without action
   */
  export type CareDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Care
     */
    select?: CareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Care
     */
    omit?: CareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareInclude<ExtArgs> | null;
  };

  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingMinAggregateOutputType = {
    id: string | null;
    status: $Enums.BookingStatus | null;
    scheduledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    careId: string | null;
    elderId: string | null;
    bookerId: string | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: string | null;
    status: $Enums.BookingStatus | null;
    scheduledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    careId: string | null;
    elderId: string | null;
    bookerId: string | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    status: number;
    scheduledAt: number;
    createdAt: number;
    updatedAt: number;
    careId: number;
    elderId: number;
    bookerId: number;
    _all: number;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
    status?: true;
    scheduledAt?: true;
    createdAt?: true;
    updatedAt?: true;
    careId?: true;
    elderId?: true;
    bookerId?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
    status?: true;
    scheduledAt?: true;
    createdAt?: true;
    updatedAt?: true;
    careId?: true;
    elderId?: true;
    bookerId?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    status?: true;
    scheduledAt?: true;
    createdAt?: true;
    updatedAt?: true;
    careId?: true;
    elderId?: true;
    bookerId?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type BookingGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingWhereInput;
    orderBy?:
      | BookingOrderByWithAggregationInput
      | BookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: BookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: string;
    status: $Enums.BookingStatus;
    scheduledAt: Date;
    createdAt: Date;
    updatedAt: Date;
    careId: string;
    elderId: string;
    bookerId: string;
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookingGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BookingGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>;
        }
      >
    >;

  export type BookingSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      status?: boolean;
      scheduledAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      careId?: boolean;
      elderId?: boolean;
      bookerId?: boolean;
      care?: boolean | CareDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type BookingSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      status?: boolean;
      scheduledAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      careId?: boolean;
      elderId?: boolean;
      bookerId?: boolean;
      care?: boolean | CareDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type BookingSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      status?: boolean;
      scheduledAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      careId?: boolean;
      elderId?: boolean;
      bookerId?: boolean;
      care?: boolean | CareDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type BookingSelectScalar = {
    id?: boolean;
    status?: boolean;
    scheduledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    careId?: boolean;
    elderId?: boolean;
    bookerId?: boolean;
  };

  export type BookingOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'status'
    | 'scheduledAt'
    | 'createdAt'
    | 'updatedAt'
    | 'careId'
    | 'elderId'
    | 'bookerId',
    ExtArgs['result']['booking']
  >;
  export type BookingInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    care?: boolean | CareDefaultArgs<ExtArgs>;
  };
  export type BookingIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    care?: boolean | CareDefaultArgs<ExtArgs>;
  };
  export type BookingIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    care?: boolean | CareDefaultArgs<ExtArgs>;
  };

  export type $BookingPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Booking';
    objects: {
      care: Prisma.$CarePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        status: $Enums.BookingStatus;
        scheduledAt: Date;
        createdAt: Date;
        updatedAt: Date;
        careId: string;
        elderId: string;
        bookerId: string;
      },
      ExtArgs['result']['booking']
    >;
    composites: {};
  };

  type BookingGetPayload<
    S extends boolean | null | undefined | BookingDefaultArgs
  > = $Result.GetResult<Prisma.$BookingPayload, S>;

  type BookingCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface BookingDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Booking'];
      meta: { name: 'Booking' };
    };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(
      args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(
      args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BookingFindManyArgs>(
      args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     */
    create<T extends BookingCreateArgs>(
      args: SelectSubset<T, BookingCreateArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookingCreateManyArgs>(
      args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     */
    delete<T extends BookingDeleteArgs>(
      args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookingUpdateArgs>(
      args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookingDeleteManyArgs>(
      args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookingUpdateManyArgs>(
      args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(
      args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetBookingGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Booking model
     */
    readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    care<T extends CareDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CareDefaultArgs<ExtArgs>>
    ): Prisma__CareClient<
      | $Result.GetResult<
          Prisma.$CarePayload<ExtArgs>,
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<'Booking', 'String'>;
    readonly status: FieldRef<'Booking', 'BookingStatus'>;
    readonly scheduledAt: FieldRef<'Booking', 'DateTime'>;
    readonly createdAt: FieldRef<'Booking', 'DateTime'>;
    readonly updatedAt: FieldRef<'Booking', 'DateTime'>;
    readonly careId: FieldRef<'Booking', 'String'>;
    readonly elderId: FieldRef<'Booking', 'String'>;
    readonly bookerId: FieldRef<'Booking', 'String'>;
  }

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking create
   */
  export type BookingCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>;
  };

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Booking update
   */
  export type BookingUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>;
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>;
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput;
    /**
     * Limit how many Bookings to update.
     */
    limit?: number;
  };

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>;
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput;
    /**
     * Limit how many Bookings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput;
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>;
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>;
  };

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput;
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number;
  };

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
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

  export const CareCategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    createdAt: 'createdAt';
  };

  export type CareCategoryScalarFieldEnum =
    (typeof CareCategoryScalarFieldEnum)[keyof typeof CareCategoryScalarFieldEnum];

  export const CareScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    price: 'price';
    durationMin: 'durationMin';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    categoryId: 'categoryId';
    caregiverId: 'caregiverId';
  };

  export type CareScalarFieldEnum =
    (typeof CareScalarFieldEnum)[keyof typeof CareScalarFieldEnum];

  export const BookingScalarFieldEnum: {
    id: 'id';
    status: 'status';
    scheduledAt: 'scheduledAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    careId: 'careId';
    elderId: 'elderId';
    bookerId: 'bookerId';
  };

  export type BookingScalarFieldEnum =
    (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

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
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BookingStatus'
  >;

  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'BookingStatus[]'>;

  /**
   * Deep Input Types
   */

  export type CareCategoryWhereInput = {
    AND?: CareCategoryWhereInput | CareCategoryWhereInput[];
    OR?: CareCategoryWhereInput[];
    NOT?: CareCategoryWhereInput | CareCategoryWhereInput[];
    id?: StringFilter<'CareCategory'> | string;
    name?: StringFilter<'CareCategory'> | string;
    description?: StringNullableFilter<'CareCategory'> | string | null;
    createdAt?: DateTimeFilter<'CareCategory'> | Date | string;
    cares?: CareListRelationFilter;
  };

  export type CareCategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    cares?: CareOrderByRelationAggregateInput;
  };

  export type CareCategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: CareCategoryWhereInput | CareCategoryWhereInput[];
      OR?: CareCategoryWhereInput[];
      NOT?: CareCategoryWhereInput | CareCategoryWhereInput[];
      description?: StringNullableFilter<'CareCategory'> | string | null;
      createdAt?: DateTimeFilter<'CareCategory'> | Date | string;
      cares?: CareListRelationFilter;
    },
    'id' | 'name'
  >;

  export type CareCategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: CareCategoryCountOrderByAggregateInput;
    _max?: CareCategoryMaxOrderByAggregateInput;
    _min?: CareCategoryMinOrderByAggregateInput;
  };

  export type CareCategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CareCategoryScalarWhereWithAggregatesInput
      | CareCategoryScalarWhereWithAggregatesInput[];
    OR?: CareCategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CareCategoryScalarWhereWithAggregatesInput
      | CareCategoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'CareCategory'> | string;
    name?: StringWithAggregatesFilter<'CareCategory'> | string;
    description?:
      | StringNullableWithAggregatesFilter<'CareCategory'>
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'CareCategory'> | Date | string;
  };

  export type CareWhereInput = {
    AND?: CareWhereInput | CareWhereInput[];
    OR?: CareWhereInput[];
    NOT?: CareWhereInput | CareWhereInput[];
    id?: StringFilter<'Care'> | string;
    title?: StringFilter<'Care'> | string;
    description?: StringNullableFilter<'Care'> | string | null;
    price?: FloatFilter<'Care'> | number;
    durationMin?: IntNullableFilter<'Care'> | number | null;
    createdAt?: DateTimeFilter<'Care'> | Date | string;
    updatedAt?: DateTimeFilter<'Care'> | Date | string;
    categoryId?: StringFilter<'Care'> | string;
    caregiverId?: StringFilter<'Care'> | string;
    category?: XOR<CareCategoryScalarRelationFilter, CareCategoryWhereInput>;
    bookings?: BookingListRelationFilter;
  };

  export type CareOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    durationMin?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    categoryId?: SortOrder;
    caregiverId?: SortOrder;
    category?: CareCategoryOrderByWithRelationInput;
    bookings?: BookingOrderByRelationAggregateInput;
  };

  export type CareWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CareWhereInput | CareWhereInput[];
      OR?: CareWhereInput[];
      NOT?: CareWhereInput | CareWhereInput[];
      title?: StringFilter<'Care'> | string;
      description?: StringNullableFilter<'Care'> | string | null;
      price?: FloatFilter<'Care'> | number;
      durationMin?: IntNullableFilter<'Care'> | number | null;
      createdAt?: DateTimeFilter<'Care'> | Date | string;
      updatedAt?: DateTimeFilter<'Care'> | Date | string;
      categoryId?: StringFilter<'Care'> | string;
      caregiverId?: StringFilter<'Care'> | string;
      category?: XOR<CareCategoryScalarRelationFilter, CareCategoryWhereInput>;
      bookings?: BookingListRelationFilter;
    },
    'id'
  >;

  export type CareOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    price?: SortOrder;
    durationMin?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    categoryId?: SortOrder;
    caregiverId?: SortOrder;
    _count?: CareCountOrderByAggregateInput;
    _avg?: CareAvgOrderByAggregateInput;
    _max?: CareMaxOrderByAggregateInput;
    _min?: CareMinOrderByAggregateInput;
    _sum?: CareSumOrderByAggregateInput;
  };

  export type CareScalarWhereWithAggregatesInput = {
    AND?:
      | CareScalarWhereWithAggregatesInput
      | CareScalarWhereWithAggregatesInput[];
    OR?: CareScalarWhereWithAggregatesInput[];
    NOT?:
      | CareScalarWhereWithAggregatesInput
      | CareScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Care'> | string;
    title?: StringWithAggregatesFilter<'Care'> | string;
    description?: StringNullableWithAggregatesFilter<'Care'> | string | null;
    price?: FloatWithAggregatesFilter<'Care'> | number;
    durationMin?: IntNullableWithAggregatesFilter<'Care'> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<'Care'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Care'> | Date | string;
    categoryId?: StringWithAggregatesFilter<'Care'> | string;
    caregiverId?: StringWithAggregatesFilter<'Care'> | string;
  };

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[];
    OR?: BookingWhereInput[];
    NOT?: BookingWhereInput | BookingWhereInput[];
    id?: StringFilter<'Booking'> | string;
    status?: EnumBookingStatusFilter<'Booking'> | $Enums.BookingStatus;
    scheduledAt?: DateTimeFilter<'Booking'> | Date | string;
    createdAt?: DateTimeFilter<'Booking'> | Date | string;
    updatedAt?: DateTimeFilter<'Booking'> | Date | string;
    careId?: StringFilter<'Booking'> | string;
    elderId?: StringFilter<'Booking'> | string;
    bookerId?: StringFilter<'Booking'> | string;
    care?: XOR<CareScalarRelationFilter, CareWhereInput>;
  };

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder;
    status?: SortOrder;
    scheduledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    careId?: SortOrder;
    elderId?: SortOrder;
    bookerId?: SortOrder;
    care?: CareOrderByWithRelationInput;
  };

  export type BookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BookingWhereInput | BookingWhereInput[];
      OR?: BookingWhereInput[];
      NOT?: BookingWhereInput | BookingWhereInput[];
      status?: EnumBookingStatusFilter<'Booking'> | $Enums.BookingStatus;
      scheduledAt?: DateTimeFilter<'Booking'> | Date | string;
      createdAt?: DateTimeFilter<'Booking'> | Date | string;
      updatedAt?: DateTimeFilter<'Booking'> | Date | string;
      careId?: StringFilter<'Booking'> | string;
      elderId?: StringFilter<'Booking'> | string;
      bookerId?: StringFilter<'Booking'> | string;
      care?: XOR<CareScalarRelationFilter, CareWhereInput>;
    },
    'id'
  >;

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder;
    status?: SortOrder;
    scheduledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    careId?: SortOrder;
    elderId?: SortOrder;
    bookerId?: SortOrder;
    _count?: BookingCountOrderByAggregateInput;
    _max?: BookingMaxOrderByAggregateInput;
    _min?: BookingMinOrderByAggregateInput;
  };

  export type BookingScalarWhereWithAggregatesInput = {
    AND?:
      | BookingScalarWhereWithAggregatesInput
      | BookingScalarWhereWithAggregatesInput[];
    OR?: BookingScalarWhereWithAggregatesInput[];
    NOT?:
      | BookingScalarWhereWithAggregatesInput
      | BookingScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Booking'> | string;
    status?:
      | EnumBookingStatusWithAggregatesFilter<'Booking'>
      | $Enums.BookingStatus;
    scheduledAt?: DateTimeWithAggregatesFilter<'Booking'> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<'Booking'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Booking'> | Date | string;
    careId?: StringWithAggregatesFilter<'Booking'> | string;
    elderId?: StringWithAggregatesFilter<'Booking'> | string;
    bookerId?: StringWithAggregatesFilter<'Booking'> | string;
  };

  export type CareCategoryCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    cares?: CareCreateNestedManyWithoutCategoryInput;
  };

  export type CareCategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    cares?: CareUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CareCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cares?: CareUpdateManyWithoutCategoryNestedInput;
  };

  export type CareCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cares?: CareUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CareCategoryCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
  };

  export type CareCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CareCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CareCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    price: number;
    durationMin?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caregiverId: string;
    category: CareCategoryCreateNestedOneWithoutCaresInput;
    bookings?: BookingCreateNestedManyWithoutCareInput;
  };

  export type CareUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    price: number;
    durationMin?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoryId: string;
    caregiverId: string;
    bookings?: BookingUncheckedCreateNestedManyWithoutCareInput;
  };

  export type CareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    category?: CareCategoryUpdateOneRequiredWithoutCaresNestedInput;
    bookings?: BookingUpdateManyWithoutCareNestedInput;
  };

  export type CareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    bookings?: BookingUncheckedUpdateManyWithoutCareNestedInput;
  };

  export type CareCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    price: number;
    durationMin?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoryId: string;
    caregiverId: string;
  };

  export type CareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
  };

  export type CareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingCreateInput = {
    id?: string;
    status?: $Enums.BookingStatus;
    scheduledAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elderId: string;
    bookerId: string;
    care: CareCreateNestedOneWithoutBookingsInput;
  };

  export type BookingUncheckedCreateInput = {
    id?: string;
    status?: $Enums.BookingStatus;
    scheduledAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    careId: string;
    elderId: string;
    bookerId: string;
  };

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elderId?: StringFieldUpdateOperationsInput | string;
    bookerId?: StringFieldUpdateOperationsInput | string;
    care?: CareUpdateOneRequiredWithoutBookingsNestedInput;
  };

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    careId?: StringFieldUpdateOperationsInput | string;
    elderId?: StringFieldUpdateOperationsInput | string;
    bookerId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingCreateManyInput = {
    id?: string;
    status?: $Enums.BookingStatus;
    scheduledAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    careId: string;
    elderId: string;
    bookerId: string;
  };

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elderId?: StringFieldUpdateOperationsInput | string;
    bookerId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    careId?: StringFieldUpdateOperationsInput | string;
    elderId?: StringFieldUpdateOperationsInput | string;
    bookerId?: StringFieldUpdateOperationsInput | string;
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

  export type CareListRelationFilter = {
    every?: CareWhereInput;
    some?: CareWhereInput;
    none?: CareWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type CareOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CareCategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
  };

  export type CareCategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
  };

  export type CareCategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
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

  export type CareCategoryScalarRelationFilter = {
    is?: CareCategoryWhereInput;
    isNot?: CareCategoryWhereInput;
  };

  export type BookingListRelationFilter = {
    every?: BookingWhereInput;
    some?: BookingWhereInput;
    none?: BookingWhereInput;
  };

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CareCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    durationMin?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    categoryId?: SortOrder;
    caregiverId?: SortOrder;
  };

  export type CareAvgOrderByAggregateInput = {
    price?: SortOrder;
    durationMin?: SortOrder;
  };

  export type CareMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    durationMin?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    categoryId?: SortOrder;
    caregiverId?: SortOrder;
  };

  export type CareMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    durationMin?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    categoryId?: SortOrder;
    caregiverId?: SortOrder;
  };

  export type CareSumOrderByAggregateInput = {
    price?: SortOrder;
    durationMin?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
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

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.BookingStatus
      | EnumBookingStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus;
  };

  export type CareScalarRelationFilter = {
    is?: CareWhereInput;
    isNot?: CareWhereInput;
  };

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder;
    status?: SortOrder;
    scheduledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    careId?: SortOrder;
    elderId?: SortOrder;
    bookerId?: SortOrder;
  };

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder;
    status?: SortOrder;
    scheduledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    careId?: SortOrder;
    elderId?: SortOrder;
    bookerId?: SortOrder;
  };

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder;
    status?: SortOrder;
    scheduledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    careId?: SortOrder;
    elderId?: SortOrder;
    bookerId?: SortOrder;
  };

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.BookingStatus
      | EnumBookingStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.BookingStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>;
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>;
  };

  export type CareCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          CareCreateWithoutCategoryInput,
          CareUncheckedCreateWithoutCategoryInput
        >
      | CareCreateWithoutCategoryInput[]
      | CareUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CareCreateOrConnectWithoutCategoryInput
      | CareCreateOrConnectWithoutCategoryInput[];
    createMany?: CareCreateManyCategoryInputEnvelope;
    connect?: CareWhereUniqueInput | CareWhereUniqueInput[];
  };

  export type CareUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          CareCreateWithoutCategoryInput,
          CareUncheckedCreateWithoutCategoryInput
        >
      | CareCreateWithoutCategoryInput[]
      | CareUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CareCreateOrConnectWithoutCategoryInput
      | CareCreateOrConnectWithoutCategoryInput[];
    createMany?: CareCreateManyCategoryInputEnvelope;
    connect?: CareWhereUniqueInput | CareWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CareUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          CareCreateWithoutCategoryInput,
          CareUncheckedCreateWithoutCategoryInput
        >
      | CareCreateWithoutCategoryInput[]
      | CareUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CareCreateOrConnectWithoutCategoryInput
      | CareCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | CareUpsertWithWhereUniqueWithoutCategoryInput
      | CareUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: CareCreateManyCategoryInputEnvelope;
    set?: CareWhereUniqueInput | CareWhereUniqueInput[];
    disconnect?: CareWhereUniqueInput | CareWhereUniqueInput[];
    delete?: CareWhereUniqueInput | CareWhereUniqueInput[];
    connect?: CareWhereUniqueInput | CareWhereUniqueInput[];
    update?:
      | CareUpdateWithWhereUniqueWithoutCategoryInput
      | CareUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | CareUpdateManyWithWhereWithoutCategoryInput
      | CareUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: CareScalarWhereInput | CareScalarWhereInput[];
  };

  export type CareUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          CareCreateWithoutCategoryInput,
          CareUncheckedCreateWithoutCategoryInput
        >
      | CareCreateWithoutCategoryInput[]
      | CareUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | CareCreateOrConnectWithoutCategoryInput
      | CareCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | CareUpsertWithWhereUniqueWithoutCategoryInput
      | CareUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: CareCreateManyCategoryInputEnvelope;
    set?: CareWhereUniqueInput | CareWhereUniqueInput[];
    disconnect?: CareWhereUniqueInput | CareWhereUniqueInput[];
    delete?: CareWhereUniqueInput | CareWhereUniqueInput[];
    connect?: CareWhereUniqueInput | CareWhereUniqueInput[];
    update?:
      | CareUpdateWithWhereUniqueWithoutCategoryInput
      | CareUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | CareUpdateManyWithWhereWithoutCategoryInput
      | CareUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: CareScalarWhereInput | CareScalarWhereInput[];
  };

  export type CareCategoryCreateNestedOneWithoutCaresInput = {
    create?: XOR<
      CareCategoryCreateWithoutCaresInput,
      CareCategoryUncheckedCreateWithoutCaresInput
    >;
    connectOrCreate?: CareCategoryCreateOrConnectWithoutCaresInput;
    connect?: CareCategoryWhereUniqueInput;
  };

  export type BookingCreateNestedManyWithoutCareInput = {
    create?:
      | XOR<
          BookingCreateWithoutCareInput,
          BookingUncheckedCreateWithoutCareInput
        >
      | BookingCreateWithoutCareInput[]
      | BookingUncheckedCreateWithoutCareInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutCareInput
      | BookingCreateOrConnectWithoutCareInput[];
    createMany?: BookingCreateManyCareInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type BookingUncheckedCreateNestedManyWithoutCareInput = {
    create?:
      | XOR<
          BookingCreateWithoutCareInput,
          BookingUncheckedCreateWithoutCareInput
        >
      | BookingCreateWithoutCareInput[]
      | BookingUncheckedCreateWithoutCareInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutCareInput
      | BookingCreateOrConnectWithoutCareInput[];
    createMany?: BookingCreateManyCareInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CareCategoryUpdateOneRequiredWithoutCaresNestedInput = {
    create?: XOR<
      CareCategoryCreateWithoutCaresInput,
      CareCategoryUncheckedCreateWithoutCaresInput
    >;
    connectOrCreate?: CareCategoryCreateOrConnectWithoutCaresInput;
    upsert?: CareCategoryUpsertWithoutCaresInput;
    connect?: CareCategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CareCategoryUpdateToOneWithWhereWithoutCaresInput,
        CareCategoryUpdateWithoutCaresInput
      >,
      CareCategoryUncheckedUpdateWithoutCaresInput
    >;
  };

  export type BookingUpdateManyWithoutCareNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutCareInput,
          BookingUncheckedCreateWithoutCareInput
        >
      | BookingCreateWithoutCareInput[]
      | BookingUncheckedCreateWithoutCareInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutCareInput
      | BookingCreateOrConnectWithoutCareInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutCareInput
      | BookingUpsertWithWhereUniqueWithoutCareInput[];
    createMany?: BookingCreateManyCareInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutCareInput
      | BookingUpdateWithWhereUniqueWithoutCareInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutCareInput
      | BookingUpdateManyWithWhereWithoutCareInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type BookingUncheckedUpdateManyWithoutCareNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutCareInput,
          BookingUncheckedCreateWithoutCareInput
        >
      | BookingCreateWithoutCareInput[]
      | BookingUncheckedCreateWithoutCareInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutCareInput
      | BookingCreateOrConnectWithoutCareInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutCareInput
      | BookingUpsertWithWhereUniqueWithoutCareInput[];
    createMany?: BookingCreateManyCareInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutCareInput
      | BookingUpdateWithWhereUniqueWithoutCareInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutCareInput
      | BookingUpdateManyWithWhereWithoutCareInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type CareCreateNestedOneWithoutBookingsInput = {
    create?: XOR<
      CareCreateWithoutBookingsInput,
      CareUncheckedCreateWithoutBookingsInput
    >;
    connectOrCreate?: CareCreateOrConnectWithoutBookingsInput;
    connect?: CareWhereUniqueInput;
  };

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus;
  };

  export type CareUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<
      CareCreateWithoutBookingsInput,
      CareUncheckedCreateWithoutBookingsInput
    >;
    connectOrCreate?: CareCreateOrConnectWithoutBookingsInput;
    upsert?: CareUpsertWithoutBookingsInput;
    connect?: CareWhereUniqueInput;
    update?: XOR<
      XOR<
        CareUpdateToOneWithWhereWithoutBookingsInput,
        CareUpdateWithoutBookingsInput
      >,
      CareUncheckedUpdateWithoutBookingsInput
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
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

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.BookingStatus
      | EnumBookingStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus;
  };

  export type NestedEnumBookingStatusWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.BookingStatus
      | EnumBookingStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.BookingStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>;
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>;
  };

  export type CareCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    description?: string | null;
    price: number;
    durationMin?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caregiverId: string;
    bookings?: BookingCreateNestedManyWithoutCareInput;
  };

  export type CareUncheckedCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    description?: string | null;
    price: number;
    durationMin?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caregiverId: string;
    bookings?: BookingUncheckedCreateNestedManyWithoutCareInput;
  };

  export type CareCreateOrConnectWithoutCategoryInput = {
    where: CareWhereUniqueInput;
    create: XOR<
      CareCreateWithoutCategoryInput,
      CareUncheckedCreateWithoutCategoryInput
    >;
  };

  export type CareCreateManyCategoryInputEnvelope = {
    data: CareCreateManyCategoryInput | CareCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type CareUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CareWhereUniqueInput;
    update: XOR<
      CareUpdateWithoutCategoryInput,
      CareUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      CareCreateWithoutCategoryInput,
      CareUncheckedCreateWithoutCategoryInput
    >;
  };

  export type CareUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CareWhereUniqueInput;
    data: XOR<
      CareUpdateWithoutCategoryInput,
      CareUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type CareUpdateManyWithWhereWithoutCategoryInput = {
    where: CareScalarWhereInput;
    data: XOR<
      CareUpdateManyMutationInput,
      CareUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type CareScalarWhereInput = {
    AND?: CareScalarWhereInput | CareScalarWhereInput[];
    OR?: CareScalarWhereInput[];
    NOT?: CareScalarWhereInput | CareScalarWhereInput[];
    id?: StringFilter<'Care'> | string;
    title?: StringFilter<'Care'> | string;
    description?: StringNullableFilter<'Care'> | string | null;
    price?: FloatFilter<'Care'> | number;
    durationMin?: IntNullableFilter<'Care'> | number | null;
    createdAt?: DateTimeFilter<'Care'> | Date | string;
    updatedAt?: DateTimeFilter<'Care'> | Date | string;
    categoryId?: StringFilter<'Care'> | string;
    caregiverId?: StringFilter<'Care'> | string;
  };

  export type CareCategoryCreateWithoutCaresInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
  };

  export type CareCategoryUncheckedCreateWithoutCaresInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
  };

  export type CareCategoryCreateOrConnectWithoutCaresInput = {
    where: CareCategoryWhereUniqueInput;
    create: XOR<
      CareCategoryCreateWithoutCaresInput,
      CareCategoryUncheckedCreateWithoutCaresInput
    >;
  };

  export type BookingCreateWithoutCareInput = {
    id?: string;
    status?: $Enums.BookingStatus;
    scheduledAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elderId: string;
    bookerId: string;
  };

  export type BookingUncheckedCreateWithoutCareInput = {
    id?: string;
    status?: $Enums.BookingStatus;
    scheduledAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elderId: string;
    bookerId: string;
  };

  export type BookingCreateOrConnectWithoutCareInput = {
    where: BookingWhereUniqueInput;
    create: XOR<
      BookingCreateWithoutCareInput,
      BookingUncheckedCreateWithoutCareInput
    >;
  };

  export type BookingCreateManyCareInputEnvelope = {
    data: BookingCreateManyCareInput | BookingCreateManyCareInput[];
    skipDuplicates?: boolean;
  };

  export type CareCategoryUpsertWithoutCaresInput = {
    update: XOR<
      CareCategoryUpdateWithoutCaresInput,
      CareCategoryUncheckedUpdateWithoutCaresInput
    >;
    create: XOR<
      CareCategoryCreateWithoutCaresInput,
      CareCategoryUncheckedCreateWithoutCaresInput
    >;
    where?: CareCategoryWhereInput;
  };

  export type CareCategoryUpdateToOneWithWhereWithoutCaresInput = {
    where?: CareCategoryWhereInput;
    data: XOR<
      CareCategoryUpdateWithoutCaresInput,
      CareCategoryUncheckedUpdateWithoutCaresInput
    >;
  };

  export type CareCategoryUpdateWithoutCaresInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CareCategoryUncheckedUpdateWithoutCaresInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingUpsertWithWhereUniqueWithoutCareInput = {
    where: BookingWhereUniqueInput;
    update: XOR<
      BookingUpdateWithoutCareInput,
      BookingUncheckedUpdateWithoutCareInput
    >;
    create: XOR<
      BookingCreateWithoutCareInput,
      BookingUncheckedCreateWithoutCareInput
    >;
  };

  export type BookingUpdateWithWhereUniqueWithoutCareInput = {
    where: BookingWhereUniqueInput;
    data: XOR<
      BookingUpdateWithoutCareInput,
      BookingUncheckedUpdateWithoutCareInput
    >;
  };

  export type BookingUpdateManyWithWhereWithoutCareInput = {
    where: BookingScalarWhereInput;
    data: XOR<
      BookingUpdateManyMutationInput,
      BookingUncheckedUpdateManyWithoutCareInput
    >;
  };

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[];
    OR?: BookingScalarWhereInput[];
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[];
    id?: StringFilter<'Booking'> | string;
    status?: EnumBookingStatusFilter<'Booking'> | $Enums.BookingStatus;
    scheduledAt?: DateTimeFilter<'Booking'> | Date | string;
    createdAt?: DateTimeFilter<'Booking'> | Date | string;
    updatedAt?: DateTimeFilter<'Booking'> | Date | string;
    careId?: StringFilter<'Booking'> | string;
    elderId?: StringFilter<'Booking'> | string;
    bookerId?: StringFilter<'Booking'> | string;
  };

  export type CareCreateWithoutBookingsInput = {
    id?: string;
    title: string;
    description?: string | null;
    price: number;
    durationMin?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caregiverId: string;
    category: CareCategoryCreateNestedOneWithoutCaresInput;
  };

  export type CareUncheckedCreateWithoutBookingsInput = {
    id?: string;
    title: string;
    description?: string | null;
    price: number;
    durationMin?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoryId: string;
    caregiverId: string;
  };

  export type CareCreateOrConnectWithoutBookingsInput = {
    where: CareWhereUniqueInput;
    create: XOR<
      CareCreateWithoutBookingsInput,
      CareUncheckedCreateWithoutBookingsInput
    >;
  };

  export type CareUpsertWithoutBookingsInput = {
    update: XOR<
      CareUpdateWithoutBookingsInput,
      CareUncheckedUpdateWithoutBookingsInput
    >;
    create: XOR<
      CareCreateWithoutBookingsInput,
      CareUncheckedCreateWithoutBookingsInput
    >;
    where?: CareWhereInput;
  };

  export type CareUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CareWhereInput;
    data: XOR<
      CareUpdateWithoutBookingsInput,
      CareUncheckedUpdateWithoutBookingsInput
    >;
  };

  export type CareUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    category?: CareCategoryUpdateOneRequiredWithoutCaresNestedInput;
  };

  export type CareUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
  };

  export type CareCreateManyCategoryInput = {
    id?: string;
    title: string;
    description?: string | null;
    price: number;
    durationMin?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    caregiverId: string;
  };

  export type CareUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    bookings?: BookingUpdateManyWithoutCareNestedInput;
  };

  export type CareUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    bookings?: BookingUncheckedUpdateManyWithoutCareNestedInput;
  };

  export type CareUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    price?: FloatFieldUpdateOperationsInput | number;
    durationMin?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingCreateManyCareInput = {
    id?: string;
    status?: $Enums.BookingStatus;
    scheduledAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elderId: string;
    bookerId: string;
  };

  export type BookingUpdateWithoutCareInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elderId?: StringFieldUpdateOperationsInput | string;
    bookerId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingUncheckedUpdateWithoutCareInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elderId?: StringFieldUpdateOperationsInput | string;
    bookerId?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingUncheckedUpdateManyWithoutCareInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elderId?: StringFieldUpdateOperationsInput | string;
    bookerId?: StringFieldUpdateOperationsInput | string;
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
