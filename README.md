## Conduit API

Welcome to the Conduit application REST Api.

In this repo I'll be developing the REST Implementation of the [Real World App](https://www.realworld.how/) backend.

## Motivation

As a Junior dev, it was always hard for me to find good ways to actually practice my coding skills in "realistic" situations.

So Conduit seems to be the perfect fit for my practice sessions, its a simple, yet robust idea, that touches in every imporant aspect of developing a production ready application, like testing, having a good archicture, choosing the right libraries, and so on.

I also wanted a brand new ground to test some new techs that I like a lot such as [Zod](https://github.com/colinhacks/zod) for schema validations and type inferences, [Drizzle](https://github.com/drizzle-team/drizzle-orm) as an ORM, and [Vitest](https://github.com/vitest-dev/vitest) for testing.

## Specs

As refering to the [Official Docs](https://www.realworld.how/docs/implementation-creation/features) these are the basic steps to the API.

### Configs:

-   Setup a HTTP server
-   Setup the routing / API entities
-   Setup a docker file for the database

#### Implementations:

-   Authenticate users via JWT
-   CRU- Users (No deleting)
-   CRUD Articles
-   CR-D Comments on articles (No editing)
-   Get all articles paginated
-   Users must be able to favorite an Article
-   Users must be able to follow other Users

#### Architecture and technologies

I'll try to use 100% functional programming in this project, with a basic API folder with another one inside for each API entity, containing all its functionalities and tests. As much straight foward as I can, to improve readability.

My tech stack of choice is the following:

-   NodeJS + Typescript (Programming language + Type system)
-   Express (http server)
-   Zod (type inference and schema validation)
-   Drizzle ORM (Database management)
-   Vitest (Testing)
-   Postgres (Database engine)

## Milestones

I'll be updating this section everytime I complete a major spec of the API, with a date and some comentary, this can be useful for future reading and also guiding other people on possible struggles they may find when trying to do the same as me.
