export default function CatchAllExample({
  params,
}: {
  params: { sys: string[] };
}) {
  if (params?.sys?.length == 2) {
    return (
      <h1>
        Viewing Docs for params {params?.sys[0]} and concept of {params?.sys[1]}
      </h1>
    );
  } else if (params?.sys?.length == 1) {
    return <h1>Viewing Docs for params {params?.sys[0]}</h1>;
  } else {
    return (
      <div>
        <h1>Catch all exmaple</h1>
      </div>
    );
  }
}
