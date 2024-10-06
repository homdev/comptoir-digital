import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import CallToAction from './CallToAction';
import JoinMembers from './JoinMembers';
import ScrollingText from './ScrollingText';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-18 ">

      <JoinMembers />
      <HeroTitle />
      <HeroSubtitle />
      <CallToAction />
      
    </section>
  );
};

export default HeroSection;
