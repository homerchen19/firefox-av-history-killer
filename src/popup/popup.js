import React from 'react';
import ToggleButton from 'react-toggle-button';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  async componentWillMount() {
    const { settings } = await browser.storage.local.get();
    this.setState({
      active: settings.active
    });
  }

	render() {
		return (
      <ToggleButton
        value={ this.state.active }
        onToggle={value => {
          this.setState({
            active: !value,
          })
        }} />
    );
	}
}

export default Popup;
