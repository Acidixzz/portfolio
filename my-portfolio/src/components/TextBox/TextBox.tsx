import "./TextBox.css";
import { onMount } from "solid-js";

export default function TextBox() {

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
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
    });

    return (
        <div class="text-box border-glow opacity-0 animate-none">

        </div>
    )
}