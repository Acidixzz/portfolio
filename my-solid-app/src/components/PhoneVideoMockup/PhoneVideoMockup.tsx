import { onMount } from "solid-js";

interface MockupProps {
    path: string;
}

export default function PhoneVideoMockup(props: MockupProps) {

    return (
        <div class="image-uo" style={"--bg-image: url('/projects/phone.png'); transform: scale(1)"} >
            <video autoplay muted loop playsinline preload="auto" class="bg-video">
                <source src={props.path} type="video/webm" />
                Your browser does not support HTML5 video.
            </video>
        </div>
    )
}