import { Component, Prop, Host, h } from "@stencil/core";
import { IlSiteLoader } from "../il-site-loader/il-site-loader";

@Component({
  tag: "il-default-template",
  styleUrl: "il-default-template.css",
  shadow: true,
})
export class IlDefaultTemplate {
  @Prop() siteData;
  private siteloader: IlSiteLoader = new IlSiteLoader();

  render() {
    const output = [];
    this.siteData && this.siteData.data
      ? this.siteData.data.map(item => {
          output.push(this.siteloader.renderItems(item));
        })
      : null;
    return (
      <Host>
        {output.map(out => {
          return out;
        })}
      </Host>
    );
  }
}
