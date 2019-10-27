import { Component, Host, h, Prop } from '@stencil/core';
import "@inspirationlabs/router";

@Component({
  tag: 'il-site-root',
  styleUrl: 'il-site-root.css',
  shadow: true
})
export class IlSiteRoot {

  /**
   * base Url for the site root
   */
  @Prop() baseUrl: string = "https://stencil-router-starter.com";

  render() {
    const loaderProps = {
      baseDomain: this.baseUrl
    }

    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route component="il-site-loader" componentProps={loaderProps} />
        </stencil-route-switch>
      </stencil-router>
    );
  }

}
