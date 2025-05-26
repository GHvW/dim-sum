"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const vec2_1 = require("../src/vec2");
(0, vitest_1.describe)("given a 2D vector", () => {
    (0, vitest_1.describe)("with x = 10 and y = 20", () => {
        const v = new vec2_1.Vec2(10, 20);
        (0, vitest_1.test)("when magnitude is calculated", () => {
            const result = v.magnitude();
            (0, vitest_1.expect)(result).toBeCloseTo(22.3606);
        });
        (0, vitest_1.test)("when a vector with x = 5 and y = 3 is added", () => {
            const result = v.plus(new vec2_1.Vec2(5, 3));
            (0, vitest_1.expect)(result).toEqual(new vec2_1.Vec2(15, 23));
        });
        (0, vitest_1.test)("when a vector with x = 2 and y = 3 is subtracted", () => {
            const result = v.minus(new vec2_1.Vec2(2, 3));
            (0, vitest_1.expect)(result).toEqual(new vec2_1.Vec2(8, 17));
        });
        (0, vitest_1.test)("when scaled by 100", () => {
            const result = v.scaleBy(100);
            (0, vitest_1.expect)(result).toEqual(new vec2_1.Vec2(1000, 2000));
        });
        (0, vitest_1.test)("when normalized", () => {
            const result = v.normalize();
            (0, vitest_1.expect)(result.x).toBeCloseTo(0.4472);
            (0, vitest_1.expect)(result.y).toBeCloseTo(0.8944);
        });
        (0, vitest_1.describe)("when clamped", () => {
            (0, vitest_1.test)("with max as (0, 0)", () => {
                const result = v.clamp(new vec2_1.Vec2(-10, -10), new vec2_1.Vec2(0, 0));
                (0, vitest_1.expect)(result).toEqual(new vec2_1.Vec2(0, 0));
            });
            (0, vitest_1.test)("with max as (100, 100)", () => {
                const result = v.clamp(new vec2_1.Vec2(0, 0), new vec2_1.Vec2(100, 100));
                (0, vitest_1.expect)(result).toEqual(new vec2_1.Vec2(10, 20));
            });
            (0, vitest_1.test)("with max as (5, 5)", () => {
                const result = v.clamp(new vec2_1.Vec2(0, 0), new vec2_1.Vec2(5, 5));
                (0, vitest_1.expect)(result).toEqual(new vec2_1.Vec2(5, 5));
            });
            (0, vitest_1.test)("with min as (15, 25)", () => {
                const result = v.clamp(new vec2_1.Vec2(15, 25), new vec2_1.Vec2(100, 100));
                (0, vitest_1.expect)(result).toEqual(new vec2_1.Vec2(15, 25));
            });
            (0, vitest_1.test)("with min as (0, 0)", () => {
                const result = v.clamp(new vec2_1.Vec2(0, 0), new vec2_1.Vec2(100, 100));
                (0, vitest_1.expect)(result).toEqual(new vec2_1.Vec2(10, 20));
            });
        });
    });
});
