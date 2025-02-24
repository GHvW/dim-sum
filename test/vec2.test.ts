
import { describe, expect, test } from 'vitest';
import { Vec2 } from "../src/Vec2";

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
    });
});
