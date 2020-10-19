import { fireEvent } from "../../../../common/dom/fire_event";
import { LovelaceHeaderFooterConfig } from "../../header-footer/types";

export interface CreateHeaderFooterDialogParams {
  pickHeaderFooter: (config: LovelaceHeaderFooterConfig) => void;
  entities?: string[]; // We can pass entity id's that will be added to the config when a header footer is picked
}

const importCreateHeaderFooterDialog = () =>
  import(
    /* webpackChunkName: "hui-dialog-create-headerfooter" */ "./hui-dialog-create-headerfooter"
  );

export const showCreateHeaderFooterDialog = (
  element: HTMLElement,
  createHeaderFooterDialogParams: CreateHeaderFooterDialogParams
): void => {
  fireEvent(element, "show-dialog", {
    dialogTag: "hui-dialog-create-headerfooter",
    dialogImport: importCreateHeaderFooterDialog,
    dialogParams: createHeaderFooterDialogParams,
  });
};
