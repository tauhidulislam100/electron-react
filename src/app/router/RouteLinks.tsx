import { buttonVariants } from "@/components/ui/button";

import { routes } from "./routes";

export function RouteLinks() {
  return (
    <>
      <a className={`${buttonVariants({ variant: "default" })} mr-2 ml-2`} {...routes.home().link}>
        Home
      </a>
      <a className={`${buttonVariants({ variant: "secondary" })} mr-2 ml-2`} {...routes.users().link}>
        Users
      </a>
      <a className={`${buttonVariants({ variant: "outline" })} mr-2 ml-2`} {...routes.users({ page: 2 }).link}>
        Users: page 2
      </a>
      <a className={`${buttonVariants({ variant: "ghost" })} mr-2 ml-2`} {...routes.user({ userId: "abc" }).link}>
        User: abc
      </a>
    </>
  );
}
