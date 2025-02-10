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
  const isNotHome = () => location() !== "/portfolio/" ? "nav-in" : "nav-out";
  const isEducation = () => location() == "/portfolio/education" ? "-uo" : "";

  return (
    <nav class={`${isNotHome()} items-center nav${isEducation()}`}>
      <ul class="flex items-center text-gray-200">
        <li class={`${active("/portfolio") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/portfolio/">Home</a>
        </li>
        <li class={`${active("/portfolio/education") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/portfolio/education">Education</a>
        </li>
        {/* <li class={`${active("/portfolio/experience") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/portfolio/experience">Experience</a>
        </li> */}
        <li class={`${active("/portfolio/projects") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/portfolio/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
