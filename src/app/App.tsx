import { useSignal } from "@preact/signals-react";
import { Button } from "@/components/ui/button";
import { RouteLinks } from "@/router/RouteLinks";
import { RouteContent } from "@/router/RouteContent";

export default function App() {
  const count = useSignal(0);

  return (
    <>
      <div className="flex w-full justify-center mt-4 mb-4">
        <RouteContent />
      </div>

      <div className="flex w-full justify-center mt-4 mb-4">
        <RouteLinks />
      </div>

      <div className="flex w-full justify-center  mt-4 mb-4">
        <Button variant="destructive" onClick={() => (count.value += 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}
