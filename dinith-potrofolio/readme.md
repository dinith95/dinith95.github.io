inpired by : https://www.figma.com/design/i8RV7XhDPhOCGFnlb9n8rG/Portfolio-Template--Riead---Community-?node-id=0-1&p=f

## Printing the CV to PDF (Edge)

`src/cv/Dinith_Jayabodhi_CV.html` should be printed as selectable text, not a rasterized image. To get a clean vector PDF in Edge:

1. Open `src/cv/Dinith_Jayabodhi_CV.html` directly in Edge (double-click the file, or drag it into a tab).
2. Press `Ctrl+P`.
3. Set **Destination** to **Save as PDF** (not "Microsoft Print to PDF" from the system print list — use the browser's own in-dialog PDF destination).
4. Click **More settings** and:
   - Uncheck **Headers and footers** (otherwise Edge stamps the date/URL/filename on the page).
   - Leave **Background graphics** on if you want the navy/sidebar accents to print; off is fine too since the layout no longer relies on background fills.
5. Click **Save** and choose the output location.
6. Verify the result: open the saved PDF and try to select a line of text. If it highlights normally, it printed as vector text. If the whole page selects as one image, the PDF was rasterized — reopen the HTML file directly in Edge (not via a wrapper app or "Print" from a file preview pane) and repeat.