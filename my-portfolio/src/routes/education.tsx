import UOTextBox from "~/components/UOTextBox/UOTextBox";
import "./education.css";

export default function Education() {
    return (
        <main class="text-center mx-auto main-size">
        <div class="mx-auto flex flex-col items-center text-center tile-container">
            <p class="university-text" style={"margin-bottom: 10vh;"}>University of Oregon</p>
            <UOTextBox>
                <h1 class="uppercase header-text">
                Computer Science
            </h1>
            </UOTextBox>
        </div>
        </main>
    )
}