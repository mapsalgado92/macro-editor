import React from 'react';
import SelectButton from './SelectButton';
import './App.css';
import { macrosGen, macrosPoo, macrosPpn} from './macros.js';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      language: "ES",
      selected: 'Here you will see your macros',
      contents: "",
      macros: {
        general: macrosGen,
        poo: macrosPoo,
        ppn: macrosPpn
      }
    }
  }

  handleSelect = (macro) => {
    this.setState({selected: macro});
  }

  handleEditEditor = (e) => {
    this.setState({contents: e.target.value})
  }

  handleEditViewer = (e) => {
    this.setState({selected: e.target.value})
  }

  render () {
    return(
    <div className="App">
      <div id="macro-selector">
        <h2>Macros</h2>
        {renderMacros("General", this.state.macros.general, this.handleSelect)}
        {renderMacros("Proof of Ownership", this.state.macros.poo, this.handleSelect)}
        {renderMacros("PPN Modules", this.state.macros.ppn, this.handleSelect)}
      </div>
      <div id="viewer-editor">
        <h5>Macro Viewer</h5>
        <textarea id="macro-viewer" onChange={this.handleEditViewer} value={this.state.selected} />
        <CopyToClipboard id="copy-viewer" text={this.state.selected}><button>Copy to clipboard</button></CopyToClipboard>
        <h5>E-mail Editor</h5>
        <textarea id="editor" onChange={this.handleEditEditor} placeholder="Create your e-mail here..."/>
        <CopyToClipboard id="copy-viewer" text={this.state.contents}><button>Copy to clipboard</button></CopyToClipboard>
      </div>
    </div>
    )
  }
}

const renderMacros = (typeStr, macros, hFunc) => {
  return(
    <div id={typeStr} className={"select-type-wrapper"}>
      <h5>{typeStr}</h5>
      <div className={"select-wrapper"}>{macros.map((macro)=> <SelectButton macro={macro} handleSelect={hFunc}/>)}</div>
    </div>
  )
}

/*const renderSubworkflowBranch = (subworkflow, hFunc, currentId) => {
  return (
    <div>
      {subworkflow.branch.map((branch, index) => <Branch id={"b" + index} condition={branch.condition} targetId={branch.targetId} currentId={currentId} handleBranch={hFunc}/>)}
    </div>
  )
}*/


export default App;