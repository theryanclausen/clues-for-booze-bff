import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DecodedString: string;
};

export type Drink = {
   __typename?: 'Drink';
  id?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
  instructions?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export enum Difficulty {
  Easy = 'easy',
  Hard = 'hard',
  Medium = 'medium'
}

export enum QuestionType {
  Boolean = 'boolean',
  Multiple = 'multiple'
}

export type Category = {
   __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Question = {
   __typename?: 'Question';
  category: Scalars['String'];
  correctAnswer: Scalars['DecodedString'];
  difficulty: Difficulty;
  incorrectAnswers?: Maybe<Array<Scalars['DecodedString']>>;
  question: Scalars['DecodedString'];
  questionType: QuestionType;
};

export type QuestionPayload = {
   __typename?: 'QuestionPayload';
  question?: Maybe<Question>;
  responseCode: Scalars['Int'];
};


export type Query = {
   __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Category>>>;
  drink?: Maybe<Drink>;
  question?: Maybe<QuestionPayload>;
};


export type QueryQuestionArgs = {
  category?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Drink: ResolverTypeWrapper<Drink>,
  Difficulty: Difficulty,
  QuestionType: QuestionType,
  Category: ResolverTypeWrapper<Category>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Question: ResolverTypeWrapper<Question>,
  QuestionPayload: ResolverTypeWrapper<QuestionPayload>,
  DecodedString: ResolverTypeWrapper<Scalars['DecodedString']>,
  Query: ResolverTypeWrapper<{}>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Drink: Drink,
  Difficulty: Difficulty,
  QuestionType: QuestionType,
  Category: Category,
  Int: Scalars['Int'],
  Question: Question,
  QuestionPayload: QuestionPayload,
  DecodedString: Scalars['DecodedString'],
  Query: {},
};

export type DrinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Drink'] = ResolversParentTypes['Drink']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  ingredients?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  instructions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  correctAnswer?: Resolver<ResolversTypes['DecodedString'], ParentType, ContextType>,
  difficulty?: Resolver<ResolversTypes['Difficulty'], ParentType, ContextType>,
  incorrectAnswers?: Resolver<Maybe<Array<ResolversTypes['DecodedString']>>, ParentType, ContextType>,
  question?: Resolver<ResolversTypes['DecodedString'], ParentType, ContextType>,
  questionType?: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QuestionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionPayload'] = ResolversParentTypes['QuestionPayload']> = {
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>,
  responseCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface DecodedStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DecodedString'], any> {
  name: 'DecodedString'
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>,
  drink?: Resolver<Maybe<ResolversTypes['Drink']>, ParentType, ContextType>,
  question?: Resolver<Maybe<ResolversTypes['QuestionPayload']>, ParentType, ContextType, RequireFields<QueryQuestionArgs, never>>,
};

export type Resolvers<ContextType = any> = {
  Drink?: DrinkResolvers<ContextType>,
  Category?: CategoryResolvers<ContextType>,
  Question?: QuestionResolvers<ContextType>,
  QuestionPayload?: QuestionPayloadResolvers<ContextType>,
  DecodedString?: GraphQLScalarType,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
