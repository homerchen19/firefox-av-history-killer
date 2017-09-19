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
        <span className={styles.title}>🔞 AV History Killer 🔞</span>
        <div className={styles.autoDelete}>
          <span>Auto Delete</span>
          <ToggleButton
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
        <div className={styles.hyperlinks}>
          <a
            href="https://github.com/xxhomey19/firefox-av-history-killer/issues"
            className={styles.hyperlink}
          >
            Feedback
          </a>
          <br />
          <a href="https://t.me/PPAV_bot" className={styles.hyperlink}>
            Try PPAV
          </a>
        </div>
      </div>
    );
  }
}

export default Popup;
