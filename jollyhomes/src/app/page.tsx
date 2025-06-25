"use client";
import HeroCarousel from '@/app/components/Hero/HeroCarousel';
import { VideoPlayer } from './components/VideoPlayer';
import PropertySlider from './components/PropertySlider/PropertySlider';
import { sampleProperties } from './components/PropertySlider/data';
import { HowItWorks } from './components/HowItworks';
import { PropertyListing } from './components/PropertyListing';
import { CommunityShowcase } from './components/CommunityShowcase';
import { oyarifaCottageData } from './components/CommunityShowcase/data/communities';
import AgentSignupBanner from './components/AgentSignup/AgentSignupBanner';

const HomePage = () => {
  const handleLearnMore = () => {
    console.log('Learn more about Oyarifa Cottage clicked');
  };

  const handleViewProperties = () => {
    console.log('View properties clicked');
  };
  
    const handleAgentSignup = () => {
    // Handle signup logic here
    // Could open a modal, navigate to signup page, etc.
    console.log('Opening agent signup form...');
  };
  
  return (
    <div>
      <HeroCarousel />
      
      <PropertySlider
        properties={sampleProperties}
        autoPlay={true}
        autoPlayInterval={6000}
      />
      
      <VideoPlayer src={'./rvw.mp4'} />
      
      <HowItWorks />
      
      <PropertyListing />
      
      <VideoPlayer src={'./verifex.mp4'} />
      
      <CommunityShowcase
        community={oyarifaCottageData}
        onLearnMore={handleLearnMore}
        onViewProperties={handleViewProperties}
      />

      <AgentSignupBanner onSignupClick={handleAgentSignup} />
    </div>
  );
};

export default HomePage;
