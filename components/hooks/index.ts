import { useEffect, useRef } from "react";

export function useOutsideClick <T extends HTMLElement>(callback:() => void){
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleClicked = (e:MouseEvent) => {
            if(ref.current && !ref.current.contains(e.target as Node)){
                callback()
            }
        }
        document.addEventListener('mousedown', handleClicked);
        return () => {
            document.removeEventListener('mousedown', handleClicked)
        }
    },[callback])
    return ref;
}