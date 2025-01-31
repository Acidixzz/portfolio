import UOTextBox from "~/components/UOTextBox/UOTextBox";
import "./education.css";

export default function Education() {
    return (
        <main class="text-center mx-auto">
            <div class="mx-auto flex flex-col items-center text-center education-main">
                <p class="university-text" style={"margin-bottom: 10vh;"} data-text="University of Oregon">University of Oregon</p>
                <UOTextBox>
                </UOTextBox>
            </div>
        </main>
    )
}