"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = exports.down = exports.up = exports.origin = exports.Vec2 = void 0;
class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    clamp(min, max) {
        return new Vec2(Math.max(min.x, Math.min(max.x, this.x)), Math.max(min.y, Math.min(max.y, this.y)));
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
    lerp(towards, amount) {
        return new Vec2(((towards.x - this.x) * amount) + this.x, ((towards.y - this.y) * amount) + this.y);
    }
    limitGivenMagnitude(magnitude, max) {
        if (magnitude > max) {
            // normalize
            return this.divideBy(magnitude).scaleBy(max);
        }
        else {
            return this;
        }
    }
    limit(max) {
        return this.limitGivenMagnitude(this.magnitude(), max);
    }
}
exports.Vec2 = Vec2;
const origin = new Vec2(0, 0);
exports.origin = origin;
const up = new Vec2(0, 1);
exports.up = up;
const down = new Vec2(0, -1);
exports.down = down;
const left = new Vec2(-1, 0);
exports.left = left;
const right = new Vec2(1, 0);
exports.right = right;
