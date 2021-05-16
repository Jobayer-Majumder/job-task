import './App.css';
import CustomerSatisfaction from './Components/CustomerSatisfaction/CustomerSatisfaction/CustomerSatisfaction';
import Header from './Components/Headers/Header/Header';
import Review from './Components/Reviews/Review/Review';
import UpcomingShows from './Components/UpcomingShows/UpcomingShows/UpcomingShows';

function App() {
  return (
    <>
      <Header />
      <CustomerSatisfaction />
      <UpcomingShows />
      <Review />
    </>
  );
}

export default App;
