import { LangData } from './../../types/LangData';
import * as fs from 'fs';
import { newSpecPage } from "@stencil/core/testing";
import { IlSiteLoader } from "./il-site-loader";
import { HrefLang } from "../../types/HrefLang";

describe("il-site-loader", () => {
  describe("render il-site-loader without data", () => {
    let page;
    beforeEach(async () => {
      page = await newSpecPage({
        components: [IlSiteLoader],
        html: `<il-default-template></il-default-template>`,
        supportsShadowDom: false,
      });
    });

    it("should build", () => {
      expect(new IlSiteLoader()).toBeTruthy();
    });

    it("should render without shadow dom", async () => {
      expect(page.root.shadowRoot).toBeFalsy();
    });

    it("should return list of hreflangs of type HrefLang", async () => {
      const siteLoader = new IlSiteLoader();

      const mockLanguages = JSON.parse(fs.readFileSync(__dirname + '/__mocks__/languages.json', { encoding: 'utf-8' }));

      const languages: LangData[] = mockLanguages.languages;
      const hreflanglist: HrefLang[] = siteLoader.renderHrefLangs(languages);

      expect(hreflanglist).toBeInstanceOf(Array);

      expect(hreflanglist[0].tag).toBeDefined();
      expect(hreflanglist[0].tag).toEqual("link");
      expect(hreflanglist[0].attributes).toBeDefined();
      expect(hreflanglist[0].attributes.rel).toBeDefined();
      expect(hreflanglist[0].attributes.rel).toEqual("alternate");
      expect(hreflanglist[0].attributes.hreflang).toBeDefined();
      expect(hreflanglist[0].attributes.hreflang).toEqual("x-default");
      expect(hreflanglist[0].attributes.href).toBeDefined();
      expect(hreflanglist[0].attributes.href).toEqual("/");

      expect(hreflanglist[1].tag).toBeDefined();
      expect(hreflanglist[1].tag).toEqual("link");
      expect(hreflanglist[1].attributes).toBeDefined();
      expect(hreflanglist[1].attributes.rel).toBeDefined();
      expect(hreflanglist[1].attributes.rel).toEqual("alternate");
      expect(hreflanglist[1].attributes.hreflang).toBeDefined();
      expect(hreflanglist[1].attributes.hreflang).toEqual("de");
      expect(hreflanglist[1].attributes.href).toBeDefined();
      expect(hreflanglist[1].attributes.href).toEqual("/de");

      expect(hreflanglist[2].tag).toBeDefined();
      expect(hreflanglist[2].tag).toEqual("link");
      expect(hreflanglist[2].attributes).toBeDefined();
      expect(hreflanglist[2].attributes.rel).toBeDefined();
      expect(hreflanglist[2].attributes.rel).toEqual("alternate");
      expect(hreflanglist[2].attributes.hreflang).toBeDefined();
      expect(hreflanglist[2].attributes.hreflang).toEqual("en");
      expect(hreflanglist[2].attributes.href).toBeDefined();
      expect(hreflanglist[2].attributes.href).toEqual("/en");
    });

  });

  describe("render il-site-loader with data", () => {
    it("should build", () => {
      expect(new IlSiteLoader()).toBeTruthy();
    });
  });
});
