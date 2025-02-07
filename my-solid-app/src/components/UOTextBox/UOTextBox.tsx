import "./UOTextBox.css";
import { JSX, onMount, ParentProps } from "solid-js";

interface TextBoxProps {
    route?: string;
    forTuneVault?: boolean;
    style?: JSX.CSSProperties;
}

export default function TextBox(props: TextBoxProps & ParentProps) {

    onMount(() => {
        const elements = document.querySelectorAll(".uo-text-box");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0", "animate-none");
                        entry.target.classList.add("animate-fadeUp");

                        entry.target.addEventListener(
                            "animationend",
                            () => {
                                entry.target.classList.remove("animate-fadeUp");
                                observer.unobserve(entry.target);
                            },
                            { once: true }
                        );
                    }
                });
            },
            { threshold: 0.25 }
        );

        elements.forEach((el) => observer.observe(el));
    });

    return (
        <div class={`relative ${props.forTuneVault ? 'tv' : ''} uo-text-box opacity-0 animate-none`}>
            <div class="uo-plain" style={props.style}>
                {props.children}
            </div>
        </div>
    )
}