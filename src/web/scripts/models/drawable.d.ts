export interface Drawable {
    children?: Drawable[],
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
    updated: boolean,
    img?: string
}
