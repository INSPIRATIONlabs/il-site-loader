import { IlSiteLoader } from "./il-site-loader";

describe("il-site-loader", () => {
  it("should build", () => {
    expect(new IlSiteLoader()).toBeTruthy();
  });
});
