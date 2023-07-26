export interface CustomButtonProps {
  title: string;
  onPress: any;
  disabled?: boolean;
}

export interface CustomInputProps {
  control: any;
  name: string;
  rules: object;
  placeholder?: string;
  keyboardType?: any;
  formatter?: (oldValue: string, newValue: string) => string;
  maxLength?: any;
  multiline?: boolean;
  numberOfLines?: number;
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

export interface TransactionModalProps {
  isVisible: boolean;
  onBackdropPress: () => void;
}
