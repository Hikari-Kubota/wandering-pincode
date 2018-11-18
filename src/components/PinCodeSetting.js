import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


export default class PinCodeSetting extends Component {
  render() {
    return (
      <div className="pinCodeSettingContainer">
        { [1, 2, 3, 4].map(idx => renderInputForm(idx)) }
      </div>
    );
  }
}

const renderInputForm = (index) => {
    return (
      <div className="inputForm">
        <ToggleButtonGroup value="left" exclusive>
        <div className="inputFormElement">
          <ToggleButton value="north">
            北
          </ToggleButton>
        </div>
        <div>
          <ToggleButton value="west">
            西
          </ToggleButton>
          <TextField 
            className="numberField"
            placeholder={index} 
            type="number" 
            inputProps={{ min: "1", max: "9", step: "1" }}
            />
          <ToggleButton value="east">
            東
          </ToggleButton>
        </div>
        <div className="inputFormElement">
          <ToggleButton value="south">
            南
          </ToggleButton>
        </div>
        </ToggleButtonGroup>
      </div>
    );
  };

