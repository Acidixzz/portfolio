import { A } from "@solidjs/router";
import NameDisplay from "~/components/NameDisplay/NameDisplay";
import TextBox from "~/components/TextBox/TextBox";

export default function Home() {

  return (
    <main class="text-center mx-auto text-gray-700 main-size">
      <NameDisplay />

      <div class="mx-auto flex flex-col items-center text-center tile-container">
        <TextBox />
        <div class="spacer" />
        <TextBox />
        <div class="spacer" />
        <TextBox />
      </div>
    </main>
  );
}
