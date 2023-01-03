import { capitalize, dogCapitalize, getSubBreedValueRender } from "../src/utils";

describe(`the utilities of the application`, () => {
  test(`The capitalize function puts things roughly into title case`, () => {
    expect(capitalize("tEst stRiNg")).toBe("Test String");
    expect(capitalize("hello")).toBe("Hello");
  });

  test(`The dogCapitalize function properly handles multi-word dog breeds`, () => {
    expect(dogCapitalize("cattledog")).toBe("Cattle Dog");
  });

  test(`The getSubBreedValueRender function properly filters inputs`, () => {
    expect(getSubBreedValueRender("", "pomeranian")).toBe("");
    expect(getSubBreedValueRender("shihtzu", "")).toBe("");
    expect(getSubBreedValueRender("bulldog", "american")).toBe("American");
  });
});
