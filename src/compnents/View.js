import React, {useEffect, useState} from 'react'
import Card from './Card'

export const View = () => {
const [result, setresult] = useState([])

const findShows = async () =>{ 
const findResults = await fetch("https://api.tvmaze.com/search/shows?q=all" , { 
method: 'GET'
})
const parsedResults = await findResults.json()
setresult(parsedResults)
}
console.log(result)


useEffect(() => {
    findShows()
}, [])

  return (
    <>
        {result.map((result) => { 
        return <Card key = {result.show.id} name={result.show.name} runtime={result.show.runtime} premiered={result.show.premiered} genres={result.show.genres} imgsrc = {result.show.image== null?"":result.show.image.original} summary={result.show.summary} ratings={result.show.rating.average==null?"-":result.show.rating.average}/>})
        }
    </>
  )
}
