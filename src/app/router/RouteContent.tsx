import { HomePage } from "@/home/HomePage";
import { UserListPage } from "@/user/UserListPage";
import { UserPage } from "@/user/UserPage";

import { useRoute } from "./routes";

export function RouteContent() {
  const route = useRoute();

  return (
    <>
      {route.name === "home" && <HomePage />}
      {route.name === "users" && <UserListPage route={route} />}
      {route.name === "user" && <UserPage route={route} />}
      {route.name === false && "Not Found"}
    </>
  );
}
