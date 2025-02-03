import { A } from "@solidjs/router";
import NameDisplay from "~/components/NameDisplay/NameDisplay";
import TextBox from "~/components/TextBox/TextBox";
import "./index.css";

export default function Home() {

  let contentRef: HTMLDivElement | undefined;

  const svgs = import.meta.glob("../../public/logos/*.svg", { eager: true });
  console.log(svgs);

  const scrollToContent = () => {
    if (contentRef) {
      contentRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main class="text-center mx-auto text-gray-700 main-size">
      <NameDisplay />
      <div style={"position: absolute; bottom: 25px; left: 50%; transform: translateX(-50%);"}>
        <button onclick={scrollToContent} class="scroll-link triangle" />
      </div>

      <div ref={contentRef} class="mx-auto flex flex-col items-center text-center tile-container">
        <div class="spacer" />
        <TextBox>
          <h1 class="uppercase header-text" style={"padding-bottom: 0"}>
            About Me
          </h1>
          <div style={"border-width: 0.5px; margin-bottom: 10px; margin-top: 10px; border-color: var(--skyblue); margin-left: 35%; margin-right: 35%; box-shadow: 0 0 10px var(--skyblue-transparent);"} />
          <p style={"color: white; margin: 30px;"}>
            I am Owen Wilson, a passionate software developer pursuing a B.S. in Computer Science, Data Science, and Spatial Data Science at the University of Oregon.
            With experience as a Mobile Software Engineer at Edupoint and projects like Tune Vault, I specialize in React Native, TypeScript, Python, and C#.
            I thrive on solving problems and creating efficient, user-focused applications.
          </p>
        </TextBox>

        <div class="spacer" />

        <TextBox>
          <h1 class="uppercase header-text" style={"padding-bottom: 0; padding-top: 10px"}>
            Skills
          </h1>
          <div style={"border-width: 0.5px; margin-top: 10px; border-color: var(--skyblue); margin-left: 35%; margin-right: 35%; box-shadow: 0 0 10px var(--skyblue-transparent);"} />
          <div class="grid grid-cols-3 gap-10 justify-items-center items-center h-full p-10">
            {Object.entries(svgs).map(([path, module]: [any, any]) => (
              <img class="skill-icon" src={module.default} alt={path.split("/").pop()?.replace(".svg", "")} width={100} height={100} />
            ))}
          </div>
        </TextBox>

        <div class="spacer" />

        <TextBox route="/education">
          <h1 class="uppercase header-text">
            Education
          </h1>
        </TextBox>

        <div class="spacer" />

        <TextBox route="/experience">
          <h1 class="uppercase header-text">
            Experience
          </h1>
        </TextBox>

        <div class="spacer" />

        <TextBox route="/projects">
          <h1 class="uppercase header-text">
            Projects
          </h1>
        </TextBox>
      </div>
    </main>
  );
}
