
import { describe, expect, test } from 'vitest';
import { Vec2 } from "../src/vec2";

describe("given a 2D vector", () => {

    describe("with x = 10 and y = 20", () => {

        const v = new Vec2(10, 20);

        test("when magnitude is calculated", () => {
            const result = v.magnitude();
            expect(result).toBeCloseTo(22.3606);
        });

        test("when a vector with x = 5 and y = 3 is added", () => {
            const result = v.plus(new Vec2(5, 3));
            expect(result).toEqual(new Vec2(15, 23));
        });

        test("when a vector with x = 2 and y = 3 is subtracted", () => {
            const result = v.minus(new Vec2(2, 3));
            expect(result).toEqual(new Vec2(8, 17));
        });

        test("when scaled by 100", () => {
            const result = v.scaleBy(100);
            expect(result).toEqual(new Vec2(1000, 2000));
        });

        test("when normalized", () => {
            const result = v.normalize();
            expect(result.x).toBeCloseTo(0.4472);
            expect(result.y).toBeCloseTo(0.8944);
        });

        describe("when clamped", () => {

            test("with max as (0, 0)", () => {
                const result = v.clamp(new Vec2(-10, -10), new Vec2(0, 0));
                expect(result).toEqual(new Vec2(0, 0));
            });

            test("with max as (100, 100)", () => {
                const result = v.clamp(new Vec2(0, 0), new Vec2(100, 100));
                expect(result).toEqual(new Vec2(10, 20));
            });

            test("with max as (5, 5)", () => {
                const result = v.clamp(new Vec2(0, 0), new Vec2(5, 5));
                expect(result).toEqual(new Vec2(5, 5));
            });

            test("with min as (15, 25)", () => {
                const result = v.clamp(new Vec2(15, 25), new Vec2(100, 100));
                expect(result).toEqual(new Vec2(15, 25));
            });

            test("with min as (0, 0)", () => {
                const result = v.clamp(new Vec2(0, 0), new Vec2(100, 100));
                expect(result).toEqual(new Vec2(10, 20));
            });
        });
    });
});
