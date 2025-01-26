import { A } from "@solidjs/router";
import NameDisplay from "~/components/index-visuals/NameDisplay";

export default function Home() {

  return (
    <main class="text-center mx-auto text-gray-700 main-size">
      <NameDisplay />

      <div class="mx-auto flex items-center justify-center text-center tile-container"></div>
    </main>
  );
}
