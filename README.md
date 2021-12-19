# Table Barcode Generator

Paste TSV or CSV contents to generate a table with a barcode added
for the last column. Output is printer-friendly. Works with
pasting in from a spreadsheet. Last column and barcode data will
have whitespace padding trimmed.

[Live web site](https://gock.net/table-barcode-generator/)

Install [pnpm](https://pnpm.io/)

    npm install -g pnpm

Install dependencies

    pnpm install

Start development server

    pnpm start

Build for production into `dist/`

    pnpm build

If required, use the following Netlify build command

    pnpm build || ( npm install pnpm && pnpm build )
