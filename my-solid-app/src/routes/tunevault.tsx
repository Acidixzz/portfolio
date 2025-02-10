import PhoneVideoMockup from "../components/PhoneVideoMockup/PhoneVideoMockup";
import TextBox from "../components/TextBox/TextBox";
import UOTextBox from "../components/UOTextBox/UOTextBox";
import "./tunevault.css";


export default function TuneVault() {

    return (
        <div class="mx-auto flex flex-col items-center text-left main-view">


            <UOTextBox forTuneVault>
                <p style={"padding: 30px; color: white; font-weight: 200;"}>
                    **Still in development
                </p>
                <h1 class="header-text text-center" style={"padding-bottom: 0; padding-top: 10px;"}>
                    Tune Vault
                </h1>
                <div style={"border-width: 0.5px; margin: 10px; border-color: var(--skyblue); margin-left: 30%; margin-right: 30%; box-shadow: 0 0 10px var(--skyblue-transparent);"} />
                <div class="image-uo" style={"--bg-image: url('/portfolio/projects/tune-mock.png'); transform: scale(1)"} />
                <p style={"padding: 30px; color: white; font-weight: 200;"}>
                    Tune Vault is a modern MP3 player app designed with a sleek look and an intuitive user interface.
                    Importing your favorite MP3 files is effortless. Just tap the plus
                    icon in the Songs tab to add music directly from your device! Once
                    imported, you have complete control over customization:
                </p>

                <div class="flex">
                    <PhoneVideoMockup path="/portfolio/projects/color" />
                    <ul class="text-left spaced-list" style={"color: white; width: 100%; margin-top: 20px"}>
                        <li>● Rename the song</li>
                        <li>● Update the artist</li>
                        <li>● Change the cover image</li>
                        <li>● Personalize the background color</li>
                    </ul>
                </div>

                <p style={"padding: 30px; color: white; font-weight: 200;"}>
                    Unlike any other MP3 player app, Tune Vault introduces features that enhance both convenience and personalization.
                    I've designed it so users can tailor their experience by showing or hiding specific controls on the footer—such as shuffle,
                    previous, play, and next—giving them complete control over their interface. This level of customization ensures that the player
                    adapts to the user's preferences, making the listening experience more intuitive and personal.
                </p>

                <PhoneVideoMockup path="/portfolio/projects/settings" />

                <p style={"padding: 30px; color: white; font-weight: 200;"}>
                    I designed Tune Vault to offer a seamless and highly personal music experience.
                    Frustrated with the limitations of other music player apps, I set out to create a
                    user experience that aligns with what I and many others truly want.
                </p>


            </UOTextBox>
        </div>

    )
}