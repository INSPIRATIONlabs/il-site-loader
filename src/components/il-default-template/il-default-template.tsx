import { Component, Prop, Host } from '@stencil/core';
import {IlSiteLoader} from '../il-site-loader/il-site-loader';

@Component({
    tag: 'il-default-template',
    styleUrl: 'il-default-template.css',
    shadow: true,
})
export class IlDefaultTemplate {

    @Prop() siteData;
    private siteloader: IlSiteLoader = new IlSiteLoader();

    render() {
      if (this.siteData && this.siteData.data) {
        const output = [];
        this.siteData.data.map(item => {
          output.push(this.siteloader.renderItems(item));
        });
        return (
          <Host>
            {output.map(out => {
              return out;
            })}
          </Host>
        );
      }
    }

    }
}
