export type GeneratePdfUsecaseInput = {
  name: string;
};

export type GeneratePdfUsecaseOutput = {
  ok: boolean;
};

export type GeneratePdfUsecase = (
  input: GeneratePdfUsecaseInput
) => Promise<GeneratePdfUsecaseOutput>;
