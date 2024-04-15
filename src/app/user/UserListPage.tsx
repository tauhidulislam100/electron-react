import { UsersRoute } from "@/router/routes";

type UserListPageProps = {
  route: UsersRoute;
};

export function UserListPage({ route }: UserListPageProps) {
  return <div>UserList Page: {route.params.page}</div>;
}
