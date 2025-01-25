import { createSignal, onMount } from "solid-js";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = createSignal(true);

    onMount(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setIsDark(storedTheme === "dark");
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
    });

    const toggleTheme = () => {
        const newTheme = isDark() ? "light" : "dark";
        setIsDark(newTheme === "dark");

        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            class="
          ml-4 px-3 py-2 
          bg-white dark:bg-gray-700 
          text-gray-900 dark:text-gray-200 
          rounded 
          hover:bg-gray-200 dark:hover:bg-gray-600
          transition
        "
            onClick={toggleTheme}
        >
            {isDark() ? "Light Mode" : "Dark Mode"}
        </button>
    );
}
