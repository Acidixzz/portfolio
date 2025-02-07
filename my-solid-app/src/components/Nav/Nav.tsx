import { useLocation } from "@solidjs/router";
import "./Nav.css";
import { createEffect, Show } from "solid-js";

export default function Nav() {
  const location = useLocation();

  const active = (path: string) => {
    switch (path) {
      default:
        return path == location.pathname ? "nav-link-active" : "nav-link";
    }
  }
  const isNotHome = () => location.pathname !== "/" ? "nav-in" : "nav-out";
  const isEducation = () => location.pathname == "/education" ? "-uo" : "";

  return (
    <nav class={`${isNotHome()} items-center nav${isEducation()}`}>
      <ul class="flex items-center text-gray-200">
        <li class={`${active("/") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/">Home</a>
        </li>
        <li class={`${active("/education") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/education">Education</a>
        </li>
        <li class={`${active("/experience") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/experience">Experience</a>
        </li>
        <li class={`${active("/projects") + isEducation()} mx-1.5 sm:mx-6`}>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
