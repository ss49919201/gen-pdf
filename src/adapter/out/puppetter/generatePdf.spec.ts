import { writeFileSync } from "fs";
import generatePdf from "./generatePdf";

describe("generatePdf", () => {
  it("should generate a pdf", async () => {
    const res = await generatePdf({
      name: "hn.pdf",
    });

    writeFileSync("./temp/output.pdf", res.buffer);
  });
});
