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
 * Model Document
 * *
 *  * Models
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>;
/**
 * Model ProcessingJob
 *
 */
export type ProcessingJob =
  $Result.DefaultSelection<Prisma.$ProcessingJobPayload>;
/**
 * Model OcrResult
 *
 */
export type OcrResult = $Result.DefaultSelection<Prisma.$OcrResultPayload>;
/**
 * Model Analysis
 *
 */
export type Analysis = $Result.DefaultSelection<Prisma.$AnalysisPayload>;
/**
 * Model VitalParam
 *
 */
export type VitalParam = $Result.DefaultSelection<Prisma.$VitalParamPayload>;
/**
 * Model DocumentShare
 *
 */
export type DocumentShare =
  $Result.DefaultSelection<Prisma.$DocumentSharePayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const DocumentType: {
    BLOOD_REPORT: 'BLOOD_REPORT';
    LAB_REPORT: 'LAB_REPORT';
    PRESCRIPTION: 'PRESCRIPTION';
    INVOICE: 'INVOICE';
    OTHER: 'OTHER';
  };

  export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];

  export const JobStatus: {
    PENDING: 'PENDING';
    PROCESSING: 'PROCESSING';
    SUCCESS: 'SUCCESS';
    FAILED: 'FAILED';
    CANCELED: 'CANCELED';
  };

  export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

  export const AnalysisStatus: {
    PENDING: 'PENDING';
    PROCESSING: 'PROCESSING';
    DONE: 'DONE';
    FAILED: 'FAILED';
  };

  export type AnalysisStatus =
    (typeof AnalysisStatus)[keyof typeof AnalysisStatus];
}

export type DocumentType = $Enums.DocumentType;

export const DocumentType: typeof $Enums.DocumentType;

export type JobStatus = $Enums.JobStatus;

export const JobStatus: typeof $Enums.JobStatus;

export type AnalysisStatus = $Enums.AnalysisStatus;

