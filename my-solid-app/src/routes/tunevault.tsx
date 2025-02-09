import PhoneVideoMockup from "../components/PhoneVideoMockup/PhoneVideoMockup";
import TextBox from "../components/TextBox/TextBox";
import UOTextBox from "../components/UOTextBox/UOTextBox";


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
                    Tune Vault Is an MP3 player mobile app with a modern feel on top of a friendly user interface.
                    Just tap on the plus icon in the songs tab to import MP3 files directly from your device!
                </p>
                <p style={"padding: 30px; color: white;"}>
                    After songs have been imported, you have the freedom to edit that song to your heart's content!
                    In the edit song screen, you can chenge the Name, Artist, Picture, and even the background color of the song.
                </p>

                <PhoneVideoMockup path="../../public/projects/color.mp4" />

                <p style={"padding: 30px; color: white;"}>
                    My goal with Tune Vault is to create an easy to use and personalizable experience for everyone. I have always wanted the ability
                    to edit song covers and have each playlist represent who I am with more than just the song itself.
                    Certain songs make me feel a certain way and I have a perfect image to faithfully represent that. With Tune Vault, you
                    can make each playlist or individual song even more personal than other MP3 player apps out there.
                </p>

            </UOTextBox>
        </div>

    )
}