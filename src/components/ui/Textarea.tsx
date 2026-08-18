import type { TextareaHTMLAttributes } from "react";
export function Textarea(props:TextareaHTMLAttributes<HTMLTextAreaElement>){return <textarea {...props} className={`field min-h-36 resize-y ${props.className||""}`}/>}
