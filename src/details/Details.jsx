import * as React from 'react'
import { useParams } from 'react-router-dom'
import pokemonFormApi from '../services/pokemonFormApi'
import Album from '../details/Album'
import NavBar from '../common/NavBar'
export default function Profile () {
  // const [user, setUser] = React.useState(null)
  const { handle } = useParams()
  const [images, setImages] = React.useState([])

  function pokeSpritesRequest (pokeName) {
    pokemonFormApi.get('/' + handle)
      .then(function (response) {
        console.log(response.data.sprites)
        setImages(response.data.sprites)
        // preenche o json de moves
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  React.useEffect(() => {
    pokeSpritesRequest(handle)
  }, handle)

  // console.log(response.data.moves)

  return (
    <div>
      <NavBar />
      <Album images={images} />
    </div>
  )
}
