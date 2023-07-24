export interface CustomButtonProps {
  title: string;
  onPress: (event: any) => void;
}

export interface CustomInputProps {
  inputName: string;
  placeholder: string;
  value: any;
  onChahge: any;
  onFocus?: () => void;
  keyboardType?: any;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
}

export interface AmountInputProps {
  value: number;
  onChange: any;
  inputName: string;
}

export interface SelectButtonProps {
  buttonName?: string;
  title: string;
  subtitle?: string;
  onPress: (event: any) => void;
  mainIcon?: any;
  checkIcon?: any;
}

export interface BottomModalProps {
  snapPoint: string[];
  onCloseModal: () => void;
  children?: string | JSX.Element | JSX.Element[];
}

export interface ConfirmTransferContentProps {
  card: any;
  sum: any;
  onCancelPress: () => void;
  onPaySubmit: () => void;
}

export interface PaymentStatusContentProps {
  icon: any;
  title: string;
  description: string;
}
