import { signal } from "@preact/signals-react";
import { Button } from "@/components/ui/button";
import { RouteLinks } from "@/router/RouteLinks";
import { RouteContent } from "@/router/RouteContent";

const count = signal(0);

function handleClick() {
  count.value += 1;

  window.api.writeText(`${count.value} - 123`);
}

export default function App() {
  return (
    <>
      <div className="flex w-full justify-center mt-4 mb-4">
        <RouteContent />
      </div>

      <div className="flex w-full justify-center mt-4 mb-4">
        <RouteLinks />
      </div>

      <div className="flex w-full justify-center  mt-4 mb-4">
        <Button variant="destructive" onClick={handleClick}>
          count is {count}
        </Button>
      </div>
    </>
  );
}
