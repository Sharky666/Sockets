export interface Drawable {
    position: {
        x: number,
        y: number
    },
    geometry?: {
        shape: string,
        color: string,
        size: {
            width: number,
            height: number
        }
    },
    img?: string,
}
