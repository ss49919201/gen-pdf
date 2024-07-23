export type SavePdfInput = {
  buffer: Buffer;
};

export type SavePdfOutput = {
  ok: boolean;
};

export type SavePdf = (input: SavePdfInput) => Promise<SavePdfOutput>;
