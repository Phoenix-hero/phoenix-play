import {gql, GraphQLClient} from 'graphql-request'
import Link from 'next/link'
import Image from 'next/image'
import Section from "../components/Section"
import NavBar from "../components/NavBar"
import disneyLogo from '../public/disney-button.png'
import marvelLogo from '../public/marvel-button.png'
import natgeoLogo from '../public/natgeo-button.png'
import starwarsLogo from '../public/star-wars-button.png'
import pixarLogo from '../public/pixar.png'
import friends from '../public/friends.png'

export const getStaticProps = async () => {
    const url = process.env.ENDPOINT
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
        }
    })

    const videosQuery = gql`
    query {
      videos {
        createdAt,
        id,
        title,
        description,
        seen,
        slug,
        tags,
        thumbnail {
          url
        },
        mp4 {
          url
        }
      }
    }
  `

    const accountQuery = gql`
    query {
    account(where: { id: "ckts9dclsazfu0b585nknv1d4"}) {
      username
      avatar {
        url
      }
    }
  }
  `

    const data = await graphQLClient.request(videosQuery)
    const videos = data.videos
    const accountData = await graphQLClient.request(accountQuery)
    const account = accountData.account

    return {
        props: {
            videos,
            account
        }
    }
}


const Home = ({videos, account}) => {

    /** To load random videos */
    const randomVideo = (videos) => {
        return videos[Math.floor(Math.random() * videos.length)]
    }

    const filterVideos = (videos, genre) => {
        return videos.filter((video) => video.tags.includes(genre))
    }

    const unSeenVideos = (videos) => {
        return videos.filter(video => video.seen == false || video.seen == null)
    }

    console.log('not seen:', videos.filter(video => video.seen == false || video.seen == null))


    return (
        <>
            <NavBar account={account}/>
            <div className="app">
                <div className="main-video">
                    <img src={randomVideo(videos).thumbnail.url}
                         alt={randomVideo(videos).title}/>
                </div>
                <Section genre={'Latest & Trending'} videos={filterVideos(videos, 'latest')}/>
                <Section genre={'Action'} videos={filterVideos(videos, 'action')}/>
                <Section genre={'Fantasy'} videos={filterVideos(videos, 'fantasy')}/>
                <Section genre={'Drama'} videos={filterVideos(videos, 'drama')}/>
                <Section id="Adventure" genre={'Adventure'} videos={filterVideos(videos, 'adventure')}/>
                <Section id="Love" genre={'Love'} videos={filterVideos(videos, 'love')}/>

            </div>
        </>
    )
}

export default Home