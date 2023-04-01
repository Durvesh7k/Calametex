import { useRouter } from "next/router"
import { useEffect } from "react";

export default function Calamity(){

    const router = useRouter();

    const myObject = router?.query?.data

    return(
        <h1>
            This is the {myObject.title} nth calamity  {myObject.description}
        </h1>
    )
}