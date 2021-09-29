import ContentList from '../../components/contentList/ContentList';
import CoverPage from '../../components/coverPage/CoverPage';
import NavBar from '../../components/navbar/NavBar';
import './home.scss';


const Home = ({type}) => {
  return (
    <div className="home">
      <NavBar />
      <CoverPage type={type} />
      <ContentList />
      <ContentList />
    </div>
  )
}

export default Home
