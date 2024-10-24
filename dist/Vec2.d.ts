interface IVec2 {
    x: number;
    y: number;
}
declare class Vec2 implements IVec2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    divideBy(n: number): Vec2;
    dot(other: IVec2): number;
    plus(other: IVec2): Vec2;
    magnitude(): number;
    minus(other: IVec2): Vec2;
    normalize(): Vec2;
    scaleBy(n: number): Vec2;
    scaleXBy(n: number): Vec2;
    scaleYBy(n: number): Vec2;
}
export { IVec2, Vec2 };
