export type InputType = HTMLInputElement["type"];

export type ChangeInputType = ({
  name,
  value,
  checked,
  type,
}: {
  name: string;
  value: string;
  checked?: boolean;
  type?: InputType;
}) => void;
