import { json, LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    abc: 123,
  });
};

export default function ClubPage() {
  const { abc } = useLoaderData();

  return <div>Club Index: {abc}</div>;
}
