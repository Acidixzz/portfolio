import UOTextBox from "~/components/UOTextBox/UOTextBox";
import "./education.css";

export default function Education() {
    return (
        <main class="text-center mx-auto main-size">
            <div class="mx-auto flex flex-col items-center text-center tile-container">
                <p class="university-text" style={"margin-bottom: 10vh;"} data-text="University of Oregon">University of Oregon</p>
                <UOTextBox>
                </UOTextBox>
            </div>
        </main>
    )
}