import PhoneVideoMockup from "../components/PhoneVideoMockup/PhoneVideoMockup";
import TextBox from "../components/TextBox/TextBox";
import UOTextBox from "../components/UOTextBox/UOTextBox";
import "./tunevault.css";


export default function TuneVault() {

    return (
        <div class="mx-auto flex flex-col items-center text-center main-view">


            <UOTextBox forTuneVault>
                <h1 class="header-text" style={"padding-bottom: 0; padding-top: 10px"}>
                    Tune Vault
                </h1>
                <div style={"border-width: 0.5px; margin: 10px; border-color: var(--skyblue); margin-left: 30%; margin-right: 30%; box-shadow: 0 0 10px var(--skyblue-transparent);"} />
                <div class="image-uo" style={"--bg-image: url('/projects/tune-mock.png'); transform: scale(1)"} />
                <p style={"padding: 30px; color: white;"}>
                    Tune Vault is a modern MP3 player app designed with a sleek look and an intuitive user interface.
                    Importing your favorite MP3 files is effortless—just tap the plus
                    icon in the Songs tab to add music directly from your device! Once
                    imported, you have complete control over customization:
                </p>

                <div class="flex">
                    <PhoneVideoMockup path="../../public/projects/color.mp4" />
                    <ul class="text-left spaced-list" style={"color: white; width: 100%; margin-top: 20px"}>
                        <li>● Rename the song</li>
                        <li>● Update the artist</li>
                        <li>● Change the cover image</li>
                        <li>● Personalize the background color</li>
                    </ul>
                </div>

                <p style={"padding: 30px; color: white;"}>
                    I designed Tune Vault to provide a seamless and deeply personal music experience.
                    I've always wanted a way to connect a picture with a song that holds special
                    meaning—whether it's tied to a cherished memory or evokes a powerful emotion.
                    With Tune Vault, you can do just that. By linking images to individual songs
                    or playlists, you can create a listening experience that feels more personal
                    and immersive than any other MP3 player app.
                </p>

            </UOTextBox>
        </div>

    )
}