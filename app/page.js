import Hero from './components/Hero';
import Questionnaire from './components/Questionnaire';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Questionnaire />
      <Footer />
    </main>
  );
}
