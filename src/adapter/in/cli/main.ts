import { GeneratePdf } from "../../../application/port/out/generatePdf";
import { SavePdf } from "../../../application/port/out/savePdf";
import { GeneratePdfUsecaseFn } from "../../../application/usecase/generatePdf";

(async () => {
  // FIXME
  const generatePdf: GeneratePdf = async ({ name }) => ({
    buffer: Buffer.from(name),
  });
  // FIXME
  const savePdf: SavePdf = async () => ({ ok: true });
  const GeneratePdfUsecase = GeneratePdfUsecaseFn(generatePdf, savePdf);
  const { ok } = await GeneratePdfUsecase({ name: "example" });
  console.log(ok);
})();
