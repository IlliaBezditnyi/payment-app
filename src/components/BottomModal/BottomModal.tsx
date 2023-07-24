import React, {FC, useRef} from 'react';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomModalProps } from '../../types';


const BottomModal: FC<BottomModalProps> = ({snapPoint, onCloseModal, children}) => {
  const sheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoint}
      enablePanDownToClose={true}
      onClose={onCloseModal}
    >
      <BottomSheetView>
        {children}
      </BottomSheetView>
    </BottomSheet>
  )
}

export default BottomModal;