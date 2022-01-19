import {
  ActionFunction,
  Form,
  json,
  LoaderFunction,
  Outlet,
  redirect,
  useLoaderData,
} from "remix";

export const action: ActionFunction = async ({ params, request }) => {
  // does not work
  return null;

  // does not work
  // const resultOfAction = await doActionStuff()
  // return resultOfAction

  // works
  // return redirect("/clubs/" + params.clubId + "/" + params.entryId);
};

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    abc: 123,
  });
};

export default function EntryLayout() {
  const { abc } = useLoaderData();
  return (
    <div>
      Entry Layout {abc}
      <Form method="post" replace={true}>
        <input type="hidden" name="entryId" value="456" />
        <button type="submit">Mark Incomplete</button>
      </Form>
      <Outlet />
    </div>
  );
}
