import { useState } from "react";
import { HexColorPicker } from "react-colorful";

interface InputProps {
    value: string;
    setValue: (value: string) => void;
}

export default function Input({ value, setValue }: InputProps) {
    const [colorPicker, setColorPicker] = useState(false);

    return (
        <div className="relative">
            {/* <input type="color" value={value} onChange={(e) => setValue(e.target.value)} className=""/> */}
            <button onClick={() => setColorPicker(!colorPicker)} style={{ backgroundColor: value }} className={`w-full border-2 rounded h-5 p-3 cursor-pointer`}>

            </button>
            <div className={`${colorPicker ? "visible" : "invisible"} absolute z-20`}>
                <HexColorPicker color={value} onChange={setValue} />
            </div>
        </div>
    );
}