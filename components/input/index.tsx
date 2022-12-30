import * as React from "react";
import "../../tailwind.css";

export interface ITextInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * input 타입
   */
  type: string;
  /**
   * input id (+ input.test role 값 부여)
   */
  id: string;
  /**
   * input value
   */
  value?: string | number;
  /**
   * input 네임
   */
  name?: string;
  /**
   * input 라벨
   */
  label?: string;
  /**
   * input 값 onChange 핸들러
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * input 값 onBlur 핸들러
   */
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * input 값 에러 유무
   */
  hasError?: boolean;
  /**
   * input 값 유효성 검사 메세지
   */
  validMessage?: string;
  /**
   * input css 추가
   */
  className?: string;
}

export const Input: React.FC<ITextInput> = ({
  type = "text",
  id = "input-field",
  name = "input-field",
  value,
  label,
  hasError,
  onChange,
  onBlur,
  validMessage,
  className,
  ...props
}) => {
  const defaultCSS =
    "block w-full max-h-[2.25rem] appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500";
  const actionCSS =
    "focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500";
  const errorMode = hasError ? "border-red-500 border-2" : "border-gray-300";
  return (
    <div className="text-sm">
      <div className="flex items-center">
        {label && (
          <label htmlFor={id} className="w-20 min-w-[5rem] break-word">
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={[defaultCSS, actionCSS, errorMode, className].join(" ")}
          role={id} // for test code
          {...props}
        />
      </div>
      {hasError && (
        <div
          className="mt-1 text-xs text-red-500"
          data-testid="input-error-text"
        >
          {validMessage}
        </div>
      )}
    </div>
  );
};
