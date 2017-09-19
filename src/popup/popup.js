import React from 'react';
import ToggleButton from 'react-toggle-button';

import styles from './popup.module.css';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  async componentWillMount() {
    const { settings } = await browser.storage.local.get();
    this.setState({
      active: settings.active,
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <span className={styles.autoDelete}>Auto Delete:</span>
        <ToggleButton
          className={styles.toggleButton}
          value={this.state.active}
          onToggle={async value => {
            this.setState({
              active: !value,
            });

            await browser.storage.local.set({
              settings: {
                active: !value,
              },
            });
          }}
        />
      </div>
    );
  }
}

export default Popup;
