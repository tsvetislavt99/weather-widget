import { useRef } from 'react';

type InputProps = {
  setLocation: (location: string) => void;
};

export default function Input({ setLocation }: InputProps) {
  const inputEl = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    // TODO: Fix logic here
    setLocation(inputEl.current?.value || '');
    if (inputEl.current) {
      inputEl.current.value = '';
    }
  };

  return (
    <div className="input-group">
      <input ref={inputEl} type="text" placeholder="Location..." />
      <button type="button" onClick={clickHandler}>
        Show
      </button>
    </div>
  );
}
