import Header from './components/Header';
import Carousel from './components/Carousel';
import Questionnaire from './components/Questionnaire';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Carousel />
      <Questionnaire />
      <Footer />
    </main>
  );
}
