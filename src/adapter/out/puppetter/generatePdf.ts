import { readFileSync, unlinkSync } from "fs";
import puppeteer from "puppeteer";
import {
  GeneratePdfInput,
  GeneratePdfOutput,
} from "../../../application/port/out/generatePdf";

const generatePdf = async (
  input: GeneratePdfInput
): Promise<GeneratePdfOutput> => {
  const content = readContent();

  await writePdf({
    content,
    outputPath: input.name,
  });

  const buffer = pdfToBuffer(input.name);
  removePdf(input.name);

  return {
    buffer,
  };
};

const readContent = (): string => {
  const contentPath = "./src/adapter/out/puppetter/asset/index.html";
  const content = readFileSync(contentPath, "utf-8");
  return content;
};

const writePdf = async ({
  content,
  outputPath,
}: {
  content: string;
  outputPath: string;
}): Promise<void> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(content);
  await page.pdf({
    path: outputPath,
  });
  await browser.close();
};

const pdfToBuffer = (pdfPath: string): Buffer => {
  return readFileSync(pdfPath);
};

const removePdf = (pdfPath: string): void => {
  unlinkSync(pdfPath);
};

export default generatePdf;
