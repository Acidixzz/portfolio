import { A } from "@solidjs/router";
import Tilt from "~/components/Tilt";

export default function Home() {

  return (
    <main class="text-center mx-auto text-gray-700 p-4 main-size">
      <Tilt
        options={{
          max: 30,
          speed: 1000,
          reverse: true,
          transition: true,
          gyroscope: true,
          gyroscopeMinAngleX: -30,
          gyroscopeMaxAngleX: 30,
          gyroscopeMinAngleY: -30,
          gyroscopeMaxAngleY: 30,
          "full-page-listening": true
        }}
        class="mx-auto tilt-size flex items-center justify-center text-center"
      >
        <h1 class="uppercase name-text">Owen Wilson</h1>
      </Tilt>
      <div class="graph-container">
        <div class="blur-line"></div>
        <div class="graph"></div>
      </div>
      <div class="blur-overlay"></div>
    </main>
  );
}
