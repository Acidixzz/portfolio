import "./TextBox.css";
import { onMount, ParentProps } from "solid-js";

interface TextBoxProps {
    isButton?: boolean;
}

export default function TextBox(props: TextBoxProps & ParentProps) {

    onMount(() => {
        const elements = document.querySelectorAll(".text-box");

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

    return props.isButton ?
        (
            <button class="text-box border-glow opacity-0 animate-none">
                {props.children}
            </button>
        )
        :
        (
            <div class="text-box border opacity-0 animate-none">
                {props.children}
            </div>
        )
}