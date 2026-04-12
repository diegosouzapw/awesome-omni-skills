import { useRef } from 'react';

type InputProps = {
  ref?: React.Ref<HTMLInputElement>;
  label: string;
};

export function TextField({ ref, label }: InputProps) {
  return (
    <label>
      <span>{label}</span>
      <input ref={ref} />
    </label>
  );
}

export function Example() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return <TextField ref={inputRef} label="Email" />;
}
