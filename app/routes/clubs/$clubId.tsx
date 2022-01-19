import { json, LoaderFunction, Outlet, useLoaderData } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    abc: 123,
  });
};

export default function ClubLayout() {
  const { abc } = useLoaderData();
  return (
    <div>
      Club layout {abc}
      <Outlet />
    </div>
  );
}
