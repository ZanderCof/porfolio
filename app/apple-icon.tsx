import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Stesso monogramma di icon.svg, a tutto quadro: iOS arrotonda gli angoli da solo
export default function AppleIcon() {
    return new ImageResponse(
        (
            <div style={{ display: "flex", width: "100%", height: "100%", background: "#f54900" }}>
                <svg width="180" height="180" viewBox="0 0 32 32">
                    <g fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 23 9.5 9l5 14M6.6 18h5.8" />
                        <path d="M26.7 11.5a6.5 6.5 0 1 0 0 9" />
                    </g>
                </svg>
            </div>
        ),
        size,
    );
}
