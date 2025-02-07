import { onMount } from "solid-js";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

type TiltProps = {
    options?: TiltOptions;
    children?: any;
    class?: string;
};

export default function Tilt(props: TiltProps) {
    let tiltRef: HTMLDivElement | undefined;

    onMount(() => {
        if (tiltRef) {
            VanillaTilt.init(tiltRef, {
                ...props.options,
            });
        }
    });

    return (
        <div ref={tiltRef} class={props.class}>
            {props.children}
        </div>
    );
}