export const AnalysisStatus: typeof $Enums.AnalysisStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Documents
 * const documents = await prisma.document.findMany()
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
   * // Fetch zero or more Documents
   * const documents = await prisma.document.findMany()
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
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Documents
   * const documents = await prisma.document.findMany()
   * ```
   */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processingJob`: Exposes CRUD operations for the **ProcessingJob** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProcessingJobs
   * const processingJobs = await prisma.processingJob.findMany()
   * ```
   */
  get processingJob(): Prisma.ProcessingJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ocrResult`: Exposes CRUD operations for the **OcrResult** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OcrResults
   * const ocrResults = await prisma.ocrResult.findMany()
   * ```
   */
  get ocrResult(): Prisma.OcrResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysis`: Exposes CRUD operations for the **Analysis** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Analyses
   * const analyses = await prisma.analysis.findMany()
   * ```
   */
  get analysis(): Prisma.AnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vitalParam`: Exposes CRUD operations for the **VitalParam** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more VitalParams
   * const vitalParams = await prisma.vitalParam.findMany()
   * ```
   */
  get vitalParam(): Prisma.VitalParamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentShare`: Exposes CRUD operations for the **DocumentShare** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more DocumentShares
   * const documentShares = await prisma.documentShare.findMany()
   * ```
   */
  get documentShare(): Prisma.DocumentShareDelegate<ExtArgs, ClientOptions>;
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
    Document: 'Document';
    ProcessingJob: 'ProcessingJob';
    OcrResult: 'OcrResult';
    Analysis: 'Analysis';
    VitalParam: 'VitalParam';
    DocumentShare: 'DocumentShare';
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
      modelProps:
        | 'document'
        | 'processingJob'
        | 'ocrResult'
        | 'analysis'
        | 'vitalParam'
        | 'documentShare';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>;
        fields: Prisma.DocumentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
          };
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
          };
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[];
          };
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
          };
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[];
          };
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
          };
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
          };
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[];
          };
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>;
          };
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDocument>;
          };
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DocumentGroupByOutputType>[];
          };
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>;
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number;
          };
        };
      };
      ProcessingJob: {
        payload: Prisma.$ProcessingJobPayload<ExtArgs>;
        fields: Prisma.ProcessingJobFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProcessingJobFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProcessingJobFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload>;
          };
          findFirst: {
            args: Prisma.ProcessingJobFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProcessingJobFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload>;
          };
          findMany: {
            args: Prisma.ProcessingJobFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload>[];
          };
          create: {
            args: Prisma.ProcessingJobCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload>;
          };
          createMany: {
            args: Prisma.ProcessingJobCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProcessingJobCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload>[];
          };
          delete: {
            args: Prisma.ProcessingJobDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload>;
          };
          update: {
            args: Prisma.ProcessingJobUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload>;
          };
          deleteMany: {
            args: Prisma.ProcessingJobDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProcessingJobUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProcessingJobUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload>[];
          };
          upsert: {
            args: Prisma.ProcessingJobUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProcessingJobPayload>;
          };
          aggregate: {
            args: Prisma.ProcessingJobAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProcessingJob>;
          };
          groupBy: {
            args: Prisma.ProcessingJobGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProcessingJobGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProcessingJobCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ProcessingJobCountAggregateOutputType>
              | number;
          };
        };
      };
      OcrResult: {
        payload: Prisma.$OcrResultPayload<ExtArgs>;
        fields: Prisma.OcrResultFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OcrResultFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OcrResultFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload>;
          };
          findFirst: {
            args: Prisma.OcrResultFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OcrResultFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload>;
          };
          findMany: {
            args: Prisma.OcrResultFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload>[];
          };
          create: {
            args: Prisma.OcrResultCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload>;
          };
          createMany: {
            args: Prisma.OcrResultCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OcrResultCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload>[];
          };
          delete: {
            args: Prisma.OcrResultDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload>;
          };
          update: {
            args: Prisma.OcrResultUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload>;
          };
          deleteMany: {
            args: Prisma.OcrResultDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OcrResultUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OcrResultUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload>[];
          };
          upsert: {
            args: Prisma.OcrResultUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OcrResultPayload>;
          };
          aggregate: {
            args: Prisma.OcrResultAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOcrResult>;
          };
          groupBy: {
            args: Prisma.OcrResultGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OcrResultGroupByOutputType>[];
          };
          count: {
            args: Prisma.OcrResultCountArgs<ExtArgs>;
            result: $Utils.Optional<OcrResultCountAggregateOutputType> | number;
          };
        };
      };
      Analysis: {
        payload: Prisma.$AnalysisPayload<ExtArgs>;
        fields: Prisma.AnalysisFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AnalysisFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AnalysisFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>;
          };
          findFirst: {
            args: Prisma.AnalysisFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AnalysisFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>;
          };
          findMany: {
            args: Prisma.AnalysisFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[];
          };
          create: {
            args: Prisma.AnalysisCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>;
          };
          createMany: {
            args: Prisma.AnalysisCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AnalysisCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[];
          };
          delete: {
            args: Prisma.AnalysisDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>;
          };
          update: {
            args: Prisma.AnalysisUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>;
          };
          deleteMany: {
            args: Prisma.AnalysisDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AnalysisUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AnalysisUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[];
          };
          upsert: {
            args: Prisma.AnalysisUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>;
          };
          aggregate: {
            args: Prisma.AnalysisAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAnalysis>;
          };
          groupBy: {
            args: Prisma.AnalysisGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AnalysisGroupByOutputType>[];
          };
          count: {
            args: Prisma.AnalysisCountArgs<ExtArgs>;
            result: $Utils.Optional<AnalysisCountAggregateOutputType> | number;
          };
        };
      };
      VitalParam: {
        payload: Prisma.$VitalParamPayload<ExtArgs>;
        fields: Prisma.VitalParamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.VitalParamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.VitalParamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload>;
          };
          findFirst: {
            args: Prisma.VitalParamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.VitalParamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload>;
          };
          findMany: {
            args: Prisma.VitalParamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload>[];
          };
          create: {
            args: Prisma.VitalParamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload>;
          };
          createMany: {
            args: Prisma.VitalParamCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.VitalParamCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload>[];
          };
          delete: {
            args: Prisma.VitalParamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload>;
          };
          update: {
            args: Prisma.VitalParamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload>;
          };
          deleteMany: {
            args: Prisma.VitalParamDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.VitalParamUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.VitalParamUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload>[];
          };
          upsert: {
            args: Prisma.VitalParamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VitalParamPayload>;
          };
          aggregate: {
            args: Prisma.VitalParamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVitalParam>;
          };
          groupBy: {
            args: Prisma.VitalParamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VitalParamGroupByOutputType>[];
          };
          count: {
            args: Prisma.VitalParamCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<VitalParamCountAggregateOutputType>
              | number;
          };
        };
      };
      DocumentShare: {
        payload: Prisma.$DocumentSharePayload<ExtArgs>;
        fields: Prisma.DocumentShareFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DocumentShareFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DocumentShareFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>;
          };
          findFirst: {
            args: Prisma.DocumentShareFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DocumentShareFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>;
          };
          findMany: {
            args: Prisma.DocumentShareFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>[];
          };
          create: {
            args: Prisma.DocumentShareCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>;
          };
          createMany: {
            args: Prisma.DocumentShareCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DocumentShareCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>[];
          };
          delete: {
            args: Prisma.DocumentShareDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>;
          };
          update: {
            args: Prisma.DocumentShareUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>;
          };
          deleteMany: {
            args: Prisma.DocumentShareDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DocumentShareUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.DocumentShareUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>[];
          };
          upsert: {
            args: Prisma.DocumentShareUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>;
          };
          aggregate: {
            args: Prisma.DocumentShareAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDocumentShare>;
          };
          groupBy: {
            args: Prisma.DocumentShareGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DocumentShareGroupByOutputType>[];
          };
          count: {
            args: Prisma.DocumentShareCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<DocumentShareCountAggregateOutputType>
              | number;
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
    document?: DocumentOmit;
    processingJob?: ProcessingJobOmit;
    ocrResult?: OcrResultOmit;
    analysis?: AnalysisOmit;
    vitalParam?: VitalParamOmit;
    documentShare?: DocumentShareOmit;
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
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    processingJobs: number;
    analysis: number;
    shares: number;
  };

  export type DocumentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    processingJobs?: boolean | DocumentCountOutputTypeCountProcessingJobsArgs;
    analysis?: boolean | DocumentCountOutputTypeCountAnalysisArgs;
    shares?: boolean | DocumentCountOutputTypeCountSharesArgs;
  };

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountProcessingJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ProcessingJobWhereInput;
  };

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountAnalysisArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: AnalysisWhereInput;
  };

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountSharesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: DocumentShareWhereInput;
  };

  /**
   * Count Type OcrResultCountOutputType
   */

  export type OcrResultCountOutputType = {
    analysis: number;
  };

  export type OcrResultCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    analysis?: boolean | OcrResultCountOutputTypeCountAnalysisArgs;
  };

  // Custom InputTypes
  /**
   * OcrResultCountOutputType without action
   */
  export type OcrResultCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResultCountOutputType
     */
    select?: OcrResultCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OcrResultCountOutputType without action
   */
  export type OcrResultCountOutputTypeCountAnalysisArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: AnalysisWhereInput;
  };

  /**
   * Count Type AnalysisCountOutputType
   */

  export type AnalysisCountOutputType = {
    VitalParam: number;
  };

  export type AnalysisCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    VitalParam?: boolean | AnalysisCountOutputTypeCountVitalParamArgs;
  };

  // Custom InputTypes
  /**
   * AnalysisCountOutputType without action
   */
  export type AnalysisCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the AnalysisCountOutputType
     */
    select?: AnalysisCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AnalysisCountOutputType without action
   */
  export type AnalysisCountOutputTypeCountVitalParamArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: VitalParamWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null;
    _avg: DocumentAvgAggregateOutputType | null;
    _sum: DocumentSumAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
  };

  export type DocumentAvgAggregateOutputType = {
    size: number | null;
  };

  export type DocumentSumAggregateOutputType = {
    size: number | null;
  };

  export type DocumentMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    caregiverId: string | null;
    fileServiceId: string | null;
    fileUrl: string | null;
    fileName: string | null;
    mimeType: string | null;
    size: number | null;
    type: $Enums.DocumentType | null;
    uploadedAt: Date | null;
    processed: boolean | null;
  };

  export type DocumentMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    caregiverId: string | null;
    fileServiceId: string | null;
    fileUrl: string | null;
    fileName: string | null;
    mimeType: string | null;
    size: number | null;
    type: $Enums.DocumentType | null;
    uploadedAt: Date | null;
    processed: boolean | null;
  };

  export type DocumentCountAggregateOutputType = {
    id: number;
    userId: number;
    caregiverId: number;
    fileServiceId: number;
    fileUrl: number;
    fileName: number;
    mimeType: number;
    size: number;
    type: number;
    uploadedAt: number;
    processed: number;
    metadata: number;
    _all: number;
  };

  export type DocumentAvgAggregateInputType = {
    size?: true;
  };

  export type DocumentSumAggregateInputType = {
    size?: true;
  };

  export type DocumentMinAggregateInputType = {
    id?: true;
    userId?: true;
    caregiverId?: true;
    fileServiceId?: true;
    fileUrl?: true;
    fileName?: true;
    mimeType?: true;
    size?: true;
    type?: true;
    uploadedAt?: true;
    processed?: true;
  };

  export type DocumentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    caregiverId?: true;
    fileServiceId?: true;
    fileUrl?: true;
    fileName?: true;
    mimeType?: true;
    size?: true;
    type?: true;
    uploadedAt?: true;
    processed?: true;
  };

  export type DocumentCountAggregateInputType = {
    id?: true;
    userId?: true;
    caregiverId?: true;
    fileServiceId?: true;
    fileUrl?: true;
    fileName?: true;
    mimeType?: true;
    size?: true;
    type?: true;
    uploadedAt?: true;
    processed?: true;
    metadata?: true;
    _all?: true;
  };

  export type DocumentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Documents to fetch.
     */
    orderBy?:
      | DocumentOrderByWithRelationInput
      | DocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Documents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Documents
     **/
    _count?: true | DocumentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DocumentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DocumentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DocumentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DocumentMaxAggregateInputType;
  };

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>;
  };

  export type DocumentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: DocumentWhereInput;
    orderBy?:
      | DocumentOrderByWithAggregationInput
      | DocumentOrderByWithAggregationInput[];
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum;
    having?: DocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInputType | true;
    _avg?: DocumentAvgAggregateInputType;
    _sum?: DocumentSumAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
  };

  export type DocumentGroupByOutputType = {
    id: string;
    userId: string;
    caregiverId: string | null;
    fileServiceId: string | null;
    fileUrl: string;
    fileName: string | null;
    mimeType: string | null;
    size: number | null;
    type: $Enums.DocumentType;
    uploadedAt: Date;
    processed: boolean;
    metadata: JsonValue | null;
    _count: DocumentCountAggregateOutputType | null;
    _avg: DocumentAvgAggregateOutputType | null;
    _sum: DocumentSumAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
  };

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<DocumentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof DocumentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>;
        }
      >
    >;

  export type DocumentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      caregiverId?: boolean;
      fileServiceId?: boolean;
      fileUrl?: boolean;
      fileName?: boolean;
      mimeType?: boolean;
      size?: boolean;
      type?: boolean;
      uploadedAt?: boolean;
      processed?: boolean;
      metadata?: boolean;
      processingJobs?: boolean | Document$processingJobsArgs<ExtArgs>;
      ocrResult?: boolean | Document$ocrResultArgs<ExtArgs>;
      analysis?: boolean | Document$analysisArgs<ExtArgs>;
      shares?: boolean | Document$sharesArgs<ExtArgs>;
      _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['document']
  >;

  export type DocumentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      caregiverId?: boolean;
      fileServiceId?: boolean;
      fileUrl?: boolean;
      fileName?: boolean;
      mimeType?: boolean;
      size?: boolean;
      type?: boolean;
      uploadedAt?: boolean;
      processed?: boolean;
      metadata?: boolean;
    },
    ExtArgs['result']['document']
  >;

  export type DocumentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      caregiverId?: boolean;
      fileServiceId?: boolean;
      fileUrl?: boolean;
      fileName?: boolean;
      mimeType?: boolean;
      size?: boolean;
      type?: boolean;
      uploadedAt?: boolean;
      processed?: boolean;
      metadata?: boolean;
    },
    ExtArgs['result']['document']
  >;

  export type DocumentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    caregiverId?: boolean;
    fileServiceId?: boolean;
    fileUrl?: boolean;
    fileName?: boolean;
    mimeType?: boolean;
    size?: boolean;
    type?: boolean;
    uploadedAt?: boolean;
    processed?: boolean;
    metadata?: boolean;
  };

  export type DocumentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'userId'
    | 'caregiverId'
    | 'fileServiceId'
    | 'fileUrl'
    | 'fileName'
    | 'mimeType'
    | 'size'
    | 'type'
    | 'uploadedAt'
    | 'processed'
    | 'metadata',
    ExtArgs['result']['document']
  >;
  export type DocumentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    processingJobs?: boolean | Document$processingJobsArgs<ExtArgs>;
    ocrResult?: boolean | Document$ocrResultArgs<ExtArgs>;
    analysis?: boolean | Document$analysisArgs<ExtArgs>;
    shares?: boolean | Document$sharesArgs<ExtArgs>;
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type DocumentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};
  export type DocumentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};

  export type $DocumentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Document';
    objects: {
      processingJobs: Prisma.$ProcessingJobPayload<ExtArgs>[];
      ocrResult: Prisma.$OcrResultPayload<ExtArgs> | null;
      analysis: Prisma.$AnalysisPayload<ExtArgs>[];
      shares: Prisma.$DocumentSharePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        caregiverId: string | null;
        fileServiceId: string | null;
        fileUrl: string;
        fileName: string | null;
        mimeType: string | null;
        size: number | null;
        type: $Enums.DocumentType;
        uploadedAt: Date;
        processed: boolean;
        metadata: Prisma.JsonValue | null;
      },
      ExtArgs['result']['document']
    >;
    composites: {};
  };

  type DocumentGetPayload<
    S extends boolean | null | undefined | DocumentDefaultArgs
  > = $Result.GetResult<Prisma.$DocumentPayload, S>;

  type DocumentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentCountAggregateInputType | true;
  };

  export interface DocumentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Document'];
      meta: { name: 'Document' };
    };
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(
      args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(
      args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     *
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DocumentFindManyArgs>(
      args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     *
     */
    create<T extends DocumentCreateArgs>(
      args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DocumentCreateManyArgs>(
      args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     *
     */
    delete<T extends DocumentDeleteArgs>(
      args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DocumentUpdateArgs>(
      args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DocumentDeleteManyArgs>(
      args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DocumentUpdateManyArgs>(
      args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(
      args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      $Result.GetResult<
        Prisma.$DocumentPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
     **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(
      args: Subset<T, DocumentAggregateArgs>
    ): Prisma.PrismaPromise<GetDocumentAggregateType<T>>;

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetDocumentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Document model
     */
    readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    processingJobs<T extends Document$processingJobsArgs<ExtArgs> = {}>(
      args?: Subset<T, Document$processingJobsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProcessingJobPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    ocrResult<T extends Document$ocrResultArgs<ExtArgs> = {}>(
      args?: Subset<T, Document$ocrResultArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    analysis<T extends Document$analysisArgs<ExtArgs> = {}>(
      args?: Subset<T, Document$analysisArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AnalysisPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    shares<T extends Document$sharesArgs<ExtArgs> = {}>(
      args?: Subset<T, Document$sharesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$DocumentSharePayload<ExtArgs>,
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<'Document', 'String'>;
    readonly userId: FieldRef<'Document', 'String'>;
    readonly caregiverId: FieldRef<'Document', 'String'>;
    readonly fileServiceId: FieldRef<'Document', 'String'>;
    readonly fileUrl: FieldRef<'Document', 'String'>;
    readonly fileName: FieldRef<'Document', 'String'>;
    readonly mimeType: FieldRef<'Document', 'String'>;
    readonly size: FieldRef<'Document', 'Int'>;
    readonly type: FieldRef<'Document', 'DocumentType'>;
    readonly uploadedAt: FieldRef<'Document', 'DateTime'>;
    readonly processed: FieldRef<'Document', 'Boolean'>;
    readonly metadata: FieldRef<'Document', 'Json'>;
  }

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput;
  };

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput;
  };

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Documents to fetch.
     */
    orderBy?:
      | DocumentOrderByWithRelationInput
      | DocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Documents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
  };

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Documents to fetch.
     */
    orderBy?:
      | DocumentOrderByWithRelationInput
      | DocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Documents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
  };

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Documents to fetch.
     */
    orderBy?:
      | DocumentOrderByWithRelationInput
      | DocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Documents.
     */
    skip?: number;
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
  };

  /**
   * Document create
   */
  export type DocumentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>;
  };

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Document update
   */
  export type DocumentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>;
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput;
  };

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Documents.
     */
    data: XOR<
      DocumentUpdateManyMutationInput,
      DocumentUncheckedUpdateManyInput
    >;
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput;
    /**
     * Limit how many Documents to update.
     */
    limit?: number;
  };

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * The data used to update Documents.
     */
    data: XOR<
      DocumentUpdateManyMutationInput,
      DocumentUncheckedUpdateManyInput
    >;
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput;
    /**
     * Limit how many Documents to update.
     */
    limit?: number;
  };

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput;
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>;
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>;
  };

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput;
  };

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput;
    /**
     * Limit how many Documents to delete.
     */
    limit?: number;
  };

  /**
   * Document.processingJobs
   */
  export type Document$processingJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    where?: ProcessingJobWhereInput;
    orderBy?:
      | ProcessingJobOrderByWithRelationInput
      | ProcessingJobOrderByWithRelationInput[];
    cursor?: ProcessingJobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProcessingJobScalarFieldEnum | ProcessingJobScalarFieldEnum[];
  };

  /**
   * Document.ocrResult
   */
  export type Document$ocrResultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    where?: OcrResultWhereInput;
  };

  /**
   * Document.analysis
   */
  export type Document$analysisArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    where?: AnalysisWhereInput;
    orderBy?:
      | AnalysisOrderByWithRelationInput
      | AnalysisOrderByWithRelationInput[];
    cursor?: AnalysisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[];
  };

  /**
   * Document.shares
   */
  export type Document$sharesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    where?: DocumentShareWhereInput;
    orderBy?:
      | DocumentShareOrderByWithRelationInput
      | DocumentShareOrderByWithRelationInput[];
    cursor?: DocumentShareWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DocumentShareScalarFieldEnum | DocumentShareScalarFieldEnum[];
  };

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null;
  };

  /**
   * Model ProcessingJob
   */

  export type AggregateProcessingJob = {
    _count: ProcessingJobCountAggregateOutputType | null;
    _avg: ProcessingJobAvgAggregateOutputType | null;
    _sum: ProcessingJobSumAggregateOutputType | null;
    _min: ProcessingJobMinAggregateOutputType | null;
    _max: ProcessingJobMaxAggregateOutputType | null;
  };

  export type ProcessingJobAvgAggregateOutputType = {
    attempts: number | null;
  };

  export type ProcessingJobSumAggregateOutputType = {
    attempts: number | null;
  };

  export type ProcessingJobMinAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    status: $Enums.JobStatus | null;
    attempts: number | null;
    error: string | null;
    processor: string | null;
    startedAt: Date | null;
    finishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProcessingJobMaxAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    status: $Enums.JobStatus | null;
    attempts: number | null;
    error: string | null;
    processor: string | null;
    startedAt: Date | null;
    finishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProcessingJobCountAggregateOutputType = {
    id: number;
    documentId: number;
    status: number;
    attempts: number;
    error: number;
    processor: number;
    startedAt: number;
    finishedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProcessingJobAvgAggregateInputType = {
    attempts?: true;
  };

  export type ProcessingJobSumAggregateInputType = {
    attempts?: true;
  };

  export type ProcessingJobMinAggregateInputType = {
    id?: true;
    documentId?: true;
    status?: true;
    attempts?: true;
    error?: true;
    processor?: true;
    startedAt?: true;
    finishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProcessingJobMaxAggregateInputType = {
    id?: true;
    documentId?: true;
    status?: true;
    attempts?: true;
    error?: true;
    processor?: true;
    startedAt?: true;
    finishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProcessingJobCountAggregateInputType = {
    id?: true;
    documentId?: true;
    status?: true;
    attempts?: true;
    error?: true;
    processor?: true;
    startedAt?: true;
    finishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProcessingJobAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which ProcessingJob to aggregate.
     */
    where?: ProcessingJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessingJobs to fetch.
     */
    orderBy?:
      | ProcessingJobOrderByWithRelationInput
      | ProcessingJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProcessingJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessingJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessingJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProcessingJobs
     **/
    _count?: true | ProcessingJobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProcessingJobAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProcessingJobSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProcessingJobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProcessingJobMaxAggregateInputType;
  };

  export type GetProcessingJobAggregateType<
    T extends ProcessingJobAggregateArgs
  > = {
    [P in keyof T & keyof AggregateProcessingJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessingJob[P]>
      : GetScalarType<T[P], AggregateProcessingJob[P]>;
  };

  export type ProcessingJobGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ProcessingJobWhereInput;
    orderBy?:
      | ProcessingJobOrderByWithAggregationInput
      | ProcessingJobOrderByWithAggregationInput[];
    by: ProcessingJobScalarFieldEnum[] | ProcessingJobScalarFieldEnum;
    having?: ProcessingJobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProcessingJobCountAggregateInputType | true;
    _avg?: ProcessingJobAvgAggregateInputType;
    _sum?: ProcessingJobSumAggregateInputType;
    _min?: ProcessingJobMinAggregateInputType;
    _max?: ProcessingJobMaxAggregateInputType;
  };

  export type ProcessingJobGroupByOutputType = {
    id: string;
    documentId: string;
    status: $Enums.JobStatus;
    attempts: number;
    error: string | null;
    processor: string | null;
    startedAt: Date | null;
    finishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProcessingJobCountAggregateOutputType | null;
    _avg: ProcessingJobAvgAggregateOutputType | null;
    _sum: ProcessingJobSumAggregateOutputType | null;
    _min: ProcessingJobMinAggregateOutputType | null;
    _max: ProcessingJobMaxAggregateOutputType | null;
  };

  type GetProcessingJobGroupByPayload<T extends ProcessingJobGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProcessingJobGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ProcessingJobGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessingJobGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessingJobGroupByOutputType[P]>;
        }
      >
    >;

  export type ProcessingJobSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      status?: boolean;
      attempts?: boolean;
      error?: boolean;
      processor?: boolean;
      startedAt?: boolean;
      finishedAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['processingJob']
  >;

  export type ProcessingJobSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      status?: boolean;
      attempts?: boolean;
      error?: boolean;
      processor?: boolean;
      startedAt?: boolean;
      finishedAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['processingJob']
  >;

  export type ProcessingJobSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      status?: boolean;
      attempts?: boolean;
      error?: boolean;
      processor?: boolean;
      startedAt?: boolean;
      finishedAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['processingJob']
  >;

  export type ProcessingJobSelectScalar = {
    id?: boolean;
    documentId?: boolean;
    status?: boolean;
    attempts?: boolean;
    error?: boolean;
    processor?: boolean;
    startedAt?: boolean;
    finishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProcessingJobOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'documentId'
    | 'status'
    | 'attempts'
    | 'error'
    | 'processor'
    | 'startedAt'
    | 'finishedAt'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['processingJob']
  >;
  export type ProcessingJobInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
  };
  export type ProcessingJobIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
  };
  export type ProcessingJobIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
  };

  export type $ProcessingJobPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'ProcessingJob';
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        documentId: string;
        status: $Enums.JobStatus;
        attempts: number;
        error: string | null;
        processor: string | null;
        startedAt: Date | null;
        finishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['processingJob']
    >;
    composites: {};
  };

  type ProcessingJobGetPayload<
    S extends boolean | null | undefined | ProcessingJobDefaultArgs
  > = $Result.GetResult<Prisma.$ProcessingJobPayload, S>;

  type ProcessingJobCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    ProcessingJobFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ProcessingJobCountAggregateInputType | true;
  };

  export interface ProcessingJobDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ProcessingJob'];
      meta: { name: 'ProcessingJob' };
    };
    /**
     * Find zero or one ProcessingJob that matches the filter.
     * @param {ProcessingJobFindUniqueArgs} args - Arguments to find a ProcessingJob
     * @example
     * // Get one ProcessingJob
     * const processingJob = await prisma.processingJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessingJobFindUniqueArgs>(
      args: SelectSubset<T, ProcessingJobFindUniqueArgs<ExtArgs>>
    ): Prisma__ProcessingJobClient<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ProcessingJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessingJobFindUniqueOrThrowArgs} args - Arguments to find a ProcessingJob
     * @example
     * // Get one ProcessingJob
     * const processingJob = await prisma.processingJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessingJobFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProcessingJobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProcessingJobClient<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProcessingJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingJobFindFirstArgs} args - Arguments to find a ProcessingJob
     * @example
     * // Get one ProcessingJob
     * const processingJob = await prisma.processingJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessingJobFindFirstArgs>(
      args?: SelectSubset<T, ProcessingJobFindFirstArgs<ExtArgs>>
    ): Prisma__ProcessingJobClient<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProcessingJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingJobFindFirstOrThrowArgs} args - Arguments to find a ProcessingJob
     * @example
     * // Get one ProcessingJob
     * const processingJob = await prisma.processingJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessingJobFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProcessingJobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProcessingJobClient<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ProcessingJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessingJobs
     * const processingJobs = await prisma.processingJob.findMany()
     *
     * // Get first 10 ProcessingJobs
     * const processingJobs = await prisma.processingJob.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const processingJobWithIdOnly = await prisma.processingJob.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProcessingJobFindManyArgs>(
      args?: SelectSubset<T, ProcessingJobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ProcessingJob.
     * @param {ProcessingJobCreateArgs} args - Arguments to create a ProcessingJob.
     * @example
     * // Create one ProcessingJob
     * const ProcessingJob = await prisma.processingJob.create({
     *   data: {
     *     // ... data to create a ProcessingJob
     *   }
     * })
     *
     */
    create<T extends ProcessingJobCreateArgs>(
      args: SelectSubset<T, ProcessingJobCreateArgs<ExtArgs>>
    ): Prisma__ProcessingJobClient<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ProcessingJobs.
     * @param {ProcessingJobCreateManyArgs} args - Arguments to create many ProcessingJobs.
     * @example
     * // Create many ProcessingJobs
     * const processingJob = await prisma.processingJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProcessingJobCreateManyArgs>(
      args?: SelectSubset<T, ProcessingJobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ProcessingJobs and returns the data saved in the database.
     * @param {ProcessingJobCreateManyAndReturnArgs} args - Arguments to create many ProcessingJobs.
     * @example
     * // Create many ProcessingJobs
     * const processingJob = await prisma.processingJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProcessingJobs and only return the `id`
     * const processingJobWithIdOnly = await prisma.processingJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProcessingJobCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProcessingJobCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ProcessingJob.
     * @param {ProcessingJobDeleteArgs} args - Arguments to delete one ProcessingJob.
     * @example
     * // Delete one ProcessingJob
     * const ProcessingJob = await prisma.processingJob.delete({
     *   where: {
     *     // ... filter to delete one ProcessingJob
     *   }
     * })
     *
     */
    delete<T extends ProcessingJobDeleteArgs>(
      args: SelectSubset<T, ProcessingJobDeleteArgs<ExtArgs>>
    ): Prisma__ProcessingJobClient<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ProcessingJob.
     * @param {ProcessingJobUpdateArgs} args - Arguments to update one ProcessingJob.
     * @example
     * // Update one ProcessingJob
     * const processingJob = await prisma.processingJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProcessingJobUpdateArgs>(
      args: SelectSubset<T, ProcessingJobUpdateArgs<ExtArgs>>
    ): Prisma__ProcessingJobClient<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ProcessingJobs.
     * @param {ProcessingJobDeleteManyArgs} args - Arguments to filter ProcessingJobs to delete.
     * @example
     * // Delete a few ProcessingJobs
     * const { count } = await prisma.processingJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProcessingJobDeleteManyArgs>(
      args?: SelectSubset<T, ProcessingJobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProcessingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessingJobs
     * const processingJob = await prisma.processingJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProcessingJobUpdateManyArgs>(
      args: SelectSubset<T, ProcessingJobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ProcessingJobs and returns the data updated in the database.
     * @param {ProcessingJobUpdateManyAndReturnArgs} args - Arguments to update many ProcessingJobs.
     * @example
     * // Update many ProcessingJobs
     * const processingJob = await prisma.processingJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProcessingJobs and only return the `id`
     * const processingJobWithIdOnly = await prisma.processingJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessingJobUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProcessingJobUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ProcessingJob.
     * @param {ProcessingJobUpsertArgs} args - Arguments to update or create a ProcessingJob.
     * @example
     * // Update or create a ProcessingJob
     * const processingJob = await prisma.processingJob.upsert({
     *   create: {
     *     // ... data to create a ProcessingJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessingJob we want to update
     *   }
     * })
     */
    upsert<T extends ProcessingJobUpsertArgs>(
      args: SelectSubset<T, ProcessingJobUpsertArgs<ExtArgs>>
    ): Prisma__ProcessingJobClient<
      $Result.GetResult<
        Prisma.$ProcessingJobPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ProcessingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingJobCountArgs} args - Arguments to filter ProcessingJobs to count.
     * @example
     * // Count the number of ProcessingJobs
     * const count = await prisma.processingJob.count({
     *   where: {
     *     // ... the filter for the ProcessingJobs we want to count
     *   }
     * })
     **/
    count<T extends ProcessingJobCountArgs>(
      args?: Subset<T, ProcessingJobCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessingJobCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProcessingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessingJobAggregateArgs>(
      args: Subset<T, ProcessingJobAggregateArgs>
    ): Prisma.PrismaPromise<GetProcessingJobAggregateType<T>>;

    /**
     * Group by ProcessingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingJobGroupByArgs} args - Group by arguments.
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
      T extends ProcessingJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessingJobGroupByArgs['orderBy'] }
        : { orderBy?: ProcessingJobGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, ProcessingJobGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetProcessingJobGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProcessingJob model
     */
    readonly fields: ProcessingJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessingJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessingJobClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, DocumentDefaultArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      | $Result.GetResult<
          Prisma.$DocumentPayload<ExtArgs>,
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
   * Fields of the ProcessingJob model
   */
  interface ProcessingJobFieldRefs {
    readonly id: FieldRef<'ProcessingJob', 'String'>;
    readonly documentId: FieldRef<'ProcessingJob', 'String'>;
    readonly status: FieldRef<'ProcessingJob', 'JobStatus'>;
    readonly attempts: FieldRef<'ProcessingJob', 'Int'>;
    readonly error: FieldRef<'ProcessingJob', 'String'>;
    readonly processor: FieldRef<'ProcessingJob', 'String'>;
    readonly startedAt: FieldRef<'ProcessingJob', 'DateTime'>;
    readonly finishedAt: FieldRef<'ProcessingJob', 'DateTime'>;
    readonly createdAt: FieldRef<'ProcessingJob', 'DateTime'>;
    readonly updatedAt: FieldRef<'ProcessingJob', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * ProcessingJob findUnique
   */
  export type ProcessingJobFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessingJob to fetch.
     */
    where: ProcessingJobWhereUniqueInput;
  };

  /**
   * ProcessingJob findUniqueOrThrow
   */
  export type ProcessingJobFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessingJob to fetch.
     */
    where: ProcessingJobWhereUniqueInput;
  };

  /**
   * ProcessingJob findFirst
   */
  export type ProcessingJobFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessingJob to fetch.
     */
    where?: ProcessingJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessingJobs to fetch.
     */
    orderBy?:
      | ProcessingJobOrderByWithRelationInput
      | ProcessingJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProcessingJobs.
     */
    cursor?: ProcessingJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessingJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessingJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProcessingJobs.
     */
    distinct?: ProcessingJobScalarFieldEnum | ProcessingJobScalarFieldEnum[];
  };

  /**
   * ProcessingJob findFirstOrThrow
   */
  export type ProcessingJobFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessingJob to fetch.
     */
    where?: ProcessingJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessingJobs to fetch.
     */
    orderBy?:
      | ProcessingJobOrderByWithRelationInput
      | ProcessingJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProcessingJobs.
     */
    cursor?: ProcessingJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessingJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessingJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProcessingJobs.
     */
    distinct?: ProcessingJobScalarFieldEnum | ProcessingJobScalarFieldEnum[];
  };

  /**
   * ProcessingJob findMany
   */
  export type ProcessingJobFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    /**
     * Filter, which ProcessingJobs to fetch.
     */
    where?: ProcessingJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProcessingJobs to fetch.
     */
    orderBy?:
      | ProcessingJobOrderByWithRelationInput
      | ProcessingJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProcessingJobs.
     */
    cursor?: ProcessingJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProcessingJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProcessingJobs.
     */
    skip?: number;
    distinct?: ProcessingJobScalarFieldEnum | ProcessingJobScalarFieldEnum[];
  };

  /**
   * ProcessingJob create
   */
  export type ProcessingJobCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProcessingJob.
     */
    data: XOR<ProcessingJobCreateInput, ProcessingJobUncheckedCreateInput>;
  };

  /**
   * ProcessingJob createMany
   */
  export type ProcessingJobCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many ProcessingJobs.
     */
    data: ProcessingJobCreateManyInput | ProcessingJobCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProcessingJob createManyAndReturn
   */
  export type ProcessingJobCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * The data used to create many ProcessingJobs.
     */
    data: ProcessingJobCreateManyInput | ProcessingJobCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProcessingJob update
   */
  export type ProcessingJobUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProcessingJob.
     */
    data: XOR<ProcessingJobUpdateInput, ProcessingJobUncheckedUpdateInput>;
    /**
     * Choose, which ProcessingJob to update.
     */
    where: ProcessingJobWhereUniqueInput;
  };

  /**
   * ProcessingJob updateMany
   */
  export type ProcessingJobUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update ProcessingJobs.
     */
    data: XOR<
      ProcessingJobUpdateManyMutationInput,
      ProcessingJobUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProcessingJobs to update
     */
    where?: ProcessingJobWhereInput;
    /**
     * Limit how many ProcessingJobs to update.
     */
    limit?: number;
  };

  /**
   * ProcessingJob updateManyAndReturn
   */
  export type ProcessingJobUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * The data used to update ProcessingJobs.
     */
    data: XOR<
      ProcessingJobUpdateManyMutationInput,
      ProcessingJobUncheckedUpdateManyInput
    >;
    /**
     * Filter which ProcessingJobs to update
     */
    where?: ProcessingJobWhereInput;
    /**
     * Limit how many ProcessingJobs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProcessingJob upsert
   */
  export type ProcessingJobUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProcessingJob to update in case it exists.
     */
    where: ProcessingJobWhereUniqueInput;
    /**
     * In case the ProcessingJob found by the `where` argument doesn't exist, create a new ProcessingJob with this data.
     */
    create: XOR<ProcessingJobCreateInput, ProcessingJobUncheckedCreateInput>;
    /**
     * In case the ProcessingJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessingJobUpdateInput, ProcessingJobUncheckedUpdateInput>;
  };

  /**
   * ProcessingJob delete
   */
  export type ProcessingJobDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
    /**
     * Filter which ProcessingJob to delete.
     */
    where: ProcessingJobWhereUniqueInput;
  };

  /**
   * ProcessingJob deleteMany
   */
  export type ProcessingJobDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which ProcessingJobs to delete
     */
    where?: ProcessingJobWhereInput;
    /**
     * Limit how many ProcessingJobs to delete.
     */
    limit?: number;
  };

  /**
   * ProcessingJob without action
   */
  export type ProcessingJobDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ProcessingJob
     */
    select?: ProcessingJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProcessingJob
     */
    omit?: ProcessingJobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingJobInclude<ExtArgs> | null;
  };

  /**
   * Model OcrResult
   */

  export type AggregateOcrResult = {
    _count: OcrResultCountAggregateOutputType | null;
    _avg: OcrResultAvgAggregateOutputType | null;
    _sum: OcrResultSumAggregateOutputType | null;
    _min: OcrResultMinAggregateOutputType | null;
    _max: OcrResultMaxAggregateOutputType | null;
  };

  export type OcrResultAvgAggregateOutputType = {
    pages: number | null;
    confidence: number | null;
  };

  export type OcrResultSumAggregateOutputType = {
    pages: number | null;
    confidence: number | null;
  };

  export type OcrResultMinAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    plainText: string | null;
    language: string | null;
    pages: number | null;
    confidence: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OcrResultMaxAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    plainText: string | null;
    language: string | null;
    pages: number | null;
    confidence: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OcrResultCountAggregateOutputType = {
    id: number;
    documentId: number;
    rawJson: number;
    plainText: number;
    language: number;
    pages: number;
    confidence: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OcrResultAvgAggregateInputType = {
    pages?: true;
    confidence?: true;
  };

  export type OcrResultSumAggregateInputType = {
    pages?: true;
    confidence?: true;
  };

  export type OcrResultMinAggregateInputType = {
    id?: true;
    documentId?: true;
    plainText?: true;
    language?: true;
    pages?: true;
    confidence?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OcrResultMaxAggregateInputType = {
    id?: true;
    documentId?: true;
    plainText?: true;
    language?: true;
    pages?: true;
    confidence?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OcrResultCountAggregateInputType = {
    id?: true;
    documentId?: true;
    rawJson?: true;
    plainText?: true;
    language?: true;
    pages?: true;
    confidence?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OcrResultAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which OcrResult to aggregate.
     */
    where?: OcrResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OcrResults to fetch.
     */
    orderBy?:
      | OcrResultOrderByWithRelationInput
      | OcrResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OcrResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OcrResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OcrResults.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OcrResults
     **/
    _count?: true | OcrResultCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OcrResultAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OcrResultSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OcrResultMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OcrResultMaxAggregateInputType;
  };

  export type GetOcrResultAggregateType<T extends OcrResultAggregateArgs> = {
    [P in keyof T & keyof AggregateOcrResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOcrResult[P]>
      : GetScalarType<T[P], AggregateOcrResult[P]>;
  };

  export type OcrResultGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: OcrResultWhereInput;
    orderBy?:
      | OcrResultOrderByWithAggregationInput
      | OcrResultOrderByWithAggregationInput[];
    by: OcrResultScalarFieldEnum[] | OcrResultScalarFieldEnum;
    having?: OcrResultScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OcrResultCountAggregateInputType | true;
    _avg?: OcrResultAvgAggregateInputType;
    _sum?: OcrResultSumAggregateInputType;
    _min?: OcrResultMinAggregateInputType;
    _max?: OcrResultMaxAggregateInputType;
  };

  export type OcrResultGroupByOutputType = {
    id: string;
    documentId: string;
    rawJson: JsonValue;
    plainText: string;
    language: string | null;
    pages: number | null;
    confidence: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OcrResultCountAggregateOutputType | null;
    _avg: OcrResultAvgAggregateOutputType | null;
    _sum: OcrResultSumAggregateOutputType | null;
    _min: OcrResultMinAggregateOutputType | null;
    _max: OcrResultMaxAggregateOutputType | null;
  };

  type GetOcrResultGroupByPayload<T extends OcrResultGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OcrResultGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OcrResultGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OcrResultGroupByOutputType[P]>
            : GetScalarType<T[P], OcrResultGroupByOutputType[P]>;
        }
      >
    >;

  export type OcrResultSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      rawJson?: boolean;
      plainText?: boolean;
      language?: boolean;
      pages?: boolean;
      confidence?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
      analysis?: boolean | OcrResult$analysisArgs<ExtArgs>;
      _count?: boolean | OcrResultCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['ocrResult']
  >;

  export type OcrResultSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      rawJson?: boolean;
      plainText?: boolean;
      language?: boolean;
      pages?: boolean;
      confidence?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['ocrResult']
  >;

  export type OcrResultSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      rawJson?: boolean;
      plainText?: boolean;
      language?: boolean;
      pages?: boolean;
      confidence?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['ocrResult']
  >;

  export type OcrResultSelectScalar = {
    id?: boolean;
    documentId?: boolean;
    rawJson?: boolean;
    plainText?: boolean;
    language?: boolean;
    pages?: boolean;
    confidence?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OcrResultOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'documentId'
    | 'rawJson'
    | 'plainText'
    | 'language'
    | 'pages'
    | 'confidence'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['ocrResult']
  >;
  export type OcrResultInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
    analysis?: boolean | OcrResult$analysisArgs<ExtArgs>;
    _count?: boolean | OcrResultCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type OcrResultIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
  };
  export type OcrResultIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
  };

  export type $OcrResultPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'OcrResult';
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>;
      analysis: Prisma.$AnalysisPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        documentId: string;
        rawJson: Prisma.JsonValue;
        plainText: string;
        language: string | null;
        pages: number | null;
        confidence: number | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['ocrResult']
    >;
    composites: {};
  };

  type OcrResultGetPayload<
    S extends boolean | null | undefined | OcrResultDefaultArgs
  > = $Result.GetResult<Prisma.$OcrResultPayload, S>;

  type OcrResultCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    OcrResultFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: OcrResultCountAggregateInputType | true;
  };

  export interface OcrResultDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OcrResult'];
      meta: { name: 'OcrResult' };
    };
    /**
     * Find zero or one OcrResult that matches the filter.
     * @param {OcrResultFindUniqueArgs} args - Arguments to find a OcrResult
     * @example
     * // Get one OcrResult
     * const ocrResult = await prisma.ocrResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OcrResultFindUniqueArgs>(
      args: SelectSubset<T, OcrResultFindUniqueArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one OcrResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OcrResultFindUniqueOrThrowArgs} args - Arguments to find a OcrResult
     * @example
     * // Get one OcrResult
     * const ocrResult = await prisma.ocrResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OcrResultFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OcrResultFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OcrResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcrResultFindFirstArgs} args - Arguments to find a OcrResult
     * @example
     * // Get one OcrResult
     * const ocrResult = await prisma.ocrResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OcrResultFindFirstArgs>(
      args?: SelectSubset<T, OcrResultFindFirstArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OcrResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcrResultFindFirstOrThrowArgs} args - Arguments to find a OcrResult
     * @example
     * // Get one OcrResult
     * const ocrResult = await prisma.ocrResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OcrResultFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OcrResultFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OcrResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcrResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OcrResults
     * const ocrResults = await prisma.ocrResult.findMany()
     *
     * // Get first 10 OcrResults
     * const ocrResults = await prisma.ocrResult.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ocrResultWithIdOnly = await prisma.ocrResult.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OcrResultFindManyArgs>(
      args?: SelectSubset<T, OcrResultFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a OcrResult.
     * @param {OcrResultCreateArgs} args - Arguments to create a OcrResult.
     * @example
     * // Create one OcrResult
     * const OcrResult = await prisma.ocrResult.create({
     *   data: {
     *     // ... data to create a OcrResult
     *   }
     * })
     *
     */
    create<T extends OcrResultCreateArgs>(
      args: SelectSubset<T, OcrResultCreateArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many OcrResults.
     * @param {OcrResultCreateManyArgs} args - Arguments to create many OcrResults.
     * @example
     * // Create many OcrResults
     * const ocrResult = await prisma.ocrResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OcrResultCreateManyArgs>(
      args?: SelectSubset<T, OcrResultCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many OcrResults and returns the data saved in the database.
     * @param {OcrResultCreateManyAndReturnArgs} args - Arguments to create many OcrResults.
     * @example
     * // Create many OcrResults
     * const ocrResult = await prisma.ocrResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OcrResults and only return the `id`
     * const ocrResultWithIdOnly = await prisma.ocrResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OcrResultCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OcrResultCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a OcrResult.
     * @param {OcrResultDeleteArgs} args - Arguments to delete one OcrResult.
     * @example
     * // Delete one OcrResult
     * const OcrResult = await prisma.ocrResult.delete({
     *   where: {
     *     // ... filter to delete one OcrResult
     *   }
     * })
     *
     */
    delete<T extends OcrResultDeleteArgs>(
      args: SelectSubset<T, OcrResultDeleteArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one OcrResult.
     * @param {OcrResultUpdateArgs} args - Arguments to update one OcrResult.
     * @example
     * // Update one OcrResult
     * const ocrResult = await prisma.ocrResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OcrResultUpdateArgs>(
      args: SelectSubset<T, OcrResultUpdateArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more OcrResults.
     * @param {OcrResultDeleteManyArgs} args - Arguments to filter OcrResults to delete.
     * @example
     * // Delete a few OcrResults
     * const { count } = await prisma.ocrResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OcrResultDeleteManyArgs>(
      args?: SelectSubset<T, OcrResultDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OcrResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcrResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OcrResults
     * const ocrResult = await prisma.ocrResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OcrResultUpdateManyArgs>(
      args: SelectSubset<T, OcrResultUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OcrResults and returns the data updated in the database.
     * @param {OcrResultUpdateManyAndReturnArgs} args - Arguments to update many OcrResults.
     * @example
     * // Update many OcrResults
     * const ocrResult = await prisma.ocrResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OcrResults and only return the `id`
     * const ocrResultWithIdOnly = await prisma.ocrResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends OcrResultUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OcrResultUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one OcrResult.
     * @param {OcrResultUpsertArgs} args - Arguments to update or create a OcrResult.
     * @example
     * // Update or create a OcrResult
     * const ocrResult = await prisma.ocrResult.upsert({
     *   create: {
     *     // ... data to create a OcrResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OcrResult we want to update
     *   }
     * })
     */
    upsert<T extends OcrResultUpsertArgs>(
      args: SelectSubset<T, OcrResultUpsertArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of OcrResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcrResultCountArgs} args - Arguments to filter OcrResults to count.
     * @example
     * // Count the number of OcrResults
     * const count = await prisma.ocrResult.count({
     *   where: {
     *     // ... the filter for the OcrResults we want to count
     *   }
     * })
     **/
    count<T extends OcrResultCountArgs>(
      args?: Subset<T, OcrResultCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OcrResultCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OcrResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcrResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OcrResultAggregateArgs>(
      args: Subset<T, OcrResultAggregateArgs>
    ): Prisma.PrismaPromise<GetOcrResultAggregateType<T>>;

    /**
     * Group by OcrResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OcrResultGroupByArgs} args - Group by arguments.
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
      T extends OcrResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OcrResultGroupByArgs['orderBy'] }
        : { orderBy?: OcrResultGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, OcrResultGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetOcrResultGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OcrResult model
     */
    readonly fields: OcrResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OcrResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OcrResultClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, DocumentDefaultArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      | $Result.GetResult<
          Prisma.$DocumentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    analysis<T extends OcrResult$analysisArgs<ExtArgs> = {}>(
      args?: Subset<T, OcrResult$analysisArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AnalysisPayload<ExtArgs>,
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
   * Fields of the OcrResult model
   */
  interface OcrResultFieldRefs {
    readonly id: FieldRef<'OcrResult', 'String'>;
    readonly documentId: FieldRef<'OcrResult', 'String'>;
    readonly rawJson: FieldRef<'OcrResult', 'Json'>;
    readonly plainText: FieldRef<'OcrResult', 'String'>;
    readonly language: FieldRef<'OcrResult', 'String'>;
    readonly pages: FieldRef<'OcrResult', 'Int'>;
    readonly confidence: FieldRef<'OcrResult', 'Float'>;
    readonly createdAt: FieldRef<'OcrResult', 'DateTime'>;
    readonly updatedAt: FieldRef<'OcrResult', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * OcrResult findUnique
   */
  export type OcrResultFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    /**
     * Filter, which OcrResult to fetch.
     */
    where: OcrResultWhereUniqueInput;
  };

  /**
   * OcrResult findUniqueOrThrow
   */
  export type OcrResultFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    /**
     * Filter, which OcrResult to fetch.
     */
    where: OcrResultWhereUniqueInput;
  };

  /**
   * OcrResult findFirst
   */
  export type OcrResultFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    /**
     * Filter, which OcrResult to fetch.
     */
    where?: OcrResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OcrResults to fetch.
     */
    orderBy?:
      | OcrResultOrderByWithRelationInput
      | OcrResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OcrResults.
     */
    cursor?: OcrResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OcrResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OcrResults.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OcrResults.
     */
    distinct?: OcrResultScalarFieldEnum | OcrResultScalarFieldEnum[];
  };

  /**
   * OcrResult findFirstOrThrow
   */
  export type OcrResultFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    /**
     * Filter, which OcrResult to fetch.
     */
    where?: OcrResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OcrResults to fetch.
     */
    orderBy?:
      | OcrResultOrderByWithRelationInput
      | OcrResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OcrResults.
     */
    cursor?: OcrResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OcrResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OcrResults.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OcrResults.
     */
    distinct?: OcrResultScalarFieldEnum | OcrResultScalarFieldEnum[];
  };

  /**
   * OcrResult findMany
   */
  export type OcrResultFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    /**
     * Filter, which OcrResults to fetch.
     */
    where?: OcrResultWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OcrResults to fetch.
     */
    orderBy?:
      | OcrResultOrderByWithRelationInput
      | OcrResultOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OcrResults.
     */
    cursor?: OcrResultWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OcrResults from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OcrResults.
     */
    skip?: number;
    distinct?: OcrResultScalarFieldEnum | OcrResultScalarFieldEnum[];
  };

  /**
   * OcrResult create
   */
  export type OcrResultCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    /**
     * The data needed to create a OcrResult.
     */
    data: XOR<OcrResultCreateInput, OcrResultUncheckedCreateInput>;
  };

  /**
   * OcrResult createMany
   */
  export type OcrResultCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many OcrResults.
     */
    data: OcrResultCreateManyInput | OcrResultCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OcrResult createManyAndReturn
   */
  export type OcrResultCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * The data used to create many OcrResults.
     */
    data: OcrResultCreateManyInput | OcrResultCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OcrResult update
   */
  export type OcrResultUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    /**
     * The data needed to update a OcrResult.
     */
    data: XOR<OcrResultUpdateInput, OcrResultUncheckedUpdateInput>;
    /**
     * Choose, which OcrResult to update.
     */
    where: OcrResultWhereUniqueInput;
  };

  /**
   * OcrResult updateMany
   */
  export type OcrResultUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update OcrResults.
     */
    data: XOR<
      OcrResultUpdateManyMutationInput,
      OcrResultUncheckedUpdateManyInput
    >;
    /**
     * Filter which OcrResults to update
     */
    where?: OcrResultWhereInput;
    /**
     * Limit how many OcrResults to update.
     */
    limit?: number;
  };

  /**
   * OcrResult updateManyAndReturn
   */
  export type OcrResultUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * The data used to update OcrResults.
     */
    data: XOR<
      OcrResultUpdateManyMutationInput,
      OcrResultUncheckedUpdateManyInput
    >;
    /**
     * Filter which OcrResults to update
     */
    where?: OcrResultWhereInput;
    /**
     * Limit how many OcrResults to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OcrResult upsert
   */
  export type OcrResultUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    /**
     * The filter to search for the OcrResult to update in case it exists.
     */
    where: OcrResultWhereUniqueInput;
    /**
     * In case the OcrResult found by the `where` argument doesn't exist, create a new OcrResult with this data.
     */
    create: XOR<OcrResultCreateInput, OcrResultUncheckedCreateInput>;
    /**
     * In case the OcrResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OcrResultUpdateInput, OcrResultUncheckedUpdateInput>;
  };

  /**
   * OcrResult delete
   */
  export type OcrResultDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    /**
     * Filter which OcrResult to delete.
     */
    where: OcrResultWhereUniqueInput;
  };

  /**
   * OcrResult deleteMany
   */
  export type OcrResultDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which OcrResults to delete
     */
    where?: OcrResultWhereInput;
    /**
     * Limit how many OcrResults to delete.
     */
    limit?: number;
  };

  /**
   * OcrResult.analysis
   */
  export type OcrResult$analysisArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    where?: AnalysisWhereInput;
    orderBy?:
      | AnalysisOrderByWithRelationInput
      | AnalysisOrderByWithRelationInput[];
    cursor?: AnalysisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[];
  };

  /**
   * OcrResult without action
   */
  export type OcrResultDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
  };

  /**
   * Model Analysis
   */

  export type AggregateAnalysis = {
    _count: AnalysisCountAggregateOutputType | null;
    _avg: AnalysisAvgAggregateOutputType | null;
    _sum: AnalysisSumAggregateOutputType | null;
    _min: AnalysisMinAggregateOutputType | null;
    _max: AnalysisMaxAggregateOutputType | null;
  };

  export type AnalysisAvgAggregateOutputType = {
    confidence: number | null;
  };

  export type AnalysisSumAggregateOutputType = {
    confidence: number | null;
  };

  export type AnalysisMinAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    ocrResultId: string | null;
    model: string | null;
    prompt: string | null;
    summary: string | null;
    status: $Enums.AnalysisStatus | null;
    confidence: number | null;
    requestedBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AnalysisMaxAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    ocrResultId: string | null;
    model: string | null;
    prompt: string | null;
    summary: string | null;
    status: $Enums.AnalysisStatus | null;
    confidence: number | null;
    requestedBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AnalysisCountAggregateOutputType = {
    id: number;
    documentId: number;
    ocrResultId: number;
    model: number;
    prompt: number;
    response: number;
    summary: number;
    insights: number;
    vitals: number;
    graphs: number;
    status: number;
    confidence: number;
    requestedBy: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type AnalysisAvgAggregateInputType = {
    confidence?: true;
  };

  export type AnalysisSumAggregateInputType = {
    confidence?: true;
  };

  export type AnalysisMinAggregateInputType = {
    id?: true;
    documentId?: true;
    ocrResultId?: true;
    model?: true;
    prompt?: true;
    summary?: true;
    status?: true;
    confidence?: true;
    requestedBy?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AnalysisMaxAggregateInputType = {
    id?: true;
    documentId?: true;
    ocrResultId?: true;
    model?: true;
    prompt?: true;
    summary?: true;
    status?: true;
    confidence?: true;
    requestedBy?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AnalysisCountAggregateInputType = {
    id?: true;
    documentId?: true;
    ocrResultId?: true;
    model?: true;
    prompt?: true;
    response?: true;
    summary?: true;
    insights?: true;
    vitals?: true;
    graphs?: true;
    status?: true;
    confidence?: true;
    requestedBy?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type AnalysisAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Analysis to aggregate.
     */
    where?: AnalysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analyses to fetch.
     */
    orderBy?:
      | AnalysisOrderByWithRelationInput
      | AnalysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AnalysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Analyses
     **/
    _count?: true | AnalysisCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AnalysisAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AnalysisSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AnalysisMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AnalysisMaxAggregateInputType;
  };

  export type GetAnalysisAggregateType<T extends AnalysisAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysis[P]>
      : GetScalarType<T[P], AggregateAnalysis[P]>;
  };

  export type AnalysisGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: AnalysisWhereInput;
    orderBy?:
      | AnalysisOrderByWithAggregationInput
      | AnalysisOrderByWithAggregationInput[];
    by: AnalysisScalarFieldEnum[] | AnalysisScalarFieldEnum;
    having?: AnalysisScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalysisCountAggregateInputType | true;
    _avg?: AnalysisAvgAggregateInputType;
    _sum?: AnalysisSumAggregateInputType;
    _min?: AnalysisMinAggregateInputType;
    _max?: AnalysisMaxAggregateInputType;
  };

  export type AnalysisGroupByOutputType = {
    id: string;
    documentId: string;
    ocrResultId: string | null;
    model: string;
    prompt: string;
    response: JsonValue;
    summary: string | null;
    insights: JsonValue | null;
    vitals: JsonValue | null;
    graphs: JsonValue | null;
    status: $Enums.AnalysisStatus;
    confidence: number | null;
    requestedBy: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AnalysisCountAggregateOutputType | null;
    _avg: AnalysisAvgAggregateOutputType | null;
    _sum: AnalysisSumAggregateOutputType | null;
    _min: AnalysisMinAggregateOutputType | null;
    _max: AnalysisMaxAggregateOutputType | null;
  };

  type GetAnalysisGroupByPayload<T extends AnalysisGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AnalysisGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AnalysisGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisGroupByOutputType[P]>;
        }
      >
    >;

  export type AnalysisSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      ocrResultId?: boolean;
      model?: boolean;
      prompt?: boolean;
      response?: boolean;
      summary?: boolean;
      insights?: boolean;
      vitals?: boolean;
      graphs?: boolean;
      status?: boolean;
      confidence?: boolean;
      requestedBy?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
      ocrResult?: boolean | Analysis$ocrResultArgs<ExtArgs>;
      VitalParam?: boolean | Analysis$VitalParamArgs<ExtArgs>;
      _count?: boolean | AnalysisCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['analysis']
  >;

  export type AnalysisSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      ocrResultId?: boolean;
      model?: boolean;
      prompt?: boolean;
      response?: boolean;
      summary?: boolean;
      insights?: boolean;
      vitals?: boolean;
      graphs?: boolean;
      status?: boolean;
      confidence?: boolean;
      requestedBy?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
      ocrResult?: boolean | Analysis$ocrResultArgs<ExtArgs>;
    },
    ExtArgs['result']['analysis']
  >;

  export type AnalysisSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      ocrResultId?: boolean;
      model?: boolean;
      prompt?: boolean;
      response?: boolean;
      summary?: boolean;
      insights?: boolean;
      vitals?: boolean;
      graphs?: boolean;
      status?: boolean;
      confidence?: boolean;
      requestedBy?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
      ocrResult?: boolean | Analysis$ocrResultArgs<ExtArgs>;
    },
    ExtArgs['result']['analysis']
  >;

  export type AnalysisSelectScalar = {
    id?: boolean;
    documentId?: boolean;
    ocrResultId?: boolean;
    model?: boolean;
    prompt?: boolean;
    response?: boolean;
    summary?: boolean;
    insights?: boolean;
    vitals?: boolean;
    graphs?: boolean;
    status?: boolean;
    confidence?: boolean;
    requestedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type AnalysisOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'documentId'
    | 'ocrResultId'
    | 'model'
    | 'prompt'
    | 'response'
    | 'summary'
    | 'insights'
    | 'vitals'
    | 'graphs'
    | 'status'
    | 'confidence'
    | 'requestedBy'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['analysis']
  >;
  export type AnalysisInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
    ocrResult?: boolean | Analysis$ocrResultArgs<ExtArgs>;
    VitalParam?: boolean | Analysis$VitalParamArgs<ExtArgs>;
    _count?: boolean | AnalysisCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type AnalysisIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
    ocrResult?: boolean | Analysis$ocrResultArgs<ExtArgs>;
  };
  export type AnalysisIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
    ocrResult?: boolean | Analysis$ocrResultArgs<ExtArgs>;
  };

  export type $AnalysisPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Analysis';
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>;
      ocrResult: Prisma.$OcrResultPayload<ExtArgs> | null;
      VitalParam: Prisma.$VitalParamPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        documentId: string;
        ocrResultId: string | null;
        model: string;
        prompt: string;
        response: Prisma.JsonValue;
        summary: string | null;
        insights: Prisma.JsonValue | null;
        vitals: Prisma.JsonValue | null;
        graphs: Prisma.JsonValue | null;
        status: $Enums.AnalysisStatus;
        confidence: number | null;
        requestedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['analysis']
    >;
    composites: {};
  };

  type AnalysisGetPayload<
    S extends boolean | null | undefined | AnalysisDefaultArgs
  > = $Result.GetResult<Prisma.$AnalysisPayload, S>;

  type AnalysisCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<AnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnalysisCountAggregateInputType | true;
  };

  export interface AnalysisDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Analysis'];
      meta: { name: 'Analysis' };
    };
    /**
     * Find zero or one Analysis that matches the filter.
     * @param {AnalysisFindUniqueArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisFindUniqueArgs>(
      args: SelectSubset<T, AnalysisFindUniqueArgs<ExtArgs>>
    ): Prisma__AnalysisClient<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Analysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisFindUniqueOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AnalysisFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnalysisClient<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Analysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisFindFirstArgs>(
      args?: SelectSubset<T, AnalysisFindFirstArgs<ExtArgs>>
    ): Prisma__AnalysisClient<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Analysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AnalysisFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnalysisClient<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analyses
     * const analyses = await prisma.analysis.findMany()
     *
     * // Get first 10 Analyses
     * const analyses = await prisma.analysis.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const analysisWithIdOnly = await prisma.analysis.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AnalysisFindManyArgs>(
      args?: SelectSubset<T, AnalysisFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Analysis.
     * @param {AnalysisCreateArgs} args - Arguments to create a Analysis.
     * @example
     * // Create one Analysis
     * const Analysis = await prisma.analysis.create({
     *   data: {
     *     // ... data to create a Analysis
     *   }
     * })
     *
     */
    create<T extends AnalysisCreateArgs>(
      args: SelectSubset<T, AnalysisCreateArgs<ExtArgs>>
    ): Prisma__AnalysisClient<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Analyses.
     * @param {AnalysisCreateManyArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AnalysisCreateManyArgs>(
      args?: SelectSubset<T, AnalysisCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Analyses and returns the data saved in the database.
     * @param {AnalysisCreateManyAndReturnArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Analyses and only return the `id`
     * const analysisWithIdOnly = await prisma.analysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AnalysisCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AnalysisCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Analysis.
     * @param {AnalysisDeleteArgs} args - Arguments to delete one Analysis.
     * @example
     * // Delete one Analysis
     * const Analysis = await prisma.analysis.delete({
     *   where: {
     *     // ... filter to delete one Analysis
     *   }
     * })
     *
     */
    delete<T extends AnalysisDeleteArgs>(
      args: SelectSubset<T, AnalysisDeleteArgs<ExtArgs>>
    ): Prisma__AnalysisClient<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Analysis.
     * @param {AnalysisUpdateArgs} args - Arguments to update one Analysis.
     * @example
     * // Update one Analysis
     * const analysis = await prisma.analysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AnalysisUpdateArgs>(
      args: SelectSubset<T, AnalysisUpdateArgs<ExtArgs>>
    ): Prisma__AnalysisClient<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Analyses.
     * @param {AnalysisDeleteManyArgs} args - Arguments to filter Analyses to delete.
     * @example
     * // Delete a few Analyses
     * const { count } = await prisma.analysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AnalysisDeleteManyArgs>(
      args?: SelectSubset<T, AnalysisDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AnalysisUpdateManyArgs>(
      args: SelectSubset<T, AnalysisUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Analyses and returns the data updated in the database.
     * @param {AnalysisUpdateManyAndReturnArgs} args - Arguments to update many Analyses.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Analyses and only return the `id`
     * const analysisWithIdOnly = await prisma.analysis.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalysisUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AnalysisUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Analysis.
     * @param {AnalysisUpsertArgs} args - Arguments to update or create a Analysis.
     * @example
     * // Update or create a Analysis
     * const analysis = await prisma.analysis.upsert({
     *   create: {
     *     // ... data to create a Analysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analysis we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisUpsertArgs>(
      args: SelectSubset<T, AnalysisUpsertArgs<ExtArgs>>
    ): Prisma__AnalysisClient<
      $Result.GetResult<
        Prisma.$AnalysisPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCountArgs} args - Arguments to filter Analyses to count.
     * @example
     * // Count the number of Analyses
     * const count = await prisma.analysis.count({
     *   where: {
     *     // ... the filter for the Analyses we want to count
     *   }
     * })
     **/
    count<T extends AnalysisCountArgs>(
      args?: Subset<T, AnalysisCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisAggregateArgs>(
      args: Subset<T, AnalysisAggregateArgs>
    ): Prisma.PrismaPromise<GetAnalysisAggregateType<T>>;

    /**
     * Group by Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisGroupByArgs} args - Group by arguments.
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
      T extends AnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, AnalysisGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetAnalysisGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Analysis model
     */
    readonly fields: AnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, DocumentDefaultArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      | $Result.GetResult<
          Prisma.$DocumentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    ocrResult<T extends Analysis$ocrResultArgs<ExtArgs> = {}>(
      args?: Subset<T, Analysis$ocrResultArgs<ExtArgs>>
    ): Prisma__OcrResultClient<
      $Result.GetResult<
        Prisma.$OcrResultPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    VitalParam<T extends Analysis$VitalParamArgs<ExtArgs> = {}>(
      args?: Subset<T, Analysis$VitalParamArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$VitalParamPayload<ExtArgs>,
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
   * Fields of the Analysis model
   */
  interface AnalysisFieldRefs {
    readonly id: FieldRef<'Analysis', 'String'>;
    readonly documentId: FieldRef<'Analysis', 'String'>;
    readonly ocrResultId: FieldRef<'Analysis', 'String'>;
    readonly model: FieldRef<'Analysis', 'String'>;
    readonly prompt: FieldRef<'Analysis', 'String'>;
    readonly response: FieldRef<'Analysis', 'Json'>;
    readonly summary: FieldRef<'Analysis', 'String'>;
    readonly insights: FieldRef<'Analysis', 'Json'>;
    readonly vitals: FieldRef<'Analysis', 'Json'>;
    readonly graphs: FieldRef<'Analysis', 'Json'>;
    readonly status: FieldRef<'Analysis', 'AnalysisStatus'>;
    readonly confidence: FieldRef<'Analysis', 'Float'>;
    readonly requestedBy: FieldRef<'Analysis', 'String'>;
    readonly createdAt: FieldRef<'Analysis', 'DateTime'>;
    readonly updatedAt: FieldRef<'Analysis', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Analysis findUnique
   */
  export type AnalysisFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput;
  };

  /**
   * Analysis findUniqueOrThrow
   */
  export type AnalysisFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput;
  };

  /**
   * Analysis findFirst
   */
  export type AnalysisFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analyses to fetch.
     */
    orderBy?:
      | AnalysisOrderByWithRelationInput
      | AnalysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[];
  };

  /**
   * Analysis findFirstOrThrow
   */
  export type AnalysisFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analyses to fetch.
     */
    orderBy?:
      | AnalysisOrderByWithRelationInput
      | AnalysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[];
  };

  /**
   * Analysis findMany
   */
  export type AnalysisFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    /**
     * Filter, which Analyses to fetch.
     */
    where?: AnalysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analyses to fetch.
     */
    orderBy?:
      | AnalysisOrderByWithRelationInput
      | AnalysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Analyses.
     */
    cursor?: AnalysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analyses.
     */
    skip?: number;
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[];
  };

  /**
   * Analysis create
   */
  export type AnalysisCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    /**
     * The data needed to create a Analysis.
     */
    data: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>;
  };

  /**
   * Analysis createMany
   */
  export type AnalysisCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Analysis createManyAndReturn
   */
  export type AnalysisCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Analysis update
   */
  export type AnalysisUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    /**
     * The data needed to update a Analysis.
     */
    data: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>;
    /**
     * Choose, which Analysis to update.
     */
    where: AnalysisWhereUniqueInput;
  };

  /**
   * Analysis updateMany
   */
  export type AnalysisUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Analyses.
     */
    data: XOR<
      AnalysisUpdateManyMutationInput,
      AnalysisUncheckedUpdateManyInput
    >;
    /**
     * Filter which Analyses to update
     */
    where?: AnalysisWhereInput;
    /**
     * Limit how many Analyses to update.
     */
    limit?: number;
  };

  /**
   * Analysis updateManyAndReturn
   */
  export type AnalysisUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * The data used to update Analyses.
     */
    data: XOR<
      AnalysisUpdateManyMutationInput,
      AnalysisUncheckedUpdateManyInput
    >;
    /**
     * Filter which Analyses to update
     */
    where?: AnalysisWhereInput;
    /**
     * Limit how many Analyses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Analysis upsert
   */
  export type AnalysisUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    /**
     * The filter to search for the Analysis to update in case it exists.
     */
    where: AnalysisWhereUniqueInput;
    /**
     * In case the Analysis found by the `where` argument doesn't exist, create a new Analysis with this data.
     */
    create: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>;
    /**
     * In case the Analysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>;
  };

  /**
   * Analysis delete
   */
  export type AnalysisDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
    /**
     * Filter which Analysis to delete.
     */
    where: AnalysisWhereUniqueInput;
  };

  /**
   * Analysis deleteMany
   */
  export type AnalysisDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Analyses to delete
     */
    where?: AnalysisWhereInput;
    /**
     * Limit how many Analyses to delete.
     */
    limit?: number;
  };

  /**
   * Analysis.ocrResult
   */
  export type Analysis$ocrResultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OcrResult
     */
    select?: OcrResultSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OcrResult
     */
    omit?: OcrResultOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OcrResultInclude<ExtArgs> | null;
    where?: OcrResultWhereInput;
  };

  /**
   * Analysis.VitalParam
   */
  export type Analysis$VitalParamArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    where?: VitalParamWhereInput;
    orderBy?:
      | VitalParamOrderByWithRelationInput
      | VitalParamOrderByWithRelationInput[];
    cursor?: VitalParamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VitalParamScalarFieldEnum | VitalParamScalarFieldEnum[];
  };

  /**
   * Analysis without action
   */
  export type AnalysisDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null;
  };

  /**
   * Model VitalParam
   */

  export type AggregateVitalParam = {
    _count: VitalParamCountAggregateOutputType | null;
    _avg: VitalParamAvgAggregateOutputType | null;
    _sum: VitalParamSumAggregateOutputType | null;
    _min: VitalParamMinAggregateOutputType | null;
    _max: VitalParamMaxAggregateOutputType | null;
  };

  export type VitalParamAvgAggregateOutputType = {
    value: number | null;
  };

  export type VitalParamSumAggregateOutputType = {
    value: number | null;
  };

  export type VitalParamMinAggregateOutputType = {
    id: string | null;
    analysisId: string | null;
    name: string | null;
    value: number | null;
    unit: string | null;
    recordedAt: Date | null;
    createdAt: Date | null;
  };

  export type VitalParamMaxAggregateOutputType = {
    id: string | null;
    analysisId: string | null;
    name: string | null;
    value: number | null;
    unit: string | null;
    recordedAt: Date | null;
    createdAt: Date | null;
  };

  export type VitalParamCountAggregateOutputType = {
    id: number;
    analysisId: number;
    name: number;
    value: number;
    unit: number;
    recordedAt: number;
    metadata: number;
    createdAt: number;
    _all: number;
  };

  export type VitalParamAvgAggregateInputType = {
    value?: true;
  };

  export type VitalParamSumAggregateInputType = {
    value?: true;
  };

  export type VitalParamMinAggregateInputType = {
    id?: true;
    analysisId?: true;
    name?: true;
    value?: true;
    unit?: true;
    recordedAt?: true;
    createdAt?: true;
  };

  export type VitalParamMaxAggregateInputType = {
    id?: true;
    analysisId?: true;
    name?: true;
    value?: true;
    unit?: true;
    recordedAt?: true;
    createdAt?: true;
  };

  export type VitalParamCountAggregateInputType = {
    id?: true;
    analysisId?: true;
    name?: true;
    value?: true;
    unit?: true;
    recordedAt?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
  };

  export type VitalParamAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which VitalParam to aggregate.
     */
    where?: VitalParamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VitalParams to fetch.
     */
    orderBy?:
      | VitalParamOrderByWithRelationInput
      | VitalParamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VitalParamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VitalParams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VitalParams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VitalParams
     **/
    _count?: true | VitalParamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: VitalParamAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: VitalParamSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VitalParamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VitalParamMaxAggregateInputType;
  };

  export type GetVitalParamAggregateType<T extends VitalParamAggregateArgs> = {
    [P in keyof T & keyof AggregateVitalParam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVitalParam[P]>
      : GetScalarType<T[P], AggregateVitalParam[P]>;
  };

  export type VitalParamGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: VitalParamWhereInput;
    orderBy?:
      | VitalParamOrderByWithAggregationInput
      | VitalParamOrderByWithAggregationInput[];
    by: VitalParamScalarFieldEnum[] | VitalParamScalarFieldEnum;
    having?: VitalParamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VitalParamCountAggregateInputType | true;
    _avg?: VitalParamAvgAggregateInputType;
    _sum?: VitalParamSumAggregateInputType;
    _min?: VitalParamMinAggregateInputType;
    _max?: VitalParamMaxAggregateInputType;
  };

  export type VitalParamGroupByOutputType = {
    id: string;
    analysisId: string;
    name: string;
    value: number;
    unit: string | null;
    recordedAt: Date | null;
    metadata: JsonValue | null;
    createdAt: Date;
    _count: VitalParamCountAggregateOutputType | null;
    _avg: VitalParamAvgAggregateOutputType | null;
    _sum: VitalParamSumAggregateOutputType | null;
    _min: VitalParamMinAggregateOutputType | null;
    _max: VitalParamMaxAggregateOutputType | null;
  };

  type GetVitalParamGroupByPayload<T extends VitalParamGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<VitalParamGroupByOutputType, T['by']> & {
          [P in keyof T & keyof VitalParamGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VitalParamGroupByOutputType[P]>
            : GetScalarType<T[P], VitalParamGroupByOutputType[P]>;
        }
      >
    >;

  export type VitalParamSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      analysisId?: boolean;
      name?: boolean;
      value?: boolean;
      unit?: boolean;
      recordedAt?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      analysis?: boolean | AnalysisDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vitalParam']
  >;

  export type VitalParamSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      analysisId?: boolean;
      name?: boolean;
      value?: boolean;
      unit?: boolean;
      recordedAt?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      analysis?: boolean | AnalysisDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vitalParam']
  >;

  export type VitalParamSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      analysisId?: boolean;
      name?: boolean;
      value?: boolean;
      unit?: boolean;
      recordedAt?: boolean;
      metadata?: boolean;
      createdAt?: boolean;
      analysis?: boolean | AnalysisDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vitalParam']
  >;

  export type VitalParamSelectScalar = {
    id?: boolean;
    analysisId?: boolean;
    name?: boolean;
    value?: boolean;
    unit?: boolean;
    recordedAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
  };

  export type VitalParamOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'analysisId'
    | 'name'
    | 'value'
    | 'unit'
    | 'recordedAt'
    | 'metadata'
    | 'createdAt',
    ExtArgs['result']['vitalParam']
  >;
  export type VitalParamInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    analysis?: boolean | AnalysisDefaultArgs<ExtArgs>;
  };
  export type VitalParamIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    analysis?: boolean | AnalysisDefaultArgs<ExtArgs>;
  };
  export type VitalParamIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    analysis?: boolean | AnalysisDefaultArgs<ExtArgs>;
  };

  export type $VitalParamPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'VitalParam';
    objects: {
      analysis: Prisma.$AnalysisPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        analysisId: string;
        name: string;
        value: number;
        unit: string | null;
        recordedAt: Date | null;
        metadata: Prisma.JsonValue | null;
        createdAt: Date;
      },
      ExtArgs['result']['vitalParam']
    >;
    composites: {};
  };

  type VitalParamGetPayload<
    S extends boolean | null | undefined | VitalParamDefaultArgs
  > = $Result.GetResult<Prisma.$VitalParamPayload, S>;

  type VitalParamCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    VitalParamFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: VitalParamCountAggregateInputType | true;
  };

  export interface VitalParamDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['VitalParam'];
      meta: { name: 'VitalParam' };
    };
    /**
     * Find zero or one VitalParam that matches the filter.
     * @param {VitalParamFindUniqueArgs} args - Arguments to find a VitalParam
     * @example
     * // Get one VitalParam
     * const vitalParam = await prisma.vitalParam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VitalParamFindUniqueArgs>(
      args: SelectSubset<T, VitalParamFindUniqueArgs<ExtArgs>>
    ): Prisma__VitalParamClient<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one VitalParam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VitalParamFindUniqueOrThrowArgs} args - Arguments to find a VitalParam
     * @example
     * // Get one VitalParam
     * const vitalParam = await prisma.vitalParam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VitalParamFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VitalParamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VitalParamClient<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first VitalParam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalParamFindFirstArgs} args - Arguments to find a VitalParam
     * @example
     * // Get one VitalParam
     * const vitalParam = await prisma.vitalParam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VitalParamFindFirstArgs>(
      args?: SelectSubset<T, VitalParamFindFirstArgs<ExtArgs>>
    ): Prisma__VitalParamClient<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first VitalParam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalParamFindFirstOrThrowArgs} args - Arguments to find a VitalParam
     * @example
     * // Get one VitalParam
     * const vitalParam = await prisma.vitalParam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VitalParamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VitalParamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VitalParamClient<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more VitalParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalParamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VitalParams
     * const vitalParams = await prisma.vitalParam.findMany()
     *
     * // Get first 10 VitalParams
     * const vitalParams = await prisma.vitalParam.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vitalParamWithIdOnly = await prisma.vitalParam.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VitalParamFindManyArgs>(
      args?: SelectSubset<T, VitalParamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a VitalParam.
     * @param {VitalParamCreateArgs} args - Arguments to create a VitalParam.
     * @example
     * // Create one VitalParam
     * const VitalParam = await prisma.vitalParam.create({
     *   data: {
     *     // ... data to create a VitalParam
     *   }
     * })
     *
     */
    create<T extends VitalParamCreateArgs>(
      args: SelectSubset<T, VitalParamCreateArgs<ExtArgs>>
    ): Prisma__VitalParamClient<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many VitalParams.
     * @param {VitalParamCreateManyArgs} args - Arguments to create many VitalParams.
     * @example
     * // Create many VitalParams
     * const vitalParam = await prisma.vitalParam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VitalParamCreateManyArgs>(
      args?: SelectSubset<T, VitalParamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many VitalParams and returns the data saved in the database.
     * @param {VitalParamCreateManyAndReturnArgs} args - Arguments to create many VitalParams.
     * @example
     * // Create many VitalParams
     * const vitalParam = await prisma.vitalParam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VitalParams and only return the `id`
     * const vitalParamWithIdOnly = await prisma.vitalParam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VitalParamCreateManyAndReturnArgs>(
      args?: SelectSubset<T, VitalParamCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a VitalParam.
     * @param {VitalParamDeleteArgs} args - Arguments to delete one VitalParam.
     * @example
     * // Delete one VitalParam
     * const VitalParam = await prisma.vitalParam.delete({
     *   where: {
     *     // ... filter to delete one VitalParam
     *   }
     * })
     *
     */
    delete<T extends VitalParamDeleteArgs>(
      args: SelectSubset<T, VitalParamDeleteArgs<ExtArgs>>
    ): Prisma__VitalParamClient<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one VitalParam.
     * @param {VitalParamUpdateArgs} args - Arguments to update one VitalParam.
     * @example
     * // Update one VitalParam
     * const vitalParam = await prisma.vitalParam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VitalParamUpdateArgs>(
      args: SelectSubset<T, VitalParamUpdateArgs<ExtArgs>>
    ): Prisma__VitalParamClient<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more VitalParams.
     * @param {VitalParamDeleteManyArgs} args - Arguments to filter VitalParams to delete.
     * @example
     * // Delete a few VitalParams
     * const { count } = await prisma.vitalParam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VitalParamDeleteManyArgs>(
      args?: SelectSubset<T, VitalParamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more VitalParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalParamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VitalParams
     * const vitalParam = await prisma.vitalParam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VitalParamUpdateManyArgs>(
      args: SelectSubset<T, VitalParamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more VitalParams and returns the data updated in the database.
     * @param {VitalParamUpdateManyAndReturnArgs} args - Arguments to update many VitalParams.
     * @example
     * // Update many VitalParams
     * const vitalParam = await prisma.vitalParam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VitalParams and only return the `id`
     * const vitalParamWithIdOnly = await prisma.vitalParam.updateManyAndReturn({
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
    updateManyAndReturn<T extends VitalParamUpdateManyAndReturnArgs>(
      args: SelectSubset<T, VitalParamUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one VitalParam.
     * @param {VitalParamUpsertArgs} args - Arguments to update or create a VitalParam.
     * @example
     * // Update or create a VitalParam
     * const vitalParam = await prisma.vitalParam.upsert({
     *   create: {
     *     // ... data to create a VitalParam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VitalParam we want to update
     *   }
     * })
     */
    upsert<T extends VitalParamUpsertArgs>(
      args: SelectSubset<T, VitalParamUpsertArgs<ExtArgs>>
    ): Prisma__VitalParamClient<
      $Result.GetResult<
        Prisma.$VitalParamPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of VitalParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalParamCountArgs} args - Arguments to filter VitalParams to count.
     * @example
     * // Count the number of VitalParams
     * const count = await prisma.vitalParam.count({
     *   where: {
     *     // ... the filter for the VitalParams we want to count
     *   }
     * })
     **/
    count<T extends VitalParamCountArgs>(
      args?: Subset<T, VitalParamCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VitalParamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a VitalParam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalParamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VitalParamAggregateArgs>(
      args: Subset<T, VitalParamAggregateArgs>
    ): Prisma.PrismaPromise<GetVitalParamAggregateType<T>>;

    /**
     * Group by VitalParam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalParamGroupByArgs} args - Group by arguments.
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
      T extends VitalParamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VitalParamGroupByArgs['orderBy'] }
        : { orderBy?: VitalParamGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, VitalParamGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetVitalParamGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VitalParam model
     */
    readonly fields: VitalParamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VitalParam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VitalParamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    analysis<T extends AnalysisDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AnalysisDefaultArgs<ExtArgs>>
    ): Prisma__AnalysisClient<
      | $Result.GetResult<
          Prisma.$AnalysisPayload<ExtArgs>,
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
   * Fields of the VitalParam model
   */
  interface VitalParamFieldRefs {
    readonly id: FieldRef<'VitalParam', 'String'>;
    readonly analysisId: FieldRef<'VitalParam', 'String'>;
    readonly name: FieldRef<'VitalParam', 'String'>;
    readonly value: FieldRef<'VitalParam', 'Float'>;
    readonly unit: FieldRef<'VitalParam', 'String'>;
    readonly recordedAt: FieldRef<'VitalParam', 'DateTime'>;
    readonly metadata: FieldRef<'VitalParam', 'Json'>;
    readonly createdAt: FieldRef<'VitalParam', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * VitalParam findUnique
   */
  export type VitalParamFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    /**
     * Filter, which VitalParam to fetch.
     */
    where: VitalParamWhereUniqueInput;
  };

  /**
   * VitalParam findUniqueOrThrow
   */
  export type VitalParamFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    /**
     * Filter, which VitalParam to fetch.
     */
    where: VitalParamWhereUniqueInput;
  };

  /**
   * VitalParam findFirst
   */
  export type VitalParamFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    /**
     * Filter, which VitalParam to fetch.
     */
    where?: VitalParamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VitalParams to fetch.
     */
    orderBy?:
      | VitalParamOrderByWithRelationInput
      | VitalParamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VitalParams.
     */
    cursor?: VitalParamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VitalParams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VitalParams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VitalParams.
     */
    distinct?: VitalParamScalarFieldEnum | VitalParamScalarFieldEnum[];
  };

  /**
   * VitalParam findFirstOrThrow
   */
  export type VitalParamFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    /**
     * Filter, which VitalParam to fetch.
     */
    where?: VitalParamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VitalParams to fetch.
     */
    orderBy?:
      | VitalParamOrderByWithRelationInput
      | VitalParamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VitalParams.
     */
    cursor?: VitalParamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VitalParams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VitalParams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VitalParams.
     */
    distinct?: VitalParamScalarFieldEnum | VitalParamScalarFieldEnum[];
  };

  /**
   * VitalParam findMany
   */
  export type VitalParamFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    /**
     * Filter, which VitalParams to fetch.
     */
    where?: VitalParamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VitalParams to fetch.
     */
    orderBy?:
      | VitalParamOrderByWithRelationInput
      | VitalParamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VitalParams.
     */
    cursor?: VitalParamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VitalParams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VitalParams.
     */
    skip?: number;
    distinct?: VitalParamScalarFieldEnum | VitalParamScalarFieldEnum[];
  };

  /**
   * VitalParam create
   */
  export type VitalParamCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    /**
     * The data needed to create a VitalParam.
     */
    data: XOR<VitalParamCreateInput, VitalParamUncheckedCreateInput>;
  };

  /**
   * VitalParam createMany
   */
  export type VitalParamCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many VitalParams.
     */
    data: VitalParamCreateManyInput | VitalParamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * VitalParam createManyAndReturn
   */
  export type VitalParamCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * The data used to create many VitalParams.
     */
    data: VitalParamCreateManyInput | VitalParamCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * VitalParam update
   */
  export type VitalParamUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    /**
     * The data needed to update a VitalParam.
     */
    data: XOR<VitalParamUpdateInput, VitalParamUncheckedUpdateInput>;
    /**
     * Choose, which VitalParam to update.
     */
    where: VitalParamWhereUniqueInput;
  };

  /**
   * VitalParam updateMany
   */
  export type VitalParamUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update VitalParams.
     */
    data: XOR<
      VitalParamUpdateManyMutationInput,
      VitalParamUncheckedUpdateManyInput
    >;
    /**
     * Filter which VitalParams to update
     */
    where?: VitalParamWhereInput;
    /**
     * Limit how many VitalParams to update.
     */
    limit?: number;
  };

  /**
   * VitalParam updateManyAndReturn
   */
  export type VitalParamUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * The data used to update VitalParams.
     */
    data: XOR<
      VitalParamUpdateManyMutationInput,
      VitalParamUncheckedUpdateManyInput
    >;
    /**
     * Filter which VitalParams to update
     */
    where?: VitalParamWhereInput;
    /**
     * Limit how many VitalParams to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * VitalParam upsert
   */
  export type VitalParamUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    /**
     * The filter to search for the VitalParam to update in case it exists.
     */
    where: VitalParamWhereUniqueInput;
    /**
     * In case the VitalParam found by the `where` argument doesn't exist, create a new VitalParam with this data.
     */
    create: XOR<VitalParamCreateInput, VitalParamUncheckedCreateInput>;
    /**
     * In case the VitalParam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VitalParamUpdateInput, VitalParamUncheckedUpdateInput>;
  };

  /**
   * VitalParam delete
   */
  export type VitalParamDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
    /**
     * Filter which VitalParam to delete.
     */
    where: VitalParamWhereUniqueInput;
  };

  /**
   * VitalParam deleteMany
   */
  export type VitalParamDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which VitalParams to delete
     */
    where?: VitalParamWhereInput;
    /**
     * Limit how many VitalParams to delete.
     */
    limit?: number;
  };

  /**
   * VitalParam without action
   */
  export type VitalParamDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the VitalParam
     */
    select?: VitalParamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VitalParam
     */
    omit?: VitalParamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalParamInclude<ExtArgs> | null;
  };

  /**
   * Model DocumentShare
   */

  export type AggregateDocumentShare = {
    _count: DocumentShareCountAggregateOutputType | null;
    _min: DocumentShareMinAggregateOutputType | null;
    _max: DocumentShareMaxAggregateOutputType | null;
  };

  export type DocumentShareMinAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    caregiverId: string | null;
    sent: boolean | null;
    sentAt: Date | null;
    viewedAt: Date | null;
    createdAt: Date | null;
  };

  export type DocumentShareMaxAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    caregiverId: string | null;
    sent: boolean | null;
    sentAt: Date | null;
    viewedAt: Date | null;
    createdAt: Date | null;
  };

  export type DocumentShareCountAggregateOutputType = {
    id: number;
    documentId: number;
    caregiverId: number;
    sent: number;
    sentAt: number;
    viewedAt: number;
    createdAt: number;
    _all: number;
  };

  export type DocumentShareMinAggregateInputType = {
    id?: true;
    documentId?: true;
    caregiverId?: true;
    sent?: true;
    sentAt?: true;
    viewedAt?: true;
    createdAt?: true;
  };

  export type DocumentShareMaxAggregateInputType = {
    id?: true;
    documentId?: true;
    caregiverId?: true;
    sent?: true;
    sentAt?: true;
    viewedAt?: true;
    createdAt?: true;
  };

  export type DocumentShareCountAggregateInputType = {
    id?: true;
    documentId?: true;
    caregiverId?: true;
    sent?: true;
    sentAt?: true;
    viewedAt?: true;
    createdAt?: true;
    _all?: true;
  };

  export type DocumentShareAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which DocumentShare to aggregate.
     */
    where?: DocumentShareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentShares to fetch.
     */
    orderBy?:
      | DocumentShareOrderByWithRelationInput
      | DocumentShareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DocumentShareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentShares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentShares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DocumentShares
     **/
    _count?: true | DocumentShareCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DocumentShareMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DocumentShareMaxAggregateInputType;
  };

  export type GetDocumentShareAggregateType<
    T extends DocumentShareAggregateArgs
  > = {
    [P in keyof T & keyof AggregateDocumentShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentShare[P]>
      : GetScalarType<T[P], AggregateDocumentShare[P]>;
  };

  export type DocumentShareGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: DocumentShareWhereInput;
    orderBy?:
      | DocumentShareOrderByWithAggregationInput
      | DocumentShareOrderByWithAggregationInput[];
    by: DocumentShareScalarFieldEnum[] | DocumentShareScalarFieldEnum;
    having?: DocumentShareScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentShareCountAggregateInputType | true;
    _min?: DocumentShareMinAggregateInputType;
    _max?: DocumentShareMaxAggregateInputType;
  };

  export type DocumentShareGroupByOutputType = {
    id: string;
    documentId: string;
    caregiverId: string;
    sent: boolean;
    sentAt: Date | null;
    viewedAt: Date | null;
    createdAt: Date;
    _count: DocumentShareCountAggregateOutputType | null;
    _min: DocumentShareMinAggregateOutputType | null;
    _max: DocumentShareMaxAggregateOutputType | null;
  };

  type GetDocumentShareGroupByPayload<T extends DocumentShareGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<DocumentShareGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof DocumentShareGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentShareGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentShareGroupByOutputType[P]>;
        }
      >
    >;

  export type DocumentShareSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      caregiverId?: boolean;
      sent?: boolean;
      sentAt?: boolean;
      viewedAt?: boolean;
      createdAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['documentShare']
  >;

  export type DocumentShareSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      caregiverId?: boolean;
      sent?: boolean;
      sentAt?: boolean;
      viewedAt?: boolean;
      createdAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['documentShare']
  >;

  export type DocumentShareSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      documentId?: boolean;
      caregiverId?: boolean;
      sent?: boolean;
      sentAt?: boolean;
      viewedAt?: boolean;
      createdAt?: boolean;
      document?: boolean | DocumentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['documentShare']
  >;

  export type DocumentShareSelectScalar = {
    id?: boolean;
    documentId?: boolean;
    caregiverId?: boolean;
    sent?: boolean;
    sentAt?: boolean;
    viewedAt?: boolean;
    createdAt?: boolean;
  };

  export type DocumentShareOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'documentId'
    | 'caregiverId'
    | 'sent'
    | 'sentAt'
    | 'viewedAt'
    | 'createdAt',
    ExtArgs['result']['documentShare']
  >;
  export type DocumentShareInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
  };
  export type DocumentShareIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
  };
  export type DocumentShareIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>;
  };

  export type $DocumentSharePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'DocumentShare';
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        documentId: string;
        caregiverId: string;
        sent: boolean;
        sentAt: Date | null;
        viewedAt: Date | null;
        createdAt: Date;
      },
      ExtArgs['result']['documentShare']
    >;
    composites: {};
  };

  type DocumentShareGetPayload<
    S extends boolean | null | undefined | DocumentShareDefaultArgs
  > = $Result.GetResult<Prisma.$DocumentSharePayload, S>;

  type DocumentShareCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    DocumentShareFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: DocumentShareCountAggregateInputType | true;
  };

  export interface DocumentShareDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['DocumentShare'];
      meta: { name: 'DocumentShare' };
    };
    /**
     * Find zero or one DocumentShare that matches the filter.
     * @param {DocumentShareFindUniqueArgs} args - Arguments to find a DocumentShare
     * @example
     * // Get one DocumentShare
     * const documentShare = await prisma.documentShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentShareFindUniqueArgs>(
      args: SelectSubset<T, DocumentShareFindUniqueArgs<ExtArgs>>
    ): Prisma__DocumentShareClient<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one DocumentShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentShareFindUniqueOrThrowArgs} args - Arguments to find a DocumentShare
     * @example
     * // Get one DocumentShare
     * const documentShare = await prisma.documentShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentShareFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DocumentShareFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DocumentShareClient<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first DocumentShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareFindFirstArgs} args - Arguments to find a DocumentShare
     * @example
     * // Get one DocumentShare
     * const documentShare = await prisma.documentShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentShareFindFirstArgs>(
      args?: SelectSubset<T, DocumentShareFindFirstArgs<ExtArgs>>
    ): Prisma__DocumentShareClient<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first DocumentShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareFindFirstOrThrowArgs} args - Arguments to find a DocumentShare
     * @example
     * // Get one DocumentShare
     * const documentShare = await prisma.documentShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentShareFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DocumentShareFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DocumentShareClient<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more DocumentShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentShares
     * const documentShares = await prisma.documentShare.findMany()
     *
     * // Get first 10 DocumentShares
     * const documentShares = await prisma.documentShare.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const documentShareWithIdOnly = await prisma.documentShare.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DocumentShareFindManyArgs>(
      args?: SelectSubset<T, DocumentShareFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a DocumentShare.
     * @param {DocumentShareCreateArgs} args - Arguments to create a DocumentShare.
     * @example
     * // Create one DocumentShare
     * const DocumentShare = await prisma.documentShare.create({
     *   data: {
     *     // ... data to create a DocumentShare
     *   }
     * })
     *
     */
    create<T extends DocumentShareCreateArgs>(
      args: SelectSubset<T, DocumentShareCreateArgs<ExtArgs>>
    ): Prisma__DocumentShareClient<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many DocumentShares.
     * @param {DocumentShareCreateManyArgs} args - Arguments to create many DocumentShares.
     * @example
     * // Create many DocumentShares
     * const documentShare = await prisma.documentShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DocumentShareCreateManyArgs>(
      args?: SelectSubset<T, DocumentShareCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many DocumentShares and returns the data saved in the database.
     * @param {DocumentShareCreateManyAndReturnArgs} args - Arguments to create many DocumentShares.
     * @example
     * // Create many DocumentShares
     * const documentShare = await prisma.documentShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DocumentShares and only return the `id`
     * const documentShareWithIdOnly = await prisma.documentShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DocumentShareCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DocumentShareCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a DocumentShare.
     * @param {DocumentShareDeleteArgs} args - Arguments to delete one DocumentShare.
     * @example
     * // Delete one DocumentShare
     * const DocumentShare = await prisma.documentShare.delete({
     *   where: {
     *     // ... filter to delete one DocumentShare
     *   }
     * })
     *
     */
    delete<T extends DocumentShareDeleteArgs>(
      args: SelectSubset<T, DocumentShareDeleteArgs<ExtArgs>>
    ): Prisma__DocumentShareClient<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one DocumentShare.
     * @param {DocumentShareUpdateArgs} args - Arguments to update one DocumentShare.
     * @example
     * // Update one DocumentShare
     * const documentShare = await prisma.documentShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DocumentShareUpdateArgs>(
      args: SelectSubset<T, DocumentShareUpdateArgs<ExtArgs>>
    ): Prisma__DocumentShareClient<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more DocumentShares.
     * @param {DocumentShareDeleteManyArgs} args - Arguments to filter DocumentShares to delete.
     * @example
     * // Delete a few DocumentShares
     * const { count } = await prisma.documentShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DocumentShareDeleteManyArgs>(
      args?: SelectSubset<T, DocumentShareDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more DocumentShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentShares
     * const documentShare = await prisma.documentShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DocumentShareUpdateManyArgs>(
      args: SelectSubset<T, DocumentShareUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more DocumentShares and returns the data updated in the database.
     * @param {DocumentShareUpdateManyAndReturnArgs} args - Arguments to update many DocumentShares.
     * @example
     * // Update many DocumentShares
     * const documentShare = await prisma.documentShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DocumentShares and only return the `id`
     * const documentShareWithIdOnly = await prisma.documentShare.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentShareUpdateManyAndReturnArgs>(
      args: SelectSubset<T, DocumentShareUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one DocumentShare.
     * @param {DocumentShareUpsertArgs} args - Arguments to update or create a DocumentShare.
     * @example
     * // Update or create a DocumentShare
     * const documentShare = await prisma.documentShare.upsert({
     *   create: {
     *     // ... data to create a DocumentShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentShare we want to update
     *   }
     * })
     */
    upsert<T extends DocumentShareUpsertArgs>(
      args: SelectSubset<T, DocumentShareUpsertArgs<ExtArgs>>
    ): Prisma__DocumentShareClient<
      $Result.GetResult<
        Prisma.$DocumentSharePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of DocumentShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareCountArgs} args - Arguments to filter DocumentShares to count.
     * @example
     * // Count the number of DocumentShares
     * const count = await prisma.documentShare.count({
     *   where: {
     *     // ... the filter for the DocumentShares we want to count
     *   }
     * })
     **/
    count<T extends DocumentShareCountArgs>(
      args?: Subset<T, DocumentShareCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentShareCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a DocumentShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentShareAggregateArgs>(
      args: Subset<T, DocumentShareAggregateArgs>
    ): Prisma.PrismaPromise<GetDocumentShareAggregateType<T>>;

    /**
     * Group by DocumentShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareGroupByArgs} args - Group by arguments.
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
      T extends DocumentShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentShareGroupByArgs['orderBy'] }
        : { orderBy?: DocumentShareGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, DocumentShareGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetDocumentShareGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DocumentShare model
     */
    readonly fields: DocumentShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentShareClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, DocumentDefaultArgs<ExtArgs>>
    ): Prisma__DocumentClient<
      | $Result.GetResult<
          Prisma.$DocumentPayload<ExtArgs>,
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
   * Fields of the DocumentShare model
   */
  interface DocumentShareFieldRefs {
    readonly id: FieldRef<'DocumentShare', 'String'>;
    readonly documentId: FieldRef<'DocumentShare', 'String'>;
    readonly caregiverId: FieldRef<'DocumentShare', 'String'>;
    readonly sent: FieldRef<'DocumentShare', 'Boolean'>;
    readonly sentAt: FieldRef<'DocumentShare', 'DateTime'>;
    readonly viewedAt: FieldRef<'DocumentShare', 'DateTime'>;
    readonly createdAt: FieldRef<'DocumentShare', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * DocumentShare findUnique
   */
  export type DocumentShareFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentShare to fetch.
     */
    where: DocumentShareWhereUniqueInput;
  };

  /**
   * DocumentShare findUniqueOrThrow
   */
  export type DocumentShareFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentShare to fetch.
     */
    where: DocumentShareWhereUniqueInput;
  };

  /**
   * DocumentShare findFirst
   */
  export type DocumentShareFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentShare to fetch.
     */
    where?: DocumentShareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentShares to fetch.
     */
    orderBy?:
      | DocumentShareOrderByWithRelationInput
      | DocumentShareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DocumentShares.
     */
    cursor?: DocumentShareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentShares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentShares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DocumentShares.
     */
    distinct?: DocumentShareScalarFieldEnum | DocumentShareScalarFieldEnum[];
  };

  /**
   * DocumentShare findFirstOrThrow
   */
  export type DocumentShareFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentShare to fetch.
     */
    where?: DocumentShareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentShares to fetch.
     */
    orderBy?:
      | DocumentShareOrderByWithRelationInput
      | DocumentShareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DocumentShares.
     */
    cursor?: DocumentShareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentShares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentShares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DocumentShares.
     */
    distinct?: DocumentShareScalarFieldEnum | DocumentShareScalarFieldEnum[];
  };

  /**
   * DocumentShare findMany
   */
  export type DocumentShareFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    /**
     * Filter, which DocumentShares to fetch.
     */
    where?: DocumentShareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DocumentShares to fetch.
     */
    orderBy?:
      | DocumentShareOrderByWithRelationInput
      | DocumentShareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DocumentShares.
     */
    cursor?: DocumentShareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DocumentShares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DocumentShares.
     */
    skip?: number;
    distinct?: DocumentShareScalarFieldEnum | DocumentShareScalarFieldEnum[];
  };

  /**
   * DocumentShare create
   */
  export type DocumentShareCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    /**
     * The data needed to create a DocumentShare.
     */
    data: XOR<DocumentShareCreateInput, DocumentShareUncheckedCreateInput>;
  };

  /**
   * DocumentShare createMany
   */
  export type DocumentShareCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many DocumentShares.
     */
    data: DocumentShareCreateManyInput | DocumentShareCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * DocumentShare createManyAndReturn
   */
  export type DocumentShareCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * The data used to create many DocumentShares.
     */
    data: DocumentShareCreateManyInput | DocumentShareCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * DocumentShare update
   */
  export type DocumentShareUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    /**
     * The data needed to update a DocumentShare.
     */
    data: XOR<DocumentShareUpdateInput, DocumentShareUncheckedUpdateInput>;
    /**
     * Choose, which DocumentShare to update.
     */
    where: DocumentShareWhereUniqueInput;
  };

  /**
   * DocumentShare updateMany
   */
  export type DocumentShareUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update DocumentShares.
     */
    data: XOR<
      DocumentShareUpdateManyMutationInput,
      DocumentShareUncheckedUpdateManyInput
    >;
    /**
     * Filter which DocumentShares to update
     */
    where?: DocumentShareWhereInput;
    /**
     * Limit how many DocumentShares to update.
     */
    limit?: number;
  };

  /**
   * DocumentShare updateManyAndReturn
   */
  export type DocumentShareUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * The data used to update DocumentShares.
     */
    data: XOR<
      DocumentShareUpdateManyMutationInput,
      DocumentShareUncheckedUpdateManyInput
    >;
    /**
     * Filter which DocumentShares to update
     */
    where?: DocumentShareWhereInput;
    /**
     * Limit how many DocumentShares to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * DocumentShare upsert
   */
  export type DocumentShareUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    /**
     * The filter to search for the DocumentShare to update in case it exists.
     */
    where: DocumentShareWhereUniqueInput;
    /**
     * In case the DocumentShare found by the `where` argument doesn't exist, create a new DocumentShare with this data.
     */
    create: XOR<DocumentShareCreateInput, DocumentShareUncheckedCreateInput>;
    /**
     * In case the DocumentShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentShareUpdateInput, DocumentShareUncheckedUpdateInput>;
  };

  /**
   * DocumentShare delete
   */
  export type DocumentShareDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
    /**
     * Filter which DocumentShare to delete.
     */
    where: DocumentShareWhereUniqueInput;
  };

  /**
   * DocumentShare deleteMany
   */
  export type DocumentShareDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which DocumentShares to delete
     */
    where?: DocumentShareWhereInput;
    /**
     * Limit how many DocumentShares to delete.
     */
    limit?: number;
  };

  /**
   * DocumentShare without action
   */
  export type DocumentShareDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null;
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

  export const DocumentScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    caregiverId: 'caregiverId';
    fileServiceId: 'fileServiceId';
    fileUrl: 'fileUrl';
    fileName: 'fileName';
    mimeType: 'mimeType';
    size: 'size';
    type: 'type';
    uploadedAt: 'uploadedAt';
    processed: 'processed';
    metadata: 'metadata';
  };

  export type DocumentScalarFieldEnum =
    (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];

  export const ProcessingJobScalarFieldEnum: {
    id: 'id';
    documentId: 'documentId';
    status: 'status';
    attempts: 'attempts';
    error: 'error';
    processor: 'processor';
    startedAt: 'startedAt';
    finishedAt: 'finishedAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ProcessingJobScalarFieldEnum =
    (typeof ProcessingJobScalarFieldEnum)[keyof typeof ProcessingJobScalarFieldEnum];

  export const OcrResultScalarFieldEnum: {
    id: 'id';
    documentId: 'documentId';
    rawJson: 'rawJson';
    plainText: 'plainText';
    language: 'language';
    pages: 'pages';
    confidence: 'confidence';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type OcrResultScalarFieldEnum =
    (typeof OcrResultScalarFieldEnum)[keyof typeof OcrResultScalarFieldEnum];

  export const AnalysisScalarFieldEnum: {
    id: 'id';
    documentId: 'documentId';
    ocrResultId: 'ocrResultId';
    model: 'model';
    prompt: 'prompt';
    response: 'response';
    summary: 'summary';
    insights: 'insights';
    vitals: 'vitals';
    graphs: 'graphs';
    status: 'status';
    confidence: 'confidence';
    requestedBy: 'requestedBy';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type AnalysisScalarFieldEnum =
    (typeof AnalysisScalarFieldEnum)[keyof typeof AnalysisScalarFieldEnum];

  export const VitalParamScalarFieldEnum: {
    id: 'id';
    analysisId: 'analysisId';
    name: 'name';
    value: 'value';
    unit: 'unit';
    recordedAt: 'recordedAt';
    metadata: 'metadata';
    createdAt: 'createdAt';
  };

  export type VitalParamScalarFieldEnum =
    (typeof VitalParamScalarFieldEnum)[keyof typeof VitalParamScalarFieldEnum];

  export const DocumentShareScalarFieldEnum: {
    id: 'id';
    documentId: 'documentId';
    caregiverId: 'caregiverId';
    sent: 'sent';
    sentAt: 'sentAt';
    viewedAt: 'viewedAt';
    createdAt: 'createdAt';
  };

  export type DocumentShareScalarFieldEnum =
    (typeof DocumentShareScalarFieldEnum)[keyof typeof DocumentShareScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

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
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DocumentType'
  >;

  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'DocumentType[]'>;

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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'JobStatus'
  >;

  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'JobStatus[]'
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
   * Reference to a field of type 'AnalysisStatus'
   */
  export type EnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'AnalysisStatus'
  >;

  /**
   * Reference to a field of type 'AnalysisStatus[]'
   */
  export type ListEnumAnalysisStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'AnalysisStatus[]'>;

  /**
   * Deep Input Types
   */

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[];
    OR?: DocumentWhereInput[];
    NOT?: DocumentWhereInput | DocumentWhereInput[];
    id?: StringFilter<'Document'> | string;
    userId?: StringFilter<'Document'> | string;
    caregiverId?: StringNullableFilter<'Document'> | string | null;
    fileServiceId?: StringNullableFilter<'Document'> | string | null;
    fileUrl?: StringFilter<'Document'> | string;
    fileName?: StringNullableFilter<'Document'> | string | null;
    mimeType?: StringNullableFilter<'Document'> | string | null;
    size?: IntNullableFilter<'Document'> | number | null;
    type?: EnumDocumentTypeFilter<'Document'> | $Enums.DocumentType;
    uploadedAt?: DateTimeFilter<'Document'> | Date | string;
    processed?: BoolFilter<'Document'> | boolean;
    metadata?: JsonNullableFilter<'Document'>;
    processingJobs?: ProcessingJobListRelationFilter;
    ocrResult?: XOR<
      OcrResultNullableScalarRelationFilter,
      OcrResultWhereInput
    > | null;
    analysis?: AnalysisListRelationFilter;
    shares?: DocumentShareListRelationFilter;
  };

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    caregiverId?: SortOrderInput | SortOrder;
    fileServiceId?: SortOrderInput | SortOrder;
    fileUrl?: SortOrder;
    fileName?: SortOrderInput | SortOrder;
    mimeType?: SortOrderInput | SortOrder;
    size?: SortOrderInput | SortOrder;
    type?: SortOrder;
    uploadedAt?: SortOrder;
    processed?: SortOrder;
    metadata?: SortOrderInput | SortOrder;
    processingJobs?: ProcessingJobOrderByRelationAggregateInput;
    ocrResult?: OcrResultOrderByWithRelationInput;
    analysis?: AnalysisOrderByRelationAggregateInput;
    shares?: DocumentShareOrderByRelationAggregateInput;
  };

  export type DocumentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: DocumentWhereInput | DocumentWhereInput[];
      OR?: DocumentWhereInput[];
      NOT?: DocumentWhereInput | DocumentWhereInput[];
      userId?: StringFilter<'Document'> | string;
      caregiverId?: StringNullableFilter<'Document'> | string | null;
      fileServiceId?: StringNullableFilter<'Document'> | string | null;
      fileUrl?: StringFilter<'Document'> | string;
      fileName?: StringNullableFilter<'Document'> | string | null;
      mimeType?: StringNullableFilter<'Document'> | string | null;
      size?: IntNullableFilter<'Document'> | number | null;
      type?: EnumDocumentTypeFilter<'Document'> | $Enums.DocumentType;
      uploadedAt?: DateTimeFilter<'Document'> | Date | string;
      processed?: BoolFilter<'Document'> | boolean;
      metadata?: JsonNullableFilter<'Document'>;
      processingJobs?: ProcessingJobListRelationFilter;
      ocrResult?: XOR<
        OcrResultNullableScalarRelationFilter,
        OcrResultWhereInput
      > | null;
      analysis?: AnalysisListRelationFilter;
      shares?: DocumentShareListRelationFilter;
    },
    'id'
  >;

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    caregiverId?: SortOrderInput | SortOrder;
    fileServiceId?: SortOrderInput | SortOrder;
    fileUrl?: SortOrder;
    fileName?: SortOrderInput | SortOrder;
    mimeType?: SortOrderInput | SortOrder;
    size?: SortOrderInput | SortOrder;
    type?: SortOrder;
    uploadedAt?: SortOrder;
    processed?: SortOrder;
    metadata?: SortOrderInput | SortOrder;
    _count?: DocumentCountOrderByAggregateInput;
    _avg?: DocumentAvgOrderByAggregateInput;
    _max?: DocumentMaxOrderByAggregateInput;
    _min?: DocumentMinOrderByAggregateInput;
    _sum?: DocumentSumOrderByAggregateInput;
  };

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?:
      | DocumentScalarWhereWithAggregatesInput
      | DocumentScalarWhereWithAggregatesInput[];
    OR?: DocumentScalarWhereWithAggregatesInput[];
    NOT?:
      | DocumentScalarWhereWithAggregatesInput
      | DocumentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Document'> | string;
    userId?: StringWithAggregatesFilter<'Document'> | string;
    caregiverId?:
      | StringNullableWithAggregatesFilter<'Document'>
      | string
      | null;
    fileServiceId?:
      | StringNullableWithAggregatesFilter<'Document'>
      | string
      | null;
    fileUrl?: StringWithAggregatesFilter<'Document'> | string;
    fileName?: StringNullableWithAggregatesFilter<'Document'> | string | null;
    mimeType?: StringNullableWithAggregatesFilter<'Document'> | string | null;
    size?: IntNullableWithAggregatesFilter<'Document'> | number | null;
    type?:
      | EnumDocumentTypeWithAggregatesFilter<'Document'>
      | $Enums.DocumentType;
    uploadedAt?: DateTimeWithAggregatesFilter<'Document'> | Date | string;
    processed?: BoolWithAggregatesFilter<'Document'> | boolean;
    metadata?: JsonNullableWithAggregatesFilter<'Document'>;
  };

  export type ProcessingJobWhereInput = {
    AND?: ProcessingJobWhereInput | ProcessingJobWhereInput[];
    OR?: ProcessingJobWhereInput[];
    NOT?: ProcessingJobWhereInput | ProcessingJobWhereInput[];
    id?: StringFilter<'ProcessingJob'> | string;
    documentId?: StringFilter<'ProcessingJob'> | string;
    status?: EnumJobStatusFilter<'ProcessingJob'> | $Enums.JobStatus;
    attempts?: IntFilter<'ProcessingJob'> | number;
    error?: StringNullableFilter<'ProcessingJob'> | string | null;
    processor?: StringNullableFilter<'ProcessingJob'> | string | null;
    startedAt?: DateTimeNullableFilter<'ProcessingJob'> | Date | string | null;
    finishedAt?: DateTimeNullableFilter<'ProcessingJob'> | Date | string | null;
    createdAt?: DateTimeFilter<'ProcessingJob'> | Date | string;
    updatedAt?: DateTimeFilter<'ProcessingJob'> | Date | string;
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
  };

  export type ProcessingJobOrderByWithRelationInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    status?: SortOrder;
    attempts?: SortOrder;
    error?: SortOrderInput | SortOrder;
    processor?: SortOrderInput | SortOrder;
    startedAt?: SortOrderInput | SortOrder;
    finishedAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    document?: DocumentOrderByWithRelationInput;
  };

  export type ProcessingJobWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ProcessingJobWhereInput | ProcessingJobWhereInput[];
      OR?: ProcessingJobWhereInput[];
      NOT?: ProcessingJobWhereInput | ProcessingJobWhereInput[];
      documentId?: StringFilter<'ProcessingJob'> | string;
      status?: EnumJobStatusFilter<'ProcessingJob'> | $Enums.JobStatus;
      attempts?: IntFilter<'ProcessingJob'> | number;
      error?: StringNullableFilter<'ProcessingJob'> | string | null;
      processor?: StringNullableFilter<'ProcessingJob'> | string | null;
      startedAt?:
        | DateTimeNullableFilter<'ProcessingJob'>
        | Date
        | string
        | null;
      finishedAt?:
        | DateTimeNullableFilter<'ProcessingJob'>
        | Date
        | string
        | null;
      createdAt?: DateTimeFilter<'ProcessingJob'> | Date | string;
      updatedAt?: DateTimeFilter<'ProcessingJob'> | Date | string;
      document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
    },
    'id'
  >;

  export type ProcessingJobOrderByWithAggregationInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    status?: SortOrder;
    attempts?: SortOrder;
    error?: SortOrderInput | SortOrder;
    processor?: SortOrderInput | SortOrder;
    startedAt?: SortOrderInput | SortOrder;
    finishedAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProcessingJobCountOrderByAggregateInput;
    _avg?: ProcessingJobAvgOrderByAggregateInput;
    _max?: ProcessingJobMaxOrderByAggregateInput;
    _min?: ProcessingJobMinOrderByAggregateInput;
    _sum?: ProcessingJobSumOrderByAggregateInput;
  };

  export type ProcessingJobScalarWhereWithAggregatesInput = {
    AND?:
      | ProcessingJobScalarWhereWithAggregatesInput
      | ProcessingJobScalarWhereWithAggregatesInput[];
    OR?: ProcessingJobScalarWhereWithAggregatesInput[];
    NOT?:
      | ProcessingJobScalarWhereWithAggregatesInput
      | ProcessingJobScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'ProcessingJob'> | string;
    documentId?: StringWithAggregatesFilter<'ProcessingJob'> | string;
    status?:
      | EnumJobStatusWithAggregatesFilter<'ProcessingJob'>
      | $Enums.JobStatus;
    attempts?: IntWithAggregatesFilter<'ProcessingJob'> | number;
    error?: StringNullableWithAggregatesFilter<'ProcessingJob'> | string | null;
    processor?:
      | StringNullableWithAggregatesFilter<'ProcessingJob'>
      | string
      | null;
    startedAt?:
      | DateTimeNullableWithAggregatesFilter<'ProcessingJob'>
      | Date
      | string
      | null;
    finishedAt?:
      | DateTimeNullableWithAggregatesFilter<'ProcessingJob'>
      | Date
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'ProcessingJob'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'ProcessingJob'> | Date | string;
  };

  export type OcrResultWhereInput = {
    AND?: OcrResultWhereInput | OcrResultWhereInput[];
    OR?: OcrResultWhereInput[];
    NOT?: OcrResultWhereInput | OcrResultWhereInput[];
    id?: StringFilter<'OcrResult'> | string;
    documentId?: StringFilter<'OcrResult'> | string;
    rawJson?: JsonFilter<'OcrResult'>;
    plainText?: StringFilter<'OcrResult'> | string;
    language?: StringNullableFilter<'OcrResult'> | string | null;
    pages?: IntNullableFilter<'OcrResult'> | number | null;
    confidence?: FloatNullableFilter<'OcrResult'> | number | null;
    createdAt?: DateTimeFilter<'OcrResult'> | Date | string;
    updatedAt?: DateTimeFilter<'OcrResult'> | Date | string;
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
    analysis?: AnalysisListRelationFilter;
  };

  export type OcrResultOrderByWithRelationInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    rawJson?: SortOrder;
    plainText?: SortOrder;
    language?: SortOrderInput | SortOrder;
    pages?: SortOrderInput | SortOrder;
    confidence?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    document?: DocumentOrderByWithRelationInput;
    analysis?: AnalysisOrderByRelationAggregateInput;
  };

  export type OcrResultWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      documentId?: string;
      AND?: OcrResultWhereInput | OcrResultWhereInput[];
      OR?: OcrResultWhereInput[];
      NOT?: OcrResultWhereInput | OcrResultWhereInput[];
      rawJson?: JsonFilter<'OcrResult'>;
      plainText?: StringFilter<'OcrResult'> | string;
      language?: StringNullableFilter<'OcrResult'> | string | null;
      pages?: IntNullableFilter<'OcrResult'> | number | null;
      confidence?: FloatNullableFilter<'OcrResult'> | number | null;
      createdAt?: DateTimeFilter<'OcrResult'> | Date | string;
      updatedAt?: DateTimeFilter<'OcrResult'> | Date | string;
      document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
      analysis?: AnalysisListRelationFilter;
    },
    'id' | 'documentId'
  >;

  export type OcrResultOrderByWithAggregationInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    rawJson?: SortOrder;
    plainText?: SortOrder;
    language?: SortOrderInput | SortOrder;
    pages?: SortOrderInput | SortOrder;
    confidence?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OcrResultCountOrderByAggregateInput;
    _avg?: OcrResultAvgOrderByAggregateInput;
    _max?: OcrResultMaxOrderByAggregateInput;
    _min?: OcrResultMinOrderByAggregateInput;
    _sum?: OcrResultSumOrderByAggregateInput;
  };

  export type OcrResultScalarWhereWithAggregatesInput = {
    AND?:
      | OcrResultScalarWhereWithAggregatesInput
      | OcrResultScalarWhereWithAggregatesInput[];
    OR?: OcrResultScalarWhereWithAggregatesInput[];
    NOT?:
      | OcrResultScalarWhereWithAggregatesInput
      | OcrResultScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'OcrResult'> | string;
    documentId?: StringWithAggregatesFilter<'OcrResult'> | string;
    rawJson?: JsonWithAggregatesFilter<'OcrResult'>;
    plainText?: StringWithAggregatesFilter<'OcrResult'> | string;
    language?: StringNullableWithAggregatesFilter<'OcrResult'> | string | null;
    pages?: IntNullableWithAggregatesFilter<'OcrResult'> | number | null;
    confidence?: FloatNullableWithAggregatesFilter<'OcrResult'> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<'OcrResult'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'OcrResult'> | Date | string;
  };

  export type AnalysisWhereInput = {
    AND?: AnalysisWhereInput | AnalysisWhereInput[];
    OR?: AnalysisWhereInput[];
    NOT?: AnalysisWhereInput | AnalysisWhereInput[];
    id?: StringFilter<'Analysis'> | string;
    documentId?: StringFilter<'Analysis'> | string;
    ocrResultId?: StringNullableFilter<'Analysis'> | string | null;
    model?: StringFilter<'Analysis'> | string;
    prompt?: StringFilter<'Analysis'> | string;
    response?: JsonFilter<'Analysis'>;
    summary?: StringNullableFilter<'Analysis'> | string | null;
    insights?: JsonNullableFilter<'Analysis'>;
    vitals?: JsonNullableFilter<'Analysis'>;
    graphs?: JsonNullableFilter<'Analysis'>;
    status?: EnumAnalysisStatusFilter<'Analysis'> | $Enums.AnalysisStatus;
    confidence?: FloatNullableFilter<'Analysis'> | number | null;
    requestedBy?: StringNullableFilter<'Analysis'> | string | null;
    createdAt?: DateTimeFilter<'Analysis'> | Date | string;
    updatedAt?: DateTimeFilter<'Analysis'> | Date | string;
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
    ocrResult?: XOR<
      OcrResultNullableScalarRelationFilter,
      OcrResultWhereInput
    > | null;
    VitalParam?: VitalParamListRelationFilter;
  };

  export type AnalysisOrderByWithRelationInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    ocrResultId?: SortOrderInput | SortOrder;
    model?: SortOrder;
    prompt?: SortOrder;
    response?: SortOrder;
    summary?: SortOrderInput | SortOrder;
    insights?: SortOrderInput | SortOrder;
    vitals?: SortOrderInput | SortOrder;
    graphs?: SortOrderInput | SortOrder;
    status?: SortOrder;
    confidence?: SortOrderInput | SortOrder;
    requestedBy?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    document?: DocumentOrderByWithRelationInput;
    ocrResult?: OcrResultOrderByWithRelationInput;
    VitalParam?: VitalParamOrderByRelationAggregateInput;
  };

  export type AnalysisWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AnalysisWhereInput | AnalysisWhereInput[];
      OR?: AnalysisWhereInput[];
      NOT?: AnalysisWhereInput | AnalysisWhereInput[];
      documentId?: StringFilter<'Analysis'> | string;
      ocrResultId?: StringNullableFilter<'Analysis'> | string | null;
      model?: StringFilter<'Analysis'> | string;
      prompt?: StringFilter<'Analysis'> | string;
      response?: JsonFilter<'Analysis'>;
      summary?: StringNullableFilter<'Analysis'> | string | null;
      insights?: JsonNullableFilter<'Analysis'>;
      vitals?: JsonNullableFilter<'Analysis'>;
      graphs?: JsonNullableFilter<'Analysis'>;
      status?: EnumAnalysisStatusFilter<'Analysis'> | $Enums.AnalysisStatus;
      confidence?: FloatNullableFilter<'Analysis'> | number | null;
      requestedBy?: StringNullableFilter<'Analysis'> | string | null;
      createdAt?: DateTimeFilter<'Analysis'> | Date | string;
      updatedAt?: DateTimeFilter<'Analysis'> | Date | string;
      document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
      ocrResult?: XOR<
        OcrResultNullableScalarRelationFilter,
        OcrResultWhereInput
      > | null;
      VitalParam?: VitalParamListRelationFilter;
    },
    'id'
  >;

  export type AnalysisOrderByWithAggregationInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    ocrResultId?: SortOrderInput | SortOrder;
    model?: SortOrder;
    prompt?: SortOrder;
    response?: SortOrder;
    summary?: SortOrderInput | SortOrder;
    insights?: SortOrderInput | SortOrder;
    vitals?: SortOrderInput | SortOrder;
    graphs?: SortOrderInput | SortOrder;
    status?: SortOrder;
    confidence?: SortOrderInput | SortOrder;
    requestedBy?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: AnalysisCountOrderByAggregateInput;
    _avg?: AnalysisAvgOrderByAggregateInput;
    _max?: AnalysisMaxOrderByAggregateInput;
    _min?: AnalysisMinOrderByAggregateInput;
    _sum?: AnalysisSumOrderByAggregateInput;
  };

  export type AnalysisScalarWhereWithAggregatesInput = {
    AND?:
      | AnalysisScalarWhereWithAggregatesInput
      | AnalysisScalarWhereWithAggregatesInput[];
    OR?: AnalysisScalarWhereWithAggregatesInput[];
    NOT?:
      | AnalysisScalarWhereWithAggregatesInput
      | AnalysisScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Analysis'> | string;
    documentId?: StringWithAggregatesFilter<'Analysis'> | string;
    ocrResultId?:
      | StringNullableWithAggregatesFilter<'Analysis'>
      | string
      | null;
    model?: StringWithAggregatesFilter<'Analysis'> | string;
    prompt?: StringWithAggregatesFilter<'Analysis'> | string;
    response?: JsonWithAggregatesFilter<'Analysis'>;
    summary?: StringNullableWithAggregatesFilter<'Analysis'> | string | null;
    insights?: JsonNullableWithAggregatesFilter<'Analysis'>;
    vitals?: JsonNullableWithAggregatesFilter<'Analysis'>;
    graphs?: JsonNullableWithAggregatesFilter<'Analysis'>;
    status?:
      | EnumAnalysisStatusWithAggregatesFilter<'Analysis'>
      | $Enums.AnalysisStatus;
    confidence?: FloatNullableWithAggregatesFilter<'Analysis'> | number | null;
    requestedBy?:
      | StringNullableWithAggregatesFilter<'Analysis'>
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'Analysis'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Analysis'> | Date | string;
  };

  export type VitalParamWhereInput = {
    AND?: VitalParamWhereInput | VitalParamWhereInput[];
    OR?: VitalParamWhereInput[];
    NOT?: VitalParamWhereInput | VitalParamWhereInput[];
    id?: StringFilter<'VitalParam'> | string;
    analysisId?: StringFilter<'VitalParam'> | string;
    name?: StringFilter<'VitalParam'> | string;
    value?: FloatFilter<'VitalParam'> | number;
    unit?: StringNullableFilter<'VitalParam'> | string | null;
    recordedAt?: DateTimeNullableFilter<'VitalParam'> | Date | string | null;
    metadata?: JsonNullableFilter<'VitalParam'>;
    createdAt?: DateTimeFilter<'VitalParam'> | Date | string;
    analysis?: XOR<AnalysisScalarRelationFilter, AnalysisWhereInput>;
  };

  export type VitalParamOrderByWithRelationInput = {
    id?: SortOrder;
    analysisId?: SortOrder;
    name?: SortOrder;
    value?: SortOrder;
    unit?: SortOrderInput | SortOrder;
    recordedAt?: SortOrderInput | SortOrder;
    metadata?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    analysis?: AnalysisOrderByWithRelationInput;
  };

  export type VitalParamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: VitalParamWhereInput | VitalParamWhereInput[];
      OR?: VitalParamWhereInput[];
      NOT?: VitalParamWhereInput | VitalParamWhereInput[];
      analysisId?: StringFilter<'VitalParam'> | string;
      name?: StringFilter<'VitalParam'> | string;
      value?: FloatFilter<'VitalParam'> | number;
      unit?: StringNullableFilter<'VitalParam'> | string | null;
      recordedAt?: DateTimeNullableFilter<'VitalParam'> | Date | string | null;
      metadata?: JsonNullableFilter<'VitalParam'>;
      createdAt?: DateTimeFilter<'VitalParam'> | Date | string;
      analysis?: XOR<AnalysisScalarRelationFilter, AnalysisWhereInput>;
    },
    'id'
  >;

  export type VitalParamOrderByWithAggregationInput = {
    id?: SortOrder;
    analysisId?: SortOrder;
    name?: SortOrder;
    value?: SortOrder;
    unit?: SortOrderInput | SortOrder;
    recordedAt?: SortOrderInput | SortOrder;
    metadata?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: VitalParamCountOrderByAggregateInput;
    _avg?: VitalParamAvgOrderByAggregateInput;
    _max?: VitalParamMaxOrderByAggregateInput;
    _min?: VitalParamMinOrderByAggregateInput;
    _sum?: VitalParamSumOrderByAggregateInput;
  };

  export type VitalParamScalarWhereWithAggregatesInput = {
    AND?:
      | VitalParamScalarWhereWithAggregatesInput
      | VitalParamScalarWhereWithAggregatesInput[];
    OR?: VitalParamScalarWhereWithAggregatesInput[];
    NOT?:
      | VitalParamScalarWhereWithAggregatesInput
      | VitalParamScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'VitalParam'> | string;
    analysisId?: StringWithAggregatesFilter<'VitalParam'> | string;
    name?: StringWithAggregatesFilter<'VitalParam'> | string;
    value?: FloatWithAggregatesFilter<'VitalParam'> | number;
    unit?: StringNullableWithAggregatesFilter<'VitalParam'> | string | null;
    recordedAt?:
      | DateTimeNullableWithAggregatesFilter<'VitalParam'>
      | Date
      | string
      | null;
    metadata?: JsonNullableWithAggregatesFilter<'VitalParam'>;
    createdAt?: DateTimeWithAggregatesFilter<'VitalParam'> | Date | string;
  };

  export type DocumentShareWhereInput = {
    AND?: DocumentShareWhereInput | DocumentShareWhereInput[];
    OR?: DocumentShareWhereInput[];
    NOT?: DocumentShareWhereInput | DocumentShareWhereInput[];
    id?: StringFilter<'DocumentShare'> | string;
    documentId?: StringFilter<'DocumentShare'> | string;
    caregiverId?: StringFilter<'DocumentShare'> | string;
    sent?: BoolFilter<'DocumentShare'> | boolean;
    sentAt?: DateTimeNullableFilter<'DocumentShare'> | Date | string | null;
    viewedAt?: DateTimeNullableFilter<'DocumentShare'> | Date | string | null;
    createdAt?: DateTimeFilter<'DocumentShare'> | Date | string;
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
  };

  export type DocumentShareOrderByWithRelationInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    caregiverId?: SortOrder;
    sent?: SortOrder;
    sentAt?: SortOrderInput | SortOrder;
    viewedAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    document?: DocumentOrderByWithRelationInput;
  };

  export type DocumentShareWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: DocumentShareWhereInput | DocumentShareWhereInput[];
      OR?: DocumentShareWhereInput[];
      NOT?: DocumentShareWhereInput | DocumentShareWhereInput[];
      documentId?: StringFilter<'DocumentShare'> | string;
      caregiverId?: StringFilter<'DocumentShare'> | string;
      sent?: BoolFilter<'DocumentShare'> | boolean;
      sentAt?: DateTimeNullableFilter<'DocumentShare'> | Date | string | null;
      viewedAt?: DateTimeNullableFilter<'DocumentShare'> | Date | string | null;
      createdAt?: DateTimeFilter<'DocumentShare'> | Date | string;
      document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>;
    },
    'id'
  >;

  export type DocumentShareOrderByWithAggregationInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    caregiverId?: SortOrder;
    sent?: SortOrder;
    sentAt?: SortOrderInput | SortOrder;
    viewedAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: DocumentShareCountOrderByAggregateInput;
    _max?: DocumentShareMaxOrderByAggregateInput;
    _min?: DocumentShareMinOrderByAggregateInput;
  };

  export type DocumentShareScalarWhereWithAggregatesInput = {
    AND?:
      | DocumentShareScalarWhereWithAggregatesInput
      | DocumentShareScalarWhereWithAggregatesInput[];
    OR?: DocumentShareScalarWhereWithAggregatesInput[];
    NOT?:
      | DocumentShareScalarWhereWithAggregatesInput
      | DocumentShareScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'DocumentShare'> | string;
    documentId?: StringWithAggregatesFilter<'DocumentShare'> | string;
    caregiverId?: StringWithAggregatesFilter<'DocumentShare'> | string;
    sent?: BoolWithAggregatesFilter<'DocumentShare'> | boolean;
    sentAt?:
      | DateTimeNullableWithAggregatesFilter<'DocumentShare'>
      | Date
      | string
      | null;
    viewedAt?:
      | DateTimeNullableWithAggregatesFilter<'DocumentShare'>
      | Date
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'DocumentShare'> | Date | string;
  };

  export type DocumentCreateInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobCreateNestedManyWithoutDocumentInput;
    ocrResult?: OcrResultCreateNestedOneWithoutDocumentInput;
    analysis?: AnalysisCreateNestedManyWithoutDocumentInput;
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentUncheckedCreateInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUncheckedCreateNestedManyWithoutDocumentInput;
    ocrResult?: OcrResultUncheckedCreateNestedOneWithoutDocumentInput;
    analysis?: AnalysisUncheckedCreateNestedManyWithoutDocumentInput;
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUpdateManyWithoutDocumentNestedInput;
    ocrResult?: OcrResultUpdateOneWithoutDocumentNestedInput;
    analysis?: AnalysisUpdateManyWithoutDocumentNestedInput;
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput;
  };

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUncheckedUpdateManyWithoutDocumentNestedInput;
    ocrResult?: OcrResultUncheckedUpdateOneWithoutDocumentNestedInput;
    analysis?: AnalysisUncheckedUpdateManyWithoutDocumentNestedInput;
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput;
  };

  export type DocumentCreateManyInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type ProcessingJobCreateInput = {
    id?: string;
    status?: $Enums.JobStatus;
    attempts?: number;
    error?: string | null;
    processor?: string | null;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document: DocumentCreateNestedOneWithoutProcessingJobsInput;
  };

  export type ProcessingJobUncheckedCreateInput = {
    id?: string;
    documentId: string;
    status?: $Enums.JobStatus;
    attempts?: number;
    error?: string | null;
    processor?: string | null;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProcessingJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    attempts?: IntFieldUpdateOperationsInput | number;
    error?: NullableStringFieldUpdateOperationsInput | string | null;
    processor?: NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    finishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: DocumentUpdateOneRequiredWithoutProcessingJobsNestedInput;
  };

  export type ProcessingJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    attempts?: IntFieldUpdateOperationsInput | number;
    error?: NullableStringFieldUpdateOperationsInput | string | null;
    processor?: NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    finishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProcessingJobCreateManyInput = {
    id?: string;
    documentId: string;
    status?: $Enums.JobStatus;
    attempts?: number;
    error?: string | null;
    processor?: string | null;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProcessingJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    attempts?: IntFieldUpdateOperationsInput | number;
    error?: NullableStringFieldUpdateOperationsInput | string | null;
    processor?: NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    finishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProcessingJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    attempts?: IntFieldUpdateOperationsInput | number;
    error?: NullableStringFieldUpdateOperationsInput | string | null;
    processor?: NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    finishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OcrResultCreateInput = {
    id?: string;
    rawJson: JsonNullValueInput | InputJsonValue;
    plainText: string;
    language?: string | null;
    pages?: number | null;
    confidence?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document: DocumentCreateNestedOneWithoutOcrResultInput;
    analysis?: AnalysisCreateNestedManyWithoutOcrResultInput;
  };

  export type OcrResultUncheckedCreateInput = {
    id?: string;
    documentId: string;
    rawJson: JsonNullValueInput | InputJsonValue;
    plainText: string;
    language?: string | null;
    pages?: number | null;
    confidence?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    analysis?: AnalysisUncheckedCreateNestedManyWithoutOcrResultInput;
  };

  export type OcrResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rawJson?: JsonNullValueInput | InputJsonValue;
    plainText?: StringFieldUpdateOperationsInput | string;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    pages?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: DocumentUpdateOneRequiredWithoutOcrResultNestedInput;
    analysis?: AnalysisUpdateManyWithoutOcrResultNestedInput;
  };

  export type OcrResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    rawJson?: JsonNullValueInput | InputJsonValue;
    plainText?: StringFieldUpdateOperationsInput | string;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    pages?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: AnalysisUncheckedUpdateManyWithoutOcrResultNestedInput;
  };

  export type OcrResultCreateManyInput = {
    id?: string;
    documentId: string;
    rawJson: JsonNullValueInput | InputJsonValue;
    plainText: string;
    language?: string | null;
    pages?: number | null;
    confidence?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OcrResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rawJson?: JsonNullValueInput | InputJsonValue;
    plainText?: StringFieldUpdateOperationsInput | string;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    pages?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OcrResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    rawJson?: JsonNullValueInput | InputJsonValue;
    plainText?: StringFieldUpdateOperationsInput | string;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    pages?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnalysisCreateInput = {
    id?: string;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document: DocumentCreateNestedOneWithoutAnalysisInput;
    ocrResult?: OcrResultCreateNestedOneWithoutAnalysisInput;
    VitalParam?: VitalParamCreateNestedManyWithoutAnalysisInput;
  };

  export type AnalysisUncheckedCreateInput = {
    id?: string;
    documentId: string;
    ocrResultId?: string | null;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    VitalParam?: VitalParamUncheckedCreateNestedManyWithoutAnalysisInput;
  };

  export type AnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: DocumentUpdateOneRequiredWithoutAnalysisNestedInput;
    ocrResult?: OcrResultUpdateOneWithoutAnalysisNestedInput;
    VitalParam?: VitalParamUpdateManyWithoutAnalysisNestedInput;
  };

  export type AnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    ocrResultId?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    VitalParam?: VitalParamUncheckedUpdateManyWithoutAnalysisNestedInput;
  };

  export type AnalysisCreateManyInput = {
    id?: string;
    documentId: string;
    ocrResultId?: string | null;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    ocrResultId?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VitalParamCreateInput = {
    id?: string;
    name: string;
    value: number;
    unit?: string | null;
    recordedAt?: Date | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
    analysis: AnalysisCreateNestedOneWithoutVitalParamInput;
  };

  export type VitalParamUncheckedCreateInput = {
    id?: string;
    analysisId: string;
    name: string;
    value: number;
    unit?: string | null;
    recordedAt?: Date | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type VitalParamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: FloatFieldUpdateOperationsInput | number;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    recordedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: AnalysisUpdateOneRequiredWithoutVitalParamNestedInput;
  };

  export type VitalParamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    analysisId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: FloatFieldUpdateOperationsInput | number;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    recordedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VitalParamCreateManyInput = {
    id?: string;
    analysisId: string;
    name: string;
    value: number;
    unit?: string | null;
    recordedAt?: Date | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type VitalParamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: FloatFieldUpdateOperationsInput | number;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    recordedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VitalParamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    analysisId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: FloatFieldUpdateOperationsInput | number;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    recordedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DocumentShareCreateInput = {
    id?: string;
    caregiverId: string;
    sent?: boolean;
    sentAt?: Date | string | null;
    viewedAt?: Date | string | null;
    createdAt?: Date | string;
    document: DocumentCreateNestedOneWithoutSharesInput;
  };

  export type DocumentShareUncheckedCreateInput = {
    id?: string;
    documentId: string;
    caregiverId: string;
    sent?: boolean;
    sentAt?: Date | string | null;
    viewedAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type DocumentShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: DocumentUpdateOneRequiredWithoutSharesNestedInput;
  };

  export type DocumentShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DocumentShareCreateManyInput = {
    id?: string;
    documentId: string;
    caregiverId: string;
    sent?: boolean;
    sentAt?: Date | string | null;
    viewedAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type DocumentShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DocumentShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
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

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.DocumentType[]
      | ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.DocumentType[]
      | ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType;
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type ProcessingJobListRelationFilter = {
    every?: ProcessingJobWhereInput;
    some?: ProcessingJobWhereInput;
    none?: ProcessingJobWhereInput;
  };

  export type OcrResultNullableScalarRelationFilter = {
    is?: OcrResultWhereInput | null;
    isNot?: OcrResultWhereInput | null;
  };

  export type AnalysisListRelationFilter = {
    every?: AnalysisWhereInput;
    some?: AnalysisWhereInput;
    none?: AnalysisWhereInput;
  };

  export type DocumentShareListRelationFilter = {
    every?: DocumentShareWhereInput;
    some?: DocumentShareWhereInput;
    none?: DocumentShareWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ProcessingJobOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type DocumentShareOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    caregiverId?: SortOrder;
    fileServiceId?: SortOrder;
    fileUrl?: SortOrder;
    fileName?: SortOrder;
    mimeType?: SortOrder;
    size?: SortOrder;
    type?: SortOrder;
    uploadedAt?: SortOrder;
    processed?: SortOrder;
    metadata?: SortOrder;
  };

  export type DocumentAvgOrderByAggregateInput = {
    size?: SortOrder;
  };

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    caregiverId?: SortOrder;
    fileServiceId?: SortOrder;
    fileUrl?: SortOrder;
    fileName?: SortOrder;
    mimeType?: SortOrder;
    size?: SortOrder;
    type?: SortOrder;
    uploadedAt?: SortOrder;
    processed?: SortOrder;
  };

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    caregiverId?: SortOrder;
    fileServiceId?: SortOrder;
    fileUrl?: SortOrder;
    fileName?: SortOrder;
    mimeType?: SortOrder;
    size?: SortOrder;
    type?: SortOrder;
    uploadedAt?: SortOrder;
    processed?: SortOrder;
  };

  export type DocumentSumOrderByAggregateInput = {
    size?: SortOrder;
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

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.DocumentType[]
      | ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.DocumentType[]
      | ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.DocumentType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>;
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>;
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          'path'
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
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

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput;
    isNot?: DocumentWhereInput;
  };

  export type ProcessingJobCountOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    status?: SortOrder;
    attempts?: SortOrder;
    error?: SortOrder;
    processor?: SortOrder;
    startedAt?: SortOrder;
    finishedAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProcessingJobAvgOrderByAggregateInput = {
    attempts?: SortOrder;
  };

  export type ProcessingJobMaxOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    status?: SortOrder;
    attempts?: SortOrder;
    error?: SortOrder;
    processor?: SortOrder;
    startedAt?: SortOrder;
    finishedAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProcessingJobMinOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    status?: SortOrder;
    attempts?: SortOrder;
    error?: SortOrder;
    processor?: SortOrder;
    startedAt?: SortOrder;
    finishedAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProcessingJobSumOrderByAggregateInput = {
    attempts?: SortOrder;
  };

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumJobStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.JobStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumJobStatusFilter<$PrismaModel>;
    _max?: NestedEnumJobStatusFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type OcrResultCountOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    rawJson?: SortOrder;
    plainText?: SortOrder;
    language?: SortOrder;
    pages?: SortOrder;
    confidence?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OcrResultAvgOrderByAggregateInput = {
    pages?: SortOrder;
    confidence?: SortOrder;
  };

  export type OcrResultMaxOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    plainText?: SortOrder;
    language?: SortOrder;
    pages?: SortOrder;
    confidence?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OcrResultMinOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    plainText?: SortOrder;
    language?: SortOrder;
    pages?: SortOrder;
    confidence?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OcrResultSumOrderByAggregateInput = {
    pages?: SortOrder;
    confidence?: SortOrder;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type EnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.AnalysisStatus
      | EnumAnalysisStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.AnalysisStatus[]
      | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.AnalysisStatus[]
      | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus;
  };

  export type VitalParamListRelationFilter = {
    every?: VitalParamWhereInput;
    some?: VitalParamWhereInput;
    none?: VitalParamWhereInput;
  };

  export type VitalParamOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AnalysisCountOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    ocrResultId?: SortOrder;
    model?: SortOrder;
    prompt?: SortOrder;
    response?: SortOrder;
    summary?: SortOrder;
    insights?: SortOrder;
    vitals?: SortOrder;
    graphs?: SortOrder;
    status?: SortOrder;
    confidence?: SortOrder;
    requestedBy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AnalysisAvgOrderByAggregateInput = {
    confidence?: SortOrder;
  };

  export type AnalysisMaxOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    ocrResultId?: SortOrder;
    model?: SortOrder;
    prompt?: SortOrder;
    summary?: SortOrder;
    status?: SortOrder;
    confidence?: SortOrder;
    requestedBy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AnalysisMinOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    ocrResultId?: SortOrder;
    model?: SortOrder;
    prompt?: SortOrder;
    summary?: SortOrder;
    status?: SortOrder;
    confidence?: SortOrder;
    requestedBy?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AnalysisSumOrderByAggregateInput = {
    confidence?: SortOrder;
  };

  export type EnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.AnalysisStatus
      | EnumAnalysisStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.AnalysisStatus[]
      | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.AnalysisStatus[]
      | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.AnalysisStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>;
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>;
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

  export type AnalysisScalarRelationFilter = {
    is?: AnalysisWhereInput;
    isNot?: AnalysisWhereInput;
  };

  export type VitalParamCountOrderByAggregateInput = {
    id?: SortOrder;
    analysisId?: SortOrder;
    name?: SortOrder;
    value?: SortOrder;
    unit?: SortOrder;
    recordedAt?: SortOrder;
    metadata?: SortOrder;
    createdAt?: SortOrder;
  };

  export type VitalParamAvgOrderByAggregateInput = {
    value?: SortOrder;
  };

  export type VitalParamMaxOrderByAggregateInput = {
    id?: SortOrder;
    analysisId?: SortOrder;
    name?: SortOrder;
    value?: SortOrder;
    unit?: SortOrder;
    recordedAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type VitalParamMinOrderByAggregateInput = {
    id?: SortOrder;
    analysisId?: SortOrder;
    name?: SortOrder;
    value?: SortOrder;
    unit?: SortOrder;
    recordedAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type VitalParamSumOrderByAggregateInput = {
    value?: SortOrder;
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

  export type DocumentShareCountOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    caregiverId?: SortOrder;
    sent?: SortOrder;
    sentAt?: SortOrder;
    viewedAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type DocumentShareMaxOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    caregiverId?: SortOrder;
    sent?: SortOrder;
    sentAt?: SortOrder;
    viewedAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type DocumentShareMinOrderByAggregateInput = {
    id?: SortOrder;
    documentId?: SortOrder;
    caregiverId?: SortOrder;
    sent?: SortOrder;
    sentAt?: SortOrder;
    viewedAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProcessingJobCreateNestedManyWithoutDocumentInput = {
    create?:
      | XOR<
          ProcessingJobCreateWithoutDocumentInput,
          ProcessingJobUncheckedCreateWithoutDocumentInput
        >
      | ProcessingJobCreateWithoutDocumentInput[]
      | ProcessingJobUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | ProcessingJobCreateOrConnectWithoutDocumentInput
      | ProcessingJobCreateOrConnectWithoutDocumentInput[];
    createMany?: ProcessingJobCreateManyDocumentInputEnvelope;
    connect?: ProcessingJobWhereUniqueInput | ProcessingJobWhereUniqueInput[];
  };

  export type OcrResultCreateNestedOneWithoutDocumentInput = {
    create?: XOR<
      OcrResultCreateWithoutDocumentInput,
      OcrResultUncheckedCreateWithoutDocumentInput
    >;
    connectOrCreate?: OcrResultCreateOrConnectWithoutDocumentInput;
    connect?: OcrResultWhereUniqueInput;
  };

  export type AnalysisCreateNestedManyWithoutDocumentInput = {
    create?:
      | XOR<
          AnalysisCreateWithoutDocumentInput,
          AnalysisUncheckedCreateWithoutDocumentInput
        >
      | AnalysisCreateWithoutDocumentInput[]
      | AnalysisUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | AnalysisCreateOrConnectWithoutDocumentInput
      | AnalysisCreateOrConnectWithoutDocumentInput[];
    createMany?: AnalysisCreateManyDocumentInputEnvelope;
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
  };

  export type DocumentShareCreateNestedManyWithoutDocumentInput = {
    create?:
      | XOR<
          DocumentShareCreateWithoutDocumentInput,
          DocumentShareUncheckedCreateWithoutDocumentInput
        >
      | DocumentShareCreateWithoutDocumentInput[]
      | DocumentShareUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | DocumentShareCreateOrConnectWithoutDocumentInput
      | DocumentShareCreateOrConnectWithoutDocumentInput[];
    createMany?: DocumentShareCreateManyDocumentInputEnvelope;
    connect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[];
  };

  export type ProcessingJobUncheckedCreateNestedManyWithoutDocumentInput = {
    create?:
      | XOR<
          ProcessingJobCreateWithoutDocumentInput,
          ProcessingJobUncheckedCreateWithoutDocumentInput
        >
      | ProcessingJobCreateWithoutDocumentInput[]
      | ProcessingJobUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | ProcessingJobCreateOrConnectWithoutDocumentInput
      | ProcessingJobCreateOrConnectWithoutDocumentInput[];
    createMany?: ProcessingJobCreateManyDocumentInputEnvelope;
    connect?: ProcessingJobWhereUniqueInput | ProcessingJobWhereUniqueInput[];
  };

  export type OcrResultUncheckedCreateNestedOneWithoutDocumentInput = {
    create?: XOR<
      OcrResultCreateWithoutDocumentInput,
      OcrResultUncheckedCreateWithoutDocumentInput
    >;
    connectOrCreate?: OcrResultCreateOrConnectWithoutDocumentInput;
    connect?: OcrResultWhereUniqueInput;
  };

  export type AnalysisUncheckedCreateNestedManyWithoutDocumentInput = {
    create?:
      | XOR<
          AnalysisCreateWithoutDocumentInput,
          AnalysisUncheckedCreateWithoutDocumentInput
        >
      | AnalysisCreateWithoutDocumentInput[]
      | AnalysisUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | AnalysisCreateOrConnectWithoutDocumentInput
      | AnalysisCreateOrConnectWithoutDocumentInput[];
    createMany?: AnalysisCreateManyDocumentInputEnvelope;
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
  };

  export type DocumentShareUncheckedCreateNestedManyWithoutDocumentInput = {
    create?:
      | XOR<
          DocumentShareCreateWithoutDocumentInput,
          DocumentShareUncheckedCreateWithoutDocumentInput
        >
      | DocumentShareCreateWithoutDocumentInput[]
      | DocumentShareUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | DocumentShareCreateOrConnectWithoutDocumentInput
      | DocumentShareCreateOrConnectWithoutDocumentInput[];
    createMany?: DocumentShareCreateManyDocumentInputEnvelope;
    connect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type ProcessingJobUpdateManyWithoutDocumentNestedInput = {
    create?:
      | XOR<
          ProcessingJobCreateWithoutDocumentInput,
          ProcessingJobUncheckedCreateWithoutDocumentInput
        >
      | ProcessingJobCreateWithoutDocumentInput[]
      | ProcessingJobUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | ProcessingJobCreateOrConnectWithoutDocumentInput
      | ProcessingJobCreateOrConnectWithoutDocumentInput[];
    upsert?:
      | ProcessingJobUpsertWithWhereUniqueWithoutDocumentInput
      | ProcessingJobUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: ProcessingJobCreateManyDocumentInputEnvelope;
    set?: ProcessingJobWhereUniqueInput | ProcessingJobWhereUniqueInput[];
    disconnect?:
      | ProcessingJobWhereUniqueInput
      | ProcessingJobWhereUniqueInput[];
    delete?: ProcessingJobWhereUniqueInput | ProcessingJobWhereUniqueInput[];
    connect?: ProcessingJobWhereUniqueInput | ProcessingJobWhereUniqueInput[];
    update?:
      | ProcessingJobUpdateWithWhereUniqueWithoutDocumentInput
      | ProcessingJobUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?:
      | ProcessingJobUpdateManyWithWhereWithoutDocumentInput
      | ProcessingJobUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?:
      | ProcessingJobScalarWhereInput
      | ProcessingJobScalarWhereInput[];
  };

  export type OcrResultUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<
      OcrResultCreateWithoutDocumentInput,
      OcrResultUncheckedCreateWithoutDocumentInput
    >;
    connectOrCreate?: OcrResultCreateOrConnectWithoutDocumentInput;
    upsert?: OcrResultUpsertWithoutDocumentInput;
    disconnect?: OcrResultWhereInput | boolean;
    delete?: OcrResultWhereInput | boolean;
    connect?: OcrResultWhereUniqueInput;
    update?: XOR<
      XOR<
        OcrResultUpdateToOneWithWhereWithoutDocumentInput,
        OcrResultUpdateWithoutDocumentInput
      >,
      OcrResultUncheckedUpdateWithoutDocumentInput
    >;
  };

  export type AnalysisUpdateManyWithoutDocumentNestedInput = {
    create?:
      | XOR<
          AnalysisCreateWithoutDocumentInput,
          AnalysisUncheckedCreateWithoutDocumentInput
        >
      | AnalysisCreateWithoutDocumentInput[]
      | AnalysisUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | AnalysisCreateOrConnectWithoutDocumentInput
      | AnalysisCreateOrConnectWithoutDocumentInput[];
    upsert?:
      | AnalysisUpsertWithWhereUniqueWithoutDocumentInput
      | AnalysisUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: AnalysisCreateManyDocumentInputEnvelope;
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    update?:
      | AnalysisUpdateWithWhereUniqueWithoutDocumentInput
      | AnalysisUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?:
      | AnalysisUpdateManyWithWhereWithoutDocumentInput
      | AnalysisUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[];
  };

  export type DocumentShareUpdateManyWithoutDocumentNestedInput = {
    create?:
      | XOR<
          DocumentShareCreateWithoutDocumentInput,
          DocumentShareUncheckedCreateWithoutDocumentInput
        >
      | DocumentShareCreateWithoutDocumentInput[]
      | DocumentShareUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | DocumentShareCreateOrConnectWithoutDocumentInput
      | DocumentShareCreateOrConnectWithoutDocumentInput[];
    upsert?:
      | DocumentShareUpsertWithWhereUniqueWithoutDocumentInput
      | DocumentShareUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: DocumentShareCreateManyDocumentInputEnvelope;
    set?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[];
    disconnect?:
      | DocumentShareWhereUniqueInput
      | DocumentShareWhereUniqueInput[];
    delete?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[];
    connect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[];
    update?:
      | DocumentShareUpdateWithWhereUniqueWithoutDocumentInput
      | DocumentShareUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?:
      | DocumentShareUpdateManyWithWhereWithoutDocumentInput
      | DocumentShareUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?:
      | DocumentShareScalarWhereInput
      | DocumentShareScalarWhereInput[];
  };

  export type ProcessingJobUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?:
      | XOR<
          ProcessingJobCreateWithoutDocumentInput,
          ProcessingJobUncheckedCreateWithoutDocumentInput
        >
      | ProcessingJobCreateWithoutDocumentInput[]
      | ProcessingJobUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | ProcessingJobCreateOrConnectWithoutDocumentInput
      | ProcessingJobCreateOrConnectWithoutDocumentInput[];
    upsert?:
      | ProcessingJobUpsertWithWhereUniqueWithoutDocumentInput
      | ProcessingJobUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: ProcessingJobCreateManyDocumentInputEnvelope;
    set?: ProcessingJobWhereUniqueInput | ProcessingJobWhereUniqueInput[];
    disconnect?:
      | ProcessingJobWhereUniqueInput
      | ProcessingJobWhereUniqueInput[];
    delete?: ProcessingJobWhereUniqueInput | ProcessingJobWhereUniqueInput[];
    connect?: ProcessingJobWhereUniqueInput | ProcessingJobWhereUniqueInput[];
    update?:
      | ProcessingJobUpdateWithWhereUniqueWithoutDocumentInput
      | ProcessingJobUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?:
      | ProcessingJobUpdateManyWithWhereWithoutDocumentInput
      | ProcessingJobUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?:
      | ProcessingJobScalarWhereInput
      | ProcessingJobScalarWhereInput[];
  };

  export type OcrResultUncheckedUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<
      OcrResultCreateWithoutDocumentInput,
      OcrResultUncheckedCreateWithoutDocumentInput
    >;
    connectOrCreate?: OcrResultCreateOrConnectWithoutDocumentInput;
    upsert?: OcrResultUpsertWithoutDocumentInput;
    disconnect?: OcrResultWhereInput | boolean;
    delete?: OcrResultWhereInput | boolean;
    connect?: OcrResultWhereUniqueInput;
    update?: XOR<
      XOR<
        OcrResultUpdateToOneWithWhereWithoutDocumentInput,
        OcrResultUpdateWithoutDocumentInput
      >,
      OcrResultUncheckedUpdateWithoutDocumentInput
    >;
  };

  export type AnalysisUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?:
      | XOR<
          AnalysisCreateWithoutDocumentInput,
          AnalysisUncheckedCreateWithoutDocumentInput
        >
      | AnalysisCreateWithoutDocumentInput[]
      | AnalysisUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | AnalysisCreateOrConnectWithoutDocumentInput
      | AnalysisCreateOrConnectWithoutDocumentInput[];
    upsert?:
      | AnalysisUpsertWithWhereUniqueWithoutDocumentInput
      | AnalysisUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: AnalysisCreateManyDocumentInputEnvelope;
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    update?:
      | AnalysisUpdateWithWhereUniqueWithoutDocumentInput
      | AnalysisUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?:
      | AnalysisUpdateManyWithWhereWithoutDocumentInput
      | AnalysisUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[];
  };

  export type DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?:
      | XOR<
          DocumentShareCreateWithoutDocumentInput,
          DocumentShareUncheckedCreateWithoutDocumentInput
        >
      | DocumentShareCreateWithoutDocumentInput[]
      | DocumentShareUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?:
      | DocumentShareCreateOrConnectWithoutDocumentInput
      | DocumentShareCreateOrConnectWithoutDocumentInput[];
    upsert?:
      | DocumentShareUpsertWithWhereUniqueWithoutDocumentInput
      | DocumentShareUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: DocumentShareCreateManyDocumentInputEnvelope;
    set?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[];
    disconnect?:
      | DocumentShareWhereUniqueInput
      | DocumentShareWhereUniqueInput[];
    delete?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[];
    connect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[];
    update?:
      | DocumentShareUpdateWithWhereUniqueWithoutDocumentInput
      | DocumentShareUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?:
      | DocumentShareUpdateManyWithWhereWithoutDocumentInput
      | DocumentShareUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?:
      | DocumentShareScalarWhereInput
      | DocumentShareScalarWhereInput[];
  };

  export type DocumentCreateNestedOneWithoutProcessingJobsInput = {
    create?: XOR<
      DocumentCreateWithoutProcessingJobsInput,
      DocumentUncheckedCreateWithoutProcessingJobsInput
    >;
    connectOrCreate?: DocumentCreateOrConnectWithoutProcessingJobsInput;
    connect?: DocumentWhereUniqueInput;
  };

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DocumentUpdateOneRequiredWithoutProcessingJobsNestedInput = {
    create?: XOR<
      DocumentCreateWithoutProcessingJobsInput,
      DocumentUncheckedCreateWithoutProcessingJobsInput
    >;
    connectOrCreate?: DocumentCreateOrConnectWithoutProcessingJobsInput;
    upsert?: DocumentUpsertWithoutProcessingJobsInput;
    connect?: DocumentWhereUniqueInput;
    update?: XOR<
      XOR<
        DocumentUpdateToOneWithWhereWithoutProcessingJobsInput,
        DocumentUpdateWithoutProcessingJobsInput
      >,
      DocumentUncheckedUpdateWithoutProcessingJobsInput
    >;
  };

  export type DocumentCreateNestedOneWithoutOcrResultInput = {
    create?: XOR<
      DocumentCreateWithoutOcrResultInput,
      DocumentUncheckedCreateWithoutOcrResultInput
    >;
    connectOrCreate?: DocumentCreateOrConnectWithoutOcrResultInput;
    connect?: DocumentWhereUniqueInput;
  };

  export type AnalysisCreateNestedManyWithoutOcrResultInput = {
    create?:
      | XOR<
          AnalysisCreateWithoutOcrResultInput,
          AnalysisUncheckedCreateWithoutOcrResultInput
        >
      | AnalysisCreateWithoutOcrResultInput[]
      | AnalysisUncheckedCreateWithoutOcrResultInput[];
    connectOrCreate?:
      | AnalysisCreateOrConnectWithoutOcrResultInput
      | AnalysisCreateOrConnectWithoutOcrResultInput[];
    createMany?: AnalysisCreateManyOcrResultInputEnvelope;
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
  };

  export type AnalysisUncheckedCreateNestedManyWithoutOcrResultInput = {
    create?:
      | XOR<
          AnalysisCreateWithoutOcrResultInput,
          AnalysisUncheckedCreateWithoutOcrResultInput
        >
      | AnalysisCreateWithoutOcrResultInput[]
      | AnalysisUncheckedCreateWithoutOcrResultInput[];
    connectOrCreate?:
      | AnalysisCreateOrConnectWithoutOcrResultInput
      | AnalysisCreateOrConnectWithoutOcrResultInput[];
    createMany?: AnalysisCreateManyOcrResultInputEnvelope;
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DocumentUpdateOneRequiredWithoutOcrResultNestedInput = {
    create?: XOR<
      DocumentCreateWithoutOcrResultInput,
      DocumentUncheckedCreateWithoutOcrResultInput
    >;
    connectOrCreate?: DocumentCreateOrConnectWithoutOcrResultInput;
    upsert?: DocumentUpsertWithoutOcrResultInput;
    connect?: DocumentWhereUniqueInput;
    update?: XOR<
      XOR<
        DocumentUpdateToOneWithWhereWithoutOcrResultInput,
        DocumentUpdateWithoutOcrResultInput
      >,
      DocumentUncheckedUpdateWithoutOcrResultInput
    >;
  };

  export type AnalysisUpdateManyWithoutOcrResultNestedInput = {
    create?:
      | XOR<
          AnalysisCreateWithoutOcrResultInput,
          AnalysisUncheckedCreateWithoutOcrResultInput
        >
      | AnalysisCreateWithoutOcrResultInput[]
      | AnalysisUncheckedCreateWithoutOcrResultInput[];
    connectOrCreate?:
      | AnalysisCreateOrConnectWithoutOcrResultInput
      | AnalysisCreateOrConnectWithoutOcrResultInput[];
    upsert?:
      | AnalysisUpsertWithWhereUniqueWithoutOcrResultInput
      | AnalysisUpsertWithWhereUniqueWithoutOcrResultInput[];
    createMany?: AnalysisCreateManyOcrResultInputEnvelope;
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    update?:
      | AnalysisUpdateWithWhereUniqueWithoutOcrResultInput
      | AnalysisUpdateWithWhereUniqueWithoutOcrResultInput[];
    updateMany?:
      | AnalysisUpdateManyWithWhereWithoutOcrResultInput
      | AnalysisUpdateManyWithWhereWithoutOcrResultInput[];
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[];
  };

  export type AnalysisUncheckedUpdateManyWithoutOcrResultNestedInput = {
    create?:
      | XOR<
          AnalysisCreateWithoutOcrResultInput,
          AnalysisUncheckedCreateWithoutOcrResultInput
        >
      | AnalysisCreateWithoutOcrResultInput[]
      | AnalysisUncheckedCreateWithoutOcrResultInput[];
    connectOrCreate?:
      | AnalysisCreateOrConnectWithoutOcrResultInput
      | AnalysisCreateOrConnectWithoutOcrResultInput[];
    upsert?:
      | AnalysisUpsertWithWhereUniqueWithoutOcrResultInput
      | AnalysisUpsertWithWhereUniqueWithoutOcrResultInput[];
    createMany?: AnalysisCreateManyOcrResultInputEnvelope;
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[];
    update?:
      | AnalysisUpdateWithWhereUniqueWithoutOcrResultInput
      | AnalysisUpdateWithWhereUniqueWithoutOcrResultInput[];
    updateMany?:
      | AnalysisUpdateManyWithWhereWithoutOcrResultInput
      | AnalysisUpdateManyWithWhereWithoutOcrResultInput[];
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[];
  };

  export type DocumentCreateNestedOneWithoutAnalysisInput = {
    create?: XOR<
      DocumentCreateWithoutAnalysisInput,
      DocumentUncheckedCreateWithoutAnalysisInput
    >;
    connectOrCreate?: DocumentCreateOrConnectWithoutAnalysisInput;
    connect?: DocumentWhereUniqueInput;
  };

  export type OcrResultCreateNestedOneWithoutAnalysisInput = {
    create?: XOR<
      OcrResultCreateWithoutAnalysisInput,
      OcrResultUncheckedCreateWithoutAnalysisInput
    >;
    connectOrCreate?: OcrResultCreateOrConnectWithoutAnalysisInput;
    connect?: OcrResultWhereUniqueInput;
  };

  export type VitalParamCreateNestedManyWithoutAnalysisInput = {
    create?:
      | XOR<
          VitalParamCreateWithoutAnalysisInput,
          VitalParamUncheckedCreateWithoutAnalysisInput
        >
      | VitalParamCreateWithoutAnalysisInput[]
      | VitalParamUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?:
      | VitalParamCreateOrConnectWithoutAnalysisInput
      | VitalParamCreateOrConnectWithoutAnalysisInput[];
    createMany?: VitalParamCreateManyAnalysisInputEnvelope;
    connect?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
  };

  export type VitalParamUncheckedCreateNestedManyWithoutAnalysisInput = {
    create?:
      | XOR<
          VitalParamCreateWithoutAnalysisInput,
          VitalParamUncheckedCreateWithoutAnalysisInput
        >
      | VitalParamCreateWithoutAnalysisInput[]
      | VitalParamUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?:
      | VitalParamCreateOrConnectWithoutAnalysisInput
      | VitalParamCreateOrConnectWithoutAnalysisInput[];
    createMany?: VitalParamCreateManyAnalysisInputEnvelope;
    connect?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
  };

  export type EnumAnalysisStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisStatus;
  };

  export type DocumentUpdateOneRequiredWithoutAnalysisNestedInput = {
    create?: XOR<
      DocumentCreateWithoutAnalysisInput,
      DocumentUncheckedCreateWithoutAnalysisInput
    >;
    connectOrCreate?: DocumentCreateOrConnectWithoutAnalysisInput;
    upsert?: DocumentUpsertWithoutAnalysisInput;
    connect?: DocumentWhereUniqueInput;
    update?: XOR<
      XOR<
        DocumentUpdateToOneWithWhereWithoutAnalysisInput,
        DocumentUpdateWithoutAnalysisInput
      >,
      DocumentUncheckedUpdateWithoutAnalysisInput
    >;
  };

  export type OcrResultUpdateOneWithoutAnalysisNestedInput = {
    create?: XOR<
      OcrResultCreateWithoutAnalysisInput,
      OcrResultUncheckedCreateWithoutAnalysisInput
    >;
    connectOrCreate?: OcrResultCreateOrConnectWithoutAnalysisInput;
    upsert?: OcrResultUpsertWithoutAnalysisInput;
    disconnect?: OcrResultWhereInput | boolean;
    delete?: OcrResultWhereInput | boolean;
    connect?: OcrResultWhereUniqueInput;
    update?: XOR<
      XOR<
        OcrResultUpdateToOneWithWhereWithoutAnalysisInput,
        OcrResultUpdateWithoutAnalysisInput
      >,
      OcrResultUncheckedUpdateWithoutAnalysisInput
    >;
  };

  export type VitalParamUpdateManyWithoutAnalysisNestedInput = {
    create?:
      | XOR<
          VitalParamCreateWithoutAnalysisInput,
          VitalParamUncheckedCreateWithoutAnalysisInput
        >
      | VitalParamCreateWithoutAnalysisInput[]
      | VitalParamUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?:
      | VitalParamCreateOrConnectWithoutAnalysisInput
      | VitalParamCreateOrConnectWithoutAnalysisInput[];
    upsert?:
      | VitalParamUpsertWithWhereUniqueWithoutAnalysisInput
      | VitalParamUpsertWithWhereUniqueWithoutAnalysisInput[];
    createMany?: VitalParamCreateManyAnalysisInputEnvelope;
    set?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
    disconnect?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
    delete?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
    connect?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
    update?:
      | VitalParamUpdateWithWhereUniqueWithoutAnalysisInput
      | VitalParamUpdateWithWhereUniqueWithoutAnalysisInput[];
    updateMany?:
      | VitalParamUpdateManyWithWhereWithoutAnalysisInput
      | VitalParamUpdateManyWithWhereWithoutAnalysisInput[];
    deleteMany?: VitalParamScalarWhereInput | VitalParamScalarWhereInput[];
  };

  export type VitalParamUncheckedUpdateManyWithoutAnalysisNestedInput = {
    create?:
      | XOR<
          VitalParamCreateWithoutAnalysisInput,
          VitalParamUncheckedCreateWithoutAnalysisInput
        >
      | VitalParamCreateWithoutAnalysisInput[]
      | VitalParamUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?:
      | VitalParamCreateOrConnectWithoutAnalysisInput
      | VitalParamCreateOrConnectWithoutAnalysisInput[];
    upsert?:
      | VitalParamUpsertWithWhereUniqueWithoutAnalysisInput
      | VitalParamUpsertWithWhereUniqueWithoutAnalysisInput[];
    createMany?: VitalParamCreateManyAnalysisInputEnvelope;
    set?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
    disconnect?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
    delete?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
    connect?: VitalParamWhereUniqueInput | VitalParamWhereUniqueInput[];
    update?:
      | VitalParamUpdateWithWhereUniqueWithoutAnalysisInput
      | VitalParamUpdateWithWhereUniqueWithoutAnalysisInput[];
    updateMany?:
      | VitalParamUpdateManyWithWhereWithoutAnalysisInput
      | VitalParamUpdateManyWithWhereWithoutAnalysisInput[];
    deleteMany?: VitalParamScalarWhereInput | VitalParamScalarWhereInput[];
  };

  export type AnalysisCreateNestedOneWithoutVitalParamInput = {
    create?: XOR<
      AnalysisCreateWithoutVitalParamInput,
      AnalysisUncheckedCreateWithoutVitalParamInput
    >;
    connectOrCreate?: AnalysisCreateOrConnectWithoutVitalParamInput;
    connect?: AnalysisWhereUniqueInput;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type AnalysisUpdateOneRequiredWithoutVitalParamNestedInput = {
    create?: XOR<
      AnalysisCreateWithoutVitalParamInput,
      AnalysisUncheckedCreateWithoutVitalParamInput
    >;
    connectOrCreate?: AnalysisCreateOrConnectWithoutVitalParamInput;
    upsert?: AnalysisUpsertWithoutVitalParamInput;
    connect?: AnalysisWhereUniqueInput;
    update?: XOR<
      XOR<
        AnalysisUpdateToOneWithWhereWithoutVitalParamInput,
        AnalysisUpdateWithoutVitalParamInput
      >,
      AnalysisUncheckedUpdateWithoutVitalParamInput
    >;
  };

  export type DocumentCreateNestedOneWithoutSharesInput = {
    create?: XOR<
      DocumentCreateWithoutSharesInput,
      DocumentUncheckedCreateWithoutSharesInput
    >;
    connectOrCreate?: DocumentCreateOrConnectWithoutSharesInput;
    connect?: DocumentWhereUniqueInput;
  };

  export type DocumentUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<
      DocumentCreateWithoutSharesInput,
      DocumentUncheckedCreateWithoutSharesInput
    >;
    connectOrCreate?: DocumentCreateOrConnectWithoutSharesInput;
    upsert?: DocumentUpsertWithoutSharesInput;
    connect?: DocumentWhereUniqueInput;
    update?: XOR<
      XOR<
        DocumentUpdateToOneWithWhereWithoutSharesInput,
        DocumentUpdateWithoutSharesInput
      >,
      DocumentUncheckedUpdateWithoutSharesInput
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

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.DocumentType[]
      | ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.DocumentType[]
      | ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType;
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
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

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.DocumentType
        | EnumDocumentTypeFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.DocumentType[]
        | ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.DocumentType[]
        | ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel>
        | $Enums.DocumentType;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumDocumentTypeFilter<$PrismaModel>;
      _max?: NestedEnumDocumentTypeFilter<$PrismaModel>;
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus;
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

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumJobStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.JobStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumJobStatusFilter<$PrismaModel>;
    _max?: NestedEnumJobStatusFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedEnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.AnalysisStatus
      | EnumAnalysisStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.AnalysisStatus[]
      | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.AnalysisStatus[]
      | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus;
  };

  export type NestedEnumAnalysisStatusWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.AnalysisStatus
      | EnumAnalysisStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.AnalysisStatus[]
      | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.AnalysisStatus[]
      | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.AnalysisStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>;
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>;
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

  export type ProcessingJobCreateWithoutDocumentInput = {
    id?: string;
    status?: $Enums.JobStatus;
    attempts?: number;
    error?: string | null;
    processor?: string | null;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProcessingJobUncheckedCreateWithoutDocumentInput = {
    id?: string;
    status?: $Enums.JobStatus;
    attempts?: number;
    error?: string | null;
    processor?: string | null;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProcessingJobCreateOrConnectWithoutDocumentInput = {
    where: ProcessingJobWhereUniqueInput;
    create: XOR<
      ProcessingJobCreateWithoutDocumentInput,
      ProcessingJobUncheckedCreateWithoutDocumentInput
    >;
  };

  export type ProcessingJobCreateManyDocumentInputEnvelope = {
    data:
      | ProcessingJobCreateManyDocumentInput
      | ProcessingJobCreateManyDocumentInput[];
    skipDuplicates?: boolean;
  };

  export type OcrResultCreateWithoutDocumentInput = {
    id?: string;
    rawJson: JsonNullValueInput | InputJsonValue;
    plainText: string;
    language?: string | null;
    pages?: number | null;
    confidence?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    analysis?: AnalysisCreateNestedManyWithoutOcrResultInput;
  };

  export type OcrResultUncheckedCreateWithoutDocumentInput = {
    id?: string;
    rawJson: JsonNullValueInput | InputJsonValue;
    plainText: string;
    language?: string | null;
    pages?: number | null;
    confidence?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    analysis?: AnalysisUncheckedCreateNestedManyWithoutOcrResultInput;
  };

  export type OcrResultCreateOrConnectWithoutDocumentInput = {
    where: OcrResultWhereUniqueInput;
    create: XOR<
      OcrResultCreateWithoutDocumentInput,
      OcrResultUncheckedCreateWithoutDocumentInput
    >;
  };

  export type AnalysisCreateWithoutDocumentInput = {
    id?: string;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ocrResult?: OcrResultCreateNestedOneWithoutAnalysisInput;
    VitalParam?: VitalParamCreateNestedManyWithoutAnalysisInput;
  };

  export type AnalysisUncheckedCreateWithoutDocumentInput = {
    id?: string;
    ocrResultId?: string | null;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    VitalParam?: VitalParamUncheckedCreateNestedManyWithoutAnalysisInput;
  };

  export type AnalysisCreateOrConnectWithoutDocumentInput = {
    where: AnalysisWhereUniqueInput;
    create: XOR<
      AnalysisCreateWithoutDocumentInput,
      AnalysisUncheckedCreateWithoutDocumentInput
    >;
  };

  export type AnalysisCreateManyDocumentInputEnvelope = {
    data: AnalysisCreateManyDocumentInput | AnalysisCreateManyDocumentInput[];
    skipDuplicates?: boolean;
  };

  export type DocumentShareCreateWithoutDocumentInput = {
    id?: string;
    caregiverId: string;
    sent?: boolean;
    sentAt?: Date | string | null;
    viewedAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type DocumentShareUncheckedCreateWithoutDocumentInput = {
    id?: string;
    caregiverId: string;
    sent?: boolean;
    sentAt?: Date | string | null;
    viewedAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type DocumentShareCreateOrConnectWithoutDocumentInput = {
    where: DocumentShareWhereUniqueInput;
    create: XOR<
      DocumentShareCreateWithoutDocumentInput,
      DocumentShareUncheckedCreateWithoutDocumentInput
    >;
  };

  export type DocumentShareCreateManyDocumentInputEnvelope = {
    data:
      | DocumentShareCreateManyDocumentInput
      | DocumentShareCreateManyDocumentInput[];
    skipDuplicates?: boolean;
  };

  export type ProcessingJobUpsertWithWhereUniqueWithoutDocumentInput = {
    where: ProcessingJobWhereUniqueInput;
    update: XOR<
      ProcessingJobUpdateWithoutDocumentInput,
      ProcessingJobUncheckedUpdateWithoutDocumentInput
    >;
    create: XOR<
      ProcessingJobCreateWithoutDocumentInput,
      ProcessingJobUncheckedCreateWithoutDocumentInput
    >;
  };

  export type ProcessingJobUpdateWithWhereUniqueWithoutDocumentInput = {
    where: ProcessingJobWhereUniqueInput;
    data: XOR<
      ProcessingJobUpdateWithoutDocumentInput,
      ProcessingJobUncheckedUpdateWithoutDocumentInput
    >;
  };

  export type ProcessingJobUpdateManyWithWhereWithoutDocumentInput = {
    where: ProcessingJobScalarWhereInput;
    data: XOR<
      ProcessingJobUpdateManyMutationInput,
      ProcessingJobUncheckedUpdateManyWithoutDocumentInput
    >;
  };

  export type ProcessingJobScalarWhereInput = {
    AND?: ProcessingJobScalarWhereInput | ProcessingJobScalarWhereInput[];
    OR?: ProcessingJobScalarWhereInput[];
    NOT?: ProcessingJobScalarWhereInput | ProcessingJobScalarWhereInput[];
    id?: StringFilter<'ProcessingJob'> | string;
    documentId?: StringFilter<'ProcessingJob'> | string;
    status?: EnumJobStatusFilter<'ProcessingJob'> | $Enums.JobStatus;
    attempts?: IntFilter<'ProcessingJob'> | number;
    error?: StringNullableFilter<'ProcessingJob'> | string | null;
    processor?: StringNullableFilter<'ProcessingJob'> | string | null;
    startedAt?: DateTimeNullableFilter<'ProcessingJob'> | Date | string | null;
    finishedAt?: DateTimeNullableFilter<'ProcessingJob'> | Date | string | null;
    createdAt?: DateTimeFilter<'ProcessingJob'> | Date | string;
    updatedAt?: DateTimeFilter<'ProcessingJob'> | Date | string;
  };

  export type OcrResultUpsertWithoutDocumentInput = {
    update: XOR<
      OcrResultUpdateWithoutDocumentInput,
      OcrResultUncheckedUpdateWithoutDocumentInput
    >;
    create: XOR<
      OcrResultCreateWithoutDocumentInput,
      OcrResultUncheckedCreateWithoutDocumentInput
    >;
    where?: OcrResultWhereInput;
  };

  export type OcrResultUpdateToOneWithWhereWithoutDocumentInput = {
    where?: OcrResultWhereInput;
    data: XOR<
      OcrResultUpdateWithoutDocumentInput,
      OcrResultUncheckedUpdateWithoutDocumentInput
    >;
  };

  export type OcrResultUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rawJson?: JsonNullValueInput | InputJsonValue;
    plainText?: StringFieldUpdateOperationsInput | string;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    pages?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: AnalysisUpdateManyWithoutOcrResultNestedInput;
  };

  export type OcrResultUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rawJson?: JsonNullValueInput | InputJsonValue;
    plainText?: StringFieldUpdateOperationsInput | string;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    pages?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: AnalysisUncheckedUpdateManyWithoutOcrResultNestedInput;
  };

  export type AnalysisUpsertWithWhereUniqueWithoutDocumentInput = {
    where: AnalysisWhereUniqueInput;
    update: XOR<
      AnalysisUpdateWithoutDocumentInput,
      AnalysisUncheckedUpdateWithoutDocumentInput
    >;
    create: XOR<
      AnalysisCreateWithoutDocumentInput,
      AnalysisUncheckedCreateWithoutDocumentInput
    >;
  };

  export type AnalysisUpdateWithWhereUniqueWithoutDocumentInput = {
    where: AnalysisWhereUniqueInput;
    data: XOR<
      AnalysisUpdateWithoutDocumentInput,
      AnalysisUncheckedUpdateWithoutDocumentInput
    >;
  };

  export type AnalysisUpdateManyWithWhereWithoutDocumentInput = {
    where: AnalysisScalarWhereInput;
    data: XOR<
      AnalysisUpdateManyMutationInput,
      AnalysisUncheckedUpdateManyWithoutDocumentInput
    >;
  };

  export type AnalysisScalarWhereInput = {
    AND?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[];
    OR?: AnalysisScalarWhereInput[];
    NOT?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[];
    id?: StringFilter<'Analysis'> | string;
    documentId?: StringFilter<'Analysis'> | string;
    ocrResultId?: StringNullableFilter<'Analysis'> | string | null;
    model?: StringFilter<'Analysis'> | string;
    prompt?: StringFilter<'Analysis'> | string;
    response?: JsonFilter<'Analysis'>;
    summary?: StringNullableFilter<'Analysis'> | string | null;
    insights?: JsonNullableFilter<'Analysis'>;
    vitals?: JsonNullableFilter<'Analysis'>;
    graphs?: JsonNullableFilter<'Analysis'>;
    status?: EnumAnalysisStatusFilter<'Analysis'> | $Enums.AnalysisStatus;
    confidence?: FloatNullableFilter<'Analysis'> | number | null;
    requestedBy?: StringNullableFilter<'Analysis'> | string | null;
    createdAt?: DateTimeFilter<'Analysis'> | Date | string;
    updatedAt?: DateTimeFilter<'Analysis'> | Date | string;
  };

  export type DocumentShareUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentShareWhereUniqueInput;
    update: XOR<
      DocumentShareUpdateWithoutDocumentInput,
      DocumentShareUncheckedUpdateWithoutDocumentInput
    >;
    create: XOR<
      DocumentShareCreateWithoutDocumentInput,
      DocumentShareUncheckedCreateWithoutDocumentInput
    >;
  };

  export type DocumentShareUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentShareWhereUniqueInput;
    data: XOR<
      DocumentShareUpdateWithoutDocumentInput,
      DocumentShareUncheckedUpdateWithoutDocumentInput
    >;
  };

  export type DocumentShareUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentShareScalarWhereInput;
    data: XOR<
      DocumentShareUpdateManyMutationInput,
      DocumentShareUncheckedUpdateManyWithoutDocumentInput
    >;
  };

  export type DocumentShareScalarWhereInput = {
    AND?: DocumentShareScalarWhereInput | DocumentShareScalarWhereInput[];
    OR?: DocumentShareScalarWhereInput[];
    NOT?: DocumentShareScalarWhereInput | DocumentShareScalarWhereInput[];
    id?: StringFilter<'DocumentShare'> | string;
    documentId?: StringFilter<'DocumentShare'> | string;
    caregiverId?: StringFilter<'DocumentShare'> | string;
    sent?: BoolFilter<'DocumentShare'> | boolean;
    sentAt?: DateTimeNullableFilter<'DocumentShare'> | Date | string | null;
    viewedAt?: DateTimeNullableFilter<'DocumentShare'> | Date | string | null;
    createdAt?: DateTimeFilter<'DocumentShare'> | Date | string;
  };

  export type DocumentCreateWithoutProcessingJobsInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    ocrResult?: OcrResultCreateNestedOneWithoutDocumentInput;
    analysis?: AnalysisCreateNestedManyWithoutDocumentInput;
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentUncheckedCreateWithoutProcessingJobsInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    ocrResult?: OcrResultUncheckedCreateNestedOneWithoutDocumentInput;
    analysis?: AnalysisUncheckedCreateNestedManyWithoutDocumentInput;
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentCreateOrConnectWithoutProcessingJobsInput = {
    where: DocumentWhereUniqueInput;
    create: XOR<
      DocumentCreateWithoutProcessingJobsInput,
      DocumentUncheckedCreateWithoutProcessingJobsInput
    >;
  };

  export type DocumentUpsertWithoutProcessingJobsInput = {
    update: XOR<
      DocumentUpdateWithoutProcessingJobsInput,
      DocumentUncheckedUpdateWithoutProcessingJobsInput
    >;
    create: XOR<
      DocumentCreateWithoutProcessingJobsInput,
      DocumentUncheckedCreateWithoutProcessingJobsInput
    >;
    where?: DocumentWhereInput;
  };

  export type DocumentUpdateToOneWithWhereWithoutProcessingJobsInput = {
    where?: DocumentWhereInput;
    data: XOR<
      DocumentUpdateWithoutProcessingJobsInput,
      DocumentUncheckedUpdateWithoutProcessingJobsInput
    >;
  };

  export type DocumentUpdateWithoutProcessingJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    ocrResult?: OcrResultUpdateOneWithoutDocumentNestedInput;
    analysis?: AnalysisUpdateManyWithoutDocumentNestedInput;
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput;
  };

  export type DocumentUncheckedUpdateWithoutProcessingJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    ocrResult?: OcrResultUncheckedUpdateOneWithoutDocumentNestedInput;
    analysis?: AnalysisUncheckedUpdateManyWithoutDocumentNestedInput;
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput;
  };

  export type DocumentCreateWithoutOcrResultInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobCreateNestedManyWithoutDocumentInput;
    analysis?: AnalysisCreateNestedManyWithoutDocumentInput;
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentUncheckedCreateWithoutOcrResultInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUncheckedCreateNestedManyWithoutDocumentInput;
    analysis?: AnalysisUncheckedCreateNestedManyWithoutDocumentInput;
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentCreateOrConnectWithoutOcrResultInput = {
    where: DocumentWhereUniqueInput;
    create: XOR<
      DocumentCreateWithoutOcrResultInput,
      DocumentUncheckedCreateWithoutOcrResultInput
    >;
  };

  export type AnalysisCreateWithoutOcrResultInput = {
    id?: string;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document: DocumentCreateNestedOneWithoutAnalysisInput;
    VitalParam?: VitalParamCreateNestedManyWithoutAnalysisInput;
  };

  export type AnalysisUncheckedCreateWithoutOcrResultInput = {
    id?: string;
    documentId: string;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    VitalParam?: VitalParamUncheckedCreateNestedManyWithoutAnalysisInput;
  };

  export type AnalysisCreateOrConnectWithoutOcrResultInput = {
    where: AnalysisWhereUniqueInput;
    create: XOR<
      AnalysisCreateWithoutOcrResultInput,
      AnalysisUncheckedCreateWithoutOcrResultInput
    >;
  };

  export type AnalysisCreateManyOcrResultInputEnvelope = {
    data: AnalysisCreateManyOcrResultInput | AnalysisCreateManyOcrResultInput[];
    skipDuplicates?: boolean;
  };

  export type DocumentUpsertWithoutOcrResultInput = {
    update: XOR<
      DocumentUpdateWithoutOcrResultInput,
      DocumentUncheckedUpdateWithoutOcrResultInput
    >;
    create: XOR<
      DocumentCreateWithoutOcrResultInput,
      DocumentUncheckedCreateWithoutOcrResultInput
    >;
    where?: DocumentWhereInput;
  };

  export type DocumentUpdateToOneWithWhereWithoutOcrResultInput = {
    where?: DocumentWhereInput;
    data: XOR<
      DocumentUpdateWithoutOcrResultInput,
      DocumentUncheckedUpdateWithoutOcrResultInput
    >;
  };

  export type DocumentUpdateWithoutOcrResultInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUpdateManyWithoutDocumentNestedInput;
    analysis?: AnalysisUpdateManyWithoutDocumentNestedInput;
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput;
  };

  export type DocumentUncheckedUpdateWithoutOcrResultInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUncheckedUpdateManyWithoutDocumentNestedInput;
    analysis?: AnalysisUncheckedUpdateManyWithoutDocumentNestedInput;
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput;
  };

  export type AnalysisUpsertWithWhereUniqueWithoutOcrResultInput = {
    where: AnalysisWhereUniqueInput;
    update: XOR<
      AnalysisUpdateWithoutOcrResultInput,
      AnalysisUncheckedUpdateWithoutOcrResultInput
    >;
    create: XOR<
      AnalysisCreateWithoutOcrResultInput,
      AnalysisUncheckedCreateWithoutOcrResultInput
    >;
  };

  export type AnalysisUpdateWithWhereUniqueWithoutOcrResultInput = {
    where: AnalysisWhereUniqueInput;
    data: XOR<
      AnalysisUpdateWithoutOcrResultInput,
      AnalysisUncheckedUpdateWithoutOcrResultInput
    >;
  };

  export type AnalysisUpdateManyWithWhereWithoutOcrResultInput = {
    where: AnalysisScalarWhereInput;
    data: XOR<
      AnalysisUpdateManyMutationInput,
      AnalysisUncheckedUpdateManyWithoutOcrResultInput
    >;
  };

  export type DocumentCreateWithoutAnalysisInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobCreateNestedManyWithoutDocumentInput;
    ocrResult?: OcrResultCreateNestedOneWithoutDocumentInput;
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentUncheckedCreateWithoutAnalysisInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUncheckedCreateNestedManyWithoutDocumentInput;
    ocrResult?: OcrResultUncheckedCreateNestedOneWithoutDocumentInput;
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentCreateOrConnectWithoutAnalysisInput = {
    where: DocumentWhereUniqueInput;
    create: XOR<
      DocumentCreateWithoutAnalysisInput,
      DocumentUncheckedCreateWithoutAnalysisInput
    >;
  };

  export type OcrResultCreateWithoutAnalysisInput = {
    id?: string;
    rawJson: JsonNullValueInput | InputJsonValue;
    plainText: string;
    language?: string | null;
    pages?: number | null;
    confidence?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document: DocumentCreateNestedOneWithoutOcrResultInput;
  };

  export type OcrResultUncheckedCreateWithoutAnalysisInput = {
    id?: string;
    documentId: string;
    rawJson: JsonNullValueInput | InputJsonValue;
    plainText: string;
    language?: string | null;
    pages?: number | null;
    confidence?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OcrResultCreateOrConnectWithoutAnalysisInput = {
    where: OcrResultWhereUniqueInput;
    create: XOR<
      OcrResultCreateWithoutAnalysisInput,
      OcrResultUncheckedCreateWithoutAnalysisInput
    >;
  };

  export type VitalParamCreateWithoutAnalysisInput = {
    id?: string;
    name: string;
    value: number;
    unit?: string | null;
    recordedAt?: Date | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type VitalParamUncheckedCreateWithoutAnalysisInput = {
    id?: string;
    name: string;
    value: number;
    unit?: string | null;
    recordedAt?: Date | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type VitalParamCreateOrConnectWithoutAnalysisInput = {
    where: VitalParamWhereUniqueInput;
    create: XOR<
      VitalParamCreateWithoutAnalysisInput,
      VitalParamUncheckedCreateWithoutAnalysisInput
    >;
  };

  export type VitalParamCreateManyAnalysisInputEnvelope = {
    data:
      | VitalParamCreateManyAnalysisInput
      | VitalParamCreateManyAnalysisInput[];
    skipDuplicates?: boolean;
  };

  export type DocumentUpsertWithoutAnalysisInput = {
    update: XOR<
      DocumentUpdateWithoutAnalysisInput,
      DocumentUncheckedUpdateWithoutAnalysisInput
    >;
    create: XOR<
      DocumentCreateWithoutAnalysisInput,
      DocumentUncheckedCreateWithoutAnalysisInput
    >;
    where?: DocumentWhereInput;
  };

  export type DocumentUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: DocumentWhereInput;
    data: XOR<
      DocumentUpdateWithoutAnalysisInput,
      DocumentUncheckedUpdateWithoutAnalysisInput
    >;
  };

  export type DocumentUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUpdateManyWithoutDocumentNestedInput;
    ocrResult?: OcrResultUpdateOneWithoutDocumentNestedInput;
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput;
  };

  export type DocumentUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUncheckedUpdateManyWithoutDocumentNestedInput;
    ocrResult?: OcrResultUncheckedUpdateOneWithoutDocumentNestedInput;
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput;
  };

  export type OcrResultUpsertWithoutAnalysisInput = {
    update: XOR<
      OcrResultUpdateWithoutAnalysisInput,
      OcrResultUncheckedUpdateWithoutAnalysisInput
    >;
    create: XOR<
      OcrResultCreateWithoutAnalysisInput,
      OcrResultUncheckedCreateWithoutAnalysisInput
    >;
    where?: OcrResultWhereInput;
  };

  export type OcrResultUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: OcrResultWhereInput;
    data: XOR<
      OcrResultUpdateWithoutAnalysisInput,
      OcrResultUncheckedUpdateWithoutAnalysisInput
    >;
  };

  export type OcrResultUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rawJson?: JsonNullValueInput | InputJsonValue;
    plainText?: StringFieldUpdateOperationsInput | string;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    pages?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: DocumentUpdateOneRequiredWithoutOcrResultNestedInput;
  };

  export type OcrResultUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    rawJson?: JsonNullValueInput | InputJsonValue;
    plainText?: StringFieldUpdateOperationsInput | string;
    language?: NullableStringFieldUpdateOperationsInput | string | null;
    pages?: NullableIntFieldUpdateOperationsInput | number | null;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VitalParamUpsertWithWhereUniqueWithoutAnalysisInput = {
    where: VitalParamWhereUniqueInput;
    update: XOR<
      VitalParamUpdateWithoutAnalysisInput,
      VitalParamUncheckedUpdateWithoutAnalysisInput
    >;
    create: XOR<
      VitalParamCreateWithoutAnalysisInput,
      VitalParamUncheckedCreateWithoutAnalysisInput
    >;
  };

  export type VitalParamUpdateWithWhereUniqueWithoutAnalysisInput = {
    where: VitalParamWhereUniqueInput;
    data: XOR<
      VitalParamUpdateWithoutAnalysisInput,
      VitalParamUncheckedUpdateWithoutAnalysisInput
    >;
  };

  export type VitalParamUpdateManyWithWhereWithoutAnalysisInput = {
    where: VitalParamScalarWhereInput;
    data: XOR<
      VitalParamUpdateManyMutationInput,
      VitalParamUncheckedUpdateManyWithoutAnalysisInput
    >;
  };

  export type VitalParamScalarWhereInput = {
    AND?: VitalParamScalarWhereInput | VitalParamScalarWhereInput[];
    OR?: VitalParamScalarWhereInput[];
    NOT?: VitalParamScalarWhereInput | VitalParamScalarWhereInput[];
    id?: StringFilter<'VitalParam'> | string;
    analysisId?: StringFilter<'VitalParam'> | string;
    name?: StringFilter<'VitalParam'> | string;
    value?: FloatFilter<'VitalParam'> | number;
    unit?: StringNullableFilter<'VitalParam'> | string | null;
    recordedAt?: DateTimeNullableFilter<'VitalParam'> | Date | string | null;
    metadata?: JsonNullableFilter<'VitalParam'>;
    createdAt?: DateTimeFilter<'VitalParam'> | Date | string;
  };

  export type AnalysisCreateWithoutVitalParamInput = {
    id?: string;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document: DocumentCreateNestedOneWithoutAnalysisInput;
    ocrResult?: OcrResultCreateNestedOneWithoutAnalysisInput;
  };

  export type AnalysisUncheckedCreateWithoutVitalParamInput = {
    id?: string;
    documentId: string;
    ocrResultId?: string | null;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AnalysisCreateOrConnectWithoutVitalParamInput = {
    where: AnalysisWhereUniqueInput;
    create: XOR<
      AnalysisCreateWithoutVitalParamInput,
      AnalysisUncheckedCreateWithoutVitalParamInput
    >;
  };

  export type AnalysisUpsertWithoutVitalParamInput = {
    update: XOR<
      AnalysisUpdateWithoutVitalParamInput,
      AnalysisUncheckedUpdateWithoutVitalParamInput
    >;
    create: XOR<
      AnalysisCreateWithoutVitalParamInput,
      AnalysisUncheckedCreateWithoutVitalParamInput
    >;
    where?: AnalysisWhereInput;
  };

  export type AnalysisUpdateToOneWithWhereWithoutVitalParamInput = {
    where?: AnalysisWhereInput;
    data: XOR<
      AnalysisUpdateWithoutVitalParamInput,
      AnalysisUncheckedUpdateWithoutVitalParamInput
    >;
  };

  export type AnalysisUpdateWithoutVitalParamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: DocumentUpdateOneRequiredWithoutAnalysisNestedInput;
    ocrResult?: OcrResultUpdateOneWithoutAnalysisNestedInput;
  };

  export type AnalysisUncheckedUpdateWithoutVitalParamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    ocrResultId?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DocumentCreateWithoutSharesInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobCreateNestedManyWithoutDocumentInput;
    ocrResult?: OcrResultCreateNestedOneWithoutDocumentInput;
    analysis?: AnalysisCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentUncheckedCreateWithoutSharesInput = {
    id?: string;
    userId: string;
    caregiverId?: string | null;
    fileServiceId?: string | null;
    fileUrl: string;
    fileName?: string | null;
    mimeType?: string | null;
    size?: number | null;
    type?: $Enums.DocumentType;
    uploadedAt?: Date | string;
    processed?: boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUncheckedCreateNestedManyWithoutDocumentInput;
    ocrResult?: OcrResultUncheckedCreateNestedOneWithoutDocumentInput;
    analysis?: AnalysisUncheckedCreateNestedManyWithoutDocumentInput;
  };

  export type DocumentCreateOrConnectWithoutSharesInput = {
    where: DocumentWhereUniqueInput;
    create: XOR<
      DocumentCreateWithoutSharesInput,
      DocumentUncheckedCreateWithoutSharesInput
    >;
  };

  export type DocumentUpsertWithoutSharesInput = {
    update: XOR<
      DocumentUpdateWithoutSharesInput,
      DocumentUncheckedUpdateWithoutSharesInput
    >;
    create: XOR<
      DocumentCreateWithoutSharesInput,
      DocumentUncheckedCreateWithoutSharesInput
    >;
    where?: DocumentWhereInput;
  };

  export type DocumentUpdateToOneWithWhereWithoutSharesInput = {
    where?: DocumentWhereInput;
    data: XOR<
      DocumentUpdateWithoutSharesInput,
      DocumentUncheckedUpdateWithoutSharesInput
    >;
  };

  export type DocumentUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUpdateManyWithoutDocumentNestedInput;
    ocrResult?: OcrResultUpdateOneWithoutDocumentNestedInput;
    analysis?: AnalysisUpdateManyWithoutDocumentNestedInput;
  };

  export type DocumentUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    caregiverId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileServiceId?: NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: StringFieldUpdateOperationsInput | string;
    fileName?: NullableStringFieldUpdateOperationsInput | string | null;
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null;
    size?: NullableIntFieldUpdateOperationsInput | number | null;
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    processed?: BoolFieldUpdateOperationsInput | boolean;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    processingJobs?: ProcessingJobUncheckedUpdateManyWithoutDocumentNestedInput;
    ocrResult?: OcrResultUncheckedUpdateOneWithoutDocumentNestedInput;
    analysis?: AnalysisUncheckedUpdateManyWithoutDocumentNestedInput;
  };

  export type ProcessingJobCreateManyDocumentInput = {
    id?: string;
    status?: $Enums.JobStatus;
    attempts?: number;
    error?: string | null;
    processor?: string | null;
    startedAt?: Date | string | null;
    finishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AnalysisCreateManyDocumentInput = {
    id?: string;
    ocrResultId?: string | null;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type DocumentShareCreateManyDocumentInput = {
    id?: string;
    caregiverId: string;
    sent?: boolean;
    sentAt?: Date | string | null;
    viewedAt?: Date | string | null;
    createdAt?: Date | string;
  };

  export type ProcessingJobUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    attempts?: IntFieldUpdateOperationsInput | number;
    error?: NullableStringFieldUpdateOperationsInput | string | null;
    processor?: NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    finishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProcessingJobUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    attempts?: IntFieldUpdateOperationsInput | number;
    error?: NullableStringFieldUpdateOperationsInput | string | null;
    processor?: NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    finishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProcessingJobUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    attempts?: IntFieldUpdateOperationsInput | number;
    error?: NullableStringFieldUpdateOperationsInput | string | null;
    processor?: NullableStringFieldUpdateOperationsInput | string | null;
    startedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    finishedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnalysisUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ocrResult?: OcrResultUpdateOneWithoutAnalysisNestedInput;
    VitalParam?: VitalParamUpdateManyWithoutAnalysisNestedInput;
  };

  export type AnalysisUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ocrResultId?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    VitalParam?: VitalParamUncheckedUpdateManyWithoutAnalysisNestedInput;
  };

  export type AnalysisUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ocrResultId?: NullableStringFieldUpdateOperationsInput | string | null;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DocumentShareUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DocumentShareUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DocumentShareUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    caregiverId?: StringFieldUpdateOperationsInput | string;
    sent?: BoolFieldUpdateOperationsInput | boolean;
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    viewedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnalysisCreateManyOcrResultInput = {
    id?: string;
    documentId: string;
    model: string;
    prompt: string;
    response: JsonNullValueInput | InputJsonValue;
    summary?: string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?: $Enums.AnalysisStatus;
    confidence?: number | null;
    requestedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AnalysisUpdateWithoutOcrResultInput = {
    id?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: DocumentUpdateOneRequiredWithoutAnalysisNestedInput;
    VitalParam?: VitalParamUpdateManyWithoutAnalysisNestedInput;
  };

  export type AnalysisUncheckedUpdateWithoutOcrResultInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    VitalParam?: VitalParamUncheckedUpdateManyWithoutAnalysisNestedInput;
  };

  export type AnalysisUncheckedUpdateManyWithoutOcrResultInput = {
    id?: StringFieldUpdateOperationsInput | string;
    documentId?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    prompt?: StringFieldUpdateOperationsInput | string;
    response?: JsonNullValueInput | InputJsonValue;
    summary?: NullableStringFieldUpdateOperationsInput | string | null;
    insights?: NullableJsonNullValueInput | InputJsonValue;
    vitals?: NullableJsonNullValueInput | InputJsonValue;
    graphs?: NullableJsonNullValueInput | InputJsonValue;
    status?:
      | EnumAnalysisStatusFieldUpdateOperationsInput
      | $Enums.AnalysisStatus;
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null;
    requestedBy?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VitalParamCreateManyAnalysisInput = {
    id?: string;
    name: string;
    value: number;
    unit?: string | null;
    recordedAt?: Date | string | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: Date | string;
  };

  export type VitalParamUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: FloatFieldUpdateOperationsInput | number;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    recordedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VitalParamUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: FloatFieldUpdateOperationsInput | number;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    recordedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VitalParamUncheckedUpdateManyWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    value?: FloatFieldUpdateOperationsInput | number;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    recordedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
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
