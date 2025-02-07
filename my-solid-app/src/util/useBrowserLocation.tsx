import { createSignal, onCleanup } from "solid-js";

const originalPushState = history.pushState;
history.pushState = function (...args) {
    const returnValue = originalPushState.apply(this, args);
    window.dispatchEvent(new Event("pushstate"));
    return returnValue;
};

export function useBrowserLocation() {
    const [path, setPath] = createSignal(window.location.pathname);

    const updatePath = () => setPath(window.location.pathname);

    window.addEventListener("popstate", updatePath);
    window.addEventListener("pushstate", updatePath);

    onCleanup(() => {
        window.removeEventListener("popstate", updatePath);
        window.removeEventListener("pushstate", updatePath);
    });

    return path;
}
