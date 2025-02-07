import TextBox from "../components/TextBox/TextBox";
import UOTextBox from "../components/UOTextBox/UOTextBox";


export default function TuneVault() {

    return (
        <div class="mx-auto flex flex-col items-center text-center main-view">
            <UOTextBox forTuneVault>
                <div class="image-uo" style={"--bg-image: url('/projects/tune-mock.png'); transform: scale(1)"} />
            </UOTextBox>
        </div>

    )
}