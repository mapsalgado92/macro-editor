import React from 'react';
import SelectButton from './SelectButton';
import './App.css';
import * as macrosES from './macrosES.js';
import * as macrosPT from './macrosPT.js';
import * as macrosEN from './macrosEN.js';
import * as macrosDE from './macrosDE.js';
import * as macrosFR from './macrosFR.js';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactCountryFlag from "react-country-flag"

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
      case "GB":
        newMacros = {
          general: macrosEN.macrosGen,
          poo: [],
          ppn: macrosES.macrosPpn
        }
        break;
      case "DE":
        newMacros = {
          general: [],
          poo: macrosDE.macrosPoo,
          ppn: macrosES.macrosPpn
        }
        break
      case "FR":
        newMacros = {
          general: [],
          poo: macrosFR.macrosPoo,
          ppn: macrosES.macrosPpn
        }
        break
      default: break;
    }
    this.setState({language: lang, macros: newMacros})
  }

  render () {
    return(
    <div className="App">
      <div id="macro-selector">
        <div id="title-wrapper">Macro Selector & Editor <ReactCountryFlag svg countryCode={this.state.language}/></div>
        <div id="lang-selector">
          <button className="lang-button" onClick={()=>this.handleChangeLanguage("ES")}>ES</button>
          <button className="lang-button" onClick={()=>this.handleChangeLanguage("PT")}>PT</button>
          <button className="lang-button" onClick={()=>this.handleChangeLanguage("GB")}>EN</button>
          <button className="lang-button" onClick={()=>this.handleChangeLanguage("DE")}>DE</button>
          <button className="lang-button" onClick={()=>this.handleChangeLanguage("FR")}>FR</button>
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
    if(macros.length>0){
      return(
        <div id={typeStr} className={"select-type-wrapper"}>
          <h5>{typeStr}</h5>
          <div className={"select-wrapper"}>{macros.map((macro)=> <SelectButton macro={macro} handleSelect={hFunc}/>)}</div>
        </div>
      )
    } else{
      return;
    }
}

console.log("What an awsome editor")

export default App;
