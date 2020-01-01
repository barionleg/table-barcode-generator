import React from "react";
import QRCode from "qrcode";

const OutputTable = ({
  records,
  barcodeType = "qrcode",
  barcodeWidth = 100,
  barcodeMargin = 0,
  hasHeaderRow = false
}) => {
  const [barcodes, setBarcodes] = React.useState([]);

  // generate qr code for each row's last column, returns array of Promise resolving to an array of data URLs
  const createQRCodes = async records => {
    const barcodeContent = records.map(row => row[row.length - 1]);

    // https://github.com/soldair/node-qrcode
    // https://github.com/soldair/node-qrcode#qr-code-options
    const qrcodes = await Promise.all(
      barcodeContent.map(data =>
        QRCode.toDataURL(data, {
          width: barcodeWidth,
          margin: barcodeMargin
        })
      )
    );
    return qrcodes;
  };

  React.useEffect(() => {
    const createBarcodes = async () => {
      if (barcodeType === "qrcode") {
        const qrcodes = await createQRCodes(records);
        setBarcodes(qrcodes);
      }

      // TODO: other types of barcodes...
    };

    createBarcodes();
  }, [records]);

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
                <td key={columnIndex}>{column}</td>
              ))}
              {
                <td>
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
