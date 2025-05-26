interface IVec2 {
    x: number;
    y: number;
}
declare class Vec2 implements IVec2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    clamp(min: IVec2, max: IVec2): Vec2;
    divideBy(n: number): Vec2;
    dot(other: IVec2): number;
    plus(other: IVec2): Vec2;
    magnitude(): number;
    minus(other: IVec2): Vec2;
    normalize(): Vec2;
    scaleBy(n: number): Vec2;
    scaleXBy(n: number): Vec2;
    scaleYBy(n: number): Vec2;
    lerp(towards: IVec2, amount: number): Vec2;
    limitGivenMagnitude(magnitude: number, max: number): Vec2;
    limit(max: number): Vec2;
}
declare const origin: Vec2;
declare const up: Vec2;
declare const down: Vec2;
declare const left: Vec2;
declare const right: Vec2;
export { IVec2, Vec2, origin, up, down, left, right };
