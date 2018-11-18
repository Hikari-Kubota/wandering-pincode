import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class KeyForm extends Component {
  render() {
    return (
      <div className="keyFormContainer">
        <p className="pinLabel">PINコードを入力</p>
        <div className="pinPreview">
          <TextField readonly />
        </div>
        <div className="pinKeyForm">
          <table>
              {[0, 1, 2].map(rows => {
                return (
                  <tr>
                  {[0, 1, 2].map(cols => {
                    return (
                      <td>
                        {renderInputButton(1)}
                      </td>
                    );
                  })}
                  </tr>
                );
                })
              }
          </table>
        </div>
      </div>
    );
  }
}

const renderInputButton = (index) => {
  return (
    <div>
      <Button variant="outlined">
        {index}
      </Button>
    </div>
  );
};
