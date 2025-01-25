import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();

  const active = (path: string) =>
    path == location.pathname ? "nav-link-active" : "nav-link";

  return (
    <nav>
      <ul class="container flex items-center m-3 text-gray-200">
        <li class={`${active("/")} mx-1.5 sm:mx-6`}>
          <a href="/">Home</a>
        </li>
        <li class={`${active("/projects")} mx-1.5 sm:mx-6`}>
          <a href="/projects">Projects</a>
        </li>
        <li class={`${active("/projects")} mx-1.5 sm:mx-6`}>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
