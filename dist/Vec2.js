"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec2 = void 0;
class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    divideBy(n) {
        return new Vec2(this.x / n, this.y / n);
    }
    dot(other) {
        return (this.x * other.x) + (this.y * other.y);
    }
    plus(other) {
        return new Vec2(this.x + other.x, this.y + other.y);
    }
    magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    minus(other) {
        return new Vec2(this.x - other.x, this.y - other.y);
    }
    normalize() {
        const mag = this.magnitude();
        return this.divideBy(mag);
    }
    scaleBy(n) {
        return new Vec2(this.x * n, this.y * n);
    }
    scaleXBy(n) {
        return new Vec2(this.x * n, this.y);
    }
    scaleYBy(n) {
        return new Vec2(this.x, this.y * n);
    }
}
exports.Vec2 = Vec2;
