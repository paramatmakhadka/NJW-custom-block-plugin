import * as React from 'react';

import '../styles/components/_input-number.scss';

export interface InputNumberProps {
    value: (number | undefined );
    onChange : Function;
    label?: (string | undefined | null);
    inputClassName?: string;
}

export default function InputNumber (props: InputNumberProps) {
  const {value, onChange, label, inputClassName} = props;

  return (
    <div className="aremedia-input-number">
        {label &&
            <label className='aremedia-input-number__label input-label'> {label}</label>
        }
        <input type="number" className={ inputClassName + " aremedia-input-number__field"}  value={ value } onChange= {(e : React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
    </div>
  );
}