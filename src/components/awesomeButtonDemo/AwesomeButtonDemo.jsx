import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Draggable from 'react-draggable';
import { styles } from '../../constaints';

export default class AwesomeButtonDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0,
      },
      controlledPosition: {
        x: -400,
        y: 200,
      },
    };
  }

  handleDrag = (e, ui) => {
    const { x, y } = ui;
    this.setState({ controlledPosition: { x, y } });
  };

  render() {
    //const { controlledPosition } = this.state;
    return (
      <div className="frame">
        <h1>AwesomeButton</h1>
        <h6>dodatkowo react-draggable</h6>
        <br />
        <div style={styles.DraggableFrame}>
          <Draggable
            //axis="x" // może się poruszać tylko w poziomie
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            bounds={'parent'} // ustawia w obrębie rodzica, jeżeli z rodzicem ma position: relative / absolute
            grid={[2, 2]} // określa o ile może przeskoczyć
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
          >
            <div style={styles.DraggableItem}>
              <div className="handle">Przeciągnij</div>
              <div>Opis przeciąganego elementu...</div>
            </div>
          </Draggable>
        </div>
        <br />
        <AwesomeButton
          type="primary"
          size="large"
          onPress={(next) => console.log({ next })}
        >
          Pierwszy
        </AwesomeButton>
        <AwesomeButton
          type="secondary"
          size="large"
          action={(element) => console.log({ element })}
        >
          Dodatkowy
        </AwesomeButton>
      </div>
    );
  }
}
