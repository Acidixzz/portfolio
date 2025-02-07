import { createSignal, onMount } from "solid-js";
import TextBox from "../components/TextBox/TextBox";
import "./projects.css"

export default function Projects() {

    const [isMobile, setIsMobile] = createSignal();

    onMount(() => {
        setIsMobile(window.innerWidth <= 750);

        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth <= 750);
        });
    });

    return (
        <div class="mx-auto flex flex-col items-center text-center main-view">

            <TextBox>
                <h1 class="uppercase header-text" style={"padding-bottom: 0; padding-top: 10px"}>
                    Projects
                </h1>
                <div style={"border-width: 0.5px; margin-top: 10px; border-color: var(--skyblue); margin-left: 35%; margin-right: 35%; box-shadow: 0 0 10px var(--skyblue-transparent);"} />
                <p style={"padding: 30px; padding-top: 20px; color: white;"}>
                    Here are a few projects I've worked on since I started learning about software development.
                </p>
            </TextBox>

            <div class="spacer" />

            <div class={`grid ${isMobile() ? "grid-cols-1" : "grid-cols-2"} gap-10 justify-between h-full grid-width`}>
                <TextBox isButton route={"https://github.com/Acidixzz/Meteorite-Knight"} style={{ width: '100%' }}>
                    <div class="image-uo" style={"--bg-image: url('/projects/knight.png'); transform: scale(1.05)"} />
                    <div class=" text-left">
                        <p class="uppercase p-6" style={"font-size: 25px; font-weight: 700; color: white; padding-bottom: 0;"}>
                            Meteorite Knight
                        </p>
                        <p class="p-6" style={"font-size: 14px; color: white; padding-top: 3px;"}>
                            2D wave survival game made in python
                        </p>
                    </div>
                </TextBox>

                <TextBox route="/tunevault" style={{ width: '100%' }}>
                    <div class="image-uo" style={"--bg-image: url('/projects/TuneVault.png'); transform: scale(1.05)"} />
                    <div class=" text-left">
                        <p class="uppercase p-6" style={"font-size: 25px; font-weight: 700; color: white; padding-bottom: 0;"}>
                            Tune Vault
                        </p>
                        <p class="p-6" style={"font-size: 14px; color: white; padding-top: 3px;"}>
                            Personalizable mp3 player mobile app
                        </p>
                    </div>
                </TextBox>

            </div>

            <div class="spacer" />

            <TextBox>
                <h1 class="uppercase header-text" style={"padding-bottom: 0; padding-top: 10px"}>
                    This Website
                </h1>
                <div style={"border-width: 0.5px; margin-top: 10px; border-color: var(--skyblue); margin-left: 35%; margin-right: 35%; box-shadow: 0 0 10px var(--skyblue-transparent);"} />
                <p style={"padding: 30px; padding-top: 20px; color: white;"}>
                    I designed this site in just over a week using Solid.js and Tailwind CSS. While building my portfolio,
                    I embraced the challenge of learning a new frontend framework, which allowed me to deepen my understanding of modern web development.
                    This project also gave me the opportunity to refine my CSS skills while enjoying the creative process.
                </p>
            </TextBox>
        </div>
    )
}