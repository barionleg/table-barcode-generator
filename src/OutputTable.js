import React from "react";
import QRCode from "qrcode";

const OutputTable = ({
  records,
  barcodeType = "qrcode",
  barcodeWidth = 100,
  barcodeMargin = 10,
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
  }, [records, barcodeWidth, barcodeMargin]);

  // display nothing if empty rows
  if (records.length === 0) return null;

  // return HTML <table>
  return (
    <table className="table-custom">
      {hasHeaderRow && (
        <thead>
          <tr>
            {records[0].map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {records.map((row, rowIndex) => {
          if (hasHeaderRow && rowIndex === 0) return null;
          return (
            <tr key={rowIndex}>
              {row.map((column, columnIndex) => (
                <td key={columnIndex} style={{ padding: barcodeMargin }}>
                  {column}
                </td>
              ))}
              {
                <td style={{ padding: barcodeMargin }}>
                  <img src={barcodes[rowIndex]} />
                </td>
              }
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default OutputTable;
