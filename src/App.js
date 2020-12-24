import React from 'react';
import SelectButton from './SelectButton';
import './App.css';
import * as macrosES from './macrosES.js';
import * as macrosPT from './macrosPT.js'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      language: "ES",
      selected: "",
      contents: "",
      macros: {
        general: macrosES.macrosGen,
        poo: macrosES.macrosPoo,
        ppn: macrosES.macrosPpn
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

  handleChangeLanguage = (lang) => {
    let newMacros = {};
    switch (lang) {
      case "ES":
        newMacros = {
          general: macrosES.macrosGen,
          poo: macrosES.macrosPoo,
          ppn: macrosES.macrosPpn};
          break;
      case "PT":
        newMacros = {
          general: macrosPT.macrosGen,
          poo: macrosPT.macrosPoo,
          ppn: macrosES.macrosPpn
        };
        break;
      case "EN":
        newMacros = {
          general: [],
          poo: [],
          ppn:macrosES.macrosPpn
        }
      default: break;
    }
    this.setState({language: lang, macros: newMacros})
  }

  render () {
    return(
    <div className="App">
      <div id="macro-selector">
        <div id="title-wrapper">Macro Selector{" - " + this.state.language}</div>
        <div id="lang-selector">
          <button className="lang-button" onClick={()=>this.handleChangeLanguage("ES")}>ES</button>
          <button className="lang-button" onClick={()=>this.handleChangeLanguage("PT")}>PT</button>
          <button className="lang-button" onClick={()=>this.handleChangeLanguage("EN")}>EN</button>
        </div>
        {renderMacros("General", this.state.macros.general, this.handleSelect)}
        {renderMacros("Proof of Ownership", this.state.macros.poo, this.handleSelect)}
        {renderMacros("PPN Modules", this.state.macros.ppn, this.handleSelect)}
      </div>
      <div id="viewer-editor">
        <div><h5>Macro Viewer</h5></div>
        <textarea id="macro-viewer" onChange={this.handleEditViewer} value={this.state.selected} />
        <CopyToClipboard id="copy-viewer" className="copy-button" text={this.state.selected}><button>Copy Macro Viewer</button></CopyToClipboard>
        <h5 id="title">E-mail Editor</h5>
        <textarea id="editor" onChange={this.handleEditEditor} placeholder="Compose your e-mail here..."/>
        <CopyToClipboard id="copy-editor" className="copy-button" text={this.state.contents}><button>Copy E-mail Editor</button></CopyToClipboard>
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
