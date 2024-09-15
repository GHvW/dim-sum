
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
}

export {
    IVec2,
    Vec2
}