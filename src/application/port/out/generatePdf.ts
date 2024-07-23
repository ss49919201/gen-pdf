export type GeneratePdfInput = {
  name: string;
};

export type GeneratePdfOutput = {
  buffer: Buffer;
};

export type GeneratePdf = (
  input: GeneratePdfInput
) => Promise<GeneratePdfOutput>;
