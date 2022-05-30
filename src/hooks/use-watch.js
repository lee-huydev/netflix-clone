import { useState } from "react";
export default function useWatchData() {
    const [dataWatch, setDataWatch] = useState(null)
    return  { dataWatch, setDataWatch }
}