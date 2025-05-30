
interface IVec2 {
    x: number;
    y: number;
}

class Vec2 implements IVec2 {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * @returns The angle of the vector in radians, measured from the positive x-axis.
     */
    angle(): number {
        return Math.atan2(this.y, this.x);
    }

    clamp(min: IVec2, max: IVec2): Vec2 {
        return new Vec2(
            Math.max(min.x, Math.min(max.x, this.x)),
            Math.max(min.y, Math.min(max.y, this.y))
        );
    }

    divideBy(n: number): Vec2 {
        return new Vec2(this.x / n, this.y / n);
    }

    dot(other: IVec2): number {
        return (this.x * other.x) + (this.y * other.y);
    }

    plus(other: IVec2): Vec2 {
        return new Vec2(this.x + other.x, this.y + other.y);
    }

    magnitude(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    minus(other: IVec2): Vec2 {
        return new Vec2(this.x - other.x, this.y - other.y);
    }

    normalize(): Vec2 {
        const mag = this.magnitude();
        return this.divideBy(mag);
    }

    scaleBy(n: number): Vec2 {
        return new Vec2(this.x * n, this.y * n);
    }

    scaleXBy(n: number): Vec2 {
        return new Vec2(this.x * n, this.y);
    }

    scaleYBy(n: number): Vec2 {
        return new Vec2(this.x, this.y * n);
    }

    lerp(towards: IVec2, amount: number): Vec2 {
        return new Vec2(
            ((towards.x - this.x) * amount) + this.x,
            ((towards.y - this.y) * amount) + this.y);
    }

    limitGivenMagnitude(magnitude: number, max: number): Vec2 {
        if (magnitude > max) {
            // normalize
            return this.divideBy(magnitude).scaleBy(max);
        } else {
            return this;
        }
    }

    limit(max: number): Vec2 {
        return this.limitGivenMagnitude(this.magnitude(), max);
    }
}

const origin = new Vec2(0, 0);
const up = new Vec2(0, 1);
const down = new Vec2(0, -1);
const left = new Vec2(-1, 0);
const right = new Vec2(1, 0);


export {
    IVec2,
    Vec2,
    origin,
    up,
    down,
    left,
    right
};
