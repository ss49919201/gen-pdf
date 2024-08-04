import { readFileSync, unlinkSync } from "fs";
import puppeteer from "puppeteer";
import {
  GeneratePdfInput,
  GeneratePdfOutput,
} from "../../../application/port/out/generatePdf";

const generatePdf = async (
  input: GeneratePdfInput
): Promise<GeneratePdfOutput> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com", {
    waitUntil: "networkidle2",
  });

  await page.pdf({
    path: input.name,
  });

  await browser.close();

  const buffer = readFileSync(input.name);
  unlinkSync(input.name);

  return {
    buffer,
  };
};

export default generatePdf;
