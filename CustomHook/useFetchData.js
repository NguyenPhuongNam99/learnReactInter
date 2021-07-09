import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fn = () => {
            fetch(url)
                .then((response) => response.json())
                .then((responJson) => {
                    setData(responJson)
                })
        }

        fn();

        return () => {

        }
    }, [])

    return data;
}
export default useFetchData;

// //custom hook dùng để tối ưu hóa logic code trong project
// //viết chung customm