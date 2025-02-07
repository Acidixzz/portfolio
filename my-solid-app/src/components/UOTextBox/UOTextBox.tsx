import "./UOTextBox.css";
import { onMount, ParentProps } from "solid-js";

interface TextBoxProps {
    route?: string;
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
        <div class="relative uo-text-box opacity-0 animate-none">
            <div class="uo-plain">
                {props.children}
            </div>
        </div>
    )
}