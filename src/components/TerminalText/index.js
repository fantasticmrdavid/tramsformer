import React, { PureComponent } from "react";
import Blinker from "components/Blinker";

const LETTER_INTERVAL = 30;
const COMPLETE_DELAY_INTERVAL = 2000;

class TerminalText extends PureComponent {
  constructor(props) {
    super(props);
    const { children } = props;
    this.state = {
      text: <div />,
      index: 0,
      letters: children && typeof children === "string" ? children.split("") : [],
      currentLine: "",
      complete: false,
      paused: false,
    };

    this.boundAddChar = this.addChar.bind(this);
    this.boundPauseTypewriter = this.pauseTypewriter.bind(this);
    this.boundStartTypewriter = this.startTypewriter.bind(this);
    this.boundStartTypewriter();
  }

  componentWillUnmount() {
    this.boundPauseTypewriter();
  }

  addChar() {
    const {
      complete,
      currentLine,
      index,
      letters,
      text,
    } = this.state;

    const {
      onComplete,
    } = this.props;

    if (complete) {
      this.boundPauseTypewriter();
      setTimeout(() => {
        if (onComplete) onComplete();
        return true;
      }, COMPLETE_DELAY_INTERVAL);
    }

    const nextChar = letters[index];

    if (index < letters.length) {
      this.setState({
        text: nextChar === "\n" ? (
          <>
            {text}
            {currentLine}
            <br />
          </>
        ) : text,
        currentLine: nextChar === "\n" ? "" : `${currentLine}${nextChar}`,
        index: index + 1,
      });
    } else {
      this.setState({ complete: true });
    }
  }

  pauseTypewriter() {
    clearInterval(this.typewriter);
    this.setState({ paused: true });
  }

  startTypewriter() {
    const { speed } = this.props;
    const { paused } = this.state;
    this.typewriter = setInterval(() => {
      this.boundAddChar();
    }, speed || LETTER_INTERVAL);
    if (paused) this.setState({ paused: false });
  }

  render() {
    const {
      currentLine,
      text,
    } = this.state;
    const { blinker } = this.props;

    return (
      <>
        {text}
        {currentLine}
        {blinker && <Blinker />}
      </>
    );
  }
}

export default TerminalText;
