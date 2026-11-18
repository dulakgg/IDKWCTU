
interface InputProps {
    value: string;
    setValue: (value: string) => void;
}

export default function Input({ value, setValue }: InputProps) {

    return (
        <input type="color" value={value} onChange={(e) => setValue(e.target.value)} className=""/>
    );
}