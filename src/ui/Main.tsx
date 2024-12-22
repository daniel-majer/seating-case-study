import { Seat } from "../components/Seat";

export const Main = () => {
  return (
    <main className="flex grow flex-col justify-center">
      {/* inner content */}
      <div className="m-auto flex w-full max-w-screen-xl grow items-start gap-3 p-4">
        {/* seating card */}
        <div
          className="grid grow self-stretch rounded-md bg-white p-3 shadow-sm"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
            gridAutoRows: "40px",
          }}
        >
          {/*	seating map */}
          {Array.from({ length: 100 }, (_, i) => (
            <Seat key={i} />
          ))}
        </div>

        {/* event info */}
        <aside className="flex w-full max-w-sm flex-col gap-2 rounded-md bg-white p-3 shadow-sm">
          {/* event header image placeholder */}
          <div className="h-32 rounded-md bg-zinc-100" />
          {/* event name */}
          <h1 className="text-xl font-semibold text-zinc-900">[event-name]</h1>
          {/* event description */}
          <p className="text-sm text-zinc-500">
            [event-description]: Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Aliquam aliquid asperiores beatae deserunt dicta
            dolorem eius eos fuga laborum nisi officia pariatur quidem
            repellendus, reprehenderit sapiente, sed tenetur vel voluptatibus?
          </p>
          {/* add to calendar button */}
          {/*         <Button variant="secondary" disabled>
            Add to calendar
          </Button> */}
        </aside>
      </div>
    </main>
  );
};
