import MoviesPageComponent from "./MoviesPageComponent"

const LatestMov = () => {
  return (
    <div>
    <MoviesPageComponent
      title_page="Latest Movies"
      movies = {["nueva1", "nuevs2", "nueva3"]}
      url_page = "now_playing"
      />
  </div>
  )
}

export default LatestMov