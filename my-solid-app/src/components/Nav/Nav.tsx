import { createEffect, Show } from "solid-js";
import { useBrowserLocation } from "../../util/useBrowserLocation";

export default function Nav() {
  const location = useBrowserLocation();

  const active = (path: string) => {
    switch (path) {
      default:
        return path == location() ? "nav-link-active" : "nav-link";
    }
  }
  const isNotHome = () => location() !== "/" ? "nav-in" : "nav-out";
  const isEducation = () => location() == "/education" ? "-uo" : "";

  return (
    <nav class={`${isNotHome()} items-center nav${isEducation()}`}>
      <ul class="flex items-center text-gray-200">
        <li class={`${active("/") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/">Home</a>
        </li>
        <li class={`${active("/education") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/education">Education</a>
        </li>
        {/* <li class={`${active("/experience") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/experience">Experience</a>
        </li> */}
        <li class={`${active("/projects") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
