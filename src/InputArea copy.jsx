import React from "react";
import parse from "csv-parse/lib/sync";

const defaultContent = `1	2	3
a	b	c
`;

// https://csv.js.org/parse/api/
const parseInput = data => {
  const records = parse(data, {
    columns: false,
    skip_empty_lines: true,
    delimiter: "\t"
  });
  // console.table(records);
  return records;
};

const InputArea = ({ onUpdate }) => {
  const [value, setValue] = React.useState(defaultContent);

  React.useEffect(() => {
    const records = parseInput(value);
    onUpdate(records);
  }, [value]);

  return (
    <textarea
      className="textarea"
      onChange={e => {
        setValue(e.target.value);
      }}
      value={value}
    />
  );
};

export default InputArea;
