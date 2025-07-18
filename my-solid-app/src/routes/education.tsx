import UOTextBox from "../components/UOTextBox/UOTextBox";
import { onMount } from "solid-js";

export default function Education() {

    return (
        <div class="mx-auto flex flex-col items-center text-center main-view">
            <p class="university-text" style={"margin-bottom: 10vh;"} data-text="University of Oregon">University of Oregon</p>
            <UOTextBox>
                <div style={"padding: 30px; padding-bottom: 0;"}>
                    <div class="image-uo" style={"border-radius: 5px; --bg-image: url('/portfolio/uo.jpg');"}></div>
                </div>
                <h1 style={"padding: 30px; color: white;"}>
                    Since childhood, I have always dreamed of pursuing my education at the University of Oregon.
                    As I grew older, that dream became a reality. I am currently majoring in Computer Science,
                    Data Science, and Spatial Data Science and Technologies, and I am set to graduate in June 2026.
                </h1>
            </UOTextBox>
            <div style={"height: 4rem"} />
        </div>
    )
}