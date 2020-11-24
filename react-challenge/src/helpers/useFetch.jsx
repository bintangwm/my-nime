import { useEffect, useState } from 'react'

function useFetch(url, order) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject({
            res
          })
        }
      })
      .then(res => {
        let newData = []
        switch (order) {
          case 'animeList':
            for (let i = 0; i < 12; i++) {
              newData.push(res.anime[i])
            }
            break;
          case 'animeSearch':
            console.log(url);
            for (let i = 0; i < 12; i++) {
              newData.push(res.results[i])
            }
            break;
          default:
            newData = res
            break;
        }
        setData(newData)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url, order])

  return [data, loading]
}

export default useFetch