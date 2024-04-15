import { createRouter, defineRoute, param, Route } from "type-route";

export const { RouteProvider, useRoute, routes } = createRouter({
  home: defineRoute("/"),

  users: defineRoute(
    {
      page: param.query.optional.number
    },
    () => "/users"
  ),

  user: defineRoute(
    {
      userId: param.path.string
    },
    (p) => `/user/${p.userId}`
  )
});

export type HomeRoute = Route<typeof routes.home>;

export type UsersRoute = Route<typeof routes.users>;

export type UserRoute = Route<typeof routes.user>;
