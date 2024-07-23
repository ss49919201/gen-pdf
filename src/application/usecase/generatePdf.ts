import {
  GeneratePdfUsecase,
  GeneratePdfUsecaseInput,
  GeneratePdfUsecaseOutput,
} from "../port/in/generatePdf";
import { GeneratePdf } from "../port/out/generatePdf";
import { SavePdf } from "../port/out/savePdf";

export function GeneratePdfUsecaseFn(
  generatePdf: GeneratePdf,
  SavePdf: SavePdf
): GeneratePdfUsecase {
  return async (
    input: GeneratePdfUsecaseInput
  ): Promise<GeneratePdfUsecaseOutput> => {
    const { name } = input;
    const { buffer } = await generatePdf({ name });
    const { ok } = await SavePdf({ buffer });
    return { ok };
  };
}
