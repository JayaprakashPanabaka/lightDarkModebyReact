// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  getButtonText = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const {isDarkMode} = this.state
    const buttonText = this.getButtonText()
    const backgroundMode = isDarkMode ? 'darkMode' : 'lightMode'

    return (
      <div className="bg-container">
        <div className={`main-container ${backgroundMode}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button
            onClick={this.onChangeMode}
            type="button"
            className="buttonMode"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
