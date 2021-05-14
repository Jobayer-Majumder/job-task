import './App.css';
import Header from './Components/Headers/Header/Header';
import Review from './Components/Reviews/Review/Review';
import UpcomingShows from './Components/UpcomingShows/UpcomingShows/UpcomingShows';

function App() {
  return (
    <>
      <Header />
      <UpcomingShows />
      <Review />
    </>
  );
}

export default App;
