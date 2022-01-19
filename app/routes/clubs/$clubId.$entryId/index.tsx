import { ActionFunction, json, LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    abc: 123,
  });
};

export default function EntryPage() {
  const { abc } = useLoaderData();

  return <div>entry index: {abc}</div>;
}
