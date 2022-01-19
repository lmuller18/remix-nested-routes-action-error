import {
  ActionFunction,
  json,
  Link,
  LoaderFunction,
  useLoaderData,
} from "remix";

export const action: ActionFunction = async ({ request }) => {
  return null;
};

export const loader: LoaderFunction = async () => {
  return json({ abc: 123 });
};

export default function Index() {
  const { abc } = useLoaderData();
  return (
    <div>
      Index {abc}
      <p>
        Use button on this page <Link to="/clubs/123/456">Here</Link> to see
        error.
      </p>
      <p>
        Routes that have loaders and actions were reduced down to simple json
        and null returns to show which pages I actually have routes and loaders
        on in my real project.
      </p>
      <p>
        Submitting the form from $clubId.$entryId.tsx breaks the loaders for
        both $clubId.$entryId/index.tsx and $clubId.$entryId/new
      </p>
      <p>
        The intention of these layouts is that /clubs/:clubdId/ and
        /clubs/:clubId/members will share a layout, and /clubs/:clubId/:entryId/
        and /clubs/:clubId/:entryId/new will share their own layout, but won't
        use the layout from the first group.
      </p>
    </div>
  );
}
