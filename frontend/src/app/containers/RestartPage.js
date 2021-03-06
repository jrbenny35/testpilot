// @flow

import React from 'react';

import Banner from '../components/Banner';
import LayoutWrapper from '../components/LayoutWrapper';
import View from '../components/View';


type RestartProps = {
  experimentTitle: string,
  hasAddon: any,
  uninstallAddon: Function,
  sendToGA: Function,
  openWindow: Function
}

export default class Restart extends React.Component {
  props: RestartProps

  componentWillMount() {
    this.props.sendToGA('event', {
      eventCategory: 'PostInstall Interactions',
      eventAction: 'view modal',
      eventLabel: 'restart required'
    });
  }

  render() {
    return (
      <View spaceBetween={true} showNewsletterFooter={false} {...this.props}>
        <Banner>
          <LayoutWrapper flexModifier="row-around-breaking">
            <div className="restart-image">
              <img src="/static/images/restart-graphic@2x.jpg" width="208" height="273"/>
            </div>
            <div className="banner__copy">
              <span data-l10n-id="restartIntroLead">Preflight checklist</span>
              <ol className="banner__subtitle">
                <li data-l10n-id="restartIntroOne">Restart your browser</li>
                <li data-l10n-id="restartIntroTwo">Locate the Test Pilot add-on</li>
                <li data-l10n-id="restartIntroThree">Select your experiments</li>
              </ol>
            </div>
          </LayoutWrapper>
        </Banner>
      </View>
    );
  }
}
