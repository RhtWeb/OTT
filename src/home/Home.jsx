import ContentList from '../components/contentList/ContentList';
import CoverPage from '../components/coverPage/CoverPage';
import NavBar from '../components/navbar/NavBar';
import './home.scss';


const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <CoverPage />
      <ContentList />
    </div>
  )
}

export default Home
