import React from "react";
import { parse } from "csv-parse";

const defaultContent = `1	dry flyer rule
2	come rebel wrist
3	lion duct cone`;

const InputArea = ({ onUpdate, delimiter = "\t", onError = () => {} }) => {
  const [value, setValue] = React.useState(defaultContent);
  const ref = React.useRef();

  // https://csv.js.org/parse/api/
  const parseInput = async (data) => {
    parse(
      data,
      {
        columns: false,
        skip_empty_lines: true,
        delimiter,
        comment: "#",
        trim: true,
        skip_lines_with_Error: true,
      },
      (err, output) => {
        if (err) {
          // usually some sort of parsing error, e.g incorrect number of delimited fields
          onError(err.message);
          return;
        }

        onError(null);
        onUpdate(output);
      }
    );
  };

  React.useEffect(() => {
    parseInput(value);
  }, [value, delimiter]);

  // focus on the textarea on each load
  React.useEffect(() => {
    ref.current.focus();
  }, []);

  // when focusing, select all in textarea
  const handleOnFocus = (e) => e.target.select();

  return (
    <textarea
      ref={ref}
      className="textarea is-family-monospace"
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onFocus={handleOnFocus}
      value={value}
    />
  );
};

export default InputArea;
