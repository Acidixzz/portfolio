import { useBrowserLocation } from "../../util/useBrowserLocation";
import { createEffect, Show } from "solid-js";

export default function Footer() {

    const location = useBrowserLocation();

    const isEducation = () => location() == "/education" ? "-uo" : "";

    return (
        <footer class={`text-center justify-items-center footer${isEducation()}`}>
            <ul class="flex justify-center items-center text-gray-200" style={"margin-top: 3vh"}>
                <li class={` mx-1.5 sm:mx-6`}>
                    <a href="https://www.linkedin.com/in/owen-wilson-a8441827a" target="_blank">
                        <img class={`footer-icon${isEducation()}`} src={"/footer-logos/li.svg"} width={50} height={50} />
                    </a>
                </li>
                <li class={` mx-1.5 sm:mx-6`}>
                    <a href="https://github.com/Acidixzz" target="_blank">
                        <img class={`footer-icon${isEducation()}`} src={"/footer-logos/github.svg"} width={50} height={50} />
                    </a>
                </li>
                <li class={` mx-1.5 sm:mx-6`}>
                    <a href="mailto:owen80wilson@gmail.com">
                        <img class={`footer-icon${isEducation()}`} src={"/footer-logos/mail.svg"} style={`border-width: 1px; border-color: ${isEducation() == '-uo' ? "var(--uo-green)" : "var(--skyblue)"};`} width={50} height={50} />
                    </a>
                </li>
            </ul>
            <div style={"height: 1.5em"} />
            <p style={"width: 100%; font-size: 12px; color: grey; font-weight: 200; background-color: black"}>
                © 2025 Owen Wilson. All Rights Reserved.
                Icons by <a href="https://icons8.com" target="_blank" style={"text-decoration: underline"}>Icons8</a>
            </p>
        </footer>
    );
}
