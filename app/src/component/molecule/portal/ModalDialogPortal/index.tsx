import { Portal } from '~/component/atom/Portal'
import { MODAL_DIALOG_LAYER_ID } from '~/constant'

interface Props {
  children: React.ReactElement
}

export const ModalDialogPortal = ({ children }: Props) => {
  return <Portal targetId={MODAL_DIALOG_LAYER_ID}>{children}</Portal>
}
