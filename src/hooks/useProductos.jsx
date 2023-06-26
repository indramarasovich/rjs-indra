import { useEffect, useState } from 'react'
import { pedirDatos } from '../helpers/pedirDatos'
import { useParams } from 'react-router-dom'

export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if(!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((item) => item.category === categoryId))
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    return {
        productos,
        loading,
        categoryId
    }
}