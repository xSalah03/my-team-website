import { useEffect, useRef } from "react";

export default function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    function useTilt(active) {
        const ref = useRef(null);

        useEffect(() => {
            if (!ref.current || !active) {
                return;
            }

            const state = {
                rect: undefined,
                mouseX: undefined,
                mouseY: undefined
            };

            let el = ref.current;

            const handleMouseMove = (e) => {
                if (!el) {
                    return;
                }
                if (!state.rect) {
                    state.rect = el.getBoundingClientRect();
                }
                state.mouseX = e.clientX;
                state.mouseY = e.clientY;
                const px = (state.mouseX - state.rect.left) / state.rect.width;
                const py = (state.mouseY - state.rect.top) / state.rect.height;

                el.style.setProperty("--px", px);
                el.style.setProperty("--py", py);
            };

            el.addEventListener("mousemove", handleMouseMove);

            return () => {
                el.removeEventListener("mousemove", handleMouseMove);
            };
        }, [active]);

        return ref;
    }
    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            {/*<div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />*/}
            <div
                className="slideContentPosition"
            >
                <iframe className= {active ? "slideVideo" : "slideVideo-active"} src={slide.image} title="Dr. Hassan HARMATALLAH , Pourquoi j'utilise MyTeam .." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="slideContentInner">
                </div>
            </div>
        </div>
    );
}
