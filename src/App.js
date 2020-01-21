import React from "react";
import InputArea from "./InputArea";
import OutputTable from "./OutputTable";
import "./style.scss";
import OutputInline from "./OutputInline";

const App = () => {
  const [records, setRecords] = React.useState([]);
  const [hasHeaderRow, setHasHeaderRow] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [error, setError] = React.useState(null);
  const [outputType, setOutputType] = React.useState("inline");
  const [delimiter, setDelimiter] = React.useState("\t");
  const [barcodeType, setBarcodeType] = React.useState("qrcode");

  // TODO: these are not used yet
  const [barcodeWidth, setBarcodeWidth] = React.useState();
  const [margin, setMargin] = React.useState();

  // this only handles delimiter change at the moment, only radio group used here
  const handleRadioChange = e => {
    if (e.target.name === "delimiter")
      setDelimiter(e.target.value === "tab" ? "\t" : ",");

    if (e.target.name === "outputType") setOutputType(e.target.value);

    if (e.target.name === "barcodeType") setBarcodeType(e.target.value);
  };

  return (
    <div className="container">
      <div className="screen-only content">
        <h1 className="title">TSV/CSV to Barcode Table Generator</h1>

        <div className="columns is-desktop">
          <div className="column">
            <h2>Input</h2>

            <p>
              Paste TSV or CSV contents to generate a table with a barcode added
              for the last column. Output is printer-friendly. Works with
              pasting in from a spreadsheet. Last column and barcode data will
              have whitespace padding trimmed. Lines starting with "#" are
              ignored.
            </p>

            <InputArea
              onUpdate={setRecords}
              onError={setError}
              delimiter={delimiter}
            />

            {error && <div className="notification is-danger">{error}</div>}
          </div>
          <div className="column">
            <h2>Options</h2>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={hasHeaderRow}
                onChange={e => setHasHeaderRow(e.target.checked)}
              />
              &nbsp;Contains header row
            </label>

            <div className="control">
              Output type:&nbsp;
              <label className="radio">
                <input
                  type="radio"
                  name="outputType"
                  value="table"
                  checked={outputType === "table"}
                  onChange={handleRadioChange}
                />
                &nbsp;Table
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="outputType"
                  value="inline"
                  checked={outputType === "inline"}
                  onChange={handleRadioChange}
                />
                &nbsp;Inline
              </label>
            </div>

            <div className="control">
              Delimiter:&nbsp;
              <label className="radio">
                <input
                  type="radio"
                  name="delimiter"
                  value="tab"
                  checked={delimiter === "\t"}
                  onChange={handleRadioChange}
                />
                &nbsp;Tab
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="delimiter"
                  value="comma"
                  checked={delimiter === ","}
                  onChange={handleRadioChange}
                />
                &nbsp;Comma
              </label>
            </div>

            {/* <div className="control">
              Barcode type:&nbsp;
              <label className="radio">
                <input
                  type="radio"
                  name="barcodeType"
                  value="qrcode"
                  checked={barcodeType === "qrcode"}
                  onChange={handleRadioChange}
                />
                &nbsp;QR Code
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="barcodeType"
                  value="code128"
                  checked={barcodeType === "code128"}
                  onChange={handleRadioChange}
                  disabled
                />
                &nbsp;Code128
              </label>
            </div> */}

            <div>
              Title (optional):
              <input
                className="input"
                type="text"
                placeholder="Set output title (optional)..."
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>

        <h2>Output</h2>
      </div>

      {title !== "" && <h2 className="title">{title}</h2>}

      {outputType === "table" && (
        <OutputTable
          records={records}
          hasHeaderRow={hasHeaderRow}
          barcodeType={barcodeType}
        />
      )}

      {outputType === "inline" && (
        <OutputInline
          records={records}
          hasHeaderRow={hasHeaderRow}
          barcodeType={barcodeType}
        />
      )}

      <footer className="screen-only">
        &copy; <a href="https://gock.net/">Andy Gock</a> | source @
        <a href="https://github.com/andygock/table-barcode-generator/">
          GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
