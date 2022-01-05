import Nav from '../Nav'
import Banner from '../Banner'
import './HomeScreen.css'
import requests from '../Requests'
import Row from '../Row'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Row 
                title="NETFLIX ORIGINALS"
                fetUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Action Movies" fetUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetUrl={requests.fetchRomanceMovies} />
            <Row title="Action Movies" fetUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetUrl={requests.fetchComedyMovies} />
            <Row title="Documentaries Movies" fetUrl={requests.fetchDocumentaries} />
           
  
        </div>
    )
}

export default HomeScreen
