import React from "react";
import QRCode from "qrcode";

const OutputInline = ({
  records,
  barcodeType = "qrcode",
  barcodeWidth = 100,
  barcodeMargin = 0.75,
  hasHeaderRow = false
}) => {
  const [barcodes, setBarcodes] = React.useState([]);

  // generate qr code for each row's last column, returns array of Promise resolving to an array of data URLs
  const createQRCodes = async barcodeContent => {
    // https://github.com/soldair/node-qrcode
    // https://github.com/soldair/node-qrcode#qr-code-options
    const qrcodes = await Promise.all(
      barcodeContent.map(data =>
        QRCode.toDataURL(data, {
          width: barcodeWidth,
          margin: 0
        })
      )
    );
    return qrcodes;
  };

  React.useEffect(() => {
    const createBarcodes = async () => {
      // get array of strings, to convert to barcodes
      const barcodeContent = records.map(row => row[row.length - 1]);

      if (barcodeType === "qrcode") {
        // create array of base64 encodings of barcodes
        const qrcodes = await createQRCodes(barcodeContent);

        // update state
        setBarcodes(qrcodes);
      }
    };

    createBarcodes();
  }, [records, barcodeMargin, barcodeWidth]);

  return (
    <div className="output-inline">
      {records.map((row, rowIndex) => {
        if (hasHeaderRow && rowIndex === 0) return null;
        return (
          <div className="row" key={rowIndex} style={{ margin: barcodeMargin }}>
            <div className="barcode">
              <img src={barcodes[rowIndex]} />
            </div>
            <div className="text">{row[row.length - 1]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default OutputInline;
